import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect } from "react";
import { auth } from "../Firebase/Firebase.config";
import { useState } from "react";
import axios from "axios";


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

     // Get token from server
  const getToken = async email => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/jwt`,
      { email },
      { withCredentials: true }
    )
    return data
  }

  // save user
  const saveUser = async user => {
    const currentUser = {
      image: user?. photoURL,     
      email: user?.email,
      name: user?.displayName,
      role: 'student',
      status: 'pending',
    }
    const { data } = await axios.put(
      `${import.meta.env.VITE_API_URL}/user`,
      currentUser
    )
    return data
  }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser);
             console.log(currentUser)
             if (currentUser) {
                getToken(currentUser.email)
                saveUser(currentUser)
              }
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
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;