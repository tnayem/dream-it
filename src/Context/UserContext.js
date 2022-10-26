import React from 'react';
import { createContext } from 'react';
import{createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,FacebookAuthProvider } from 'firebase/auth';
import app from '../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();


const auth = getAuth(app)
const UserContext = ({ children }) => {
    const[user,setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
//Create user email and password
const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
//Sign in with email and password
const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
//Update user profile
const updateUserProfile=(profile)=>{
    return updateProfile(auth.currentUser,profile);
}
//Log Out
const logOut =()=>{
    return signOut(auth);
}
//***********
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
        setUser(currentUser);
    });
    return ()=> unSubscribe();
},[])
// Create user with google
const handleGoogleSignIn=()=>{
   return signInWithPopup(auth,googleProvider)
    
}
// Create user with Facebook
const handleFacebookSignIn=()=>{
   return signInWithPopup(auth, facebookProvider)
    
}

    const authInfo = {user,createUser,signIn,logOut,updateUserProfile,handleGoogleSignIn,handleFacebookSignIn}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;