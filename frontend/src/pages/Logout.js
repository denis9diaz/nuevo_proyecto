import React from 'react';
import { logoutUser } from '../services/api';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await logoutUser();
      alert('Logged out successfully!');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
