import React, { Component } from 'react'


class Avatar extends Component{
    constructor(props){
        super(props);
    }
    
    render(){

        let ListAvatar = (props) => {
            return (
                <div>
                    <h5>{props.nombre}</h5>
                    <img src={props.url}/>
                </div>
            )
        }
        return(
            <div>
                <ListAvatar url="http://i.pravatar.cc/250" nombre="Nombre aleatorio"/>
            </div>
        )
    }
}


export default Avatar;