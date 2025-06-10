import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import axios from 'axios';
import API_URL from '../config/api';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await axios.post(`${API_URL}/auth/login`,{
      username,
      password
    })
    console.log(res.data,"admin login response");
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('admin', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        {error && <div className="admin-login-error">{error}</div>}
        <div className="form-group">
          <label>email</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="admin-login-btn">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
