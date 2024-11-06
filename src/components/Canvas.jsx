import { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Image, Line, Rect } from 'react-konva';
import useImage from 'use-image';

function Canvas({ selectedFile, selectedTool }) {
  const [lines, setLines] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [svgPosition, setSvgPosition] = useState({ x: 0, y: 0 });
  const [svgScale, setSvgScale] = useState(1);
  const stageRef = useRef(null);
  const [image] = useImage(selectedFile);

  // Reset drawings when selectedFile changes
  useEffect(() => {
    setLines([]);
    setShapes([]);
  }, [selectedFile]);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const stage = e.target.getStage();
    const pos = stage.getPointerPosition();
    const adjustedPos = {
      x: (pos.x - svgPosition.x) / svgScale,
      y: (pos.y - svgPosition.y) / svgScale,
    };

    if (selectedTool === 'line') {
      setLines([...lines, { points: [adjustedPos.x, adjustedPos.y] }]);
    } else if (selectedTool === 'rectangle') {
      setShapes([
        ...shapes,
        { type: 'rectangle', x: adjustedPos.x, y: adjustedPos.y, width: 0, height: 0 },
      ]);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const adjustedPoint = {
      x: (point.x - svgPosition.x) / svgScale,
      y: (point.y - svgPosition.y) / svgScale,
    };

    if (selectedTool === 'line') {
      const lastLine = lines[lines.length - 1];
      lastLine.points = lastLine.points.concat([adjustedPoint.x, adjustedPoint.y]);
      setLines([...lines.slice(0, -1), lastLine]);
    } else if (selectedTool === 'rectangle') {
      const lastShape = shapes[shapes.length - 1];
      lastShape.width = adjustedPoint.x - lastShape.x;
      lastShape.height = adjustedPoint.y - lastShape.y;
      setShapes([...shapes.slice(0, -1), lastShape]);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleDragMove = (e) => {
    const newPos = e.target.position();
    setSvgPosition(newPos);
  };

  const handleZoom = (e) => {
    e.evt.preventDefault();
    const scaleBy = 1.1;
    const stage = stageRef.current;
    const oldScale = svgScale;
    const pointer = stage.getPointerPosition();
    const mousePointTo = {
      x: (pointer.x - svgPosition.x) / oldScale,
      y: (pointer.y - svgPosition.y) / oldScale,
    };
    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
    setSvgScale(newScale);

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    setSvgPosition(newPos);
  };

  useEffect(() => {
    const stage = stageRef.current;
    if (stage) {
      stage.on('wheel', handleZoom);
    }
    return () => {
      if (stage) {
        stage.off('wheel', handleZoom);
      }
    };
  }, [svgScale, svgPosition]);

  return (
    <div className="grid-background">
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="w-full h-full"
      >
        <Layer>
          {image && (
            <Image
              image={image}
              x={svgPosition.x}
              y={svgPosition.y}
              scaleX={svgScale}
              scaleY={svgScale}
              draggable={selectedTool == 'select'}
              onDragMove={handleDragMove}
            />
          )}
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points.map((p, index) =>
                index % 2 === 0 ? p * svgScale + svgPosition.x : p * svgScale + svgPosition.y
              )}
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
                  x={shape.x * svgScale + svgPosition.x}
                  y={shape.y * svgScale + svgPosition.y}
                  width={shape.width * svgScale}
                  height={shape.height * svgScale}
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
