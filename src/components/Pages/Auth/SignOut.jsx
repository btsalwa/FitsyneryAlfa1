import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear user authentication state (e.g., remove stored credentials)
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
}

export default SignOut;