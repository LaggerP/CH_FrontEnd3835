import React, { Component } from 'react'

import './Board.css';

import Messages from './Messages/Messages';
import Form from './Form/Form';

class Board extends Component {
    render (){
        return (
            <div>
                <div className="Board-container">
                    <div className="Board-container-messages">
                        <Messages/>
                    </div>
                    <div className="Board-container-form">
                        <Form/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Board