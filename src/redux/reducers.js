
import { combineReducers } from 'redux';
import {
    FETCH_USERS,
    FETCH_USER,
    ADD_USER,
    EDIT_USER,
    DELETE_USER,
} from './actions';

let users = [];

const usersReducer = (state = users, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        case ADD_USER:
            let user = { userId : new Date().getTime(), ...action.payload}
            return [...state, user];
        case EDIT_USER:
            return state.map((user) =>
                user.userId === action.payload.userId ? action.payload : user
            );
        case DELETE_USER:
            return state.filter((user) => user.userId !== action.payload);
        default:
            return state;
    }
};

const selectedUserReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    users: usersReducer,
    selectedUser: selectedUserReducer,
});