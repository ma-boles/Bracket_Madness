import React from "react";

export default function UserPoolCard ({ poolId, poolName }) {

    return(
        <div className="w-80 h-80 my-2 mx-1 border-2 border-white/70 flex flex-col justify-between rounded-xl"> 
           <div className="p-2 bg-blue-600 rounded-t-xl">
                <h1 className="font-bold">{poolName}</h1>
                <h1><strong>ID</strong>: {poolId}</h1>
           </div>
           <div className="p-4">
                <div className="bg-white/5 h-40">
                    <h2 className="mb-2 underline text-lg text-center">Standings</h2>
                    <p className="text-lg indent-3">rank - username</p>
                </div>
                <button className="py-2 my-2 bg-red-600 w-full rounded-lg font-semibold hover:bg-white/80 hover:text-black">LEAVE POOL</button>
           </div>
        </div>
    )
}