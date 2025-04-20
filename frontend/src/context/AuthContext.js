import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            try {
                const decoded = jwtDecode(token);
                setCurrentUser(decoded.userId);
            } catch(error) {
                console.error('Invalid token', error);
                localStorage.removeItem('token');
            }
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        setCurrentUser(decoded.userId);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={({ currentUser, login, logout })}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;