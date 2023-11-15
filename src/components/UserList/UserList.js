import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './UserList.module.css'; // Import your CSS module

const UserList = ({ users }) => {
    const itemsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the array to get the users for the current page
    const displayedUsers = users.slice(startIndex, endIndex);

    // Calculate total pages based on the number of users
    const totalPages = Math.ceil(users.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className={styles.userListContainer}>
            <h2>User List</h2>
            <div className={styles.userListTableContainer}>
            <table className={styles.userTable}>
                {/* Table Header */}
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                {displayedUsers.map((user) => (
                    <tr key={user.id}>
                        <td>{user.userId}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <Link to={`/user/${user.userId}`} className={styles.actionLink}>
                                View Details
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link
                                to={`/delete/${user.userId}`}
                                className={styles.deleteAction}
                            >
                                Delete
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            {/* Pagination */}
            <div className={styles.pagination}>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UserList;
