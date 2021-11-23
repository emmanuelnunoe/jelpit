import React from 'react';
import shopbtn from './shopbtn.css';
const Shopbtn = () => {
  return (
    <div className='backgroundOfButton'>
          <button type="button" className='btn btn-lg btn-dark shopBtn' data-toggle="modal" data-target="#exampleModalCenter">
        Solicitar servicio
          </button>

    </div>
  );
};

export default Shopbtn;
