import React from 'react';
import SectionLeft from './SectionLeft.css';
const SectionLeft = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>Solicitar soporte </button>
      <img></img>
    </div>
  );
};

export default SectionLeft;
