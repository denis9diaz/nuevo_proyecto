import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Agregar useNavigate para redirección
import { jwtDecode } from 'jwt-decode';  // Corregir la importación
import '../styles/home.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    
    if (token) {
      // Verificar si el token ha caducado
      const decoded = jwtDecode(token); // Usar jwtDecode en lugar de jwt_decode
      const currentTime = Date.now() / 1000; // Hora actual en segundos

      if (decoded.exp < currentTime) {
        // Si el token ha caducado
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        navigate('/login'); // Redirigir a login si el token ha caducado
      } else {
        // Si el token es válido, se muestra el nombre de usuario
        setUsername(sessionStorage.getItem('username'));
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('token'); // Eliminar el token
    sessionStorage.removeItem('username'); // Eliminar el nombre de usuario
    setUsername('');
    navigate('/login'); // Redirigir al login
  };

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the Home component.</p>

      {username ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/register">
            <button>Register</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
