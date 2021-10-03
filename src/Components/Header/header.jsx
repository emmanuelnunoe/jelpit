import React from 'react';
import icon from '../../assets/image/evolveIconJelpit.png';
import header from './header.css';
const Header = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark header'>
      <div class='container-fluid'>
        <img src={icon} alt='logoJelpit' class='icon' />
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link active option' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li class='nav-item option'>
              <a class='nav-link' href='#'>
                Features
              </a>
            </li>
            <li class='nav-item option'>
              <a class='nav-link' href='#'>
                Pricing
              </a>
            </li>
            <li class='nav-item dropdown option'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                More
              </a>
              <ul
                class='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
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
