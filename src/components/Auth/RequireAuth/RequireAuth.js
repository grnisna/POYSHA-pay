import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../SharedCompo/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <div>
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        </div>
    }

    return children;
};

export default RequireAuth;