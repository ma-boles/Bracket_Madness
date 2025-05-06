'use client'
import React, { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    const router = useRouter();

    const handleLogout = () => {
        logout();
        toast.success('Logged out successfully!', {
            style: {
                background: '#333',
                color: '#fff'
            }
        });

        router.push('/Womens_Bracket');
    };

    return(
        <button className="w-24 p-2 mx-1 h-10 bg-red-600 cursor-pointer hover:bg-white hover:text-black transition duration-300 rounded-md" onClick={handleLogout}>
            Log Out
        </button>
    );
};

export default LogoutButton;