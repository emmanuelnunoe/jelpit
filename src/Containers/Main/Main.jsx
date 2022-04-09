import React from 'react';
import webDesign from '../../assets/image/landingImgMobile.png';
import UtitleWebSite from '../../assets/image/Untitledwebsite.png';
import Shopbtn from '../../Components/Shopbtn.jsx/Shopbtn';
import mainStyle from './main.css';
const Main = () => {
    return (
        <div className="main-section row p-5">
          <div className='col-xs-12 col-lg-6 p-3'>
          <img
        src={webDesign}
        style={{ width: '100%' }}
                className='backgroundAnimatation'
                alt='tienda en linea'
            />
          </div>
          <div className='col-xs-12  col-lg-6 text-centre p-3'>
            <h1>Tu negocio digital</h1>
            <p>Incrementa las ventas, maneja tus pedidos, hazlo mejor y mas rapido, haz lo que tu decidas, las herramientas se adaptan a tu negocio.</p>
            <a class='btn btn-dark white-txt' href='#'>Creemos el siguiente nivel</a>
          </div>
     
    </div>
  );
};

export default Main;
