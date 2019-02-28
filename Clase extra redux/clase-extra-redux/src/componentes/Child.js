import React, {Component} from 'react';
import {connect} from 'react-redux';

class Child extends Component {

    componentDidMount(){

    }

    render() {
        return ( 
        <div>
            {/* <h1>{this.props.profile.name}</h1> */}
            <h3>{this.props.contacts}</h3>
            <h3>{this.props.contacts.length}</h3>
            <button onClick={this.props.fetchContacts}>Cambiar</button>
        </div>
        );
    }
}

let mapStateToProps = state => ({
    profile: state.profile,
    contacts: state.contacts,
});

let mapDispachToProps = dispatch => ({
    fetchContacts: () => dispatch ({
        'type': 'FETCH_CONTACTS',
    })
})

export default connect(
    mapStateToProps,
    mapDispachToProps,
)(Child);