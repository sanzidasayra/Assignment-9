import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);


    const updateUser = (updaatedData) => {
      return updateProfile(auth.currentUser, updaatedData);

    }


    const logOut = () => {
        setLoading(true); 
        return signOut(auth);
    };

    const authInfo = {
        user,
        loading,
        logOut, 
        updateUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
