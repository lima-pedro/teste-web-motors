import React from 'react';

import './Navbar.css';
import IconeCarro from './assets/carro.svg';
import IconeMoto from './assets/motocicleta.svg';

function Navbar () {
  return (
    <div className="navbar-container">
      <div className="botao-container-mobile">
        <button type="submit">Vender meu carro</button>
      </div>
      <div className="grupo-menu">
        <ul>
          <li id="selected">
            <img id="icone-carro" src={IconeCarro} alt="Ícone carro"/>
            <div className="grupo-lista">
              <p className="p-comprar">COMPRAR</p>
              <p>CARROS</p>
            </div>
          </li>
          <li id="no-selected">
            <img id="icone-moto" src={IconeMoto} alt="Ícone Moto" />
            <div className="grupo-lista">
              <p className="p-comprar">COMPRAR</p>
              <p>MOTOS</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="botao-container">
        <button type="submit">Vender meu carro</button>
      </div>
    </div>
  )
}

export default Navbar;
