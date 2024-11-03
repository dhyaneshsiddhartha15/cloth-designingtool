import { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Line, Path } from 'react-konva';

function Canvas({ selectedTool, patterns, setPatterns, selectedPattern }) {
  const stageRef = useRef(null);
  const isDrawing = useRef(false);
  const [currentLine, setCurrentLine] = useState([]);
  const [svgPatterns, setSvgPatterns] = useState([]);
  const [stageSize, setStageSize] = useState({
    width: window.innerWidth - 80,
    height: window.innerHeight - 112,
  });

  useEffect(() => {
    // Mock backend call to load SVG patterns
    const loadPatterns = async () => {
      try {
        const mockPatterns = [
          {
            id: 1,
            path: 'M10 10 L90 90 L90 10 Z',
            style: { fill: 'none', stroke: '#000', strokeWidth: 2 },
          },
        ];
        setSvgPatterns(mockPatterns);
      } catch (error) {
        console.error('Error loading patterns:', error);
      }
    };

    loadPatterns();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setStageSize({
        width: window.innerWidth - 80,
        height: window.innerHeight - 112,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();

    if (selectedTool === 'draw') {
      setCurrentLine([pos.x, pos.y]);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    if (selectedTool === 'draw') {
      setCurrentLine((prevLine) => [...prevLine, point.x, point.y]);
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;

    if (selectedTool === 'draw' && currentLine.length) {
      setPatterns((prevPatterns) => [
        ...prevPatterns,
        {
          tool: 'line',
          points: currentLine,
        },
      ]);
      setCurrentLine([]);
    }
  };

  return (
    <div className="flex-1 bg-gray-500">
      <Stage
        width={stageSize.width}
        height={stageSize.height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={stageRef}
        className="bg-white shadow-inner"
      >
        <Layer>
          {/* Grid background */}
          {Array.from({ length: 50 }).map((_, i) => (
            <Line
              key={`grid-h-${i}`}
              points={[0, i * 20, stageSize.width, i * 20]}
              stroke="#eee"
              strokeWidth={1}
            />
          ))}
          {Array.from({ length: 50 }).map((_, i) => (
            <Line
              key={`grid-v-${i}`}
              points={[i * 20, 0, i * 20, stageSize.height]}
              stroke="#eee"
              strokeWidth={1}
            />
          ))}

          {/* SVG Patterns */}
          {svgPatterns.map((pattern, i) => (
            <Path
              key={`pattern-${i}`}
              data={pattern.path}
              fill={pattern.style.fill}
              stroke={pattern.style.stroke}
              strokeWidth={pattern.style.strokeWidth}
              draggable
            />
          ))}

          {/* User drawn patterns */}
          {patterns.map((pattern, i) => {
            if (pattern.tool === 'line') {
              return (
                <Line
                  key={i}
                  points={pattern.points}
                  stroke="#000"
                  strokeWidth={2}
                  tension={0.5}
                  lineCap="round"
                  lineJoin="round"
                  draggable
                />
              );
            }
            return null;
          })}

          {/* Current drawing line */}
          {currentLine.length > 0 && (
            <Line
              points={currentLine}
              stroke="#000"
              strokeWidth={2}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
}

export default Canvas;
