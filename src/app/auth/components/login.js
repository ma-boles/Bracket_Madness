'use client'
import React, { useState, useContext } from "react";
import AuthContext from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ButtonSpinner } from "@/src/Components/ui/ButtonSpinner";


export default function LogIn() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] =useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const { logIn } = useContext(AuthContext);
    const router = useRouter();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });


            if(res.ok) {
                await logIn();
                router.push('/Dashboard');
            } else {
                toast.error('Login failed. Please try again.', {
                    className: 'toastError',
                });
                setIsLoading(false);
            } 
        } catch(error) {
            toast.error('An unexpeced error occurred.', {
                className: 'toastError',
                });
            setIsLoading(false);
        }
    };

    return (
        <>
        <div className="w-90 h-80 p-6 md:bg-black rounded-md flex flex-col items-center justify-center space-y-4">
            <h1 className='mb-12 text-white text-2xl font-semibold'>
                Log In
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

                <button className="w-60 bg-[#0081B8] py-2 rounded-lg hover:bg-[#f2f2f2] hover:text-black transition duration-300 cursor-pointer"
                    onClick={handleLogin}
                    >
                    {isLoading ? (
                        <ButtonSpinner />
                    ) : (
                        'Log In'
                    )}        
                </button>     

        </div>
        </>
    )
}