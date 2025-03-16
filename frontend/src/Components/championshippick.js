import React from "react";

export default function ChampionshipPick () {
    return (
        <>
            <div className="round">
                    {/* <h1 className="py-2 text-center text-2xl "></h1> */}
                    <div className="flex gap-6 p-4 bg-blue-600 rounded-md">
                        <div className="my-auto flex flex-col items-center">
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black" />
                            {/* <input className="bg-white border-2 border-black p-2 rounded-md" />
                            <p>Championship</p> */}
                        </div>
                        <div className="p-2 flex flex-col items-center">
                            <input className="bg-white border-2 border-black p-2 rounded-md text-black text-xl" />
                            <h1 className="text-2xl">National Champion</h1>
                        </div>
                        <div className="my-auto flex flex-col items-center">
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black" />
                            {/* <input className="bg-white border-2 border-black p-2 rounded-md" />
                            <p>Championship</p> */}
                        </div>
                    </div>
            </div>
        </>
    )
}