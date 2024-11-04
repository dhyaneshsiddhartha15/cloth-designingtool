import { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Image, Line, Circle, Rect } from 'react-konva';

function svgToBase64(svg) {
  const svgEncoded = btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;base64,${svgEncoded}`;
}

function Canvas({ selectedFile }) {
  const [image, setImage] = useState(null);
  let tool = 'line';
  const stageRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const pos = e.target.getStage().getPointerPosition();

    if (tool === 'line') {
      setLines([...lines, { points: [pos.x, pos.y] }]);
    } else if (tool === 'rectangle') {
      setShapes([
        ...shapes,
        {
          type: 'rectangle',
          x: pos.x,
          y: pos.y,
          width: 0,
          height: 0,
        },
      ]);
    } else if (tool === 'eraser') {
      const eraserSize = 20;
      setShapes([
        ...shapes,
        {
          type: 'eraser',
          x: pos.x - eraserSize / 2,
          y: pos.y - eraserSize / 2,
          width: eraserSize,
          height: eraserSize,
        },
      ]);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    if (tool === 'line') {
      const lastLine = lines[lines.length - 1];
      lastLine.points = lastLine.points.concat([point.x, point.y]);
      setLines([...lines.slice(0, -1), lastLine]);
    } else if (tool === 'rectangle') {
      const lastShape = shapes[shapes.length - 1];
      const newWidth = point.x - lastShape.x;
      const newHeight = point.y - lastShape.y;

      setShapes([
        ...shapes.slice(0, -1),
        {
          ...lastShape,
          width: newWidth,
          height: newHeight,
        },
      ]);
    } else if (tool === 'eraser') {
      const eraserSize = 20;
      const pos = {
        x: point.x - eraserSize / 2,
        y: point.y - eraserSize / 2,
      };

      // Remove any lines or shapes that intersect with the eraser
      const newLines = lines.filter((line) => !intersectsEraser(line, pos, eraserSize));
      const newShapes = shapes.filter((shape) => !intersectsEraser(shape, pos, eraserSize));

      setLines(newLines);
      setShapes(newShapes);
    }
  };

  const intersectsEraser = (item, eraserPos, eraserSize) => {
    if (item.points) {
      // Line
      for (let i = 0; i < item.points.length; i += 2) {
        const x = item.points[i];
        const y = item.points[i + 1];
        if (
          x >= eraserPos.x &&
          x <= eraserPos.x + eraserSize &&
          y >= eraserPos.y &&
          y <= eraserPos.y + eraserSize
        ) {
          return true;
        }
      }
    } else {
      // Shape
      const itemRight = item.x + item.width;
      const itemBottom = item.y + item.height;
      const eraserRight = eraserPos.x + eraserSize;
      const eraserBottom = eraserPos.y + eraserSize;

      return !(
        itemRight < eraserPos.x ||
        item.x > eraserRight ||
        itemBottom < eraserPos.y ||
        item.y > eraserBottom
      );
    }
    return false;
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  useEffect(() => {
    const handleZoom = (e) => {
      e.preventDefault();
      const scaleBy = 1.1;
      const stage = stageRef.current;
      const oldScale = stage.scaleX();

      const pointer = stage.getPointerPosition();
      const mousePointTo = {
        x: (pointer.x - stage.x()) / oldScale,
        y: (pointer.y - stage.y()) / oldScale,
      };

      const newScale = e.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
      stage.scale({ x: newScale, y: newScale });

      const newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
      };
      stage.position(newPos);
      stage.batchDraw();
    };

    const stage = stageRef.current;
    if (stage) {
      stage.content.addEventListener('wheel', handleZoom);
    }

    return () => {
      if (stage) {
        stage.content.removeEventListener('wheel', handleZoom);
      }
    };
  }, []);

  useEffect(() => {
    if (!selectedFile) return;
    const img = new window.Image();
    img.src = svgToBase64(selectedFile);
    img.onload = () => {
      setImage(img);
    };
  }, [selectedFile]);

  return (
    <div className="grid-background">
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        // draggable={true}
        className="w-full h-full"
      >
        <Layer>
          {image && <Image image={image} x={0} y={0} />}
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#000000"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
            />
          ))}
          {shapes.map((shape, i) => {
            if (shape.type === 'rectangle') {
              return (
                <Rect
                  key={i}
                  x={shape.x}
                  y={shape.y}
                  width={shape.width}
                  height={shape.height}
                  stroke="#000000"
                  strokeWidth={2}
                />
              );
            }
            return null;
          })}
        </Layer>
      </Stage>
    </div>
  );
}

export default Canvas;
