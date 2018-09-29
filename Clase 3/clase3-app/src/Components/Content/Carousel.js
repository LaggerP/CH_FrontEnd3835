import React, { Component } from 'react';
import './Content.css';


class Carousel extends Component{
  constructor(props){
	super(props);

	this.state ={
	  pictures: [
		{id: 1, imagen: "Propiedades"},
		{id: 2, imagen: "Estado"},
		{id: 3, imagen: "Metodos"},
		{id: 4, imagen: "Componentes"},
	  ]
	}
  }

	render(){
		return(

		<div>
			  
		</div>
		);
	}
}

export default Carousel;