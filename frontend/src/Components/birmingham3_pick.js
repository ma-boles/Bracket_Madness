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
                        <div className="mt-100 matchup--r bg-blue-500">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 4002, e.target.value)}
                            placeholder="winner 8003"
                        ></input>
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4--r bg-gray-600">
                            <input className="team"
                                type="text"
                                onChange={(e) => handlePick('south', 8003, e.target.value)}
                                placeholder="winner 1605"
                            ></input>
                            <input className="team"
                                type="text"
                                onChange={(e) => handlePick('south', 8003, e.target.value)}
                                placeholder="winner 1606"
                            ></input>
                        </div>
                    </div>
                    <div className="round sweet-16">
                        <div className="matchup3--r bg-blue-700">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1605, e.target.value)}
                            placeholder="winner 1209"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1605, e.target.value)}
                            placeholder="winner 1210"
                            ></input>
                        </div>
                        <div className="matchup3-last--r bg-blue-700">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1606, e.target.value)}
                            placeholder="winner 1211"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1606, e.target.value)}
                            placeholder="winner 1212"
                            ></input>
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2--r mb-8 bg-gray-700">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1209, e.target.value)}
                            placeholder="winner 1117"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1209, e.target.value)}
                            placeholder="winner 1118"
                            ></input>
                        </div>
                        <div className="matchup2--r mb-8 bg-gray-700">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1210, e.target.value)}
                            placeholder="winner 1119"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1210, e.target.value)}
                            placeholder="winner 1120"
                            ></input>
                        </div>
                        <div className="matchup2--r mb-14 bg-gray-700">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1211, e.target.value)}
                            placeholder="winner 1121"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1211, e.target.value)}
                            placeholder="winner 1122"
                            ></input>
                        </div>
                        <div className="matchup2-last--r bg-gray-700">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1212, e.target.value)}
                            placeholder="winner 1123"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1212, e.target.value)}
                            placeholder="winner 1124"
                            ></input>
                        </div>
                    </div>
                    <div className="round first-round">
                        <div className="matchup--r bg-blue-800">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1117, e.target.value)}
                            placeholder="seed 1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1117, e.target.value)}
                            placeholder="seed 16"
                            ></input>
                        </div>
                        <div className="matchup--r bg-blue-800">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1118, e.target.value)}
                            placeholder="seed 8"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1118, e.target.value)}
                            placeholder="seed 9"
                            ></input>
                        </div>
                        <div className="matchup--r bg-blue-800">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1119, e.target.value)}
                            placeholder="seed 5"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1119, e.target.value)}
                            placeholder="seed 12"
                            ></input>
                        </div>
                        <div className="matchup--r bg-blue-800">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1120, e.target.value)}
                            placeholder="seed 4"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1120, e.target.value)}
                            placeholder="seed 13"
                            ></input>
                        </div>
                        <div className="matchup--r bg-blue-800">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1121, e.target.value)}
                            placeholder="seed 6"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1121, e.target.value)}
                            placeholder="seed 11"
                            ></input>
                        </div>
                        <div className="matchup--r bg-blue-800">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1122, e.target.value)}
                            placeholder="seed 3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1122, e.target.value)}
                            placeholder="seed 14"
                            ></input>
                        </div>
                        <div className="matchup--r bg-blue-800">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1123, e.target.value)}
                            placeholder="seed 7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1123, e.target.value)}
                            placeholder="seed 10"
                            ></input>
                        </div>
                        <div className="matchup--r bg-blue-800">
                        <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1124, e.target.value)}
                            placeholder="seed 2"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1124, e.target.value)}
                            placeholder="seed 15"
                            ></input>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}