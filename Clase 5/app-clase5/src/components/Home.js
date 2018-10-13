import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import logo from '../logo.svg';
import '../App.css';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Formulario from '../formComponent';
import Avatar from './avatarComponent';


class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
      
  return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Formulario/>
          <Avatar/> 
        </p>
       </div>
    );
  }
}

export default Home;
