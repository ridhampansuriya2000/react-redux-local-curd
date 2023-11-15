// UserDetailsContainer.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../services/api';
import { fetchUser as fetchUserAction } from '../redux/actions';
import UserDetails from '../components/UserDetails';
import styles from './UserDetailsContainer.module.css';

const UserDetailsContainer = ({ match, user, fetchUserAction }) => {
    const userId = parseInt(match.params.id, 10);

    useEffect(() => {
        fetchUser(userId).then((data) => {
            fetchUserAction(data);
        });
    }, [userId, fetchUserAction]);

    return <UserDetails user={user} />;
};

const mapStateToProps = (state) => {
    return {
        user: state.selectedUser,
    };
};

export default connect(mapStateToProps, { fetchUserAction })(
    UserDetailsContainer
);