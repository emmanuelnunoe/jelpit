import React from 'react';

const CardPricing = (props) => {
  return (
    <div className='card col m-2'>
      <div className='card-title'>{props.title}</div>
      <p>One year name and hosting</p>
    </div>
  );
};

export default CardPricing;
