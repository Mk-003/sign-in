// import React, { useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import {Login} from './Login';
import {Register } from './Register';
import AuthLayout from './AuthLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="register" element={<AuthLayout><Register /></AuthLayout>} />
      </Routes>
    </Router>
  );
}

export default App;