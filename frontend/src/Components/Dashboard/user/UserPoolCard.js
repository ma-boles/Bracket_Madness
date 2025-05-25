import React from "react";
import Link from "next/link";

export default function UserPoolCard ({ poolId, poolName }) {

    return(
        <div className="w-80 h-80 my-2 mx-1 border-2 border-white/70 flex flex-col justify-between rounded-xl"> 
           <div className="p-2 bg-blue-600 rounded-t-xl">
                <h1 className="font-bold">{poolName}</h1>
                <h1><strong>ID</strong>: {poolId}</h1>
           </div>

            <div className="relative p-4">
                    <div className="relative bg-white/5 h-40">
                        <h2 className="mb-2 underline text-lg text-center">Standings</h2>
                        <p className="text-lg indent-3">rank - username</p>
                    </div>
                    <button className="py-2 my-2 bg-red-600 w-full rounded-lg font-semibold hover:bg-white/80 hover:text-black">LEAVE POOL</button>

                    {/* if status is pending - link to fill out bracket/start building picks object with pool id*/}
                    <div className="absolute inset-0 z-10 bg-black/50 bg-opacity-50 backdrop-blur-md rounded-xl flex items-center justify-center">
                        <div className="p-8 text-center">
                            <h2 className="p-2 text-center"><strong>Status Pending</strong> <br/> Click link to fill out a bracket.</h2>
                            <Link href="/Submit">
                                <button className="py-2 my-2 bg-blue-600 w-2/3 rounded-lg font-semibold hover:text-black hover:bg-white">To Bracket</button>
                            </Link>
                        </div>
                    </div>
           </div>
        </div>
    )
}