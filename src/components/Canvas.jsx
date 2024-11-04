import React, { useEffect, useState } from 'react';
import { Stage, Layer, Text, Image } from 'react-konva';

function svgToBase64(svg) {
  const svgEncoded = btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;base64,${svgEncoded}`;
}

function Canvas({ selectedFile }) {
  const [image, setImage] = useState(null);
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
        width={window.innerWidth}
        height={window.innerHeight}
        draggable="true"
        className="w-full h-full"
      >
        <Layer>{image && <Image image={image} x={0} y={0} />}</Layer>
      </Stage>
    </div>
  );
}

export default Canvas;
