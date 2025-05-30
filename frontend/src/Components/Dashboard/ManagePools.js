import React, { useState } from "react";
import AdminView from "./admin/AdminView";
import UserView from "./user/UserView";
import { PoolsProvider } from "@/context/PoolsContext";

export default function ManagePools() {
    const [adminView, setAdminView] = useState(false);
    const [userView, setUserView] = useState(true);
    
    const handleAdmin = () => {
        setAdminView(true);
        setUserView(false);
    };

    const handleUser = () => {
        setUserView(true);
        setAdminView(false);
    };

    return(
        <div className="m-2 px-4 py-2 bg-black/10 rounded-xl">
            <div className="flex justify-end mb-2">
                <div> 
                    <button 
                    className="px-4 py-2 w-30 bg-black/20 border border-white hover:bg-white/5 cursor-pointer rounded-l-lg"
                    onClick={handleAdmin}>Admin</button>
                    <button className="px-4 py-2 w-30 bg-black/20 border border-white hover:bg-white/5 cursor-pointer rounded-r-lg"
                    onClick={handleUser}>User</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                <PoolsProvider>
                    {adminView && (
                        <AdminView />
                    )}

                    {userView && (
                        <UserView />
                    )}
                </PoolsProvider>
            </div>
        </div>
    )
}