import {createStore} from 'redux';
//import initialState from './initialState';
import rootReducer from './reducers/index';


export default createStore(rootReducer);

