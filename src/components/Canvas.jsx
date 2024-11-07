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

    canvas.renderAll();

    return () => {
      canvas.off('mouse:down');
      canvas.off('mouse:move');
      canvas.off('mouse:up');
      canvas.off('mouse:wheel');
    };
  }, [editor, selectedTool, line, rect, startPoint]);

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
