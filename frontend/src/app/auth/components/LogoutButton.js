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
            className: 'toastSuccess',
        });

        setTimeout(() => {
        router.push('/Results');

        }, 200);
    };

    return(
        <button 
            disabled
            className="py-1 w-full h-10 bg-gray-300 text-gray-600 cursor-not-allowed hover:bg-white hover:text-black transition duration-300 rounded-md" onClick={handleLogout}>
            {isLoading ? (
                <ButtonSpinner size={4} /> 
            ) : (
            'Log Out'
            )}
        </button>
    );
};

export default LogoutButton;