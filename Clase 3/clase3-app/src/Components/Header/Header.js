import React, { Component } from 'react';

import PropTypes from 'prop-types';


//import css Header file
import './Header.css';
import logo from '../../logo.svg';

class Header extends Component{
	constructor(props) {
		super(props);

		this.state ={
			greeting: this.props.title
		}
	}

	changeTitle = () => {
		this.setState({
			greeting: "Segundo Blog React"
		});
	}

	render(){
  	return(
		// con el constructor traigo todas las props que estan en App.js
			<header>
				<img src={logo}/>
				<h1 className="Header-title">{this.state.greeting}</h1>
				<hr/>
				<button onClick={this.changeTitle}>Cambiar titulo</button>
				<hr/>
				<ul>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
				</ul>
      </header>
    );
  }
}

Header.defaultProps = {
	title: "Titulo valor por defecto"
}

//nos permite filtrar que solo se puede mostrar en el client side solamente los tittle con strings

Header.propTypes = {
	tittle: PropTypes.string
}


export default Header;