import React from 'react';
import webDesign from '../../assets/image/imac-1999636_1920.png';
import Shopbtn from '../../Components/Shopbtn.jsx/Shopbtn';
import mainStyle from './main.css';
const Main = () => {
  return (
    <div>
      <h1 className='titleAnimation'>Servicio IT profesional</h1>
      <img
        src={webDesign}
        style={{ width: '100%' }}
        className='backgroundAnimatation'
      />
      <Shopbtn />
    </div>
  );
};

export default Main;
