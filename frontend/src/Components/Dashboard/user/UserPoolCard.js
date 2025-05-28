import React from "react";
import Link from "next/link";

export default function UserPoolCard ({ poolId, poolName, status, bracketSubmitted }) {

    return(
        <div className="w-80 h-80 my-2 mx-1 border-2 border-white/70 flex flex-col justify-between rounded-xl"> 
           <div className="p-2 bg-blue-600 rounded-t-xl">
                <h1 className="font-bold">{poolName} </h1>
                <h1><strong>ID</strong>: {poolId}</h1>
           </div>

            <div className="relative p-4">
                    <div className="relative bg-white/5 h-40">
                        <h2 className="mb-2 underline text-lg text-center">Standings</h2>
                        <p className="text-lg indent-3">rank - username</p>
                    </div>
                    <button className="py-2 my-2 bg-red-600 w-full rounded-lg font-semibold hover:bg-white/80 hover:text-black">LEAVE POOL</button>

                    {bracketSubmitted === 0 && (
                        <div className="absolute inset-0 z-10 bg-black/70 bg-opacity-50 backdrop-blur-md rounded-xl flex items-center justify-center">
                            <div className="p-8 text-center">
                                <h2 className="font-semibold text-xl mb-4">Submit a  bracket for <br></br> full access.</h2>
                                <Link href="/Submit">
                                    <button className="mt-2 px-4 py-2 w-full font-medium bg-blue-600 rounded-lg hover:bg-white/80 hover:text-black">Submit Bracket</button>
                                </Link>
                            </div>
                        </div>
                    )}
           </div>
        </div>
    )
}