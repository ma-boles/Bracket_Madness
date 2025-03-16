'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";

export default function ChampionshipPick () {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    
    return (
        <>
            <div className="round">
                    <div className="flex gap-6 p-4 bg-blue-600 rounded-md">
                        <div className="my-auto flex flex-col items-center">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('championship', 9001, e.target.value)}
                            placeholder="winner 4001"
                            ></input>
                            {/* <input className="bg-white border-2 border-black p-2 rounded-md" />
                            <p>Championship</p> */}
                        </div>
                        <div className="p-2 flex flex-col items-center">
                        <input className="bg-white border-2 border-black p-2 mb-4 rounded-md text-black text-xl text-center"
                            type="text"
                            onChange={(e) => handlePick('championship', 10000, e.target.value)}
                            placeholder="champion"
                            ></input>
                            <h1 className="text-2xl">National Champion</h1>
                        </div>
                        <div className="my-auto flex flex-col items-center">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('championship', 9001, e.target.value)}
                            placeholder="winner 4002"
                            ></input>
                            {/* <input className="bg-white border-2 border-black p-2 rounded-md" />
                            <p>Championship</p> */}
                        </div>
                    </div>
            </div>
        </>
    )
}