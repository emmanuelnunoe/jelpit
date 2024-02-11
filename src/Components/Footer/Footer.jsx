import React from 'react';
import footer from './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
      <div className='footer'>
          <p className='social-container'>
              <a href="#" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://www.facebook.com/jelpit.mx" lassName="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
          </p>
      <p>@copyright Jelpit.com.mx</p>
    </div>
  );
};

export default Footer;
