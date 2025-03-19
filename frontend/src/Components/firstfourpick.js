'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";

export default function FirstFourPick() {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    
    return(
        <>
            <div className="round pt-4">
                <h1 className="py-2 text-center text-2xl">First Four</h1>
                    <div className="flex gap-0 pt-4 bg-blue-600 rounded-md">
                        <div className="pb-6 px-4 flex flex-col items-center">
                            <h1 className="px-1 mb-2 bg-black/60 ">Spokane 1 - #16</h1>
                            <p className="team">UCSD</p>
                            <p className="team">Southern</p>

                            {/* <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1001, e.target.value)}
                                placeholder="seed 1"
                                ></input>
                                <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1001, e.target.value)}
                                placeholder="seed 16"
                                ></input>
                            <input  /> */}
                        </div>
                        <div className="pb-6 px-4 flex flex-col items-center">
                            <h1 className="px-1 mb-2 bg-black/60 ">Birmingham 2 - #11</h1>
                            <p className="team">Columbia</p>
                            <p className="team">Washington</p>
                            {/* <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1002, e.target.value)}
                                placeholder="seed 1"
                                ></input>
                                <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1002, e.target.value)}
                                placeholder="seed 16"
                                ></input>
                            <input  /> */}
                        </div>
                        <div className="pb-6 px-4 flex flex-col items-center">
                            <h1 className="px-1 mb-2 bg-black/60 ">Birmingham 3 - #11</h1>
                            <p className="team">Iowa St</p>
                            <p className="team">Princeton</p>
                            {/* <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1003, e.target.value)}
                                placeholder="seed 1"
                                ></input>
                                <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1003, e.target.value)}
                                placeholder="seed 16"
                                ></input>
                            <input  /> */}
                        </div>
                        <div className="pb-6 px-4 flex flex-col items-center">
                            <h1 className="px-1 mb-2 bg-black/60 ">Birmingham 3 - #16</h1>
                            <p className="team">High Point</p>
                            <p className="team">William & Mary</p>
                            {/* <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1004, e.target.value)}
                                placeholder="seed 1"
                                ></input>
                                <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1004, e.target.value)}
                                placeholder="seed 16"
                                ></input>
                            <input  /> */}
                        </div>
                    </div>
            </div>
        </>
    )
}