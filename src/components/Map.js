import React from 'react';
import CityLayer from './CityLayer';
import './Map.scss';

const Map = () => {
  return (
    <div className='map'>
      <CityLayer />
      {/*TODO: place overlays here*/}
    </div>
  );
};

export default Map;
