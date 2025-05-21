import React from "react";
import PoolInvite from "./PoolInvite";

export default function UserView () {
    return (
        <div className="w-full">
            <div className="border-4 p-2 border-white/30 rounded-lg">
                <div className="mx-2">
                    <h2 className="font-bold text-lg">Notifications Center</h2>
                </div>
                <div className="flex p-2 justify-center items-center">
                    <PoolInvite />
                </div>
            </div>

        <div className="w-80 h-80 my-2 border-4 border-white/70 flex flex-col justify-between rounded-xl"> 
           <div className="p-2 bg-blue-600 rounded-t-lg">
                <h1 className="font-bold">Pool Name</h1>
                <h1>Pool ID: #000</h1>
           </div>
           <div className="p-4">
                <div className="bg-white/5 h-40">
                    <h2 className="mb-2 underline text-lg text-center">Standings</h2>
                    <p className="text-lg indent-3">rank - username</p>
                </div>
                <button className="py-2 my-2 bg-red-500 w-full cursor-pointer rounded-lg font-semibold hover:bg-red-600">LEAVE POOL</button>
           </div>
           
        </div>
                </div>

    )
}