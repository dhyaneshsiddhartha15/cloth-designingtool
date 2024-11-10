import React, { useEffect, useState } from 'react';
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';

function Canvas({ selectedFile, selectedTool }) {
  const { editor, onReady } = useFabricJSEditor();
  const [isDrawing, setIsDrawing] = useState(false);
  const [line, setLine] = useState(null);
  const [curve, setCurve] = useState(null);
  const [startPoint, setStartPoint] = useState(null);
  const [rect, setRect] = useState(null);
  const [controlPoint, setControlPoint] = useState(null);
  const [cropRect, setCropRect] = useState(null);

  console.log("Selected Tool", selectedTool);
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

    updateObjectSelectability();
    canvas.off('mouse:down');
    canvas.off('mouse:move');
    canvas.off('mouse:up');
    canvas.off('mouse:wheel');

    if (selectedTool === 'rubber') {
      canvas.isDrawingMode = false;
      canvas.selection = false;
      
      // Enhanced eraser configuration
      const ERASER_SIZE = 20;
      let eraserBrush = null;
      let eraserCircle = null;

      canvas.on('mouse:down', function(options) {
        setIsDrawing(true);
        const pointer = canvas.getPointer(options.e);
        
        // Create visual feedback for eraser
        eraserCircle = new fabric.Circle({
          left: pointer.x - ERASER_SIZE/2,
          top: pointer.y - ERASER_SIZE/2,
          radius: ERASER_SIZE/2,
          fill: 'rgba(255,255,255,0.3)',
          stroke: '#666',
          strokeWidth: 1,
          selectable: false,
          evented: false,
          originX: 'center',
          originY: 'center'
        });
        
        canvas.add(eraserCircle);

        // Check for objects under the eraser
        const objects = canvas.getObjects();
        objects.forEach((obj) => {
          if (obj !== eraserCircle) {
            const objBounds = obj.getBoundingRect();
            if (obj.containsPoint(pointer)) {
              // For SVG paths and complex objects
              if (obj instanceof fabric.Path || obj instanceof fabric.Group) {
                // If it's part of the background image, skip it
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

      canvas.on('mouse:move', function(options) {
        if (!isDrawing) {
          // Update eraser circle position even when not erasing
          const pointer = canvas.getPointer(options.e);
          if (eraserCircle) {
            eraserCircle.set({
              left: pointer.x,
              top: pointer.y
            });
            canvas.renderAll();
          }
          return;
        }
        
        const pointer = canvas.getPointer(options.e);
        
        // Update eraser circle position
        if (eraserCircle) {
          eraserCircle.set({
            left: pointer.x,
            top: pointer.y
          });
        }

        // Erase objects under the current position
        const objects = canvas.getObjects();
        objects.forEach((obj) => {
          if (obj !== eraserCircle) {
            if (obj.containsPoint(pointer)) {
              // Don't erase the background image
              if (obj !== canvas.backgroundImage) {
                canvas.remove(obj);
              }
            }
          }
        });

        canvas.renderAll();
      });

      canvas.on('mouse:up', function() {
        setIsDrawing(false);
        
        // Keep the eraser circle visible but update its style
        if (eraserCircle) {
          eraserCircle.set({
            fill: 'rgba(255,255,255,0.2)',
            stroke: '#999'
          });
          canvas.renderAll();
        }
      });

      // Remove eraser circle when switching tools
      return () => {
        if (eraserCircle) {
          canvas.remove(eraserCircle);
          canvas.renderAll();
        }
      };
    }

    if (selectedTool === 'extract') {
      canvas.getObjects().forEach((obj) => {
        obj.selectable = true;
        obj.hasControls = true;
      });

      canvas.on('mouse:down', function(o) {
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

      canvas.on('mouse:move', function(o) {
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

      canvas.on('mouse:up', function() {
        if (cropRect) {
          cropRect.setControlsVisibility({
            mt: true, 
            mb: true, 
            ml: true, 
            mr: true, 
            mtr: true
          });

          cropRect.on('modified', function() {
            performCrop();
          });
        }
        setIsDrawing(false);
      });

      const performCrop = () => {
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

        canvas.renderAll();
      };
    }

    if (selectedTool === 'rectangle') {
      canvas.on('mouse:down', function(o) {
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

      canvas.on('mouse:move', function(o) {
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

      canvas.on('mouse:up', function() {
        setIsDrawing(false);
        setRect(null);
        setStartPoint(null);
      });
    }

    if (selectedTool === 'zoom') {
      canvas.on('mouse:wheel', function(opt) {
        const delta = opt.e.deltaY;
        let zoom = canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });

      canvas.on('mouse:down', function(opt) {
        const evt = opt.e;
        if (evt.ctrlKey === true) {
          this.isDragging = true;
          this.selection = false;
          this.lastPosX = evt.clientX;
          this.lastPosY = evt.clientY;
        }
      });

      canvas.on('mouse:move', function(opt) {
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

      canvas.on('mouse:up', function() {
        this.setViewportTransform(this.viewportTransform);
        this.isDragging = false;
        this.selection = true;
      });
    }

    if (selectedTool === 'line') {
      canvas.on('mouse:down', function(o) {
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

      canvas.on('mouse:move', function(o) {
        if (!isDrawing || !line) return;
        const pointer = canvas.getPointer(o.e);
        line.set({ x2: pointer.x, y2: pointer.y });
        canvas.renderAll();
      });

      canvas.on('mouse:up', function() {
        setIsDrawing(false);
        setLine(null);
      });
    }

    canvas.renderAll();

    return () => {
      canvas.off('mouse:down');
      canvas.off('mouse:move');
      canvas.off('mouse:up');
      canvas.off('mouse:wheel');
    };
  }, [editor, selectedTool, line, rect, startPoint, cropRect]);

  useEffect(() => {
    if (editor && selectedFile) {
      fabric.loadSVGFromString(selectedFile, (objects, options) => {
        editor.canvas._objects.splice(0, editor.canvas._objects.length);
        editor.canvas.backgroundImage = objects[0];
        const newObj = objects.filter((_, index) => index !== 0);
        newObj.forEach((object) => {
          editor.canvas.add(object);
        });

        editor.canvas.renderAll();
      });
    }
  }, [selectedFile, editor]);

  return (
    <div className="grid-background w-full h-full">
      <FabricJSCanvas className="w-full h-full" onReady={onReady} />
    </div>
  );
}

export default Canvas;