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
                            onChange={(e) => handlePick('west', 1125, e.target.value)}
                            placeholder="seed 1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1125, e.target.value)}
                            placeholder="seed 16"
                            ></input>
                        </div>
                        <div className="matchup bg-yellow-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1126, e.target.value)}
                            placeholder="seed 8"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1126, e.target.value)}
                            placeholder="seed 9"
                            ></input>
                        </div>
                        <div className="matchup bg-orange-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1127, e.target.value)}
                            placeholder="seed 5"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1127, e.target.value)}
                            placeholder="seed 12"
                            ></input>
                        </div>
                        <div className="matchup bg-teal-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1128, e.target.value)}
                            placeholder="seed 4"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1128, e.target.value)}
                            placeholder="seed 13"
                            ></input>
                        </div>
                        <div className="matchup bg-slate-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1129, e.target.value)}
                            placeholder="seed 6"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1129, e.target.value)}
                            placeholder="seed 11"
                            ></input>
                        </div>
                        <div className="matchup bg-lime-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1130, e.target.value)}
                            placeholder="seed 3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1130, e.target.value)}
                            placeholder="seed 14"
                            ></input>
                        </div>
                        <div className="matchup bg-indigo-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1131, e.target.value)}
                            placeholder="seed 7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1131, e.target.value)}
                            placeholder="seed 10"
                            ></input>
                        </div>
                        <div className="matchup bg-green-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1132, e.target.value)}
                            placeholder="seed 2"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1132, e.target.value)}
                            placeholder="seed 15"
                            ></input>
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2 mb-8 bg-green-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1213, e.target.value)}
                            placeholder="winner 1125"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1213, e.target.value)}
                            placeholder="winner 1126"
                            ></input>
                        </div>
                        <div className="matchup2 mb-8 bg-indigo-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1214, e.target.value)}
                            placeholder="winner 1127"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1214, e.target.value)}
                            placeholder="winner 1128"
                            ></input>
                        </div>
                        <div className="matchup2 mb-14 bg-lime-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1215, e.target.value)}
                            placeholder="winner 1129"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1215, e.target.value)}
                            placeholder="winner 1130"
                            ></input>
                        </div>
                        <div className="matchup2-last bg-slate-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1216, e.target.value)}
                            placeholder="winner 1131"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1216, e.target.value)}
                            placeholder="winner 1132"
                            ></input>
                        </div>
                    </div>
                    <div className="round sweet-16">
                        <div className="matchup3  bg-blue-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1607, e.target.value)}
                            placeholder="winner 1213"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1607, e.target.value)}
                            placeholder="winner 1214"
                            ></input>
                        </div>
                        <div className="matchup3-last bg-yellow-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1608, e.target.value)}
                            placeholder="winner 1215"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1608, e.target.value)}
                            placeholder="winner 1216"
                            ></input>
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4 bg-orange-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 8004, e.target.value)}
                            placeholder="winner 1607"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 8004, e.target.value)}
                            placeholder="winner 1608"
                            ></input>
                        </div>
                    </div>
                    <div className="round final4">
                        <div className="mt-100 matchup bg-teal-500 ">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 4001, e.target.value)}
                            placeholder="winner 8004"
                            ></input>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}