import {USERS} from './initialState';
import {USER_ACTION_TYPES} from '../Actions';

// initial state of 100 records
const initialState = {
    users: USERS
};
/*
    userInfomation reducer for adding/deleting user record
*/
function userInformation (state=initialState, action) {
    const {type, payload} = action;
    let newState;
    switch (type) {
        case USER_ACTION_TYPES.ADD_USER: 
            newState = {...state, users: state.users.concat(payload)};
            break;
        case USER_ACTION_TYPES.DELETE_USER:
            newState = {...state, users: state.users.filter(user => user.id !== payload)};
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}

export default userInformation;