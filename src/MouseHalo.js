import React, { useState, useEffect } from 'react';

const MouseHalo = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div className="MouseHalo" style={{ left: position.x, top: position.y }} />
  );
};

export default MouseHalo;
