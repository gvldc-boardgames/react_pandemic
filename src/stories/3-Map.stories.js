import React from 'react';
import {withKnobs, number, text,} from '@storybook/addon-knobs';
import Map from './../components/Map';

export default {
  title: 'Map',
  component: Map,
  decorators: [withKnobs],
};

export const DefaultMap = () => <Map />
export const MapWithStations = () => {
  const stations = ['2'];
  const additionalStation = text('Additional Station', '0');
  stations.push(additionalStation);
  return <Map stations={stations} />;
};

export const MapWithDiseases = () => {
  const infectedCity = text('Infected City ID', '0');
  const stations = ['2'];
  const blueCount = number('Blue cubes', 0);
  const redCount = number('Red cubes', 0);
  const blackCount = number('Black cubes', 0);
  const yellowCount = number('Yellow cubes', 0);
  if (parseInt(infectedCity) >= 0 && parseInt(infectedCity) <= 47
      && [blueCount, redCount, blackCount, yellowCount,].some(c => c > 0)) {
    const diseases = {[infectedCity]: {}};
    if (blueCount > 0) diseases[infectedCity].blue = blueCount;
    if (redCount > 0) diseases[infectedCity].red = redCount;
    if (blackCount > 0) diseases[infectedCity].black = blackCount;
    if (yellowCount > 0) diseases[infectedCity].yellow = yellowCount;
    return <Map stations={stations} diseases={diseases} />;
  } else {
    return <h1>Please select a city between 0-47 and at least some cubes</h1>;
  }
};

export const MapWithInfectionSpread = () => {
  const infectedCity = text('Infected City ID', '0');
  if (parseInt(infectedCity) >= 0 && parseInt(infectedCity) <= 47) {
    return <Map infectionSpread={{startCityId: infectedCity, color: 'red'}} />;
  } else {
    return <Map />;
  }
}
