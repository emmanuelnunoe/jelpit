import React from 'react';

const ServiceCard = (props) => {
  return (
    <div className='card col m-2'>
      <div className='card-body'>
        <h5 class='card-title'>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
