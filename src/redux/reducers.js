// reducers.js
import { combineReducers } from 'redux';
import {
    FETCH_USERS,
    FETCH_USER,
    ADD_USER,
    EDIT_USER,
    DELETE_USER,
} from './actions';

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        case ADD_USER:
            return [...state, action.payload];
        case EDIT_USER:
            return state.map((user) =>
                user.id === action.payload.id ? action.payload : user
            );
        case DELETE_USER:
            return state.filter((user) => user.id !== action.payload);
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