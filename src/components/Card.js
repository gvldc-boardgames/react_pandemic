import React from 'react';
import './Card.scss';
import {baseEvents} from './../constants/events';
import {cityIds} from './../constants/cities';

// helper function to get image locations
const getImageReducer = (type) => (acc, curr) => {
  acc[`${type}${curr}`] = require(`./../assets/images/${type}-${curr}.png`);
  return acc;
};
// get references to all images, forces webpack to handle these static files
const IMAGES = {
  epidemic: require('./../assets/images/epidemic.png'),
  ...baseEvents.reduce(getImageReducer('event'), {}),
  ...cityIds.reduce(getImageReducer('city'), {}),
};

const validEvent = (event) => baseEvents.indexOf(event) >= 0;
const validCity = (id) => !isNaN(id) && parseInt(id) >= 0 && parseInt(id) <= 47;
// todo - find out more about these props and redo it perhaps
const Card = ({ cardType, id, className }) => {
  const isValid = (cardType === 'event' && validEvent(id)) ||
      (cardType === 'city' && validCity(id)) ||
      (cardType === 'epidemic');
  const image = cardType === 'epidemic' ? 
      IMAGES.epidemic :
      IMAGES[`${cardType}${id}`];
  const style = {
    backgroundImage: `url(${image})`
  };
  return isValid && <div style={style} className={`card ${className}`}></div>;
};
export default Card;
