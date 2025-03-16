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
                        <div className="flex flex-col items-center">
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1001, e.target.value)}
                                placeholder="seed 1"
                                ></input>
                                <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1001, e.target.value)}
                                placeholder="seed 16"
                                ></input>
                            <input  />
                        </div>
                        <div className="flex flex-col items-center">
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1002, e.target.value)}
                                placeholder="seed 1"
                                ></input>
                                <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1002, e.target.value)}
                                placeholder="seed 16"
                                ></input>
                            <input  />
                        </div>
                        <div className="flex flex-col items-center">
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1003, e.target.value)}
                                placeholder="seed 1"
                                ></input>
                                <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1003, e.target.value)}
                                placeholder="seed 16"
                                ></input>
                            <input  />
                        </div>
                        <div className="flex flex-col items-center">
                            <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1004, e.target.value)}
                                placeholder="seed 1"
                                ></input>
                                <input className="w-36 bg-white border-2 border-black p-2 rounded-md text-black"
                                type="text"
                                onChange={(e) => handlePick('firstfour', 1004, e.target.value)}
                                placeholder="seed 16"
                                ></input>
                            <input  />
                        </div>
                    </div>
            </div>
        </>
    )
}