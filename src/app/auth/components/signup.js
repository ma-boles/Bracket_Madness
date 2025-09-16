'use client'
import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";
import AuthContext from "@/src/context/AuthContext";
import toast from "react-hot-toast";
import { ButtonSpinner } from "@/src/Components/ui/ButtonSpinner";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const { logIn } = useContext(AuthContext);
    const router = useRouter();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if(!email || !username || !password) {
            setIsLoading(false);

            toast.error('Please fill in all fields.', {
                className: 'toastError',
                duration: 4000,
            });
            return;
        }

        if(password.length < 8) {
            setPasswordError(true);
            setIsLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, username, password }),
            });


            if(res.ok) {
                await new Promise(resolve => setTimeout(resolve, 300));
                toast.success('Sign up successful! Logging you in...', {
                    className: 'toastSuccess',
                    duration: 4000,
                });

                await logIn();
                router.push('/Submit');
            } else {
                const errorData = await res.json();
                toast.error(errorData.error || 'Sign up failed. Please try again.', {
                    className: 'toastError',
                });
                setIsLoading(false);
                
                }
        } catch(error) {

            toast.error('An unexpected error occurred.', {
                className: 'toastError',
                    });
                }
                
                setIsLoading(false);

    };

    return (
        <>
        <div className="w-90 h-80 p-6 md:bg-black rounded-md flex flex-col items-center justify-center space-y-4">
            <h1 className="mb-6 text-white text-2xl font-semibold">
                Sign Up
            </h1>

            <div className="flex flex-col items-center space-y-2">
                <input className="w-60 p-2 bg-[#000E14] border-1 border-white rounded-md" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" 
                    />

                <input className="w-60 p-2 bg-[#000E14] border-1 border-white rounded-md" 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" 
                    />

                <input className="w-60 p-2 bg-[#000E14] border-1 border-white rounded-md" 
                    type="password"
                    value={password}
                    onChange={(e) => {
                        const newPassword = e.target.value;
                        setPassword(newPassword);
                        if(newPassword.length >= 8) {
                            setPasswordError(false);
                        }}
                    }
                    placeholder="Password" 
                    />
                    {passwordError && <p className="bg-red-600/60 text-sm mt-1 px-2 py-1">Passwords must be at least 8 characters long.</p>}
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