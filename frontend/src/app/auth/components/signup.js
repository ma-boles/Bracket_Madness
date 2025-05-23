'use client'
import Loader from "@/Components/ui/Loader";
import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ message, setMessage ] = useState('');
    const [ logInSuccess, setLogInSuccess ] = useState(false);
    const { logIn } = useContext(AuthContext);
    const router = useRouter();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if(!username || !password) {
            toast.error('Please enter both a username and password.', {
                style: {
                    background: '#333',
                    color: '#fff',
                    duration: 4000,
                }
            });
            return;
        }

        setIsLoading(true);
        setMessage('');

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if(res.ok) {
                setMessage('Redirecting...');
                setLogInSuccess(true);
                setTimeout(() => {
                    logIn(data.token);
                    router.push('/Submit');
                }, 1000);
            } else {
                setMessage('Log in failed. Please try again.');
            }
        } catch(error) {
            setMessage('An unexpected error occurred.');
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
        <div className="w-90 h-80 p-6 bg-black rounded-md flex flex-col items-center justify-center space-y-4">
            <h1 className="mb-12 text-white text-2xl">
                {isLoading
                ? 'Signing up...'
                : message || 'Sign Up'}
            </h1>

            {isLoading ? (
                <>
                    <Loader />
                </>
            ) : !logInSuccess && (
            <>
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
            onClick={handleSignUp}
            >Sign Up</button>

            </>
            )}
        </div>
        </>
    )
}