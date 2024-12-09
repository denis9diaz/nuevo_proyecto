import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar hook useNavigate para redirección
import { loginUser } from '../services/api';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      sessionStorage.setItem('token', response.access); // Guarda el token en sessionStorage
      sessionStorage.setItem('username', formData.username); // Guarda el nombre de usuario en sessionStorage
      setMessage('Login successful!');
      navigate('/');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
