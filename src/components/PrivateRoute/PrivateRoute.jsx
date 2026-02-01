import React, { useContext } from 'react';
import auth from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  if(loading){

    return <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-bars loading-lg text-primary"></span>
        </div>;
  }
  if(user){
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;