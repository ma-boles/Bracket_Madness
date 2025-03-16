'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";

export default function EastPick() {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    
    return(
        <>
        <div className="west region">
                <div className="rounds">
                    <div className="round first-round">
                        <div className="matchup bg-pink-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-25', e.target.value)}
                            placeholder="seed 1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-25', e.target.value)}
                            placeholder="seed 16"
                            ></input>
                        </div>
                        <div className="matchup bg-yellow-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-26', e.target.value)}
                            placeholder="seed 8"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-26', e.target.value)}
                            placeholder="seed 9"
                            ></input>
                        </div>
                        <div className="matchup bg-orange-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-27', e.target.value)}
                            placeholder="seed 5"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-27', e.target.value)}
                            placeholder="seed 12"
                            ></input>
                        </div>
                        <div className="matchup bg-teal-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-28', e.target.value)}
                            placeholder="seed 4"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-28', e.target.value)}
                            placeholder="seed 13"
                            ></input>
                        </div>
                        <div className="matchup bg-slate-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-29', e.target.value)}
                            placeholder="seed 6"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-29', e.target.value)}
                            placeholder="seed 11"
                            ></input>
                        </div>
                        <div className="matchup bg-lime-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-30', e.target.value)}
                            placeholder="seed 3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-30', e.target.value)}
                            placeholder="seed 14"
                            ></input>
                        </div>
                        <div className="matchup bg-indigo-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-31', e.target.value)}
                            placeholder="seed 7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-31', e.target.value)}
                            placeholder="seed 10"
                            ></input>
                        </div>
                        <div className="matchup bg-green-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-32', e.target.value)}
                            placeholder="seed 2"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd1-32', e.target.value)}
                            placeholder="seed 15"
                            ></input>
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2 mb-8 bg-green-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-13', e.target.value)}
                            placeholder="winner Rd1-25"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-13', e.target.value)}
                            placeholder="winner Rd1-26"
                            ></input>
                        </div>
                        <div className="matchup2 mb-8 bg-indigo-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-14', e.target.value)}
                            placeholder="winner Rd1-27"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-14', e.target.value)}
                            placeholder="winner Rd1-28"
                            ></input>
                        </div>
                        <div className="matchup2 mb-14 bg-lime-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-15', e.target.value)}
                            placeholder="winner Rd1-29"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-15', e.target.value)}
                            placeholder="winner Rd1-30"
                            ></input>
                        </div>
                        <div className="matchup2-last bg-slate-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-16', e.target.value)}
                            placeholder="winner Rd1-31"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'Rd2-16', e.target.value)}
                            placeholder="winner Rd1-32"
                            ></input>
                        </div>
                    </div>
                    <div className="round sweet-16">
                        <div className="matchup3  bg-blue-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'SS-7', e.target.value)}
                            placeholder="winner Rd2-13"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'SS-7', e.target.value)}
                            placeholder="winner Rd2-14"
                            ></input>
                        </div>
                        <div className="matchup3-last bg-yellow-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'SS-8', e.target.value)}
                            placeholder="winner Rd2-15"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'SS-8', e.target.value)}
                            placeholder="winner Rd2-16"
                            ></input>
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4 bg-orange-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'EE-4', e.target.value)}
                            placeholder="winner SS-7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'EE-4', e.target.value)}
                            placeholder="winner SS-8"
                            ></input>
                        </div>
                    </div>
                    <div className="round final4">
                        <div className="mt-100 matchup bg-teal-500 ">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 'F4-1', e.target.value)}
                            placeholder="winner EE-4"
                            ></input>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}