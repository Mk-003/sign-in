import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <h1>WaWAwa</h1>
      <p>mAAAi LAWD IwoNDOR</p>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;