import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Items from './components/Items'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Items></Items>
        </header>
      </div>
    );
  }
}

export default App;
