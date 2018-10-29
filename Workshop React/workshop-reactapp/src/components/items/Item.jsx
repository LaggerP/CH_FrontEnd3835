import React, { Component } from 'react';

import './items.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allMessages: [],
        } 
    }
    render() {
        return (
            <div className="Item-container">
                <div className="Item-container-img">
                
                </div>
                <div className="Item-container-info">
                    <h5>Name:</h5>
                </div>
            </div>
        )
    }
}

export default Item