import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <h1>Welcome to the Auth Pages</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;