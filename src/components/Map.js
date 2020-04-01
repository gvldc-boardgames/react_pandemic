import React, {useRef, useEffect, useState,} from 'react';
import CityLayer from './CityLayer';
import PathsLayer from './PathsLayer';
import './Map.scss';

const Map = () => {
  const mapRef = useRef(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  const updateDimensions = () => {
    if (mapRef.current) {
      setHeight(mapRef.current.offsetHeight);
      setWidth(mapRef.current.offsetWidth);
    }
  };
  useEffect(() => {
    updateDimensions();
  });
  // set resize listener on first render only
  // by having empty requirements array
  // remove listener by returning a function
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className='map' ref={mapRef}>
      {height && width && <CityLayer width={width} height={height} />}
      {height && width && <PathsLayer width={width} height={height} />}
      {/*TODO: place overlays here*/}
    </div>
  );
};

export default Map;
