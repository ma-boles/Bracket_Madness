'use client'
import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import toast from "react-hot-toast";
import { ButtonSpinner } from "@/Components/ui/ButtonSpinner";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const { logIn } = useContext(AuthContext);
    const router = useRouter();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if(!username || !password) {
            setIsLoading(false);

            toast.error('Please enter both a username and password.', {
                style: {
                    background: '#333',
                    color: '#fff',
                    duration: 4000,
                }
            });
            return;
        }

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });


            if(res.ok) {                
                await new Promise(resolve => setTimeout(resolve, 300));
                await logIn();
                router.push('/Submit');
            } else {
                toast.error('Login failed. Please try again.', {
                    style: {
                        background: '#333',
                        color: '#fff'
                    }});

                setIsLoading(false);
                
                }
        } catch(error) {

            toast.error('An unexpected error occurred.', {
                    style: {
                        background: '#333',
                        color: '#fff'
                    }});

                }
                
                setIsLoading(false);

    };

    return (
        <>
        <div className="w-90 h-80 p-6 bg-black rounded-md flex flex-col items-center justify-center space-y-4">
            <h1 className="mb-12 text-white text-2xl font-semibold">
                Sign Up
            </h1>

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

            <button className="w-60 bg-[#0081B8] text-white py-2 rounded-lg hover:bg-[#f2f2f2] hover:text-black transition duration-300 cursor-pointer"
                onClick={handleSignUp}
                >
                {isLoading ? (
                    <ButtonSpinner />
                ) : (
                    'Sign Up'
                )}
            </button>

        </div>
        </>
    )
}