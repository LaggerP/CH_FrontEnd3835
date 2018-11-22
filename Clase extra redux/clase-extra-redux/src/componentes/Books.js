import React, {Component} from 'react';
import {connect} from 'react-redux';

class Books extends Component {

    componentWillMount(){
        this.props.fetchBooks();
    }
    render() {
        return ( 
        <div>
            <h1>Listado de libros ({this.props.books.length})</h1>
        </div>
        );
    }
}

let mapStateToProps = state => ({
    books: state.books
})

let mapDispatchToProps = dispatch => ({
    fetchBooks: () => ({type: 'FETCH_BOOKS'})
})

export default connect(mapStateToProps, mapDispatchToProps)(Books);