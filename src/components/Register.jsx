import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css'; // Import the CSS

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!'); // Set error message if passwords don't match
      return;
    }

    // Simulate registration logic (replace with API call as needed)
    setTimeout(() => {
      alert('Successfully registered! Redirecting to dashboard...');
      navigate('/dashboard'); // Redirect to the dashboard page
    }, 1000); // Simulate a delay
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Retype Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="register-button">Register</button>
        <p>Already have an account? <a href="/" className="register-link">Login</a></p>
      </form>
    </div>
  );
};

export default Register;
