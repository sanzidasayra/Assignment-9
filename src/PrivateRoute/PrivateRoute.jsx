import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom'; 

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="text-center mt-20"><span className="loading loading-spinner loading-lg text-primary"></span></div>; 
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
