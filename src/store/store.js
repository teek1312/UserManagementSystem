import {createStore} from 'redux';
import userReducer from './userReducer';
// window.STATE_FROM_SERVER
// create store with user reducer
export default createStore(userReducer);


