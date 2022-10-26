import React from 'react';
import { createContext } from 'react';
import{createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
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

    const authInfo = {user,createUser}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;