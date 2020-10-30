import React from 'react';

import './Busca.css';

import api from './api';

import IconeLocalizacao from './assets/localizacao.svg';
import IconeBuscaAvancada from './assets/seta-direita.svg';

class Busca extends React.Component {

  constructor (props) {
    super(props);
    this.handleChangeMarca = this.handleChangeMarca.bind(this);
    this.handleChangeModelo = this.handleChangeModelo.bind(this);
    this.handleChangeVersao = this.handleChangeVersao.bind(this);
  }

  state = {
    marcas: [],
    modelos: [],
    versoes: []
  }

  // Buscando as marcas
  async componentDidMount() {
    const response = await api.get('Make')
    this.setState({ marcas: response.data })
  }

  // Buscando os modelos pela marca
  async handleChangeMarca (e) {
    const response = await api.get(`Model?MakeID=${e.target.value}`);
    this.setState({ modelos: response.data });
  };

  // Buscando as versões pelo modelo
  async handleChangeModelo (e) {
    const response = await api.get(`Version?ModelID=${e.target.value}`);
    this.setState({ versoes: response.data });
  }

  // Fazendo a filtragem e exibindo dados
  async handleChangeVersao () {
    console.log('Log');
  }

  render () {

    const { marcas, modelos, versoes } = this.state;

    return (
      <div className="busca-container">
        <div className="inputs-container">
          <div className="grupo-checkbox">
            <div className="checkbox">
              <input type="checkbox" />
              <label>Novos</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <label>Usados</label>
            </div>
          </div>

          <div className="grid-inputs">

            <div className="row-inputs">

              <div className="input-group input-cidade">
                <img src={IconeLocalizacao} alt="Ícone localicação"/>
                <p>Onde: </p>
                <input className="input" type="text" name="cidade"/>
              </div>

              <div className="input-group input-raio">
                <p>Raio: </p>
                <input id="raio" className="input" type="number" name="raio-distancia"/>
              </div>

              <div className="input-group input-marca">
                <p>Marca: </p>
                <select onChange={this.handleChangeMarca} className="input">
                  <option>Selecione...</option>
                    { marcas.map(marca => (
                    <option value={ marca.ID } key={ marca.ID }> { marca.Name } </option>
                    ))}
                </select>
              </div>

              <div className="input-group input-modelo">
                <p>Modelo: </p>
                <select onChange={this.handleChangeModelo} className="input">
                  <option>Selecione...</option>
                  if(modelos) {
                    modelos.map(modelo => (
                      <option value={ modelo.ID } key={ modelo.ID } >{ modelo.Name }</option>
                  ))}
                </select>
              </div>

            </div>

            <div className="row-inputs">
              <select className="input input-ano">
                <option>Ano desejado</option>
              </select>
              <select className="input input-faixa-preco">
                <option>Faixa de Preço</option>
              </select>
              
              <div className="input-group input-versao">
                <p>Versão: </p>
                <select onChange={this.handleChangeVersao} className="input">
                  <option>Selecione...</option>
                  if(versoes) {
                    versoes.map(versao => (
                    <option value={ versao.ID } key={ versao.ID }>{ versao.Name }</option>
                    ))}
                </select>
              </div>

            </div>

            <div className="row-inputs-links">
              <div className="links-group">
                <img src={IconeBuscaAvancada} alt="Ícone busca avançada"/>
                <a href="#">Busca avançada</a>
              </div>
              <div className="links-group">
                <a href="#" id="link-filtros">Limpar filtros</a>
                <button className="btn-ofertas">VER OFERTAS</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Busca;