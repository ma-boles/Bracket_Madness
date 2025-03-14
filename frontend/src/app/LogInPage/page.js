'use client'
import React, { useState } from "react";
import SignUp from "@/app/Components/signup";
import LogIn from "../Components/login";

export default function LogInPage() {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };

    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="p-10 bg-[#0081B8] rounded-lg text-center space-y-6">
                {isSignUp ? <SignUp /> : <LogIn />}

                <div>
                <p>
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                </p>
                <span
                    className="cursor-pointer hover:underline"
                    onClick={handleToggle}
                >
                    {isSignUp ? 'Log In' : 'Sign Up'}
                </span>
                </div>
            </div>
        </div>
        </>
    )
}