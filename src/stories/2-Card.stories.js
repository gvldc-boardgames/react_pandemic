import React from 'react';
import {withKnobs, number} from '@storybook/addon-knobs';
import Card from './../components/Card';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs],
};

export const City = () => <Card cardType='city' id={number("Id", 42)} />
export const Event = () => <Card cardType='event' id={number("Id", 2)} />
