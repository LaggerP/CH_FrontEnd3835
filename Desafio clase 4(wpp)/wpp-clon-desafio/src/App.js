import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importación de componentes 
import Chat from './components/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenidos</h1>
        </header>
        <p className="App-intro">
          <h1>Whatsapp Clon</h1>
          <Chat/>
        </p>
      </div>
    );
  }
}

export default App;
