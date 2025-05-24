import React from "react";

export default function InviteCard ({ inviterName, poolName, onAccept, poolId }) {
    return (
        <div className="text-center mx-2">
             <div className="p-4 w-80 bg-blue-600/70 rounded-md">
                <h1 className="my-2 font-semibold text-2xl">Pool Invite</h1>
                <p className="my-4 text-lg"><strong>{inviterName}</strong> has invited you to join <strong>{poolName}</strong>.</p>
                
                <div className="flex">
                    <button className="px-4 py-2 m-1 w-2/3 bg-red-600 rounded-lg cursor-pointer hover:bg-white/80 hover:text-black"
                        >
                            Do Not Accept
                        </button>
                    <button className="px-4 py-2 m-1 w-2/3 bg-white/80 text-black rounded-lg cursor-pointer hover:bg-green-600 hover:text-white"
                        onClick={() => onAccept(poolId)}>
                            Accept
                        </button>
                    
                </div>

            </div>
        </div>
    )
}