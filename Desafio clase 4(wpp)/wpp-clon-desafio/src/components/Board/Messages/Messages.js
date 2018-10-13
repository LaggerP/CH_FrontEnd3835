import React, { Component } from 'react'

import '.././Board.css';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allMessages: [],
        }
    }

    componentWillMount(){
      fetch('https://jsonplaceholder.typicode.com/posts').then(response=>{
        return response.json();
      })
      .then(response=>{ this.setState({allMessages: response})
      })
    }
    render (){
        let Chatmessage = (props)=> <div className={props.className}>{props.message.title}</div>
        let messageList = this.state.allMessages.map((mensaje, index) => {
            let parrafo = index % 2 === 0 ? "messageSender" : "messageReceiver"
            return(
                <Chatmessage className={parrafo} message={mensaje}/>
            )
        })    
            
        return (
            <div>
                <div className="Messages-container">
                   <div className="Messages-container-messages">
                        <div className="Messages-container-message">
                            {messageList}
                        </div>
                        
                   </div>
                </div>
            </div>
        )
    }
}

export default Messages