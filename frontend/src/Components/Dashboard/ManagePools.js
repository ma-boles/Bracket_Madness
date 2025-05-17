import React from "react";
import AdminView from "./AdminView";
import UserView from "./UserView";

export default function ManagePools() {
    return(
        <div className="m-2 p-4 bg-black/10 rounded-xl">
            <div className="flex justify-end m-2 p-2">
                <button className="px-4 py-2 w-30 bg-black/20 border border-white hover:bg-white/5 cursor-pointer rounded-l-lg">Admin</button>
                <button className="px-4 py-2 w-30 bg-black/20 border border-white hover:bg-white/5 cursor-pointer rounded-r-lg">User</button>
            </div>
            <div>
                <AdminView />
                <UserView />
            </div>
        </div>
    )
}