import React from 'react';
import CardPricing from '../../Components/CardPricing/CardPricing';

const Pricing = () => {
  return (
    <div className='container'>
      <h2>Pricing</h2>
      <div className='row align-items-start'>
        <CardPricing title='start'></CardPricing>
        <CardPricing title='enterprice'></CardPricing>
        <CardPricing title='evolve'></CardPricing>
      </div>
    </div>
  );
};

export default Pricing;
