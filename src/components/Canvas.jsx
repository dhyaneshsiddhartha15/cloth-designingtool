import React, { useEffect, useState } from 'react';
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { FaBorderStyle, FaPaintBrush } from 'react-icons/fa';

function Canvas({ selectedFile, selectedTool, setSelectedTool }) {
  console.log(selectedTool);

  const { editor, onReady } = useFabricJSEditor();
  const [isDrawing, setIsDrawing] = useState(false);
  const [line, setLine] = useState(null);
  const [cutLine, setCutLine] = useState(null);
  const [startPoint, setStartPoint] = useState(null);
  const [rect, setRect] = useState(null);

  const [cropRect, setCropRect] = useState(null);
  const [triangle, setTriangle] = useState(null);
  const [mirrorDirection, setMirrorDirection] = useState('horizontal');
  const [copySvg, setCopySvg] = useState(null);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [lineType, setLineType] = useState('solid'); // State for line type
  const [lineThickness, setLineThickness] = useState(1);
  const [showOption, setShowOption] = useState(true);
  const saveState = () => {
    if (!editor) return;

    const currentState = editor.canvas.toJSON(); // Save the current canvas state
    setUndoStack((prevUndoStack) => [...prevUndoStack, currentState]); // Add current state to undo stack
    setRedoStack([]); // Clear redo stack on new action
  };

  // Handle undo action
  const handleUndo = () => {
    if (undoStack.length > 1) {
      // Ensure there are at least two states to undo
      const lastState = undoStack.pop(); // Remove the last state
      const secondLastState = undoStack.pop(); // Remove the second-to-last state

      // Push the popped states into the redo stack
      setRedoStack((prevRedoStack) => [lastState, ...prevRedoStack]);

      // Load the second-last state into the canvas
      editor.canvas.loadFromJSON(secondLastState, () => {
        editor.canvas.renderAll();
      });
    } else if (undoStack.length === 1) {
      const lastState = undoStack.pop(); // Remove the last state
      setRedoStack((prevRedoStack) => [lastState, ...prevRedoStack]);
      editor.canvas.clear(); // Clear the canvas if there's only one state left
    } else {
      alert('No more undo steps available.');
    }
  };

  // Handle redo action
  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack[0]; // Get the next state from the redo stack
      setUndoStack((prevUndoStack) => [...prevUndoStack, nextState]); // Add the next state to the undo stack
      setRedoStack(redoStack.slice(1)); // Remove the next state from the redo stack

      // Load the next state into the canvas
      editor.canvas.loadFromJSON(nextState, () => {
        editor.canvas.renderAll();
      });
    } else {
      alert('No more redo steps available.');
    }
  };

  // Watch for changes and save state
  const saveCanvasState = () => {
    if (selectedTool !== 'undo' && selectedTool !== 'redo') {
      // Don't save on undo/redo
      saveState();
    }
  };

  useEffect(() => {
    if (!editor) return;

    const canvas = editor.canvas;

    // Attach save state to various canvas events
    canvas.on('object:added', saveCanvasState);
    canvas.on('object:modified', saveCanvasState);
    canvas.on('object:removed', saveCanvasState);

    // Perform undo or redo based on the selectedTool
    if (selectedTool === 'undo') {
      handleUndo();
      setSelectedTool('view');
    } else if (selectedTool === 'redo') {
      handleRedo();
      setSelectedTool('view');
    }

    // Cleanup on component unmount
    return () => {
      canvas.off('object:added', saveCanvasState);
      canvas.off('object:modified', saveCanvasState);
      canvas.off('object:removed', saveCanvasState);
    };
  }, [selectedTool, editor, undoStack, redoStack]);

  useEffect(() => {
    if (!editor || !fabric) return;

    const canvas = editor.canvas;
    setShowOption(true);

    const updateObjectSelectability = () => {
      canvas.getObjects().forEach((obj) => {
        obj.selectable = selectedTool === 'select';
        obj.hasControls = selectedTool === 'select';
      });
      canvas.renderAll();
    };

    const createSeamAllowance = (offsetCm) => {
      // Get all selected objects
      const objs = canvas.getActiveObjects();

      // if (!objs || objs.length === 0) {
      //   alert('No objects selected!');
      //   return;
      // }

      // objs.forEach((obj) => {
      //   // Check if the object is part of a group
      //   const parent = obj.group;
      // if (parent) {
      // Apply stroke only to the parent
      console.log(objs[0]);
      objs[0].set({
        stroke: 'red',
        strokeWidth: 50,
        top: 100,
      });
      //   } else {
      //     // If not part of a group, apply stroke to the object itself
      //     obj.set({
      //       stroke: 'red',
      //       strokeWidth: 5,
      //     });
      //   }
      // });

      // Re-render the canvas
      canvas.renderAll();
    };

    updateObjectSelectability();
    canvas.off('mouse:down');
    canvas.off('mouse:move');

    canvas.off('mouse:up');
    canvas.off('mouse:wheel');

    if (selectedTool === 'seams') {
      console.log('Seam selection');
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = 1;
      canvas.freeDrawingBrush.color = '#FF0000';

      let drawingPath = null;
      let points = [];

      canvas.on('mouse:down', function (o) {
        const pointer = canvas.getPointer(o.e);
        points = [pointer.x, pointer.y];
        drawingPath = new fabric.Path(`M ${pointer.x} ${pointer.y}`, {
          strokeWidth: 1,
          stroke: '#FF0000',
          fill: 'transparent',
          selectable: true,
          hasControls: true,
        });
        canvas.add(drawingPath);
      });

      canvas.on('mouse:move', function (o) {
        if (!canvas.isDrawing) return;
        const pointer = canvas.getPointer(o.e);
        points.push(pointer.x, pointer.y);

        // Update the path with new points
        const pathData = `M ${points[0]} ${points[1]} ${points.slice(2).reduce((path, coord, i) => {
          return path + (i % 2 ? ` ${coord}` : ` L ${coord}`);
        }, '')}`;

        drawingPath.set({ path: pathData });
        canvas.renderAll();
      });

      canvas.on('mouse:up', function () {
        canvas.isDrawing = false;

        // Convert the drawing to a proper pattern piece
        if (drawingPath) {
          // Create a new pattern piece from the drawn path
          const patternPiece = new fabric.Path(drawingPath.path, {
            strokeWidth: 1,
            stroke: '#000000',
            fill: 'transparent',
            selectable: true,
            hasControls: true,
            cornerStyle: 'circle',
            cornerColor: '#2196F3',
            cornerSize: 6,
            transparentCorners: false,
            lockScalingFlip: true,
          });

          // Remove the drawing path and add the pattern piece
          canvas.remove(drawingPath);
          canvas.add(patternPiece);
          canvas.renderAll();

          // Reset the drawing state
          drawingPath = null;
          points = [];
        }
      });

      // Clean up function to reset canvas state
      return () => {
        canvas.isDrawingMode = false;
        canvas.off('mouse:down');
        canvas.off('mouse:move');
        canvas.off('mouse:up');
      };
    }

    if (selectedTool === 'mirror') {
      // const canvas = canvasRef.current;
      const activeObject = canvas?.getActiveObject();

      if (activeObject) {
        // Flip the object horizontally to mirror it
        activeObject.set('flipX', !activeObject.flipX);
        canvas.renderAll();
      } else {
        alert('Please select a pattern piece to mirror.');
      }
    }

    if (selectedTool === 'grain') {
      canvas.on('mouse:down', function (o) {
        const pointer = canvas.getPointer(o.e);
        const { x, y } = pointer;

        const grainLineHeight = 100;

        const grainLine = new fabric.Line([0, 0, 0, grainLineHeight], {
          stroke: 'black',
          strokeWidth: 2,
        });

        const topArrow = new fabric.Triangle({
          left: -4.5,
          top: -15,
          width: 10,
          height: 15,
          fill: 'black',
        });

        const bottomArrow = new fabric.Triangle({
          left: 6.5,
          top: grainLineHeight + 5,
          width: 10,
          height: 15,
          fill: 'black',
          angle: 180,
        });

        const grainGroup = new fabric.Group([grainLine, topArrow, bottomArrow], {
          left: x,
          top: y,
          selectable: true,
        });

        canvas.add(grainGroup);
        setSelectedTool('select');
      });
    }
    if (selectedTool === 'notches') {
      // const canvas = canvasRef.current;
      const activeObject = canvas?.getActiveObject();

      if (activeObject) {
        // Add notches at key points on the object (top-left and bottom-right)
        const notch1 = new fabric.Circle({
          radius: 5,
          fill: 'black',
          left: activeObject.left - 5,
          top: activeObject.top - 5,
        });

        const notch2 = new fabric.Circle({
          radius: 5,
          fill: 'black',
          left: activeObject.left + activeObject.width - 5,
          top: activeObject.top + activeObject.height - 5,
        });

        canvas.add(notch1, notch2);
        canvas.renderAll();
      } else {
        alert('Please select a pattern piece to add notches.');
      }
    }

    if (selectedTool === 'fabric width') {
      const fabricWidths = [120, 140, 150];
      const fabricWidth = parseInt(
        prompt('Enter desired width for the canvas (120, 140, or 150 cm):'),
        10
      );

      if (fabricWidths.includes(fabricWidth)) {
        // Set canvas dimensions based on selected fabric width, keeping existing objects
        canvas.setWidth(fabricWidth);
        canvas.setHeight(fabricWidth * 1.4);

        // Adjust background image or objects only if necessary
        const bgImage = canvas.backgroundImage;
        const objects = canvas.getObjects();

        // Scale background image to fit new width if it exists
        if (bgImage) {
          const scale = fabricWidth / bgImage.width;
          bgImage.scale(scale);
          bgImage.center();
        }

        // Keep SVGs in place and adjust any objects if they need resizing to fit the new canvas
        objects.forEach((obj) => {
          const objBounds = obj.getBoundingRect();

          // Only scale if object width exceeds the canvas width
          if (objBounds.width > fabricWidth) {
            const scale = fabricWidth / objBounds.width;
            obj.scale(scale);
          }
          obj.center();
          obj.setCoords();
        });

        // Render changes to maintain the layout with all objects and SVGs intact
        canvas.renderAll();
      } else {
        alert('Please enter a valid width: 120, 140, or 150.');
      }
    }

    if (selectedTool === 'grading') {
      // const canvas = canvasRef.current;
      const activeObject = canvas.getActiveObject();

      if (activeObject) {
        console.log('Before Scaling:', activeObject.scaleX, activeObject.scaleY);
        const scaleFactor = prompt('Enter scale factor (e.g., 1.2 for 20% increase):', '1.0');
        if (scaleFactor) {
          activeObject.scaleX *= parseFloat(scaleFactor);
          activeObject.scaleY *= parseFloat(scaleFactor);
          activeObject.strokeUniform = true; // Maintain stroke width
          activeObject.setCoords();
          console.log('After Scaling:', activeObject.scaleX, activeObject.scaleY);
          canvas.renderAll();
        }
      } else {
        alert('Please select a pattern to grade.');
      }
    }

    if (selectedTool === 'size dupe') {
      // const canvas = canvasRef.current; // Assuming canvasRef is already initialized
      const activeObject = canvas.getActiveObject();

      if (activeObject) {
        console.log('Original Object Properties:', activeObject.scaleX, activeObject.scaleY);
        const scaleFactor = prompt(
          'Enter scale factor for new size (e.g., 1.5 for 50% larger):',
          '1.0'
        );

        if (scaleFactor) {
          // Clone the active object
          activeObject.clone((clonedObject) => {
            // Scale the cloned object
            clonedObject.scaleX = activeObject.scaleX * parseFloat(scaleFactor);
            clonedObject.scaleY = activeObject.scaleY * parseFloat(scaleFactor);

            // Offset the position of the cloned object to avoid overlap
            clonedObject.left = activeObject.left + 50;
            clonedObject.top = activeObject.top + 50;

            // Ensure stroke width remains uniform
            clonedObject.strokeUniform = true;

            // Add the cloned object to the canvas
            canvas.add(clonedObject);
            clonedObject.setCoords(); // Update its position
            canvas.renderAll(); // Re-render the canvas

            console.log('New Object Properties:', clonedObject.scaleX, clonedObject.scaleY);
          });
        }
      } else {
        alert('Please select a pattern to duplicate.');
      }
    }

    if (selectedTool === '3d grade') {
    }

    if (selectedTool === '5mm seam') createSeamAllowance(5);
    if (selectedTool === '10mm seam') createSeamAllowance(10);
    if (selectedTool === '15mm seam') createSeamAllowance(15);
    if (selectedTool === '20mm seam') createSeamAllowance(20);
    if (selectedTool === '40mm seam') createSeamAllowance(40);

    if (selectedTool === 'mirror') {
      // Create mirror controls if they don't exist
      if (!document.getElementById('mirrorControls')) {
        const controls = document.createElement('div');
        controls.id = 'mirrorControls';
        controls.className = 'absolute top-4 left-4 bg-white p-2 rounded shadow-md z-10';
        controls.innerHTML = `
          <select id="mirrorSelect" class="px-2 py-1 border rounded">
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        `;
        canvas.wrapperEl.parentNode.appendChild(controls);

        document.getElementById('mirrorSelect').addEventListener('change', (e) => {
          setMirrorDirection(e.target.value);
        });
      }

      canvas.on('mouse:down', function (opt) {
        const target = opt.target;
        if (target) {
          if (mirrorDirection === 'horizontal') {
            target.set('flipX', !target.flipX);
          } else {
            target.set('flipY', !target.flipY);
          }

          if (target.type === 'group') {
            target.getObjects().forEach((obj) => {
              if (mirrorDirection === 'horizontal') {
                obj.set('flipX', !obj.flipX);
              } else {
                obj.set('flipY', !obj.flipY);
              }
            });
          }

          target.setCoords();
          canvas.renderAll();
        } else {
          // If no object is clicked, mirror all objects
          const objects = canvas.getObjects();
          objects.forEach((obj) => {
            if (mirrorDirection === 'horizontal') {
              obj.set('flipX', !obj.flipX);
            } else {
              obj.set('flipY', !obj.flipY);
            }
            obj.setCoords();
          });
          canvas.renderAll();
        }
      });

      return () => {
        const controls = document.getElementById('mirrorControls');
        if (controls) {
          controls.remove();
        }
        canvas.off('mouse:down');
      };
    }

    if (selectedTool === 'view') {
      let isPanning = false;
      let lastPosX = 0;
      let lastPosY = 0;

      canvas.on('mouse:down', function (event) {
        isPanning = true;
        const e = event.e;
        lastPosX = e.clientX;
        lastPosY = e.clientY;
        canvas.setCursor('move');
      });

      canvas.on('mouse:move', function (event) {
        if (isPanning) {
          const e = event.e;
          const deltaX = e.clientX - lastPosX;
          const deltaY = e.clientY - lastPosY;
          lastPosX = e.clientX;
          lastPosY = e.clientY;

          const vpt = canvas.viewportTransform;
          vpt[4] += deltaX;
          vpt[5] += deltaY;
          canvas.requestRenderAll();
        }
      });

      canvas.on('mouse:up', function () {
        isPanning = false;
        canvas.setCursor('default');
      });
    }

    if (selectedTool === 'rubber') {
      canvas.isDrawingMode = false;
      canvas.selection = false;

      const ERASER_SIZE = 20;
      let eraserCircle = null;

      canvas.on('mouse:down', function (options) {
        setIsDrawing(true);
        const pointer = canvas.getPointer(options.e);

        eraserCircle = new fabric.Circle({
          left: pointer.x - ERASER_SIZE / 2,
          top: pointer.y - ERASER_SIZE / 2,
          radius: ERASER_SIZE / 2,
          fill: 'rgba(255,255,255,0.3)',
          stroke: '#666',
          strokeWidth: 1,
          selectable: false,
          evented: false,
          originX: 'center',
          originY: 'center',
        });

        canvas.add(eraserCircle);

        const objects = canvas.getObjects();
        objects.forEach((obj) => {
          if (obj !== eraserCircle) {
            if (obj.containsPoint(pointer)) {
              if (obj instanceof fabric.Path || obj instanceof fabric.Group) {
                if (obj !== canvas.backgroundImage) {
                  canvas.remove(obj);
                }
              } else {
                canvas.remove(obj);
              }
            }
          }
        });

        canvas.renderAll();
      });

      canvas.on('mouse:move', function (options) {
        if (!isDrawing) {
          const pointer = canvas.getPointer(options.e);
          if (eraserCircle) {
            eraserCircle.set({
              left: pointer.x,
              top: pointer.y,
            });
            canvas.renderAll();
          }
          return;
        }

        const pointer = canvas.getPointer(options.e);

        if (eraserCircle) {
          eraserCircle.set({
            left: pointer.x,
            top: pointer.y,
          });
        }

        const objects = canvas.getObjects();
        objects.forEach((obj) => {
          if (obj !== eraserCircle) {
            if (obj.containsPoint(pointer)) {
              if (obj !== canvas.backgroundImage) {
                canvas.remove(obj);
              }
            }
          }
        });

        canvas.renderAll();
      });

      canvas.on('mouse:up', function () {
        setIsDrawing(false);

        if (eraserCircle) {
          eraserCircle.set({
            fill: 'rgba(255,255,255,0.2)',
            stroke: '#999',
          });
          canvas.renderAll();
        }
      });

      return () => {
        if (eraserCircle) {
          canvas.remove(eraserCircle);
          canvas.renderAll();
        }
      };
    }

    if (selectedTool === 'rectangle') {
      canvas.on('mouse:down', function (o) {
        if (!isDrawing) {
          const pointer = canvas.getPointer(o.e);
          const startX = pointer.x;
          const startY = pointer.y;
          setStartPoint({ x: startX, y: startY });

          const newRect = new fabric.Rect({
            left: startX,
            top: startY,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 1,
            selectable: selectedTool === 'select',
            hasControls: selectedTool === 'select',
          });

          canvas.add(newRect);
          setRect(newRect);
          setIsDrawing(true);
        }
      });

      canvas.on('mouse:move', function (o) {
        if (isDrawing && rect && startPoint) {
          const pointer = canvas.getPointer(o.e);
          const width = Math.abs(pointer.x - startPoint.x);
          const height = Math.abs(pointer.y - startPoint.y);

          rect.set({
            width,
            height,
            left: Math.min(pointer.x, startPoint.x),
            top: Math.min(pointer.y, startPoint.y),
          });

          canvas.renderAll();
        }
      });

      canvas.on('mouse:up', function () {
        setIsDrawing(false);
        setRect(null);
        setStartPoint(null);
      });
    }

    if (selectedTool === 'godet') {
      let newTriangle;
      canvas.on('mouse:down', function (o) {
        canvas.selection = false;
        if (!isDrawing) {
          const pointer = canvas.getPointer(o.e);
          const startX = pointer.x;
          const startY = pointer.y;
          setStartPoint({ x: startX, y: startY });

          newTriangle = new fabric.Triangle({
            left: startX,
            top: startY,
            width: 1,
            height: 1,
            fill: '',
            stroke: 'black',
            strokeWidth: 0.001,
            cornerColor: 'black',
            selectable: true,
            hasControls: true,
            originX: 'center',
            originY: 'center',
          });

          canvas.add(newTriangle);
          setTriangle(newTriangle);
          setIsDrawing(true);
        }
      });

      canvas.on('mouse:move', function (o) {
        if (isDrawing && triangle && startPoint) {
          const pointer = canvas.getPointer(o.e);

          const width = Math.abs(pointer.x - startPoint.x) * 2;
          const height = Math.abs(pointer.y - startPoint.y) * 2;

          triangle.set({
            scaleX: width / triangle.width,
            scaleY: height / triangle.height,
          });
          canvas.renderAll();
        }
      });

      canvas.on('mouse:up', function () {
        canvas.selection = true;
        setIsDrawing(false);
        setTriangle(null);
        setStartPoint(null);
      });
    }

    if (selectedTool === 'zoom') {
      canvas.on('mouse:wheel', function (opt) {
        const delta = opt.e.deltaY;
        let zoom = canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });

      canvas.on('mouse:down', function (opt) {
        const evt = opt.e;
        if (evt.ctrlKey === true) {
          this.isDragging = true;
          this.selection = false;
          this.lastPosX = evt.clientX;
          this.lastPosY = evt.clientY;
        }
      });

      canvas.on('mouse:move', function (opt) {
        if (this.isDragging) {
          const e = opt.e;
          const vpt = this.viewportTransform;
          vpt[4] += e.clientX - this.lastPosX;
          vpt[5] += e.clientY - this.lastPosY;
          this.requestRenderAll();
          this.lastPosX = e.clientX;
          this.lastPosY = e.clientY;
        }
      });

      canvas.on('mouse:up', function () {
        this.setViewportTransform(this.viewportTransform);
        this.isDragging = false;
        this.selection = true;
      });
    }
    console.log({
      lineThickness,
      lineType,
    });
    if (selectedTool === 'line') {
      canvas.on('mouse:down', function (o) {
        canvas.selection = false;
        const pointer = canvas.getPointer(o.e);
        const points = [pointer.x, pointer.y, pointer.x, pointer.y];

        const newLine = new fabric.Line(points, {
          strokeWidth: lineThickness,
          strokeDashArray: lineType === 'dashed' ? [15, 5] : null,
          stroke: 'black', // Default color
          originX: 'center',
          originY: 'center',
        });

        canvas.add(newLine);
        canvas.on('mouse:move', function (o) {
          const pointer = canvas.getPointer(o.e);
          newLine.set({ x2: pointer.x, y2: pointer.y });
          canvas.renderAll();
        });

        canvas.on('mouse:up', function () {
          canvas.selection = true;
          canvas.off('mouse:move');
          canvas.off('mouse:up');
        });
      });
    }
    if (selectedTool === 'group') {
      const activeObjects = editor.canvas.getActiveObjects();

      if (activeObjects.length > 1) {
        // Get the position of the first selected object
        const position = {
          left: activeObjects[0].left + 220,
          top: activeObjects[0].top + 215,
        };
        console.log(position);
        // Create the group
        const group = new fabric.Group(activeObjects, position);

        // Remove individual objects from the canvas
        activeObjects.forEach((obj) => editor.canvas.remove(obj));

        // Set the group's position to match the position of the first object

        // Add the group to the canvas and render
        editor.canvas.add(group);
        editor.canvas.renderAll();
      }
    }

    if (selectedTool === 'disconnect') {
      const activeObject = editor.canvas.getActiveObject();

      if (activeObject && activeObject.type === 'group') {
        activeObject._objects.forEach((obj) => {
          obj.clone((clonedObj) => {
            editor.canvas.add(clonedObj);
          });
        });

        editor.canvas.remove(activeObject);
        editor.canvas.renderAll();
      }
    }

    if (selectedTool === 'curve') {
      canvas.on('mouse:down', function (o) {
        setIsDrawing(true);

        const pointer = canvas.getPointer(o.e);

        const startX = pointer.x;
        const startY = pointer.y;

        const path = `M ${startX} ${startY} Q ${startX + 50} ${startY - 50}, ${
          startX + 100
        } ${startY}`;

        const curve = new fabric.Path(path, {
          stroke: 'black',
          fill: 'transparent',
          strokeWidth: 0.2,
          selectable: false,
        });

        canvas.add(curve);

        canvas.on('mouse:up', function () {
          setIsDrawing(false);
          setSelectedTool('select');
        });
      });
    }

    if (selectedTool === 'save') {
      const downloadSVG = () => {
        const svgData = canvas.toSVG();
        const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'canvas.svg';
        link.click();

        URL.revokeObjectURL(url);
      };

      downloadSVG();
    }
    if (selectedTool === 'rotate') {
      const createRotationControl = () => {
        // Create angle input and label
        const angleInput = document.createElement('input');
        angleInput.type = 'range';
        angleInput.min = '0';
        angleInput.max = '360';
        angleInput.value = '0';
        angleInput.style.position = 'absolute';
        angleInput.style.top = '150px';
        angleInput.style.left = '70px';
        angleInput.style.zIndex = '1000';
    
        const angleLabel = document.createElement('div');
        angleLabel.style.position = 'absolute';
        angleLabel.style.top = '120px';
        angleLabel.style.left = '70px';
        angleLabel.style.fontSize = '14px';
        angleLabel.style.color = '#000';
        angleLabel.style.zIndex = '1000';
        angleLabel.textContent = `Rotation Angle: 0°`;
    
        document.body.appendChild(angleInput);
        document.body.appendChild(angleLabel);
    
        const activeObjects = editor.canvas.getActiveObjects();
        if (activeObjects.length === 0) {
          alert('Please select objects to rotate.');
          angleInput.remove();
          angleLabel.remove();
          return;
        }
    
        const cornerControls = [];
        let selectedCorner = null;
    
        activeObjects.forEach((obj) => {
          if (!obj.oCoords) {
            console.error('Object coordinates are not initialized.');
            return;
          }
    
          const corners = ['tl', 'tr', 'bl', 'br'];
    
          corners.forEach((corner) => {
            const cornerCoords = obj.oCoords[corner];
            if (!cornerCoords) return; // Skip if corner coordinates are undefined
    
            const cornerControl = new fabric.Circle({
              radius: 5,
              fill: 'red',
              originX: 'center',
              originY: 'center',
              left: cornerCoords.x,
              top: cornerCoords.y,
              hasControls: false,
              selectable: false,
              evented: true,
              corner: corner,
            });
    
            cornerControl.on('mousedown', () => {
              selectedCorner = corner;
    
              // Remove previous corner controls
              cornerControls.forEach((control) => editor.canvas.remove(control));
              cornerControls.length = 0;
    
              const groupOriginX = corner.includes('r') ? 'right' : 'left';
              const groupOriginY = corner.includes('b') ? 'bottom' : 'top';
    
              const group = new fabric.Group([obj], {
                originX: groupOriginX,
                originY: groupOriginY,
                left: cornerCoords.x,
                top: cornerCoords.y,
              });
    
              editor.canvas.add(group);
              editor.canvas.remove(obj);
    
              angleInput.addEventListener('input', (event) => {
                const angle = parseInt(event.target.value, 10);
                group.set('angle', angle % 360);
                editor.canvas.renderAll();
                angleLabel.textContent = `Rotation Angle: ${angle}°`;
              });
    
              angleInput.addEventListener('change', () => {
                group.destroy();
                editor.canvas.add(obj);
                editor.canvas.remove(group);
                obj.setCoords();
                editor.canvas.renderAll();
              });
            });
    
            cornerControl.on('mouseover', () => {
              cornerControl.set({ fill: 'blue' });
              editor.canvas.renderAll();
            });
    
            cornerControl.on('mouseout', () => {
              cornerControl.set({ fill: 'red' });
              editor.canvas.renderAll();
            });
    
            cornerControls.push(cornerControl);
            editor.canvas.add(cornerControl);
          });
        });
    
        angleInput.addEventListener('change', () => {
          // Cleanup corner controls and input elements
          cornerControls.forEach((control) => editor.canvas.remove(control));
          cornerControls.length = 0;
    
          angleInput.remove();
          angleLabel.remove();
          setSelectedTool('select');
        });
    
        editor.canvas.renderAll();
      };
    
      createRotationControl();
    }
    
    if (selectedTool === 'duplicate') {
      const activeObjects = editor.canvas.getActiveObjects();

      // Check if there are selected objects
      if (activeObjects.length === 0) {
        alert(
          "Please select or group the parts you want to duplicate. If you've already done this, click 'Yes' in the next prompt."
        );
        const userConfirmed = confirm('Are you ready to duplicate the selected objects?');

        if (!userConfirmed) {
          return; // Exit if the user clicks "No"
        }
      }

      activeObjects.forEach((obj) => {
        obj.clone((clonedObj) => {
          clonedObj.set({
            left: obj.left + 200,
            top: obj.top + 20,
            evented: true,
          });

          editor.canvas.add(clonedObj); // Add the duplicate to the canvas
        });
      });

      editor.canvas.renderAll(); // Render the changes on the canvas
    }

    if (selectedTool === 'copy') {
      const activeObjects = editor.canvas.getActiveObjects();
      setCopySvg(activeObjects);
    }
    if (selectedTool === 'paste') {
      if (!copySvg) {
        return;
      }
      copySvg.forEach((obj) => {
        obj.clone((clonedObj) => {
          clonedObj.set({
            left: obj.left + 20,
            top: obj.top + 20,
            evented: true,
          });

          editor.canvas.add(clonedObj);
        });
      });

      editor.canvas.renderAll();
    }
    if (selectedTool === 'delete') {
      const activeObjects = editor.canvas.getActiveObjects();

      if (activeObjects.length > 0) {
        activeObjects.forEach((obj) => editor.canvas.remove(obj));

        editor.canvas.renderAll();
        setSelectedTool('select');
      }
    }

    if (selectedTool === 'convertor') {
      const createConvertorTool = () => {
        const canvas = editor.canvas;
        let activePath = null;
        let isDragging = false;

        // Remove previous listeners to avoid duplication
        canvas.off('mouse:down');
        canvas.off('mouse:move');
        canvas.off('mouse:up');

        // Event listener for mouse down
        canvas.on('mouse:down', (event) => {
          const activeObject = canvas.getActiveObject();

          if (!activeObject || activeObject.type !== 'line') {
            alert('Please select a line to convert.');
            return;
          }

          const line = activeObject;

          // Extract the line's start and end points
          const x1 = line.get('x1');
          const y1 = line.get('y1');
          const x2 = line.get('x2');
          const y2 = line.get('y2');

          // Convert the line into a path (Bezier curve)
          const pathData = `M ${x1} ${y1} 
                            Q ${(x1 + x2) / 2} ${(y1 + y2) / 2} 
                            ${x2} ${y2}`;

          const path = new fabric.Path(pathData, {
            stroke: line.stroke,
            strokeWidth: line.strokeWidth,
            fill: null,
            selectable: true,
            objectCaching: false,
          });

          canvas.remove(line); // Remove the line
          canvas.add(path); // Add the path
          canvas.setActiveObject(path); // Set the path as active
          activePath = path;

          isDragging = true;
        });

        // Event listener for mouse move
        canvas.on('mouse:move', (event) => {
          if (!isDragging || !activePath) return;

          const pointer = canvas.getPointer(event.e);

          // Extract the original start and end points (keep them fixed)
          const [startX, startY] = activePath.path[0].slice(1); // Move command start point
          const [endX, endY] = activePath.path[1].slice(2); // Quadratic curve end point

          // Dynamically set the control point (this will determine the shape)
          const controlX = pointer.x;
          const controlY = pointer.y;

          // Update the path data dynamically, but keep the start and end points constant
          const newPathData = `M ${startX} ${startY} 
                               Q ${controlX} ${controlY} 
                               ${endX} ${endY}`;

          // Update the path with new path data (use fabric's setter)
          activePath.set({ path: new fabric.Path(newPathData).path });

          canvas.renderAll();
        });

        // Event listener for mouse up
        canvas.on('mouse:up', () => {
          isDragging = false;
          activePath = null;
        });
      };

      createConvertorTool();
    }

    if (selectedTool === 'cut line') {
      const createCutLineTool = () => {
        const canvas = editor.canvas;
        let tempMark = null; // Temporary marker for the cut point

        // Remove previous mouse event listeners to prevent duplicates
        canvas.off('mouse:down');

        // Event listener for mouse down to perform the cut
        canvas.on('mouse:down', (event) => {
          const activeObject = canvas.getActiveObject();

          // Ensure the selected object is a line
          if (!activeObject || activeObject.type !== 'line') {
            alert('Please select a line to cut.');
            return;
          }

          const line = activeObject;

          // Get the click position in global coordinates
          const pointer = canvas.getPointer(event.e);
          const clickX = pointer.x;
          const clickY = pointer.y;

          // Add a temporary marker at the cut position
          if (tempMark) {
            canvas.remove(tempMark);
          }

          tempMark = new fabric.Circle({
            left: clickX,
            top: clickY,
            radius: 5,
            fill: 'red',
            selectable: false,
            originX: 'center',
            originY: 'center',
          });

          canvas.add(tempMark);
          canvas.renderAll();

          // Calculate the split point on the line
          const x1 = line.get('x1');
          const y1 = line.get('y1');
          const x2 = line.get('x2');
          const y2 = line.get('y2');

          const t =
            ((clickX - x1) * (x2 - x1) + (clickY - y1) * (y2 - y1)) /
            ((x2 - x1) ** 2 + (y2 - y1) ** 2);
          const tClamped = Math.max(0, Math.min(1, t));

          const splitX = x1 + tClamped * (x2 - x1);
          const splitY = y1 + tClamped * (y2 - y1);

          console.log(`Cutting the line at: (${splitX}, ${splitY})`);

          // Update the original line's endpoint
          const updatedLine = new fabric.Line([x1, y1, splitX, splitY], {
            stroke: line.stroke,
            strokeWidth: line.strokeWidth,
            selectable: true,
          });

          // Create the second half of the split line
          const newLine = new fabric.Line([splitX, splitY, x2, y2], {
            stroke: line.stroke,
            strokeWidth: line.strokeWidth,
            selectable: true,
          });

          // Replace the original line with the split lines
          canvas.remove(line);
          canvas.add(updatedLine, newLine);

          // Force canvas to update and re-render
          canvas.discardActiveObject();
          canvas.setActiveObject(newLine); // Optionally set the second line as active
          canvas.renderAll();

          console.log('Original line updated and new line added:', updatedLine, newLine);

          alert('Line cut successfully!');

          // Remove the temporary marker after a short delay
          setTimeout(() => {
            if (tempMark) {
              canvas.remove(tempMark);
              tempMark = null;
              canvas.renderAll();
            }
          }, 4000);
        });
      };

      createCutLineTool();
    }

    if (selectedTool === 'extract') {
      canvas.getObjects().forEach((obj) => {
        obj.selectable = true;
        obj.hasControls = true;
      });

      canvas.on('mouse:down', function (o) {
        if (!isDrawing) {
          const pointer = canvas.getPointer(o.e);
          setStartPoint({ x: pointer.x, y: pointer.y });

          const newCropRect = new fabric.Rect({
            left: pointer.x,
            top: pointer.y,
            width: 0,
            height: 0,
            fill: 'rgba(0,0,0,0.3)',
            stroke: '#2196F3',
            strokeWidth: 2,
            strokeDashArray: [5, 5],
            selectable: true,
            hasControls: true,
            transparentCorners: false,
            cornerColor: '#2196F3',
            cornerStrokeColor: '#2196F3',
            borderColor: '#2196F3',
            cornerSize: 10,
            padding: 0,
            cornerStyle: 'circle',
          });

          canvas.add(newCropRect);
          setCropRect(newCropRect);
          setIsDrawing(true);
        }
      });

      canvas.on('mouse:move', function (o) {
        if (isDrawing && cropRect && startPoint) {
          const pointer = canvas.getPointer(o.e);
          const width = Math.abs(pointer.x - startPoint.x);
          const height = Math.abs(pointer.y - startPoint.y);

          cropRect.set({
            width: width,
            height: height,
            left: Math.min(pointer.x, startPoint.x),
            top: Math.min(pointer.y, startPoint.y),
          });

          canvas.renderAll();
        }
      });

      canvas.on('mouse:up', function () {
        if (cropRect) {
          cropRect.setControlsVisibility({
            mt: true,
            mb: true,
            ml: true,
            mr: true,
            mtr: true,
          });

          cropRect.on('modified', function () {
            performExtraction();
          });
        }
        setIsDrawing(false);
      });

      const performExtraction = () => {
        if (!cropRect) return;

        const objects = canvas.getObjects();
        const cropBounds = {
          left: cropRect.left,
          top: cropRect.top,
          right: cropRect.left + cropRect.width * cropRect.scaleX,
          bottom: cropRect.top + cropRect.height * cropRect.scaleY,
        };

        objects.forEach((obj) => {
          if (obj !== cropRect && obj.intersectsWithRect(cropBounds)) {
            const clonedObj = fabric.util.object.clone(obj);

            const objBounds = obj.getBoundingRect();
            const intersection = {
              left: Math.max(cropBounds.left, objBounds.left),
              top: Math.max(cropBounds.top, objBounds.top),
              right: Math.min(cropBounds.right, objBounds.left + objBounds.width),
              bottom: Math.min(cropBounds.bottom, objBounds.top + objBounds.height),
            };

            clonedObj.set({
              left: intersection.left,
              top: intersection.top,
              width: intersection.right - intersection.left,
              height: intersection.bottom - intersection.top,
              clipPath: new fabric.Rect({
                left: -intersection.left + cropBounds.left,
                top: -intersection.top + cropBounds.top,
                width: cropRect.width * cropRect.scaleX,
                height: cropRect.height * cropRect.scaleY,
                absolutePositioned: true,
              }),
            });

            canvas.add(clonedObj);
          }
        });

        // After extraction, remove the crop rectangle
        canvas.remove(cropRect);
        setCropRect(null);

        canvas.renderAll();
      };
    }

    if (selectedTool === 'drill hole') {
      const canvas = editor.canvas;
      canvas.on('mouse:down', (event) => {
        const pointer = canvas.getPointer(event.e);

        // 5mm diameter circle (convert to canvas units)
        const diameterInPx = 5; // Adjust if scaling is applied
        const circle = new fabric.Circle({
          left: pointer.x - diameterInPx / 2, // Center the circle at click point
          top: pointer.y - diameterInPx / 2,
          radius: diameterInPx / 2,
          fill: 'transparent', // No fill
          stroke: 'black', // Mark with red outline
          strokeWidth: 1,
          selectable: false, // Prevent selection
          evented: false, // Ignore events
        });

        canvas.add(circle);
        canvas.renderAll();
      });
    }

    if (selectedTool === 'button hole') {
      const canvas = editor.canvas;

      canvas.on('mouse:down', (event) => {
        const pointer = canvas.getPointer(event.e);

        // Parameters for button hole size
        const holeLength = 30; // Length of the main line
        const crossLength = 5; // Length of the cross lines (T-bar)
        const crossWidth = 2; // Thickness of the cross lines
        const strokeWidth = 2;

        // Create the main line (horizontal)
        const line = new fabric.Line(
          [pointer.x - holeLength / 2, pointer.y, pointer.x + holeLength / 2, pointer.y],
          {
            stroke: 'black',
            strokeWidth: strokeWidth,
            selectable: false,
            evented: false,
          }
        );

        // Create the cross lines at the left end
        const leftCross = new fabric.Line(
          [
            pointer.x - holeLength / 2 - crossLength,
            pointer.y - crossWidth / 2,
            pointer.x - holeLength / 2 + crossLength,
            pointer.y - crossWidth / 2,
          ],
          {
            stroke: 'black',
            strokeWidth: strokeWidth,
            selectable: false,
            evented: false,
          }
        );
        const rightCross = new fabric.Line(
          [
            pointer.x - holeLength / 2 - crossLength,
            pointer.y + crossWidth / 2,
            pointer.x - holeLength / 2 + crossLength,
            pointer.y + crossWidth / 2,
          ],
          {
            stroke: 'black',
            strokeWidth: strokeWidth,
            selectable: false,
            evented: false,
          }
        );

        // Create the cross lines at the right end
        const leftCrossRight = new fabric.Line(
          [
            pointer.x + holeLength / 2 - crossLength,
            pointer.y - crossWidth / 2,
            pointer.x + holeLength / 2 + crossLength,
            pointer.y - crossWidth / 2,
          ],
          {
            stroke: 'black',
            strokeWidth: strokeWidth,
            selectable: false,
            evented: false,
          }
        );
        const rightCrossRight = new fabric.Line(
          [
            pointer.x + holeLength / 2 - crossLength,
            pointer.y + crossWidth / 2,
            pointer.x + holeLength / 2 + crossLength,
            pointer.y + crossWidth / 2,
          ],
          {
            stroke: 'black',
            strokeWidth: 2,
            selectable: false,
            evented: false,
          }
        );

        // Add all parts to the canvas
        canvas.add(line);
        canvas.add(leftCross);
        canvas.add(rightCross);
        canvas.add(leftCrossRight);
        canvas.add(rightCrossRight);

        canvas.renderAll();
      });
    }

    if (selectedTool === 'notches') {
      const canvas = editor.canvas;
      canvas.on('mouse:down', (event) => {
        const pointer = canvas.getPointer(event.e);

        // Parameters for the notch size
        const notchWidth = 2; // Width of the notch in mm (converted to pixels)
        const notchLength = 5; // Length of the notch in mm (converted to pixels)
        const notchWidthInPixels = (notchWidth * canvas.getWidth()) / 210; // Convert mm to pixels (assuming 210mm width canvas)
        const notchLengthInPixels = (notchLength * canvas.getHeight()) / 297; // Convert mm to pixels (assuming 297mm height canvas)

        // Create the notch rectangle (2mm wide, 5mm long)
        const notch = new fabric.Rect({
          left: pointer.x - notchWidthInPixels / 2, // Center the notch around the pointer
          top: pointer.y - notchLengthInPixels / 2, // Center the notch around the pointer
          width: notchWidthInPixels,
          height: notchLengthInPixels,
          fill: 'black',
          selectable: false,
          evented: false,
        });

        // Add the notch to the canvas
        canvas.add(notch);
        canvas.renderAll();
      });
    }

    if (selectedTool === 'bias grain') {
      canvas.on('mouse:down', function (o) {
        const pointer = canvas.getPointer(o.e);
        const { x, y } = pointer;

        const grainLineHeight = 100;

        // Create lines for the groups
        const grainLine1 = new fabric.Line([0, 0, 0, grainLineHeight], {
          stroke: 'black',
          strokeWidth: 2,
        });
        const grainLine2 = new fabric.Line([0, 0, 0, grainLineHeight], {
          stroke: 'black',
          strokeWidth: 2,
        });

        // Create arrows for the groups
        const topArrow1 = new fabric.Triangle({
          left: -4.5,
          top: -15,
          width: 10,
          height: 15,
          fill: 'black',
        });
        const topArrow2 = new fabric.Triangle({
          left: -4.5,
          top: -15,
          width: 10,
          height: 15,
          fill: 'black',
        });

        const bottomArrow1 = new fabric.Triangle({
          left: 6.5,
          top: grainLineHeight + 5,
          width: 10,
          height: 15,
          fill: 'black',
          angle: 180,
        });
        const bottomArrow2 = new fabric.Triangle({
          left: 6.5,
          top: grainLineHeight + 5,
          width: 10,
          height: 15,
          fill: 'black',
          angle: 180,
        });

        // Create the first group
        const grainGroup1 = new fabric.Group([grainLine1, topArrow1, bottomArrow1], {
          top: y,
          left: x,
          selectable: true,
        });
        grainGroup1.angle = 45;

        // Add grainGroup1 to the canvas
        canvas.add(grainGroup1);

        // Get the center point of grainGroup1 after rotation
        const centerPoint = grainGroup1.getCenterPoint();

        // Create the second group
        const grainGroup2 = new fabric.Group([grainLine2, topArrow2, bottomArrow2], {
          selectable: true,
        });
        grainGroup2.angle = -45;

        // Adjust grainGroup2's position to align its center with grainGroup1's center
        grainGroup2.set({
          left: centerPoint.x,
          top: centerPoint.y,
          originX: 'center',
          originY: 'center',
        });

        // Add grainGroup2 to the canvas
        canvas.add(grainGroup2);
        const finalGroup = new fabric.Group([grainGroup1, grainGroup2], {
          left: x,
          top: y,
          selectable: true,
        });

        // Remove individual groups from the canvas and add the final group
        canvas.remove(grainGroup1, grainGroup2);
        canvas.add(finalGroup);
        // Set tool back to select
        setSelectedTool('select');
      });
    }

    if (selectedTool === 'custom grain') {
      const customCount = prompt('Enter number of grains you would like to add? :');
      console.log(customCount);
      // if (customCount < 3) alert('Oh! Minimum count should be 3');

      const grainLineHeight = 100; // Height of each arrow line

      canvas.on('mouse:down', function (o) {
        const pointer = canvas.getPointer(o.e);
        const { x, y } = pointer;

        // Clear any previous "mouse:down" listener for clean behavior
        canvas.off('mouse:down');

        for (let i = 0; i < customCount; i++) {
          // Calculate the angle for each arrow
          const angle = (360 / customCount) * i;

          // Create the line for the arrow
          const grainLine = new fabric.Line([0, 0, 0, grainLineHeight], {
            stroke: 'black',
            strokeWidth: 2,
          });

          // Create the top arrowhead
          const topArrow = new fabric.Triangle({
            left: -4.5,
            top: -15,
            width: 10,
            height: 15,
            fill: 'black',
          });

          // Create the bottom arrowhead
          const bottomArrow = new fabric.Triangle({
            left: 6.5,
            top: grainLineHeight + 5,
            width: 10,
            height: 15,
            fill: 'black',
            angle: 180,
          });

          // Group the line and arrowheads
          const grainGroup = new fabric.Group([grainLine, topArrow, bottomArrow], {
            left: x,
            top: y,
            selectable: true,
          });

          // Rotate the group to the calculated angle
          grainGroup.angle = angle;

          // Add the group to the canvas
          canvas.add(grainGroup);
        }

        // Re-render the canvas
        canvas.renderAll();

        // Reset the selected tool
        setSelectedTool('select');
      });
    }

    if (selectedTool === 'cross grain') {
      canvas.on('mouse:down', function (o) {
        const pointer = canvas.getPointer(o.e);
        const { x, y } = pointer;

        const grainLineHeight = 100;

        const grainLine = new fabric.Line([0, 0, 0, grainLineHeight], {
          stroke: 'black',
          strokeWidth: 2,
        });

        const topArrow = new fabric.Triangle({
          left: -4.5,
          top: -15,
          width: 10,
          height: 15,
          fill: 'black',
        });

        const bottomArrow = new fabric.Triangle({
          left: 6.5,
          top: grainLineHeight + 5,
          width: 10,
          height: 15,
          fill: 'black',
          angle: 180,
        });

        const grainGroup = new fabric.Group([grainLine, topArrow, bottomArrow], {
          left: x,
          top: y,
          selectable: true,
        });
        grainGroup.angle = 90;
        canvas.add(grainGroup);
        setSelectedTool('select');
      });
    }

    if (selectedTool === 'extract') {
      const cropRect = new fabric.Rect({
        fill: 'transparent',
        originX: 'left',
        originY: 'top',
        stroke: '#333',
        strokeDashArray: [2, 2],
        opacity: 1,
        width: 1,
        height: 1,
        visible: false,
      });

      canvas.add(cropRect);

      let isCropping = false;
      let startPoint = { x: 0, y: 0 };

      canvas.on('mouse:down', (event) => {
        const rectBounds = canvas.lowerCanvasEl.getBoundingClientRect();
        const left = event.e.clientX - rectBounds.left;
        const top = event.e.clientY - rectBounds.top;

        cropRect.set({
          left,
          top,
          width: 1,
          height: 1,
          visible: true,
        });

        startPoint = { x: left, y: top };
        isCropping = true;
        canvas.renderAll();
      });

      canvas.on('mouse:move', (event) => {
        if (!isCropping) return;

        const rectBounds = canvas.lowerCanvasEl.getBoundingClientRect();
        const mouseX = event.e.clientX - rectBounds.left;
        const mouseY = event.e.clientY - rectBounds.top;

        const width = mouseX - startPoint.x > 0 ? mouseX - startPoint.x : 1;
        const height = mouseY - startPoint.y > 0 ? mouseY - startPoint.y : 1;

        cropRect.set({
          width,
          height,
        });

        canvas.renderAll();
      });

      canvas.on('mouse:up', () => {
        isCropping = false;

        if (cropRect.visible) {
          const cropBounds = {
            left: cropRect.left,
            top: cropRect.top,
            right: cropRect.left + cropRect.width * cropRect.scaleX,
            bottom: cropRect.top + cropRect.height * cropRect.scaleY,
          };

          const objectsToCut = canvas
            .getObjects()
            .filter((obj) => obj.intersectsWithRect(cropBounds));

          objectsToCut.forEach((obj) => {
            // Use clipping or remove objects from the canvas
            const objectClone = fabric.util.object.clone(obj);
            objectClone.clipPath = cropRect;
            objectClone.clipTo = null;
            canvas.add(objectClone);

            canvas.remove(obj); // Remove the original object
          });

          cropRect.set({ visible: false }); // Hide the crop rectangle
          canvas.renderAll();
        }
      });
    }

    if (selectedTool === 'type') {
      let text = prompt('Enter text here : ');
      if (!text) return;
      canvas.add(
        new fabric.Text(text, {
          fontFamily: 'Arial',
          left: 100,
          top: 100,
        })
      );
    }
    if (selectedTool === 'button') {
      const canvas = editor.canvas;
      canvas.on('mouse:down', (event) => {
        const pointer = canvas.getPointer(event.e);

        // 5mm diameter circle (convert to canvas units)
        const diameterInPx = 2.7; // Adjust if scaling is applied
        const circle = new fabric.Circle({
          left: pointer.x - diameterInPx / 2, // Center the circle at click point
          top: pointer.y - diameterInPx / 2,
          radius: diameterInPx / 2,
          fill: 'black', // No fill
          stroke: 'black', // Mark with red outline
          strokeWidth: 1,
          selectable: false, // Prevent selection
          evented: false, // Ignore events
        });

        canvas.add(circle);
        canvas.renderAll();
      });
    }
    canvas.renderAll();

    return () => {
      canvas.off('mouse:down');
      canvas.off('mouse:move');
      canvas.off('mouse:up');
      canvas.off('mouse:wheel');
    };
  }, [
    editor,
    selectedTool,
    line,
    rect,
    startPoint,
    cropRect,
    triangle,
    mirrorDirection,
    lineType,
    lineThickness,
  ]);

  useEffect(() => {
    if (editor && selectedFile) {
      fabric.loadSVGFromString(selectedFile, (objects, options) => {
        editor.canvas.clear(); // Clear the canvas to remove existing objects

        // Group SVG elements
        const svgGroup = fabric.util.groupSVGElements(objects, options);

        // Scale down the SVG to fit the canvas
        const scaleFactor = Math.min(
          editor.canvas.width / svgGroup.width,
          editor.canvas.height / svgGroup.height,
          1 // Ensure it doesn't scale up
        );
        svgGroup.scale(scaleFactor);

        // Center the SVG on the canvas
        svgGroup.set({
          left: editor.canvas.width / 2,
          top: editor.canvas.height / 2,
          originX: 'center',
          originY: 'center',
        });

        editor.canvas.add(svgGroup); // Add the group to the canvas
        editor.canvas.setActiveObject(svgGroup); // Set the group as active

        // Ungroup the SVG
        const items = svgGroup._objects; // Access individual objects
        svgGroup._restoreObjectsState(); // Restore their individual states
        editor.canvas.remove(svgGroup); // Remove the group from the canvas

        items.forEach((item) => {
          // Adjust scale and position for individual items
          item.scale(scaleFactor);
          editor.canvas.add(item); // Add individual objects to the canvas
        });

        editor.canvas.renderAll(); // Render changes
      });
    }
  }, [selectedFile, editor]);

  return (
    <div className="grid-background w-full h-full relative">
      {selectedTool === 'line' && showOption && (
        <div className="absolute top-0 left-0 p-4 bg-indigo-200 z-[5] shadow-lg rounded-lg border border-gray-300">
          <button
            className="absolute top-1 right-3 hover:text-red-500"
            onClick={() => setShowOption(false)}
          >
            x
          </button>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <FaBorderStyle className="text-gray-600" />
              <label className="flex-1">
                Line Type:
                <select
                  id="linetype"
                  value={lineType}
                  onChange={(e) => setLineType(e.target.value)}
                  className="ml-2 border border-gray-400 p-1 rounded-md"
                >
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                </select>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <FaPaintBrush className="text-gray-600" />
              <label className="flex-1">
                Line Thickness:
                <input
                  type="number"
                  value={lineThickness}
                  onChange={(e) => setLineThickness(Number(e.target.value))}
                  className="ml-2 border border-gray-400 p-1 rounded-md w-20"
                  min="1"
                />
              </label>
            </div>
          </div>
        </div>
      )}
      <FabricJSCanvas className="w-full h-full" onReady={onReady} />
    </div>
  );
}

export default Canvas;
