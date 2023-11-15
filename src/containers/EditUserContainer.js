// EditUserContainer.js
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import EditUser from '../components/EditUser';
import {fetchUser} from "../services/api";
import { fetchUser as fetchUserAction } from '../redux/actions';

const EditUserContainer = ({ user, match, fetchUserAction }) => {

    const userId = match.params.userId;

    useEffect(() => {
        fetchUser(userId).then((data) => {
            fetchUserAction(data);
        });
    }, [userId, fetchUserAction]);


    if (!user) {
        return <div>Loading...</div>;
    }

    return <EditUser user={user} />;
};

const mapStateToProps = (state) => {
    return {
        user: state.selectedUser,
    };
};

export default connect(mapStateToProps, {fetchUserAction})(EditUserContainer);
