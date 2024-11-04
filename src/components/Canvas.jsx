import React, { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Line, Path } from 'react-konva';

function Canvas({ selectedTool, patterns, setPatterns, selectedPattern, selectedFile }) {
  const stageRef = useRef(null);
  const isDrawing = useRef(false);
  const [currentLine, setCurrentLine] = useState([]);
  const [svgElements, setSvgElements] = useState([]);
  const [stageSize, setStageSize] = useState({
    width: window.innerWidth - 80,
    height: window.innerHeight - 112,
  });
  useEffect(() => {
    if (selectedFile) {
      try {
        // Remove leading and trailing whitespace
        const trimmedSvg = selectedFile.trim();

        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(trimmedSvg, 'image/svg+xml');

        // Check if parsing resulted in an error
        const errorNode = svgDoc.querySelector('parsererror');
        if (errorNode) {
          console.error('Error parsing SVG:', errorNode.textContent);
          return;
        }

        const svgPaths = svgDoc.querySelectorAll('path');
        const svgLines = svgDoc.querySelectorAll('line');
        const svgTexts = svgDoc.querySelectorAll('text');

        console.log(
          'Paths:',
          svgPaths.length,
          'Lines:',
          svgLines.length,
          'Texts:',
          svgTexts.length
        );

        const pathElements = Array.from(svgPaths).map((path, index) => ({
          id: `path-${index}`,
          type: 'path',
          data: path.getAttribute('d'),
          fill: path.getAttribute('fill') || 'none',
          stroke: path.getAttribute('stroke') || '#000',
          strokeWidth: path.getAttribute('stroke-width') || 2,
        }));

        const lineElements = Array.from(svgLines).map((line, index) => ({
          id: `line-${index}`,
          type: 'line',
          x1: line.getAttribute('x1'),
          y1: line.getAttribute('y1'),
          x2: line.getAttribute('x2'),
          y2: line.getAttribute('y2'),
          stroke: line.getAttribute('stroke') || '#000',
          strokeWidth: line.getAttribute('stroke-width') || 2,
        }));

        const textElements = Array.from(svgTexts).map((text, index) => ({
          id: `text-${index}`,
          type: 'text',
          x: text.getAttribute('x') || 0,
          y: text.getAttribute('y') || 0,
          fill: text.getAttribute('fill') || '#000',
          fontSize: text.getAttribute('font-size') || '16',
          fontFamily: text.getAttribute('font-family') || 'sans-serif',
          content: text.textContent || '',
        }));

        // Combine all elements
        const elements = [...pathElements, ...lineElements, ...textElements];
        setSvgElements(elements);
      } catch (error) {
        console.error('Error parsing the SVG:', error);
      }
    }
  }, [selectedFile]);

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
    <svg viewBox="0 0 800 1200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Define the grid pattern */}
      <defs>
        <pattern
          id="grid"
          width="37.795" /* 10mm in pixels (assuming 1mm = 3.7795px) */
          height="37.795"
          patternUnits="userSpaceOnUse"
        >
          <path d="M 37.795 0 L 0 0 0 37.795" fill="none" stroke="lightgray" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* Apply the grid pattern as the background */}
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Your SVG elements */}
      {svgElements.map((element) => {
        if (element.type === 'path') {
          return (
            <path
              key={element.id}
              d={element.data}
              fill={element.fill}
              stroke={element.stroke}
              strokeWidth={element.strokeWidth}
            />
          );
        } else if (element.type === 'line') {
          return (
            <line
              key={element.id}
              x1={element.x1}
              y1={element.y1}
              x2={element.x2}
              y2={element.y2}
              stroke={element.stroke}
              strokeWidth={element.strokeWidth}
            />
          );
        } else if (element.type === 'text') {
          return (
            <text
              key={element.id}
              x={element.x}
              y={element.y}
              fontFamily={element.fontFamily}
              fontSize={element.fontSize}
              fill={element.fill}
            >
              {element.content}
            </text>
          );
        } else if (element.type === 'ellipse') {
          return (
            <ellipse
              key={element.id}
              cx={element.cx}
              cy={element.cy}
              rx={element.rx}
              ry={element.ry}
              stroke={element.stroke}
              strokeWidth={element.strokeWidth}
              fill={element.fill}
            />
          );
        }
        return null;
      })}
    </svg>
  );
}
export default Canvas;
