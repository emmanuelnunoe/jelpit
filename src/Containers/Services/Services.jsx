import React from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
const Services = (props) => {
  const services = [
    {
      title: 'Página Web.',
      description:
        'Creamos la presencia web de calidad para los clientes, acorde a los objetivos de la empresa.',
    },
    {
      title: 'Actuaizacion de Página Web',
      description:
        'Ralizamos los cambios por ti para contar con un sitio actualizado.',
    },
    {
      title: 'Asesoria',
      description:
        'Despejamos las dudas relacionadas con el sitio de tu empresa.',
    },
  ];
  return (
    <div id="servicios">
      <h3>Servicios</h3>
      <div className='row'>
        {services.map((service) => (
          <ServiceCard
            className='col col-6'
            title={service.title}
            description={service.description}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
