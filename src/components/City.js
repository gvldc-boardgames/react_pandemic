import React from 'react';

// TODO: handle if player can travel to the city
const City = ({id, placement, color, name,}) => {
  return (
    <span
        className='city'
        style={placement}>
      <span className={`icon ${color}`} />
      <span className='name'>{name}</span>
    </span>
  );
};

export default City;
