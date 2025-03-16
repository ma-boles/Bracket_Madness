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
                            onChange={(e) => handlePick('west', 1101, e.target.value)}
                            placeholder="seed 1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1101, e.target.value)}
                            placeholder="seed 16"
                            ></input>
                        </div>
                        <div className="matchup bg-yellow-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1102, e.target.value)}
                            placeholder="seed 8"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1102, e.target.value)}
                            placeholder="seed 9"
                            ></input>
                        </div>
                        <div className="matchup bg-orange-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1103, e.target.value)}
                            placeholder="seed 5"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1103, e.target.value)}
                            placeholder="seed 12"
                            ></input>
                        </div>
                        <div className="matchup bg-teal-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1104, e.target.value)}
                            placeholder="seed 4"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1104, e.target.value)}
                            placeholder="seed 13"
                            ></input>
                        </div>
                        <div className="matchup bg-slate-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1105, e.target.value)}
                            placeholder="seed 6"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1105, e.target.value)}
                            placeholder="seed 11"
                            ></input>
                        </div>
                        <div className="matchup bg-lime-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1106, e.target.value)}
                            placeholder="seed 3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1106, e.target.value)}
                            placeholder="seed 14"
                            ></input>
                        </div>
                        <div className="matchup bg-indigo-500">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1107, e.target.value)}
                            placeholder="seed 7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1107, e.target.value)}
                            placeholder="seed 10"
                            ></input>
                        </div>
                        <div className="matchup bg-green-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1108, e.target.value)}
                            placeholder="seed 2"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1108, e.target.value)}
                            placeholder="seed 15"
                            ></input>
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2 mb-8 bg-green-600">
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1201, e.target.value)}
                            placeholder="winner 1101"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1201, e.target.value)}
                            placeholder="winner 1102"
                            ></input>
                        </div>
                        <div className="matchup2 mb-8 bg-indigo-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1202, e.target.value)}
                            placeholder="winner 1103"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1202, e.target.value)}
                            placeholder="winner 1104"
                            ></input>
                        </div>
                        <div className="matchup2 mb-14 bg-lime-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1203, e.target.value)}
                            placeholder="winner 1105"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1203, e.target.value)}
                            placeholder="winner 1106"
                            ></input>
                        </div>
                        <div className="matchup2-last bg-slate-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1204, e.target.value)}
                            placeholder="winner 1107"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1204, e.target.value)}
                            placeholder="winner 1108"
                            ></input>
                        </div>
                    </div>
                    <div className="round sweet-16">
                        <div className="matchup3  bg-blue-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1601, e.target.value)}
                            placeholder="winner 1201"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1601, e.target.value)}
                            placeholder="winner 1202"
                            ></input>
                        </div>
                        <div className="matchup3-last bg-yellow-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1602, e.target.value)}
                            placeholder="winner 1203"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1602, e.target.value)}
                            placeholder="winner 1204"
                            ></input>
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4 bg-orange-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 8001, e.target.value)}
                            placeholder="winner 1601"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 8001, e.target.value)}
                            placeholder="winner 1602"
                            ></input>
                        </div>
                    </div>
                    <div className="round final4">
                        <div className="mt-100 matchup bg-teal-500 ">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 4001, e.target.value)}
                            placeholder="winner 8001"
                        ></input>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}