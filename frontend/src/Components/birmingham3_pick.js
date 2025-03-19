'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import Birmingham3_Input from "./Birmingham3/Birmingham3_Input";
import Birmingham3_Input11_FF from "./Birmingham3/Birmingham3_Input11_FF";
import Birmingham3_Input16_FF from "./Birmingham2/Birmingham2_Input16_FF";

export default function SouthPick() {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    
    return(
        <>
        <div className="midwest region">
            <div className="rounds">
                <div className="round final4">
                        <div className="mt-105 py-2 matchup--r bg-blue-500 border-b-2 border-white">
                            <Birmingham3_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 4002, e.target.value)}
                            placeholder="winner 8003"
                        ></input> */}
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4--r bg-gray-600">
                            <Birmingham3_Input />
                            <Birmingham3_Input />

                            {/* <input className="team"
                                type="text"
                                onChange={(e) => handlePick('south', 8003, e.target.value)}
                                placeholder="winner 1605"
                            ></input>
                            <input className="team"
                                type="text"
                                onChange={(e) => handlePick('south', 8003, e.target.value)}
                                placeholder="winner 1606"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round sweet-16 pt-4">
                        <div className="matchup3--r bg-blue-700">
                            <Birmingham3_Input />
                            <Birmingham3_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1605, e.target.value)}
                            placeholder="winner 1209"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1605, e.target.value)}
                            placeholder="winner 1210"
                            ></input> */}
                        </div>
                        <div className="matchup3-last--r bg-blue-700">
                            <Birmingham3_Input />
                            <Birmingham3_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1606, e.target.value)}
                            placeholder="winner 1211"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1606, e.target.value)}
                            placeholder="winner 1212"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2--r mb-11 bg-gray-700">
                            <Birmingham3_Input />
                            <Birmingham3_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1209, e.target.value)}
                            placeholder="winner 1117"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1209, e.target.value)}
                            placeholder="winner 1118"
                            ></input> */}
                        </div>
                        <div className="matchup2--r mb-11 bg-gray-700">
                            <Birmingham3_Input />
                            <Birmingham3_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1210, e.target.value)}
                            placeholder="winner 1119"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1210, e.target.value)}
                            placeholder="winner 1120"
                            ></input> */}
                        </div>
                        <div className="matchup2--r mb-12 bg-gray-700">
                            <Birmingham3_Input />
                            <Birmingham3_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1211, e.target.value)}
                            placeholder="winner 1121"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1211, e.target.value)}
                            placeholder="winner 1122"
                            ></input> */}
                        </div>
                        <div className="matchup2-last--r bg-gray-700">
                            <Birmingham3_Input />
                            <Birmingham3_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1212, e.target.value)}
                            placeholder="winner 1123"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1212, e.target.value)}
                            placeholder="winner 1124"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round first-round">
                        <div className="matchup--r bg-blue-800">
                            <p className="team">1 Texas</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1117, e.target.value)}
                            placeholder="seed 1"
                            ></input> */}
                            <Birmingham3_Input16_FF />
                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1117, e.target.value)}
                            placeholder="seed 16"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">8 Illinois</p>
                            <p className="team">9 Creighton</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1118, e.target.value)}
                            placeholder="seed 8"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1118, e.target.value)}
                            placeholder="seed 9"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">5 Tennessee</p>
                            <p className="team">12 South Flo...</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1119, e.target.value)}
                            placeholder="seed 5"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1119, e.target.value)}
                            placeholder="seed 12"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">4 OSU</p>
                            <p className="team">143 Montana...</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1120, e.target.value)}
                            placeholder="seed 4"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1120, e.target.value)}
                            placeholder="seed 13"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">6 Michigan</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1121, e.target.value)}
                            placeholder="seed 6"
                            ></input> */}
                            <Birmingham3_Input11_FF />
                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1121, e.target.value)}
                            placeholder="seed 11"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">3 Notre Dame</p>
                            <p className="team">14 SF Austin</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1122, e.target.value)}
                            placeholder="seed 3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1122, e.target.value)}
                            placeholder="seed 14"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">7 Louisville</p>
                            <p className="team">10 Nebraska</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1123, e.target.value)}
                            placeholder="seed 7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1123, e.target.value)}
                            placeholder="seed 10"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">2 TCU</p>
                            <p className="team">15 Fair Dicki...</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1124, e.target.value)}
                            placeholder="seed 2"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('south', 1124, e.target.value)}
                            placeholder="seed 15"
                            ></input> */}
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}