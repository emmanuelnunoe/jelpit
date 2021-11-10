import React from 'react';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
const Features = (props) => {
  const features = [
    {
      title: 'Desarrollo web',
      description:
        'Desarrollamos tu sitio desde cero o lo mejoramos, tambien te apoyamos en con el mantenimiento, siempre es bueno contar con alguien que te ayude con los temas de la web.',
    },
    {
      title: 'Soporte tecnico',
      description:
        'Si tu equipo presenta inconvenientes con la red, o el rendimiento no es el mismo que cuando lo compraste, quizas buscas un mantenimiento preventivo, u ocupas ayuda en algun tema relacionado con tecnologia.',
    },
    {
      title: 'Asesoria',
      description:
        'Seguro quieres tomar la mejor decision antes de hacer una inversion en un equipo de computo u ofrecer tu producto o servico, o tal vez buscas la opinion de un experto.',
    },
  ];
  return (
    <div>
      <h3>Servicios</h3>
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
