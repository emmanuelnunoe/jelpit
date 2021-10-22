import React from 'react';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
const Features = (props) => {
  const features = [
    { title: 'Quality', description: 'You get wat you want and better' },
    {
      title: 'Reliability',
      description: 'Because you belive in us and our software',
    },
    {
      title: 'Performance',
      description: 'Software that use efficent your resources',
    },
  ];
  return (
    <div>
      <h3>Features</h3>
      <div className='row'>
        <i class='bi bi-bag-check-fill'></i>
        <i class='bi bi-cart-check'></i>
        {features.map((feature) => (
          <FeatureCard
            className='col col-6'
            title={feature.title}
            description={feature.description}
          ></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Features;
