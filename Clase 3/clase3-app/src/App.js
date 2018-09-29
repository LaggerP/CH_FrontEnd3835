import React, { Component } from 'react';

//import css file
import './App.css';

import Header from './Components/Header/Header';
import Content from './Components/Content/Content';

class App extends Component {
  render() {
    //el metodo render no puede no estar en el codigo
    return (
      <div className="App">
        <Header title = "Blog de React"/>
        
        <Content/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
    );
  }
}

export default App;
