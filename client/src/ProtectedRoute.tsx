import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from "./useAuth";

interface PrivateRouteProps {
    path: string;
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
    const isAuthenticated: boolean = useAuth();

    return isAuthenticated ? <Route path={path} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
