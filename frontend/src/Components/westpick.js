'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";

export default function WestPick() {
    const { userPicks, setUserPicks, handlePick } = useBracket();

    return(
        <>
            <div className="west region">
                <div className="rounds">
                    <div className="round first-round">
                        <div className="matchup bg-pink-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-1', e.target.value)}
                            placeholder="seed 1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-1', e.target.value)}
                            placeholder="seed 16"
                            ></input>
                        </div>
                        <div className="matchup bg-yellow-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-2', e.target.value)}
                            placeholder="seed 8"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-2', e.target.value)}
                            placeholder="seed 9"
                            ></input>
                        </div>
                        <div className="matchup bg-orange-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-3', e.target.value)}
                            placeholder="seed 5"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-3', e.target.value)}
                            placeholder="seed 12"
                            ></input>
                        </div>
                        <div className="matchup bg-teal-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-4', e.target.value)}
                            placeholder="seed 4"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-4', e.target.value)}
                            placeholder="seed 13"
                            ></input>
                        </div>
                        <div className="matchup bg-slate-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-5', e.target.value)}
                            placeholder="seed 6"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-5', e.target.value)}
                            placeholder="seed 11"
                            ></input>
                        </div>
                        <div className="matchup bg-lime-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-6', e.target.value)}
                            placeholder="seed 3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-6', e.target.value)}
                            placeholder="seed 14"
                            ></input>
                        </div>
                        <div className="matchup bg-indigo-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-7', e.target.value)}
                            placeholder="seed 7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-7', e.target.value)}
                            placeholder="seed 10"
                            ></input>
                        </div>
                        <div className="matchup bg-green-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-8', e.target.value)}
                            placeholder="seed 2"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-8', e.target.value)}
                            placeholder="seed 15"
                            ></input>
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2 mb-8 bg-green-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-1', e.target.value)}
                            placeholder="winner Rd1-1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-1', e.target.value)}
                            placeholder="winner Rd1-2"
                            ></input>
                        </div>
                        <div className="matchup2 mb-8 bg-indigo-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-2', e.target.value)}
                            placeholder="winner Rd1-3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-2', e.target.value)}
                            placeholder="winner Rd1-4"
                            ></input>
                        </div>
                        <div className="matchup2 mb-14 bg-lime-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-3', e.target.value)}
                            placeholder="winner Rd1-5"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-3', e.target.value)}
                            placeholder="winner Rd1-6"
                            ></input>
                        </div>
                        <div className="matchup2-last bg-slate-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-4', e.target.value)}
                            placeholder="winner Rd1-7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-4', e.target.value)}
                            placeholder="winner Rd1-8"
                            ></input>
                        </div>
                    </div>
                    <div className="round sweet-16">
                        <div className="matchup3  bg-blue-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'SS-1', e.target.value)}
                            placeholder="winner Rd2-1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'SS-1', e.target.value)}
                            placeholder="winner Rd2-2"
                            ></input>
                        </div>
                        <div className="matchup3-last bg-yellow-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'SS-2', e.target.value)}
                            placeholder="winner Rd2-3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'SS-2', e.target.value)}
                            placeholder="winner Rd2-4"
                            ></input>
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4 bg-orange-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'EE-1', e.target.value)}
                            placeholder="winner SS-1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'EE-1', e.target.value)}
                            placeholder="winner SS-2"
                            ></input>
                        </div>
                    </div>
                    <div className="round final4">
                        <div className="mt-100 matchup bg-teal-500 ">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'F4-1', e.target.value)}
                            placeholder="winner EE-1"
                        ></input>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}