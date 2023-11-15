// DeleteUserContainer.js
import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import DeleteUser from '../components/DeleteUser';
import {fetchUser} from "../services/api";
import { fetchUser as fetchUserAction } from '../redux/actions';

const DeleteUserContainer = ({ match, user, fetchUserAction }) => {
    const userId = match.params.userId;
    const history = useHistory();

    useEffect(() => {
        fetchUser(userId).then((data) => {
            // if(data.message){
            //     history.push('/');
            // }
            fetchUserAction(data);
        });
    }, [userId, fetchUserAction]);

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

export default connect(mapStateToProps,{fetchUserAction})(DeleteUserContainer);
