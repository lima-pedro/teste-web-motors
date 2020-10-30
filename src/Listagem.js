import Axios from 'axios';
import React from 'react';

import api from './api';

import './Listagem.css';

class Listagem extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    veiculos: []
  }

  async componentDidMount () {
    const response = await api.get('Vehicles?Page=1');
    this.setState({ veiculos: response.data });
  }

  render() {

    const { veiculos } = this.state;

    return (
      <div className="conteudo-container">
        { veiculos.map(veiculo => ( 
          <div key={ veiculo.ID } className="card">
            <h1 className="titulo">{ veiculo.Make} {veiculo.Model} {veiculo.Version}</h1>
            <p>Ano Modelo: <span>{ veiculo.YearModel }</span></p>
            <p>Ano de fabricação: <span>{ veiculo.YearFab }</span></p>
            <p>KM: <span>{ veiculo.KM } Km </span></p>

            <div className="image-container">
              <img className="image" src={ veiculo.Image } />
            </div>

            <div className="price">
              <p>Preço R$ { veiculo.Price }</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Listagem