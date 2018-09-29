import React, { Component } from 'react';

class Categories extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
        {
        //index es el numero de cada <li> agregado con map
           this.state.categories.map( (category) => {
              return (<li key={category.id}>{category.name.toUpperCase()}</li>)
            }) 
        }   
      </div>
    )
  }

}

export default Categories;