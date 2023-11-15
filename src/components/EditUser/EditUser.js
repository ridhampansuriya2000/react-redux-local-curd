// EditUser.js (Component)
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editUser } from '../redux/actions';
import styles from './EditUser.module.css';
import {editUserAPI} from "../services/api"; // Import your CSS module

const EditUser = ({ user }) => {
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        role: user.role,
    });

    const history = useHistory();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editUserAPI({userId : user.userId, ...formData})
        history.push('/');
    };

    return (
        <div className={styles.editUserContainer}>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit} className={styles.userForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="role">Role:</label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className={styles.inputField}
                    >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <button type="submit" className={styles.saveButton}>
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditUser;
