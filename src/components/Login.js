import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', { email, password });
      if (response && response.data) {
        alert(response.data.msg);
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/'); // Redirect to the main page (home) after successful login
      } else {
        alert('Unexpected response format');
      }
    } catch (err) {
      console.error('Login Error:', err.response ? err.response.data : err.message);
      if (err.response && err.response.data && err.response.data.msg) {
        alert(err.response.data.msg);
      } else {
        alert('Error logging in');
      }
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/signup', { email, password });
      if (response && response.data) {
        alert(response.data.msg);
        setIsSignup(false);
      } else {
        alert('Unexpected response format');
      }
    } catch (err) {
      console.error('Signup Error:', err.response ? err.response.data : err.message);
      if (err.response && err.response.data && err.response.data.msg) {
        alert(err.response.data.msg);
      } else {
        alert('Error signing up');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    alert('Logged out successfully');
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div className="login-container">
      {!isSignup ? (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
              id="login-email"
              autoComplete="email"
            />
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                id="login-password"
                autoComplete="current-password"
              />
              <div
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <button type="submit">Login</button>
          </form>
          <p>
            Not a member? <span className="toggle-link" onClick={toggleSignup}>Sign Up</span>
          </p>
          <button onClick={handleLogout}>Logout</button> {/* Move logout button here */}
        </div>
      ) : (
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
              id="signup-email"
              autoComplete="email"
            />
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                id="signup-password"
                autoComplete="new-password"
              />
              <div
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="password-field">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                name="confirmPassword"
                id="confirm-password"
                autoComplete="new-password"
              />
              <div
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already a member? <span className="toggle-link" onClick={toggleSignup}>Login</span>
          </p>
          <button onClick={handleLogout}>Logout</button> {/* Move logout button here */}
        </div>
      )}
    </div>
  );
}

export default Login;
