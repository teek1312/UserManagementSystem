import {USER_ACTION_TYPES} from './actionType';
// Adding a new user
export const addUser = user => ({
    type: USER_ACTION_TYPES.ADD_USER,
    payload: user
});
// Deleting existing user
export const deleteUser = id => ({
    type: USER_ACTION_TYPES.DELETE_USER,
    payload: id
});
