'use client'
import React, { useState } from "react";
import SignUp from "@/app/auth/components/signup";
import LogIn from "@/app/auth/components/login";

export default function LogInPage() {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggle = () => {
        setIsSignUp((prev) => !prev);
    };

    return(
        <>
        <div className="min-h-screen flex items-center justify-center md:waves z-0">
            <div className="p-10 w-110 h-115 md:bg-[#0081B8] rounded-lg text-center space-y-6 z-10">
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