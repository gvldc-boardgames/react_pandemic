import React from 'react';
import City from './City';
import {cities} from './../constants/cities';
import {getLocationOrigin} from './../utils/mapUtils';

const CityLayer = ({width, height, stations = [],}) => {
  const items = Object.values(cities).map(({id, name, color, coords}) => {
    const placement = getLocationOrigin(coords, width, height);
    return <City key={id} name={name} color={color} placement={placement} id={id}
        hasStation={stations.indexOf(id) >= 0} />;
  });
  return <div className='locations-layer'>{items}</div>
};

export default CityLayer;
