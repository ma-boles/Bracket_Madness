'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import Birmingham2_Input from "./Birmingham2/Birmingham2_Input";
import Birmingham2_Input_FF from "./Birmingham2/Birmingham2_Inpute_FF";

export default function Birmingham2_Pick() {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    
    return(
        <>
        <div className="midwest region">
            <div className="rounds">
                <div className="round final4">
                        <div className="mt-105 py-2 matchup--r bg-blue-500 border-b-2 border-white">
                            <Birmingham2_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 4002, e.target.value)}
                            placeholder="winner 8002"
                        ></input> */}
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4--r bg-gray-600">
                            <Birmingham2_Input />
                            <Birmingham2_Input />

                            {/* <input className="team"
                                type="text"
                                onChange={(e) => handlePick('midwest', 8002, e.target.value)}
                                placeholder="winner 1603"
                            ></input>
                            <input className="team"
                                type="text"
                                onChange={(e) => handlePick('midwest', 8002, e.target.value)}
                                placeholder="winner 1604"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round sweet-16 pt-4">
                        <div className="matchup3--r bg-blue-700">
                            <Birmingham2_Input />
                            <Birmingham2_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1603, e.target.value)}
                            placeholder="winner 1205"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1603, e.target.value)}
                            placeholder="winner 1206"
                            ></input> */}
                        </div>
                        <div className="matchup3-last--r bg-blue-700">
                            <Birmingham2_Input />
                            <Birmingham2_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1604, e.target.value)}
                            placeholder="winner 1207"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1604, e.target.value)}
                            placeholder="winner 1208"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2--r mb-11 bg-gray-700">
                            <Birmingham2_Input />
                            <Birmingham2_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1205, e.target.value)}
                            placeholder="winner 1109"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1205, e.target.value)}
                            placeholder="winner 1110"
                            ></input> */}
                        </div>
                        <div className="matchup2--r mb-11 bg-gray-700">
                            <Birmingham2_Input />
                            <Birmingham2_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1206, e.target.value)}
                            placeholder="winner 1111"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1206, e.target.value)}
                            placeholder="winner 1112"
                            ></input> */}
                        </div>
                        <div className="matchup2--r mb-12 bg-gray-700">
                            <Birmingham2_Input />
                            <Birmingham2_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1207, e.target.value)}
                            placeholder="winner 1113"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1207, e.target.value)}
                            placeholder="winner 1114"
                            ></input> */}
                        </div>
                        <div className="matchup2-last--r bg-gray-700">
                            <Birmingham2_Input />
                            <Birmingham2_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1208, e.target.value)}
                            placeholder="winner 1115"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1208, e.target.value)}
                            placeholder="winner 1116"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round first-round">
                        <div className="matchup--r bg-blue-800">
                            <p className="team">1 South Car...</p>
                            <p className="team">16 Tenness...</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1109, e.target.value)}
                            placeholder="seed 1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1109, e.target.value)}
                            placeholder="seed 16"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">8 Utah</p>
                            <p className="team">9 Indiana</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1110, e.target.value)}
                            placeholder="seed 8"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1110, e.target.value)}
                            placeholder="seed 9"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">5 Alabama</p>
                            <p className="team">12 Green Bay</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1111, e.target.value)}
                            placeholder="seed 5"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1111, e.target.value)}
                            placeholder="seed 12"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">4 Maryland</p>
                            <p className="team">13 Norfolk St</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1112, e.target.value)}
                            placeholder="seed 4"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1112, e.target.value)}
                            placeholder="seed 13"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">6 West Virginia</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1113, e.target.value)}
                            placeholder="seed 6"
                            ></input> */}
                            <Birmingham2_Input_FF />
                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1113, e.target.value)}
                            placeholder="seed 11"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">3 UNC</p>
                            <p className="team">14 Oregon St</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1114, e.target.value)}
                            placeholder="seed 3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1114, e.target.value)}
                            placeholder="seed 14"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">7 Vanderbilt</p>
                            <p className="team">10 Oregon</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1115, e.target.value)}
                            placeholder="seed 7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1115, e.target.value)}
                            placeholder="seed 10"
                            ></input> */}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <p className="team">2 Duke</p>
                            <p className="team">15 Lehigh</p>
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1116, e.target.value)}
                            placeholder="seed 2"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('midwest', 1116, e.target.value)}
                            placeholder="seed 15"
                            ></input> */}
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}