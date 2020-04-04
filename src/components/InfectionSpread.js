import React, {useEffect, useState, useRef,} from 'react';
import {getCubeOrigin, splitPathWithRatio,} from './../utils/mapUtils';
import {cities, connectedCities,} from './../constants/cities';

// time in seconds it takes infection to spread
const INFECTION_SPEED = 2;

const InfectionRoute = ({endPosition, startPosition, color, delaySeconds = 0,}) => {
  const itemRef = useRef(null);
  useEffect(() => {
    if (itemRef.current) {
      const {top: startTop, left: startLeft} = startPosition;
      const {top: endTop, left: endLeft} = endPosition;
      itemRef.current.animate([
        {top: `${startTop}px`, left: `${startLeft}px`},
        {top: `${endTop}px`, left: `${endLeft}px`}
      ], {duration: INFECTION_SPEED * 1000, delay: delaySeconds * 1000});
    }
  });

  return <span ref={itemRef} className={`cube cube-neighbor ${color} spread-infection`} 
      style={endPosition} />;
};

const InfectionSpread = ({startCityId, color, width, height,}) => {
  const [infections, setInfections] = useState([]);
  const startCoords = cities[startCityId].coords;
  const coordsToInfectionRoute = (startPosition, endPosition, delayRatio = 0) => {
    return {
      startPosition,
      endPosition,
      color,
      delaySeconds: delayRatio * INFECTION_SPEED,
    };
  };
  const coordsToPosition = ([x, y]) => {
    // TODO properly scale this back... 24 is magic number because its size of a city / the circle around the disease
    return {left: x < 0 ? -24 : x > width ? width : x - 12, top: y - 12};
  };
  useEffect(() => {
    const infData = connectedCities.filter(pair => pair.includes(startCityId))
      .flatMap(pair => pair.filter(id => id != startCityId))
      .map(id => cities[id])
      .flatMap(endCity => {
        const splitCoords = splitPathWithRatio([...startCoords].reverse(), [...endCity.coords].reverse(), width, height);
        if (splitCoords === null) {
          return coordsToInfectionRoute(getCubeOrigin(startCoords, width, height), getCubeOrigin(endCity.coords, width, height));
        } else {
          return splitCoords.flatMap(([start, end], idx, arr) => {
            return coordsToInfectionRoute(coordsToPosition(start), coordsToPosition(end), idx);
          })
        }
      });

    console.log(infData);
    setInfections(infData);
  }, [startCityId]);
  return <React.Fragment>{infections.map((inf, idx) => <InfectionRoute {...inf} />)}</React.Fragment>;
};

export default InfectionSpread;
