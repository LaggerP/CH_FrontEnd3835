import React, {Component} from 'react'

class PostDetail extends Component {
    constructor (props){
        console.log(props);
        super(props);

        this.state ={
            post: props.location.state.post
        }
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