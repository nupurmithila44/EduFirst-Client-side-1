import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect } from "react";
import { auth } from "../Firebase/Firebase.config";
import { useState } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser]=useState();
    const [loading, setLoading]=useState(true);
    const googleProvider = new GoogleAuthProvider();

      // GoogleSingin 
      const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
   

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const signInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }
    
    const updateUserProfile = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL
        })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser);
             console.log('currentUser', currentUser);
             setLoading(false);
         });
         return () =>{
             return unsubscribe();
         }
     },[])

    const authInfo ={
        user,
        loading,
        googleSignIn,
        createUser,
        signInUser,
        logOut,
        updateUserProfile
    }

    
    return (
        <AuthContext.Provider value={authInfo}>m
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;