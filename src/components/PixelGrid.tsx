import React, { useState, useEffect } from 'react';

const PixelGrid: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [gridSize, setGridSize] = useState(20);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'G') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  if (!isVisible) return null;

  const gridLines = [];
  const screenWidth = window.innerWidth;
  const screenHeight = Math.max(window.innerHeight, document.documentElement.scrollHeight);

  // Вертикальные линии
  for (let x = 0; x <= screenWidth; x += gridSize) {
    gridLines.push(
      <line
        key={`v-${x}`}
        x1={x}
        y1={0}
        x2={x}
        y2={screenHeight}
        stroke="rgba(255, 0, 0, 0.3)"
        strokeWidth="1"
      />
    );
    
    // Координаты по X каждые 100px
    if (x % 100 === 0) {
      gridLines.push(
        <text
          key={`x-${x}`}
          x={x + 2}
          y={15}
          fill="rgba(255, 0, 0, 0.8)"
          fontSize="10"
          fontFamily="monospace"
        >
          {x}
        </text>
      );
    }
  }

  // Горизонтальные линии
  for (let y = 0; y <= screenHeight; y += gridSize) {
    gridLines.push(
      <line
        key={`h-${y}`}
        x1={0}
        y1={y}
        x2={screenWidth}
        y2={y}
        stroke="rgba(255, 0, 0, 0.3)"
        strokeWidth="1"
      />
    );
    
    // Координаты по Y каждые 100px
    if (y % 100 === 0 && y > 0) {
      gridLines.push(
        <text
          key={`y-${y}`}
          x={2}
          y={y - 2}
          fill="rgba(255, 0, 0, 0.8)"
          fontSize="10"
          fontFamily="monospace"
        >
          {y}
        </text>
      );
    }
  }

  return (
    <>
      <div className="fixed top-4 right-4 z-[9999] bg-black/80 text-white p-2 rounded text-xs font-mono">
        <div>Сетка: {gridSize}px</div>
        <div>Ctrl+Shift+G - вкл/выкл</div>
        <div>
          <button 
            onClick={() => setGridSize(10)}
            className={`mr-1 px-1 ${gridSize === 10 ? 'bg-red-500' : 'bg-gray-600'}`}
          >
            10px
          </button>
          <button 
            onClick={() => setGridSize(20)}
            className={`mr-1 px-1 ${gridSize === 20 ? 'bg-red-500' : 'bg-gray-600'}`}
          >
            20px
          </button>
          <button 
            onClick={() => setGridSize(50)}
            className={`px-1 ${gridSize === 50 ? 'bg-red-500' : 'bg-gray-600'}`}
          >
            50px
          </button>
        </div>
      </div>
      
      <svg
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[99999]"
        style={{ 
          width: screenWidth, 
          height: screenHeight,
          position: 'fixed'
        }}
      >
        {gridLines}
      </svg>
    </>
  );
};

export default PixelGrid;