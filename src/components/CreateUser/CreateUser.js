import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './CreateUser.module.css';
import {addUserAPI} from "../../services/api";
const CreateUser = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        role: '',
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        role: '',
    });

    const history = useHistory();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Validate form fields
        setFormErrors({
            ...formErrors,
            [e.target.name]: e.target.validationMessage,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if there are any validation errors
        if (Object.values(formErrors).every((error) => !error)) {
            await addUserAPI(formData)
            // dispatch(addUser(formData));
            history.push('/');
        } else {
            console.log('Form has validation errors. Please correct them.');
        }
    };

    return (
        <div className={styles.createUserContainer}>
            <h2>Create User</h2>
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
                        className={`${styles.inputField} ${
                            formErrors.username && styles.errorInput
                        }`}
                    />
                    {formErrors.username && (
                        <span className={styles.errorMessage}>{formErrors.username}</span>
                    )}
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
                        className={`${styles.inputField} ${
                            formErrors.email && styles.errorInput
                        }`}
                    />
                    {formErrors.email && (
                        <span className={styles.errorMessage}>{formErrors.email}</span>
                    )}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="role">Role:</label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className={`${styles.inputField} ${
                            formErrors.role && styles.errorInput
                        }`}
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    {formErrors.role && (
                        <span className={styles.errorMessage}>{formErrors.role}</span>
                    )}
                </div>
                <button type="submit" className={styles.saveButton}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default CreateUser;
