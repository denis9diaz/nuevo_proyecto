const BASE_URL = 'http://127.0.0.1:8000/auth/';

// Función para registrar un usuario
export const registerUser = async (data) => {
  const response = await fetch(`${BASE_URL}register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // Convierte el objeto en JSON
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(JSON.stringify(errorData));
  }

  return await response.json();
};

// Función para iniciar sesión y obtener un token JWT
export const loginUser = async (data) => {
  const response = await fetch(`${BASE_URL}login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(JSON.stringify(errorData));
  }

  return await response.json();
};

// Función para cerrar sesión
export const logoutUser = async () => {
  const response = await fetch(`${BASE_URL}logout/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(JSON.stringify(errorData));
  }

  return await response.json();
};
