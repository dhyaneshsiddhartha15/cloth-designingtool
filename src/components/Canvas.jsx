import React, { useEffect, useState } from 'react';
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';

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

  useEffect(() => {
    if (!editor || !fabric) return;

    const canvas = editor.canvas;

    const updateObjectSelectability = () => {
      canvas.getObjects().forEach((obj) => {
        obj.selectable = selectedTool === 'select';
        obj.hasControls = selectedTool === 'select';
      });
      canvas.renderAll();
    };

    const createSeamAllowance = (width) => {
      try {
        if (!editor?.canvas) {
          console.error('Canvas not initialized');
          return;
        }

        const canvas = editor.canvas;
        const activeObject = canvas.getActiveObject();

        if (!activeObject) {
          alert('Please select an object first');
          return;
        }

        // Get the bounding rectangle of the active object
        const bounds = activeObject.getBoundingRect(true);

        // Create the seam allowance rectangle
        const seamRect = new fabric.Rect({
          left: bounds.left - width,
          top: bounds.top - width,
          width: bounds.width + width * 2,
          height: bounds.height + width * 2,
          fill: 'transparent',
          stroke: '#666',
          strokeWidth: 0.5,
          strokeDashArray: [5, 5],
          originX: 'left',
          originY: 'top',
        });

        // Create the label
        const text = new fabric.Text(`${width}mm seam`, {
          left: bounds.left,
          top: bounds.top - 20,
          fontSize: 12,
          fill: '#666',
          selectable: false,
          evented: false,
        });

        // Clone the active object to preserve its properties
        activeObject.clone((clonedObj) => {
          // Create array of objects to group
          const objectsToGroup = [clonedObj, seamRect, text];

          // Create the group
          const group = new fabric.Group(objectsToGroup, {
            left: bounds.left,
            top: bounds.top,
            selectable: true,
            hasControls: true,
          });

          // Remove the original object
          canvas.remove(activeObject);

          // Add the new group
          canvas.add(group);
          canvas.setActiveObject(group);
          canvas.renderAll();
        });
      } catch (error) {
        console.error('Error creating seam allowance:', error);
        alert('Error creating seam allowance. Please try again.');
      }
    };

    updateObjectSelectability();
    canvas.off('mouse:down');
    canvas.off('mouse:move');

    canvas.off('mouse:up');
    canvas.off('mouse:wheel');

    // if (selectedTool === 'duplicate') {
    //   // Get the entire canvas as SVG string
    //   const svgString = editor.canvas.toSVG();

    //   // Load the SVG string to duplicate all its contents
    //   fabric.loadSVGFromString(svgString, (objects, options) => {
    //     const clonedGroup = fabric.util.groupSVGElements(objects, options);

    //     // Set position offset for the cloned group
    //     clonedGroup.set({
    //       left: clonedGroup.left + 20 || 20, // Offset for better visibility
    //       top: clonedGroup.top + 20 || 20,
    //     });

    //     // Add the cloned group to the canvas
    //     editor.canvas.add(clonedGroup);
    //     clonedGroup.setCoords();

    //     // Render the canvas to reflect the duplication
    //     editor.canvas.renderAll();
    //   });
    // }

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

    //my code//

    ///

    // if (selectedTool === 'extract') {
    //   canvas.getObjects().forEach((obj) => {
    //     obj.selectable = true;
    //     obj.hasControls = true;
    //   });

    //   canvas.on('mouse:down', function (o) {
    //     if (!isDrawing) {
    //       const pointer = canvas.getPointer(o.e);
    //       setStartPoint({ x: pointer.x, y: pointer.y });

    //       const newCropRect = new fabric.Rect({
    //         left: pointer.x,
    //         top: pointer.y,
    //         width: 0,
    //         height: 0,
    //         fill: 'rgba(0,0,0,0.3)',
    //         stroke: '#2196F3',
    //         strokeWidth: 2,
    //         strokeDashArray: [5, 5],
    //         selectable: true,
    //         hasControls: true,
    //         transparentCorners: false,
    //         cornerColor: '#2196F3',
    //         cornerStrokeColor: '#2196F3',
    //         borderColor: '#2196F3',
    //         cornerSize: 10,
    //         padding: 0,
    //         cornerStyle: 'circle',
    //       });

    //       canvas.add(newCropRect);
    //       setCropRect(newCropRect);
    //       setIsDrawing(true);
    //     }
    //   });

    //   canvas.on('mouse:move', function (o) {
    //     if (isDrawing && cropRect && startPoint) {
    //       const pointer = canvas.getPointer(o.e);
    //       const width = Math.abs(pointer.x - startPoint.x);
    //       const height = Math.abs(pointer.y - startPoint.y);

    //       cropRect.set({
    //         width: width,
    //         height: height,
    //         left: Math.min(pointer.x, startPoint.x),
    //         top: Math.min(pointer.y, startPoint.y),
    //       });

    //       canvas.renderAll();
    //     }
    //   });

    //   canvas.on('mouse:up', function () {
    //     if (cropRect) {
    //       cropRect.setControlsVisibility({
    //         mt: true,
    //         mb: true,
    //         ml: true,
    //         mr: true,
    //         mtr: true,
    //       });

    //       cropRect.on('modified', function () {
    //         performCrop();
    //       });
    //     }
    //     setIsDrawing(false);
    //   });

    //   const performCrop = () => {
    //     if (!cropRect) return;

    //     const objects = canvas.getObjects();
    //     const cropBounds = {
    //       left: cropRect.left,
    //       top: cropRect.top,
    //       right: cropRect.left + cropRect.width * cropRect.scaleX,
    //       bottom: cropRect.top + cropRect.height * cropRect.scaleY,
    //     };

    //     objects.forEach((obj) => {
    //       if (obj !== cropRect && obj.intersectsWithRect(cropBounds)) {
    //         const clonedObj = fabric.util.object.clone(obj);

    //         const objBounds = obj.getBoundingRect();
    //         const intersection = {
    //           left: Math.max(cropBounds.left, objBounds.left),
    //           top: Math.max(cropBounds.top, objBounds.top),
    //           right: Math.min(cropBounds.right, objBounds.left + objBounds.width),
    //           bottom: Math.min(cropBounds.bottom, objBounds.top + objBounds.height),
    //         };

    //         clonedObj.set({
    //           left: intersection.left,
    //           top: intersection.top,
    //           width: intersection.right - intersection.left,
    //           height: intersection.bottom - intersection.top,
    //           clipPath: new fabric.Rect({
    //             left: -intersection.left + cropBounds.left,
    //             top: -intersection.top + cropBounds.top,
    //             width: cropRect.width * cropRect.scaleX,
    //             height: cropRect.height * cropRect.scaleY,
    //             absolutePositioned: true,
    //           }),
    //         });

    //         canvas.add(clonedObj);
    //       }
    //     });

    //     canvas.renderAll();
    //   };
    // }

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

    if (selectedTool === 'line') {
      canvas.on('mouse:down', function (o) {
        setIsDrawing(true);
        const pointer = canvas.getPointer(o.e);
        const points = [pointer.x, pointer.y, pointer.x, pointer.y];

        const lineType = document.getElementById('linetype')?.value || 'solid';
        const newLine = new fabric.Line(points, {
          strokeWidth: lineType === 'dashed' ? 5 : 0.5,
          strokeDashArray: lineType === 'dashed' ? [15, 5] : null,
          fill: lineType === 'dashed' ? 'gray' : 'black',
          stroke: lineType === 'dashed' ? 'gray' : 'black',
          originX: 'center',
          originY: 'center',
        });

        canvas.add(newLine);
        setLine(newLine);
      });

      canvas.on('mouse:move', function (o) {
        if (!isDrawing || !line) return;
        const pointer = canvas.getPointer(o.e);

        line.set({ x2: pointer.x, y2: pointer.y });
        canvas.renderAll();
      });

      canvas.on('mouse:up', function () {
        setIsDrawing(false);
        setLine(null);
      });
    }

    if (selectedTool === 'group') {
      const activeObjects = editor.canvas.getActiveObjects();

      if (activeObjects.length > 1) {
        const group = new fabric.Group(activeObjects);
        activeObjects.forEach((obj) => editor.canvas.remove(obj));
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
      const activeObjects = editor.canvas.getActiveObjects();

      const group = new fabric.Group(activeObjects);
      activeObjects.forEach((obj) => editor.canvas.remove(obj));
      editor.canvas.add(group);

      group
        .set({
          angle: (group.angle + 90) % 360,
        })
        .setCoords();
      setSelectedTool('select');
      editor.canvas.renderAll();
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

      // Duplicate the selected objects
      activeObjects.forEach((obj) => {
        obj.clone((clonedObj) => {
          clonedObj.set({
            left: obj.left + 200, // Offset position for duplicate
            top: obj.top + 20, // Offset position for duplicate
            evented: true, // Ensure the duplicate is interactive
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
      }
    }

    if (selectedTool === 'convertor') {
      canvas.on('mouse:down', function (o) {
        const activeObject = canvas.getActiveObject();

        // Check if there's an active selection
        if (activeObject) {
          // Get the bounding box of the selected object to place the curve in the same location
          const { left, top, width, height } = activeObject.getBoundingRect();

          // Remove the selected object
          canvas.remove(activeObject);

          // Define starting point of the curve based on the selected object's position
          const startX = left;
          const startY = top + height / 2;

          // Define the curve path to replace the selected object
          const path = `M ${startX} ${startY} Q ${startX + 50} ${startY - 50}, ${
            startX + 100
          } ${startY}`;

          // Create the curve as a Path object
          const curve = new fabric.Path(path, {
            stroke: 'black',
            fill: 'transparent',
            strokeWidth: 0.2,
            selectable: false,
          });
          setSelectedTool('select');
          canvas.add(curve);
        }
      });
    }

    if (selectedTool === 'cut line') {
      let curve; // Store the curve reference
      let startX, startY;

      canvas.on('mouse:down', function (o) {
        setIsDrawing(true);

        const pointer = canvas.getPointer(o.e);
        startX = pointer.x;
        startY = pointer.y;

        const path = `M ${startX} ${startY} Q ${startX + 50} ${startY - 50}, ${
          startX + 100
        } ${startY}`;
        curve = new fabric.Path(path, {
          stroke: 'red',
          fill: 'transparent',
          strokeWidth: 0.5,
          strokeDashArray: [5, 5],
          selectable: false,
        });

        canvas.add(curve);
      });

      canvas.on('mouse:move', function (o) {
        if (isDrawing) {
          const pointer = canvas.getPointer(o.e);
          console.log(pointer.x);
          const endX = pointer.x;
          const endY = pointer.y;

          console.log('Mouse moving at:', pointer.x, pointer.y);

          // Update curve path
          const updatedPath = `M ${startX} ${startY} Q ${(startX + endX) / 2} ${
            startY - 50
          }, ${endX} ${endY}`;
          curve.set({ path: updatedPath });
          canvas.renderAll();
        }
      });

      canvas.on('mouse:up', function () {
        setIsDrawing(false);
        setSelectedTool('select');
      });
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
    canvas.renderAll();

    return () => {
      canvas.off('mouse:down');
      canvas.off('mouse:move');
      canvas.off('mouse:up');
      canvas.off('mouse:wheel');
    };
  }, [editor, selectedTool, line, rect, startPoint, cropRect, triangle, mirrorDirection]);

  useEffect(() => {
    if (editor && selectedFile) {
      fabric.loadSVGFromString(selectedFile, (objects, options) => {
        editor.canvas.clear(); // Clear the canvas to remove existing objects

        // Group SVG elements
        const svgGroup = fabric.util.groupSVGElements(objects, options);

        svgGroup.set({
          left: editor.canvas.width / 2 - svgGroup.width / 2,
          top: editor.canvas.height / 2 - svgGroup.height / 2,
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
          editor.canvas.add(item); // Add individual objects to the canvas
        });

        editor.canvas.renderAll(); // Render changes
      });
    }
  }, [selectedFile, editor]);

  return (
    <div className="grid-background w-full h-full relative">
      <FabricJSCanvas className="w-full h-full" onReady={onReady} />
    </div>
  );
}

export default Canvas;
