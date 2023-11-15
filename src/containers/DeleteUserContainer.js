// DeleteUserContainer.js
import React from 'react';
import { connect } from 'react-redux';
import DeleteUser from '../components/DeleteUser';

const DeleteUserContainer = ({ user }) => {
    if (!user) {
        return <div>Loading...</div>;
    }

    return <DeleteUser user={user} />;
};

const mapStateToProps = (state) => {
    return {
        user: state.selectedUser,
    };
};

export default connect(mapStateToProps)(DeleteUserContainer);
