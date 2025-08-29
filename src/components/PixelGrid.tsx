import React from 'react';

const PixelGrid: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,0,0,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,0,0,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '10px 10px'
      }}
    />
  );
};

export default PixelGrid;