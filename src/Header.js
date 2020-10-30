import React from 'react';

import Logo from './assets/webmotors.svg';
import './Header.css';

function Header () {
  return (
    <div className="header-container">
      <img className="header-logo" src={Logo} alt="Logo WebMotors"/>
    </div>
  )
}

export default Header;