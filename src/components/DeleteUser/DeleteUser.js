import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteUserAPI } from '../../services/api';
import { deleteUser as deleteUserAction } from '../../redux/actions';
import styles from './DeleteUser.module.css';

const DeleteUser = ({ user, deleteUserAction }) => {

    const history = useHistory();

    const handleDelete = () => {
        deleteUserAPI(user.id).then(() => {
            deleteUserAction(user.id);
            history.push('/');
        });
    };

    if(user.message) return (
        <div className={styles.deletedUser}>
            opps! user not found.
        </div>
    )

    return (
        <div className={styles.deleteUser}>
            <h2>Delete User</h2>
            <p className={styles.confirmationText}>
                Are you sure you want to delete user: {user.username}?
            </p>
            <button onClick={handleDelete} className={styles.deleteButton}>
                Delete
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.selectedUser,
    };
};

export default connect(mapStateToProps, { deleteUserAction })(DeleteUser);
