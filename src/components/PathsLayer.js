import React from 'react';
import Path from './Path';
import { splitPath, mapCoords } from './../utils/mapUtils';
import { cities, connectedCities, } from './../constants/cities';

// get connected cities and cities
// map their loc with mapCoords
// reverse them
// add height param
// then do split path
// and cross fingers?
const PathsLayer = ({ width, height, }) => {
  const getPath = ([{coords: start}, {coords: end}], idx) => {
    const path = [
      // apply ratio to the coords... and reverse the return so its x,y instead of y,x
      mapCoords(start, width, height).reverse(),
      mapCoords(end, width, height).reverse(),
    ];
    const split = splitPath(path[0], path[1], width);
    if (!split || split.length === 0) {
      return <Path key={idx} path={path} />;
    } else {
      return split.map((sPath, sIdx) => <Path key={`${idx}-${sIdx}`} path={sPath} />);
    }
  };

  return (
    <div>
      {connectedCities
          .map(([id1, id2]) => ([cities[id1], cities[id2]]))
          .flatMap(getPath)}
    </div>
  );
};

export default PathsLayer;
