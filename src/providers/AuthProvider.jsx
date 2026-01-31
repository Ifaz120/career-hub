import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();//create the context and export it so that every component can access it 

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  //ekhane children shob component ke represent kore 

  useEffect(()=>{
    //this is the observer here to check if anyone logged in
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      console.log("The Watcher saw someone:", currentUser);
      setUser(currentUser);//updating the user state
      setLoading(false); // checks if its done
    });
    return ()=>{
      unsubscribe();
    }
  },[]);


  const createNewUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const authInfo = {
    // This is the "bag" of data we will share with the whole app.
        name: "Career Hub Test",
        user,
        setUser,
        createNewUser,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;