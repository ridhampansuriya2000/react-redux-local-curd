import React, {useEffect} from "react";
import { useHistory, Link } from 'react-router-dom';
import {connect} from "react-redux";
import {users as mockUsersData} from "../../static/mockData";
import {fetchUsers as fetchUsersAction} from "../../redux/actions";
import {fetchUsers} from "../../services/api";
import './Navbar.css';

const Navbar = ({ users, fetchUsersAction }) =>{

    const history = useHistory();
    let onceRender = JSON.parse(localStorage.getItem('onceRender'));
    const resetApp = async () =>{
        await localStorage.clear();
        handleLocalStorage();
        fetchUsers(mockUsersData).then((data) => {
            fetchUsersAction(data);
        });
        history.push('/');
    };

    const handleLocalStorage = () =>{
        let onceRender = JSON.parse(localStorage.getItem('onceRender'));
        !!!onceRender && localStorage.setItem('users',JSON.stringify(mockUsersData));
        localStorage.setItem('onceRender',JSON.stringify(true));
    }

    useEffect( ()=>{
        handleLocalStorage();
    },[onceRender])

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">User List</Link>
                </li>
                <li>
                    <Link to="/create">Create User</Link>
                </li>
            </ul>
            <div className='reset-btn' onClick={resetApp}>Reset App</div>
        </nav>
    )
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

export default connect(mapStateToProps, { fetchUsersAction })(
    Navbar
);