// EditUserContainer.js
import React from 'react';
import { connect } from 'react-redux';
import EditUser from '../components/EditUser';

const EditUserContainer = ({ user }) => {
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

export default connect(mapStateToProps)(EditUserContainer);
