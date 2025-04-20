'use client'
import React, { createContext, useEffect, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState(null);

    useEffect(() => {
        const token = Cookies.get('token');

        if(token) {
            try {
                const decoded = jwtDecode(token);
                setCurrentUser({ userId: decoded.userId });
            } catch(error) {
                console.error('Invalid token', error);
                setCurrentUser(null);
            }
        } else {
            setCurrentUser(null);
        }
    }, []);

    const logIn = (token) => {
        if(typeof token !== 'string') {
            console.error('Invald token:', token);
            return;
        }

        Cookies.set('token', token, { expires: 1, path: '/' });
        try {
        const decoded = jwtDecode(token);
        setCurrentUser({ userId: decoded.userId });
        } catch(error) {
            console.error('Error deoding token:', error);
            setCurrentUser(null);
        }
    };

    const logout = () => {
        Cookies.remove('token');
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={({ currentUser, logIn, logout })}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;