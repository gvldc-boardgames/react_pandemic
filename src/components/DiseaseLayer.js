import React from 'react';
import {cities} from './../constants/cities';
import {getCubeOrigin} from './../utils/mapUtils';

const Cube = ({count, color, animationDelay = '0s'}) => {
  return <div className={`cube ${color} cubes-${count}`} style={{animationDelay}} />;
};

const Cubes = ({color, count, placement}) => {
  return (
    <div className='cube-group' style={placement}>
      {
        Array.from({length: count}).map((_, idx) => {
          return <Cube key={idx} color={color} count={count} animationDelay={`-${count === 2 ? idx * 3 : idx}s`} />;
        })
      }
    </div>
  );
};

/**
 * place cubes on the map based on diseases obj
 * @param {Number} width width of the map this overlay is for
 * @param {Number} height height of the map this overlay is for
 * @param {Object} diseases
 * @param {Object} diseases.cityId info about diseases in a city
 * @param {Number} diseases.cityId[color] number of disease cubes of given color
 **/
const DiseaseLayer = ({width, height, diseases = {},}) => {
  return (
    <div>
      {
        Object.entries(diseases).flatMap(([id, details]) => {
          const {coords} = cities[id];
          const placement = getCubeOrigin(coords, width, height);
          return Object.entries(details).flatMap(([color, count]) => {
            return <Cubes key={`${id}-${color}`} color={color} count={count} placement={placement} />;
          });
        })
      }
    </div>
  );
};

export default DiseaseLayer;
