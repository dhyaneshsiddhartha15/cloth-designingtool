import React, { useState } from 'react';
import { Stage, Layer, Line, Circle } from 'react-konva';

const BezierCurve = () => {
  const [points, setPoints] = useState([
    100,
    300, // Starting point
    150,
    100, // Control point 1
    350,
    100, // Control point 2
    400,
    300, // Ending point
  ]);

  const handleDragMove = (index, x, y) => {
    const updatedPoints = [...points];
    updatedPoints[index * 2] = x;
    updatedPoints[index * 2 + 1] = y;
    setPoints(updatedPoints);
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {/* Draw the Bezier curve */}
        <Line points={points} stroke="black" strokeWidth={2} bezier />

        {/* Anchor points for the curve */}
        {points.map((point, index) => {
          if (index % 2 !== 0) return null; // Skip y-coordinates

          return (
            <Circle
              key={index}
              x={points[index * 2]}
              y={points[index * 2 + 1]}
              radius={5}
              fill="red"
              draggable
              onDragMove={(e) => handleDragMove(index, e.target.x(), e.target.y())}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default BezierCurve;
