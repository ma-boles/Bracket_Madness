'use client'
import React, { useContext, useState } from "react";
import AuthContext from "@/context/AuthContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ButtonSpinner } from "@/Components/ui/ButtonSpinner";

const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        setIsLoading(true);

        await logout();
        toast.success('Logged out successfully!', {
            style: {
                background: '#333',
                color: '#fff'
            }
        });

        setTimeout(() => {
        router.push('/Results');

        }, 200);
    };

    return(
        <button className="w-24 p-2 mx-1 h-10 bg-red-600 cursor-pointer hover:bg-white hover:text-black transition duration-300 rounded-md" onClick={handleLogout}>
            {isLoading ? (
                <ButtonSpinner size={4} /> 
            ) : (
            'Log Out'
            )}
        </button>
    );
};

export default LogoutButton;