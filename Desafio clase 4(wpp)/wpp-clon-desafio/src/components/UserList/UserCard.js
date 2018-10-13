import React, { Component } from 'react';

import './UserCard.css'

class Usercard extends Component {
    render (){
        return (
            <div>
                <div className="UserCard-container">
                    <img class="UserCard-img" src="http://i.pravatar.cc/"/>
                </div>
                <hr/>
                <div className="UserCard-container">
                    <img class="UserCard-img" src="http://i.pravatar.cc/"/>
                </div>
                <hr/>
                <div className="UserCard-container">
                    <img class="UserCard-img" src="http://i.pravatar.cc/"/>
                </div>
                <hr/>
                <div className="UserCard-container">
                    <img class="UserCard-img" src="http://i.pravatar.cc/"/>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Usercard