import { useState } from 'react';
import { login } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Auth = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    login(token);
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="auth-container">
        <input
          className="auth-input"
          type="text"
          placeholder="Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button className="auth-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;
