import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserDetails.module.css';

const UserDetails = ({ user }) => {
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.userDetailsContainer}>
            <h2>User Details</h2>
            <div className={styles.userCard}>
                <div className={styles.userInfo}>
                    <strong>ID:</strong> {user.id}
                </div>
                <div className={styles.userInfo}>
                    <strong>Username:</strong> {user.username}
                </div>
                <div className={styles.userInfo}>
                    <strong>Email:</strong> {user.email}
                </div>
                <div className={styles.userInfo}>
                    <strong>Role:</strong> {user.role}
                </div>
                <Link to={`/edit/${user.userId}`} className={styles.editButton}>
                    Edit User
                </Link>
            </div>
        </div>
    );
};

export default UserDetails;
