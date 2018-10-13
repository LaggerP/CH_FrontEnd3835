import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Home from './components/Home';
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
    <Router>
      <div>
        
        <div>
          <Link to="/">Home</Link>    
          <Link to="/avatar"> Avatar</Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/avatar" component={Avatar} />
      </div>
    </Router>
    );
  }
}

export default App;
