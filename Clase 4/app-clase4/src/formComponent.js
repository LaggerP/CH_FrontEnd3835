import React, { Component } from 'react';

import './formComponent.css';

class Formulario extends Component {
    constructor(props){
      super(props);
      this.submitPost = this.submitPost.bind(this);
      this.state={
        posts: [],
      }
    }

    submitPost = (e) => {
      e.preventDefault();
      console.log(this.inputTitle.value);

      let newPost ={
        title: this.inputTitle.value,
        description: this.inputDescription.value,
      }

      this.setState({
        posts: [...this.state.posts,...[newPost]]
      })

    }
    componentWillMount(){
      fetch('https://jsonplaceholder.typicode.com/posts').then(response=>{
        return response.json();
      })
      .then(response=>{ this.setState({posts: response})
      })
    }
    componentDidMount(){
      this.inputTitle.focus();
      this.inputTitle.style.border='1px green solid';    
    }

    render(){
      // let postList = this.state.posts.map((props)=><p key={props.id}>{props.title}</p>)


      // let Post = (props)=> (<p key={props.post.id}>{props.post.title}</p>)
      // let postList = this.state.posts.map(post=>{
      //   return(
      //     <Post post={post}/>            
      //   )
      // })

      let Post = (props)=> (<p key={props.post.id} className={props.className}>{props.post.title}</p>)
      let postList = this.state.posts.map((post,index)=>{
        let parrafo = index % 2 === 0 ? "par" : "impar"
        return(
          <Post className={parrafo} post={post}/>            
        )
      })      

      return(
        <div>
          <form onSubmit={this.submitPost}> 
            <div class="container">
              <div class="col-md-6 col-md-offset-3">
                <h4>Post:</h4>
                <input type="text" class="form-control" placeholder="Nombre Post" ref={(inputTitle) => {this.inputTitle=inputTitle}}/>
              </div>
              <div class="col-md-6 col-md-offset-3">
                <h4>Text:</h4>
                <textarea class="form-control" rows="10" placeholder="Texto post" ref={(inputDescription) => {this.inputDescription=inputDescription}}></textarea>
                <br/>
                <button type="submit" class="btn btn-success btn-md btn-block" onClick={this.submitPost}>Enviar</button>
              </div>
            </div>
          </form>
          <div>
              <br/>
              {postList}
          </div>
          <p>{this.state.posts.length}</p>
        </div>
            
        );
    }
}

export default Formulario;