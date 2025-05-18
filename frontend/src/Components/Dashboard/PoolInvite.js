import React from "react";

export default function PoolInvite () {
    return (
        <div className="text-center">
             <div className="p-4 w-80 bg-blue-600 rounded-md">
                <h1 className="my-2 font-semibold text-2xl">Invite</h1>
                <p className="my-4"><strong>Username</strong> invited you to join <strong>pool name</strong>. Click link to join</p>
                <button className="px-4 py-2 w-2/3 bg-white/60 text-black rounded-lg cursor-pointer hover:bg-white">Join</button>
            </div>
        </div>
    )
}