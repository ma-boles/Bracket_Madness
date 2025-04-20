import React, { useContext } from "react";
import AuthContext from "@/context/AuthContext";

const LogoutButton = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };
    return(
        <button className="w-24 p-2 mx-1 h-10 bg-red-600 cursor-pointer hover:bg-white hover:text-black transition duration-300 rounded-md" onClick={handleLogout}>
            Log Out
        </button>
    );
};

export default LogoutButton;