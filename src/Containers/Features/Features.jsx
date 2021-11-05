import React from 'react';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
const Features = (props) => {
  const features = [
    {
      title: 'Quality',
      description:
        'Your product will designed to satisfy software needs inside your business.',
    },
    {
      title: 'Reliability',
      description:
        'Our main goal is to deliver you a software with minimum probability of failure in your specific work environment',
    },
    {
      title: 'Performance',
      description: 'We know that you need a software can run fast and get wise use of your computer resources.',
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
