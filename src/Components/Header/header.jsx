import React from 'react';
import icon from '../../assets/image/evolveIconJelpit.png';
import header from './header.css';
const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark header'>
      <div className='container-fluid'>
        <img src={icon} alt='logoJelpit' className='icon' />
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a
                className='nav-link active option'
                aria-current='page'
                href='#'
              >
                Inicio
              </a>
            </li>
            <li className='nav-item option'>
              <a className='nav-link' href='#servicios'>
                Servicios
              </a>
            </li>
            <li className='nav-item option'>
                          <a className='nav-link' href='#contacto'>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
