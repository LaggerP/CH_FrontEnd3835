import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Click from './ejercicioComponent';

class App extends Component {

  /**lo comentado a continuación es lo mismo que realiza el archivo ejercicioComponent.js  */
  // constructor(props){
  //   super(props); //permite usar todas las props en el componente
  //   this.state = {
  //     normalNumber: 1
  //   };
  // }

  // handleClick = (event) => {
  //   event.preventDefault();
    
  //   this.setState( (prevState) => {
  //     return {
  //       normalNumber: prevState.normalNumber + this.props.magicNumber
  //     }
  //   });

  //   // this.setState(
  //   //   {
  //   //   normalNumber: this.state.normalNumber + this.props.magicNumber
  //   // });
  // }

  constructor(props) {
    super(props);
    this.state = {
      normalNumber: 1
    }
  }
  render() {
    const magicNumber = 10;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Click magicNumber={magicNumber}></Click>

      </div>
    );
  }
}
export default App;
