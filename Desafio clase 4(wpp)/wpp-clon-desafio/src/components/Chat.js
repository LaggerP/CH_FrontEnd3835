import React, { Component } from 'react';

import './Chat.css';
import Userlist from './UserList/UserList';
import Board from './Board/Board'


class Chat extends Component {
    render (){
        return (
            <div>
                <div className="Chat-container">
                    <div className="Chat-container-UserList">
                        <Userlist/>
                    </div>
                    <div className="Chat-container-Board">
                        <Board/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Chat