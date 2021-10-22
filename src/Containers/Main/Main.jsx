import React from 'react';
import webDesign from '../../assets/image/imac-1999636_1920.png';
import Shopbtn from '../../Components/Shopbtn.jsx/Shopbtn';
const Main = () => {
  return (
    <div>
      <img src={webDesign} style={{ width: '100%' }} />
      <Shopbtn />
      <h1>Evolve of software</h1>
    </div>
  );
};

export default Main;
