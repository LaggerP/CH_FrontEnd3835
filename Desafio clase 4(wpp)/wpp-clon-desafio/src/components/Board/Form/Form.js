import React, { Component } from 'react'

import './Form.css';
import submitLogo from './submitLogo.png'

class Form extends Component {
    render (){
        return (
            <div>
                <div className="Form-container">
                    <div className="Form-container-input">
                        <input class="inputMessage" placeholder="Escriba un mensaje"/>
                        <img src={submitLogo} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Form