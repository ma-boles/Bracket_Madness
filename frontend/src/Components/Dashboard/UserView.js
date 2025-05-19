import React from "react";
import PoolInvite from "./PoolInvite";

export default function UserView () {
    return (
        <div className="w-80 m-2 border border-white flex flex-col justify-between rounded-xl"> 
           {/* <PoolInvite /> */}
           <div className="p-2 bg-blue-600 rounded-t-xl">
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
    )
}