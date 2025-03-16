'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";

export default function MidwestPick() {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    
    return(
        <>
        <div className="midwest region">
            <div className="rounds">
                <div className="round final4">
                        <div className="mt-100 matchup--r bg-teal-500 ">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 4002, e.target.value)}
                            placeholder="winner 8002"
                        ></input>
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4--r bg-orange-600">
                            <input className="team"
                                type="text"
                                onChange={(e) => handlePick('midwest', 8002, e.target.value)}
                                placeholder="winner 1603"
                            ></input>
                            <input className="team"
                                type="text"
                                onChange={(e) => handlePick('midwest', 8002, e.target.value)}
                                placeholder="winner 1604"
                            ></input>
                        </div>
                    </div>
                    <div className="round sweet-16">
                        <div className="matchup3--r bg-pink-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1603, e.target.value)}
                            placeholder="winner 1205"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1603, e.target.value)}
                            placeholder="winner 1206"
                            ></input>
                        </div>
                        <div className="matchup3-last--r bg-yellow-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1604, e.target.value)}
                            placeholder="winner 1207"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1604, e.target.value)}
                            placeholder="winner 1208"
                            ></input>
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2--r mb-8 bg-green-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1205, e.target.value)}
                            placeholder="winner 1109"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1205, e.target.value)}
                            placeholder="winner 1110"
                            ></input>
                        </div>
                        <div className="matchup2--r mb-8 border-r-indigo-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1206, e.target.value)}
                            placeholder="winner 1111"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1206, e.target.value)}
                            placeholder="winner 1112"
                            ></input>
                        </div>
                        <div className="matchup2--r mb-14 bg-lime-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1207, e.target.value)}
                            placeholder="winner 1113"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1207, e.target.value)}
                            placeholder="winner 1114"
                            ></input>
                        </div>
                        <div className="matchup2-last--r bg-slate-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1208, e.target.value)}
                            placeholder="winner 1115"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1208, e.target.value)}
                            placeholder="winner 1116"
                            ></input>
                        </div>
                    </div>
                    <div className="round first-round">
                        <div className="matchup--r bg-pink-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1109, e.target.value)}
                            placeholder="seed 1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1109, e.target.value)}
                            placeholder="seed 16"
                            ></input>
                        </div>
                        <div className="matchup--r bg-yellow-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1110, e.target.value)}
                            placeholder="seed 8"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1110, e.target.value)}
                            placeholder="seed 9"
                            ></input>
                        </div>
                        <div className="matchup--r bg-orange-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1111, e.target.value)}
                            placeholder="seed 5"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1111, e.target.value)}
                            placeholder="seed 12"
                            ></input>
                        </div>
                        <div className="matchup--r bg-teal-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1112, e.target.value)}
                            placeholder="seed 4"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1112, e.target.value)}
                            placeholder="seed 13"
                            ></input>
                        </div>
                        <div className="matchup--r bg-slate-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1113, e.target.value)}
                            placeholder="seed 6"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1113, e.target.value)}
                            placeholder="seed 11"
                            ></input>
                        </div>
                        <div className="matchup--r bg-lime-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1114, e.target.value)}
                            placeholder="seed 3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1114, e.target.value)}
                            placeholder="seed 14"
                            ></input>
                        </div>
                        <div className="matchup--r bg-blue-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1115, e.target.value)}
                            placeholder="seed 7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1115, e.target.value)}
                            placeholder="seed 10"
                            ></input>
                        </div>
                        <div className="matchup--r bg-green-600">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1116, e.target.value)}
                            placeholder="seed 2"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1116, e.target.value)}
                            placeholder="seed 15"
                            ></input>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}