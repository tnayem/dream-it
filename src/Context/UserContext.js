import React from 'react';
import { createContext } from 'react';
import{createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../Firebase/Firebase.config';
import { useState } from 'react';
export const AuthContext = createContext();

const auth = getAuth(app)
const UserContext = ({ children }) => {
    const[user,setUser] = useState(null);
//Create user email and password
const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
//Sign in with email and password
const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
const logOut =()=>{
    return signOut(auth);
}

    const authInfo = {user,createUser,signIn,logOut}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;