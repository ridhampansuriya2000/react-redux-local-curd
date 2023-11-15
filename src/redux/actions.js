export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

// // Action creators
export const fetchUsers = (users) => {
    return {
        type: FETCH_USERS,
        payload: users,
    };
};

export const fetchUser = (user) => {
    return {
        type: FETCH_USER,
        payload: user,
    };
};

// export const addUser = (user) => {
//     return {
//         type: ADD_USER,
//         payload: user,
//     };
// };

// export const editUser = (userId, updatedUserData) => {
//     return {
//         type: EDIT_USER,
//         payload: { userId, ...updatedUserData },
//     };
// };

export const deleteUser = (userId) => {
    return {
        type: DELETE_USER,
        payload: userId,
    };
};