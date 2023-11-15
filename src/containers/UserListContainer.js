// UserListContainer.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../services/api';
import { fetchUsers as fetchUsersAction } from '../redux/actions';
import UserList from '../components/UserList';

const UserListContainer = ({ users, fetchUsersAction }) => {

    let isRendered = JSON.parse(localStorage.getItem('onceRender'));

    useEffect(() => {
        fetchUsers().then((data) => {
            fetchUsersAction(data);
        });
    }, [fetchUsersAction, isRendered]);

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