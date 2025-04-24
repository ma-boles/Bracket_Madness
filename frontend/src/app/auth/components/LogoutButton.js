import React, { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import toast from "react-hot-toast";

const LogoutButton = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        toast.success('Logged out successfully!', {
            style: {
                background: '#333',
                color: '#fff'
            }
        })
    };

    return(
        <button className="w-24 p-2 mx-1 h-10 bg-red-600 cursor-pointer hover:bg-white hover:text-black transition duration-300 rounded-md" onClick={handleLogout}>
            Log Out
        </button>
    );
};

export default LogoutButton;