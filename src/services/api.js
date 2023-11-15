
/* Only send mockUsersData when we want to set our custom data */
export const fetchUsers = (mockUsersData) => {
    if(mockUsersData) setLocalStorage('users',mockUsersData)
    let usersData = getLocalStorage('users');
    return new Promise(async (resolve) => {
        setTimeout(() => {
            resolve(usersData);
        }, 500);
    });
};

export const fetchUser = (userId) => {
    let usersData = getLocalStorage('users');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usersData.find((user) => user.userId === parseInt(userId)) || {message : 'user not found'});
        }, 500);
    });
};

export const addUserAPI = (user) => {
    let usersData = getLocalStorage('users');
    return new Promise((resolve) => {
        setTimeout(() => {
            user.userId = new Date().getTime();
            usersData.push(user);
            setLocalStorage('users',usersData)
            resolve(usersData);
        }, 500);
    });
};

export const editUserAPI = (user) => {
    let usersData = getLocalStorage('users');
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = usersData.findIndex((u) => u.userId === user.userId);
            usersData[index] = user;
            setLocalStorage('users',usersData);
            resolve(usersData);
        }, 500);
    });
};

export const deleteUserAPI = (userId) => {
    let usersData = getLocalStorage('users');
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = usersData.findIndex((user) => user.userId === userId);
            usersData.splice(index, 1);
            setLocalStorage('users',usersData)
            resolve(userId);
        }, 500);
    });
};

const setLocalStorage = (key,val) =>{
    localStorage.setItem(key,JSON.stringify(val));
};

const getLocalStorage = (key) =>{
    return JSON.parse(localStorage.getItem(key));
}