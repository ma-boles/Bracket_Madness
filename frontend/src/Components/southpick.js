'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";

export default function SouthPick() {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    
    return(
        <>
        <div className="midwest region">
            <div className="rounds">
                <div className="round final4">
                        <div className="mt-100 matchup--r bg-teal-500 ">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'F4-2', e.target.value)}
                            placeholder="winner EE-3"
                        ></input>
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4--r bg-orange-600">
                            <input className="team"
                                type="text"
                                onChange={(e) => handlePick('south', 'EE-3', e.target.value)}
                                placeholder="winner SS-5"
                            ></input>
                            <input className="team"
                                type="text"
                                onChange={(e) => handlePick('south', 'EE-3', e.target.value)}
                                placeholder="winner SS-6"
                            ></input>
                        </div>
                    </div>
                    <div className="round sweet-16">
                        <div className="matchup3--r bg-pink-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'SS-5', e.target.value)}
                            placeholder="winner Rd2-17"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'SS-5', e.target.value)}
                            placeholder="winner Rd2-18"
                            ></input>
                        </div>
                        <div className="matchup3-last--r bg-yellow-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'SS-6', e.target.value)}
                            placeholder="winner Rd2-19"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'SS-6', e.target.value)}
                            placeholder="winner Rd2-20"
                            ></input>
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2--r mb-8 bg-green-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd2-9', e.target.value)}
                            placeholder="winner Rd1-17"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd2-9', e.target.value)}
                            placeholder="winner Rd1-18"
                            ></input>
                        </div>
                        <div className="matchup2--r mb-8 border-r-indigo-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd2-10', e.target.value)}
                            placeholder="winner Rd1-19"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd2-10', e.target.value)}
                            placeholder="winner Rd1-20"
                            ></input>
                        </div>
                        <div className="matchup2--r mb-14 bg-lime-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd2-11', e.target.value)}
                            placeholder="winner Rd1-21"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd2-11', e.target.value)}
                            placeholder="winner Rd1-22"
                            ></input>
                        </div>
                        <div className="matchup2-last--r bg-slate-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd2-12', e.target.value)}
                            placeholder="winner Rd1-23"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd2-12', e.target.value)}
                            placeholder="winner Rd1-24"
                            ></input>
                        </div>
                    </div>
                    <div className="round first-round">
                        <div className="matchup--r bg-pink-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-17', e.target.value)}
                            placeholder="seed 1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-17', e.target.value)}
                            placeholder="seed 16"
                            ></input>
                        </div>
                        <div className="matchup--r bg-yellow-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-18', e.target.value)}
                            placeholder="seed 8"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-18', e.target.value)}
                            placeholder="seed 9"
                            ></input>
                        </div>
                        <div className="matchup--r bg-orange-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-19', e.target.value)}
                            placeholder="seed 5"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-19', e.target.value)}
                            placeholder="seed 12"
                            ></input>
                        </div>
                        <div className="matchup--r bg-teal-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-20', e.target.value)}
                            placeholder="seed 4"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-20', e.target.value)}
                            placeholder="seed 13"
                            ></input>
                        </div>
                        <div className="matchup--r bg-slate-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-21', e.target.value)}
                            placeholder="seed 6"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-21', e.target.value)}
                            placeholder="seed 11"
                            ></input>
                        </div>
                        <div className="matchup--r bg-lime-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-22', e.target.value)}
                            placeholder="seed 3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-22', e.target.value)}
                            placeholder="seed 14"
                            ></input>
                        </div>
                        <div className="matchup--r bg-blue-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-23', e.target.value)}
                            placeholder="seed 7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-23', e.target.value)}
                            placeholder="seed 10"
                            ></input>
                        </div>
                        <div className="matchup--r bg-green-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-24', e.target.value)}
                            placeholder="seed 2"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 'Rd1-24', e.target.value)}
                            placeholder="seed 15"
                            ></input>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}