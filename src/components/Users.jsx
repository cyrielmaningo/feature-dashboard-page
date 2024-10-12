// src/components/Users.jsx
import React from 'react';
import Sidebar from './Sidebar'; // Import Sidebar
import './Users.css'; // Import CSS for styling

const Users = () => {
  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Include Sidebar */}
      <div className="dashboard-content">
        <h2>User Management</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Enter Username to find User"
          />
          <button className="find-button">Find</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
