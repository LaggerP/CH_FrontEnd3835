import React, { Component } from 'react';

import Categories from './Categories'
import Carousel from './Carousel'

//import css Content file
import './Content.css';


class Content extends Component{
  constructor(props){
    super(props);

    this.state ={
      categories: [
        {id: 1, name: "Propiedades"},
        {id: 2, name: "Estado"},
        {id: 3, name: "Metodos"},
        {id: 4, name: "Componentes"},
      ]
    }
  }
	render(){
		return(

			<div>
        <p>Categorias ({ this.state.categories.length })</p>
        <Categories/>
        <aside>
          <form>
            <input type="text"/>
            <button class="btn btn-primary"> Buscar </button>
          </form>
        </aside>
        
        <section>

        <Carousel/>
        </section>

        <section className = "Section">
          <h1> Titulo blog </h1> 
          <p>Lorem</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit integer, ullamcorper a aenean nisl pharetra ultricies fermentum, laoreet nascetur libero phasellus dis hac luctus.Sollicitudin mus lectus mattis nascetur egestas nulla viverra nisl, ullamcorper maecenas orci nisi per convallis imperdiet, tincidunt libero mollis pretium luctus odio proin.Volutpat iaculis torquent velit arcu egestas morbi tellus curabitur cursus eu aliquet, diam lobortis conubia class risus urna cubilia phasellus sociis leo.</p>
          <p>Dictum ullamcorper auctor nulla sollicitudin turpis eget, vitae etiam per ligula commodo tempus lobortis, porttitor dignissim tortor purus velit.Proin senectus rhoncus libero parturient purus ligula sociis tellus erat per torquent, congue taciti platea varius hac montes natoque metus rutrum malesuada, facilisis placerat consequat interdum iaculis bibendum fringilla vel posuere vivamus.Interdum fusce vitae nisi montes class risus eleifend a et penatibus hac, quam tempus rutrum nostra neque mauris dapibus dignissim duis aliquet blandit, in mattis pulvinar pharetra habitasse sagittis placerat tristique vehicula mi.</p>
        </section>

			</div>
		);
	}
}

export default Content;