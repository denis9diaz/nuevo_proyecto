import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Agregar useNavigate para redirigir
import '../styles/home.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Si hay un token en el localStorage, mostramos el nombre de usuario
    const token = localStorage.getItem('token');
    if (token) {
      // Aquí deberías tener algún método para obtener el nombre del usuario (si lo guardaste en el backend).
      // Para el ejemplo, asumimos que el nombre de usuario está almacenado en el localStorage.
      const user = localStorage.getItem('username'); // O usa algún otro método para obtener el nombre de usuario
      setUsername(user);
    }
  }, []);

  const handleLogout = () => {
    // Eliminar el token y el nombre de usuario del localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
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
