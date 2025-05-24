import React from "react";

export default function ManageCard() {
    return (
        <div className="w-60 h-80 bg-white/10 p-4 ml-1 flex flex-col justify-between border border-white/30 rounded-xl">
            <div>
                <h2 className="font-semibold">Participants</h2>

                <div className="flex items-center justify-between border border-white/20 mb-4">
                    <div className="flex my-2 p-1">
                        <p>User Name</p>
                    </div>
                    <button className="px-2 mx-2 h-1/2 bg-red-500 cursor-pointer rounded-full hover:bg-red-600"> - </button>
                </div>
            </div>
            <button className="px-4 py-2 w-full bg-red-500 rounded-xl font-bold cursor-pointer hover:bg-red-600">DELETE POOL</button>
        </div>
    )
}