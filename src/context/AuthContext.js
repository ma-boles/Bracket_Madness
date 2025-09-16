'use client'
import React, { createContext, useEffect, useState, useContext } from "react";
import Cookies from "js-cookie";
import { mockUsers } from "@/mock-data/mockUsers";
import { isDemo } from "@/config";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState(null);

    useEffect(() => {
        const token = Cookies.get('token');

        if(isDemo) {
            const demoUser = mockUsers.find(user => user.username === 'demoUser')
            setCurrentUser(demoUser || null);
            return;
        }

        if(token) {
            const fetchUserId = async () => {
                try {
                    const res = await axios.post('api/verify-token', { token });

                    if(res.data?.userId) {
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

     const logIn = async () => {
       try {
        const res = await fetch('/api/auth/me');
        if(!res.ok) {
            throw new Error("Failed to fetch user");
        }
        const data = await res.json();
        setCurrentUser({ userId: data.userId, username: data.username });
       } catch(error) {
        console.error('Error logging in:', error)
        setCurrentUser(null);
       }
    };

    const logout = async () => {
        try {
            await fetch('/api/auth/logout', { 
                method: 'POST'
            });
        setCurrentUser(null);
        } catch(error) {
            console.error('Logout fialed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ currentUser, logIn, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;