import React from "react";

export default function FirstFourPick() {
    return(
        <>
            <div className="round pt-4">
                <h1 className="py-2 text-center text-2xl">First Four</h1>
                    <div className="flex gap-6 p-4 bg-blue-600 rounded-md">
                        <div className="flex flex-col items-center">
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black" />
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black" />
                        </div>
                        <div className="flex flex-col items-center">
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black" />
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black" />
                        </div>
                        <div className="flex flex-col items-center">
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black" />
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black" />
                        </div>
                        <div className="flex flex-col items-center">
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black" />
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black" />
                        </div>
                    </div>
            </div>
        </>
    )
}