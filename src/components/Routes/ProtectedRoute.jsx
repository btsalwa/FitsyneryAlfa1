import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
    const auth = true; // Your authentication logic goes here

    return auth ? <Component /> : <Navigate to="/dashboard" />;
};

export default ProtectedRoute;