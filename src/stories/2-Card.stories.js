import React from 'react';
import {withKnobs, number, text} from '@storybook/addon-knobs';
import Card from './../components/Card';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs],
};

export const City = () => <Card cardType='city' id={number('Id', 42)} />
export const Event = () => <Card cardType='event' id={text('Event', 'airlift')} />
export const Epidemic = () => <Card cardType='epidemic' />
