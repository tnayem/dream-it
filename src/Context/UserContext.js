import React from 'react';
import { createContext } from 'react';
export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const user = {email:'abc@gmail.com'}
    const authInfo = {user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;