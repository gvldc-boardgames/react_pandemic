import React from 'react';
import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';

import { pathType } from '../../constants/propTypes';

const prefixer = postcssJs.sync([autoprefixer]);


const Path = ({ path: [[x1, y1], [x2, y2]] }) => {
  const length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  const angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  const transform = `rotate(${angle}deg)`;
  return (
    <div
      key={`path-${x1}${x2}${y1}${y2}`}
      className="path"
      style={prefixer({ left: x1, top: y1, width: length, transform })} />
  );
};

Path.propTypes = {
  path: pathType.isRequired
};

export default Path;
