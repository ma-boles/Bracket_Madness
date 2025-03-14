import React from "react";

export default function LogIn() {
    return (
        <>
        <div className="p-6 bg-black rounded-md flex flex-col items-center justify-center space-y-4">
        <h1 className="mb-12 text-white text-2xl">Log In</h1>
            <div className="flex flex-col items-center space-y-2">
                <input className="w-60 p-2 bg-[#000E14] border-1 border-white rounded-md" placeholder="Username" />
                <input className="w-60 p-2 bg-[#000E14] border-1 border-white rounded-md" placeholder="Password" />
            </div>
            <button className="w-60 bg-[#f2f2f2] text-black py-2 rounded-lg hover:bg-[#0081B8] hover:text-white transition duration-300 cursor-pointer">Log In</button>
        </div>
        </>
    )
}