import React, {Component} from 'react'
import axios from 'axios'

class PostDetail extends Component {
    constructor (props){
        console.log(props);
        super(props);

        this.state ={
            post: props.location.state.post
        }
    }
    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.setState({
            posts: response.data
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default PostDetail