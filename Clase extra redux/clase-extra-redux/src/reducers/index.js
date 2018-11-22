import booksReducer from './booksReducer';
import contactReducer from './contactReducer';
import profilesReducer from './profilesReducer';
import {combineReducers} from 'redux'

export default combineReducers ({
    books: booksReducer,
    contacts: contactReducer, 
    profiles: profilesReducer,
})