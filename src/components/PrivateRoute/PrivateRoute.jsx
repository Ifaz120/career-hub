import React, { useContext } from 'react';
import auth from '../../firebase/firebase.config';

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(auth);
  if(loading){
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if(user){
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;