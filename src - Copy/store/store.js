import {createStore} from 'redux';
import userReducer from './userReducer';
// window.STATE_FROM_SERVER
export default createStore(userReducer);


