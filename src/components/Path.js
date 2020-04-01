import React from 'react';

const Path = ({ path: [[x1, y1], [x2, y2]] }) => {
  const length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  const angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  const transform = `rotate(${angle}deg)`;
  return (
    <div
      className="path"
      style={{ left: x1, top: y1, width: length, transform }} />
  );
};

export default Path;
