// api.js
const users = [
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin' },
    { id: 2, username: 'user1', email: 'user1@example.com', role: 'user' },
    // Add more mock data as needed
];

export const fetchUsers = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 500);
    });
};

export const fetchUser = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users.find((user) => user.id === id));
        }, 500);
    });
};

export const addUser = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            user.id = users.length + 1;
            users.push(user);
            resolve(user);
        }, 500);
    });
};

export const editUser = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = users.findIndex((u) => u.id === user.id);
            users[index] = user;
            resolve(user);
        }, 500);
    });
};

export const deleteUser = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = users.findIndex((user) => user.id === id);
            users.splice(index, 1);
            resolve(id);
        }, 500);
    });
};