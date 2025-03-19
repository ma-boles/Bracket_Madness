'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');
    const router = useRouter();
    
    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/auth/login", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if(res.ok) {
            localStorage.setItem('token', data.token);
            router.push('/Womens_Bracket');
        } else {
            console.log('LogIn Failed', data.message);
        }
    };

    return (
        <>
        <div className="p-6 bg-black rounded-md flex flex-col items-center justify-center space-y-4">
            <h1 className="mb-12 text-white text-2xl">Log In</h1>
            
            <div className="flex flex-col items-center space-y-2">
                <input className="w-60 p-2 bg-[#000E14] border-1 border-white rounded-md" 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username" />

                <input className="w-60 p-2 bg-[#000E14] border-1 border-white rounded-md" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" />
            </div>

            <button className="w-60 bg-[#f2f2f2] text-black py-2 rounded-lg hover:bg-[#0081B8] hover:text-white transition duration-300 cursor-pointer"
            onClick={handleLogin}
            >Log In
            </button>
        </div>
        </>
    )
}