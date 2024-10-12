// src/components/Dashboard.jsx
import React from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear authentication status
    navigate('/'); // Redirect to the login or home page
  };

  return (
    <div className="dashboard-container">
      <Sidebar className="sidebar" /> {/* Sidebar section */}
      <div className="dashboard-content"> {/* Main content section */}
        <h2>Dashboard</h2>
        <p>Welcome to the dashboard!</p>
        <div className="logout-container"> {/* Wrapper for logout button */}
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
