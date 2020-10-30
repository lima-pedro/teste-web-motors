import React from 'react';

import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Busca from './Busca';
import Listagem from './Listagem';

class App extends React.Component {
  render () {
    return (
      <div className="aplicacao-container">
        <Header />
        <Navbar />
        <Busca />
        <Listagem />
      </div>
     );
  }
}

export default App;
