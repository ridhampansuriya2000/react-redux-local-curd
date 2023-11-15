// UserListContainer.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../services/api';
import { fetchUsers as fetchUsersAction } from '../redux/actions';
import UserList from '../components/UserList';
import styles from './UserListContainer.module.css';

const UserListContainer = ({ users, fetchUsersAction }) => {
    useEffect(() => {
        fetchUsers().then((data) => {
            fetchUsersAction(data);
        });
    }, [fetchUsersAction]);

    return <UserList users={users} />;
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

export default connect(mapStateToProps, { fetchUsersAction })(
    UserListContainer
);