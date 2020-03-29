import React from 'react';
import './Card.scss';

// todo - find out more about these props and redo it perhaps
const Card = ({ cardType, id, className }) =>
  <div className={`card ${cardType} ${cardType}-${id} ${className}`}></div>;

export default Card;
