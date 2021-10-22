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
                Home
              </a>
            </li>
            <li className='nav-item option'>
              <a className='nav-link' href='#'>
                Features
              </a>
            </li>
            <li className='nav-item option'>
              <a className='nav-link' href='#'>
                Pricing
              </a>
            </li>
            <li className='nav-item dropdown option'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                More
              </a>
              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
