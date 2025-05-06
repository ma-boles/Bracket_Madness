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
            const fetchUserId = async () => {
                try {
                    const res = await axios.post('api/verify-token', { token });

                    if(res.dat.userId) {
                        setCurrentUser({ userId: res.data.userId });
                    } else {
                        setCurrentUser(null);
                    }
                } catch(error) {
                    console.error('Failed to verify token', error);
                    setCurrentUser(null);
                }
            };

            fetchUserId();
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
            console.error('Error decoding token:', error);
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