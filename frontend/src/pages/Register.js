import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar hook useNavigate para redirección
import { registerUser } from '../services/api';
import '../styles/register.css';

const Register = () => {
  const navigate = useNavigate(); // Usar useNavigate para redirigir
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      setMessage('User registered successfully!');
      navigate('/login'); // Redirige a la página de Login después de registrarse
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={formData.password1}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={formData.password2}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
