import React from 'react';

// TODO: handle if player can travel to the city
const City = ({id, placement, color, name, hasStation = false,}) => {
  return (
    <span
        className='city'
        style={placement}>
      <span className={`icon ${color}`} />
      {hasStation && <span className='station' />}
      <span className='name'>{name}</span>
    </span>
  );
};

export default City;
