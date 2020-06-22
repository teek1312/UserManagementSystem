import {USER_ACTION_TYPES} from './actionType';
export const addUser = user => ({
    type: USER_ACTION_TYPES.ADD_USER,
    payload: user
});

export const deleteUser = id => ({
    type: USER_ACTION_TYPES.DELETE_USER,
    payload: id
});
