import React from 'react';
import {withKnobs, /*, number,*/ text,} from '@storybook/addon-knobs';
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
