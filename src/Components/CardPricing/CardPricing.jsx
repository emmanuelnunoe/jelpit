import React from 'react';

const CardPricing = (props) => {
  return (
    <div className='card col m-2'>
      <div className='card-body'>
        <h5 class='card-title'>{props.title}</h5>
        <p>One year name and hosting</p>
      </div>
    </div>
  );
};

export default CardPricing;
