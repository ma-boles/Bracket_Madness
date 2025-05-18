import React from "react";

export default function PoolCard () {
    return (
        <div className="flex m-2">
            <div className="w-80 bg-white/10 border border-white  rounded-xl">
                    <div className="p-2 bg-yellow-400 rounded-t-xl text-black">
                        <h2 className="font-bold">Pool Name</h2>
                        <h2>Pool ID: #000</h2>
                    </div>
                    <div className="m-4 p-2 h-30 border border-white">
                        <h2 className="font-semibold">Invite</h2>
                        <p className="bg-white text-gray-700 text-center">user search bar</p>
                        <button className="bg-yellow-400 w-full h-8 border border-black text-black cursor-pointer">Send Invite</button>
                    </div>
                    <div className="m-2 text-center ">
                        <button className="underline cursor-pointer hover:text-yellow-400">Manage</button>
                    </div>
            </div>
            <div className="w-60 bg-white/10 p-4 ml-1 flex flex-col justify-between h-65 border border-white/30 rounded-xl">
                <div>
                <h2 className="font-semibold">Participants</h2>

                    <div className="flex items-center justify-between border border-white/20 mb-4">
                        <div className="flex my-2 p-1">
                            <p>User Name</p>
                        </div>
                        <button className="px-2 mx-2 h-1/2 bg-red-600 cursor-pointer rounded-full"> - </button>
                    </div>
                </div>
                    <button className="px-4 py-2 w-full bg-red-600 rounded-xl font-bold cursor-pointer hover:border hover:border-white ">DELETE POOL</button>
            </div>
    </div>
    )
}