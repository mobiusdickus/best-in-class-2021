import React from 'react';

import './Header.css';

import logo from '../../assets/img/superunion-logo-light.png';
import gif from '../../assets/img/SU_NEWSLETTER_SYMBOLANIMATION.gif';


const header = React.forwardRef((props, ref) => (
  <div ref={ ref }>
    <div className="fixed-header">
      <div className="logo">
        <a href="https://superunion.com" target="_blank" rel="noreferrer">
          <img className="responsive" src={logo} alt="Superunion Logo Light"/>
        </a>
      </div>
    </div>
    <div className="fixed-header-bottom"></div>
    <div className="ligature">
      <img className="responsive" src={gif} alt="SU Newsletter Symb"/>
    </div>
  </div>
));

export default header;
