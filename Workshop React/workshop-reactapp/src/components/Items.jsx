import React, { Component } from 'react';

import Item from './items/Item'
import ItemInfo from './items/ItemInfo'

class Items extends Component {

    render(){
        return (
            <div className="Items-container">
                <div className="Items-container-item">
                    <h1>Avatares</h1>
                    <Item></Item>
                </div>
                <div className="Items-container-infoItem">
                    <div className="infoItem">
                        <ItemInfo></ItemInfo>
                    </div>
                </div>            
            </div>
        )
    }
}

export default Items