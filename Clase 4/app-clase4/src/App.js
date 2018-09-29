import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import logo from './logo.svg';
import './App.css';


import Formulario from './formComponent';
import Avatar from './components/avatarComponent';

class App extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    console.log("Will Mount");
  }
  componentWillReceiveProps() {
    console.log("Will Receive Props");
  }
  componentDidMount(){
    console.log("Did Mount");
  }
  //funcion de verificacion - este metodo devuelve true o false
  shouldComponentUpdate(){
  }
  //si el componente ya se actualizo
  componentDidUpdate(){
    console.log("update");
  }
  //se remueve componente del DOM
  componentWillUnmount(){

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

export default App;
