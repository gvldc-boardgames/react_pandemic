import React, {useEffect, useState, useRef,} from 'react';
import {getCubeOrigin} from './../utils/mapUtils';
import {cities, connectedCities} from './../constants/cities';

const InfectionRoute = ({endCoords, startPosition, color, width, height,}) => {
  const itemRef = useRef(null);
  useEffect(() => {
    if (itemRef.current) {
      const {top, left} = startPosition;
      const {top: endTop, left: endLeft} =  getCubeOrigin(endCoords, width, height)
      itemRef.current.animate([
        {top: `${top}px`, left: `${left}px`},
        {top: `${endTop}px`, left: `${endLeft}px`}
      ], {duration: 3000});
    }
  });

  return <span ref={itemRef} className={`cube cube-neighbor ${color} spread-infection`} 
      style={getCubeOrigin(endCoords, width, height)} />;
};

const InfectionSpread = ({startCityId, color, width, height,}) => {
  const [endpoints, setEndpoints] = useState([]);
  const startPosition = getCubeOrigin(cities[startCityId].coords, width, height);
  useEffect(() => {
    const endIds = connectedCities.filter(pair => pair.includes(startCityId))
      .flatMap(pair => pair.filter(id => id != startCityId));
    setEndpoints(endIds.map(id => cities[id].coords));
  }, [startCityId]);
  return <React.Fragment>{endpoints.map((ep, idx) => <InfectionRoute startPosition={startPosition} endCoords={ep} key={idx} color={color} height={height} width={width} />)}</React.Fragment>;
};

export default InfectionSpread;
