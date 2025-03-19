'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import Spokane4_Input from "./Spokane4/Spokane4_Input";

export default function EastPick() {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    
    return(
        <>
        <div className="west region">
                <div className="rounds">
                    <div className="round first-round">
                        <div className="matchup bg-blue-800">
                            <p className="team">1 USC</p>
                            <p className="team">16 UNC Gree...</p>
                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1125, e.target.value)}
                            placeholder="seed 1"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1125, e.target.value)}
                            placeholder="seed 16"
                            ></input> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">8 Cal</p>
                            <p className="team">9 MSU</p>
                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1126, e.target.value)}
                            placeholder="seed 8"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1126, e.target.value)}
                            placeholder="seed 9"
                            ></input> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">5 Kansas St</p>
                            <p className="team">12 Fairfield</p>
                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1127, e.target.value)}
                            placeholder="seed 5"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1127, e.target.value)}
                            placeholder="seed 12"
                            ></input> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">4 Kentucky</p>
                            <p className="team">13 Liberty</p>
                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1128, e.target.value)}
                            placeholder="seed 4"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1128, e.target.value)}
                            placeholder="seed 13"
                            ></input> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">6 Iowa</p>
                            <p className="team">11 Murray St</p>
                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1129, e.target.value)}
                            placeholder="seed 6"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1129, e.target.value)}
                            placeholder="seed 11"
                            ></input> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">3 Oklahoma</p>
                            <p className="team">14 FGCU</p>
                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1130, e.target.value)}
                            placeholder="seed 3"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1130, e.target.value)}
                            placeholder="seed 14"
                            ></input> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">7 Oklahoma St</p>
                            <p className="team">14 S Dakota St</p>
                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1131, e.target.value)}
                            placeholder="seed 7"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1131, e.target.value)}
                            placeholder="seed 10"
                            ></input> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">2 UCONN</p>
                            <p className="team">15 Arkansas St</p>
                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1132, e.target.value)}
                            placeholder="seed 2"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1132, e.target.value)}
                            placeholder="seed 15"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2 mb-11 bg-gray-700">
                            <Spokane4_Input />
                            <Spokane4_Input />

                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1213, e.target.value)}
                            placeholder="winner 1125"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1213, e.target.value)}
                            placeholder="winner 1126"
                            ></input> */}
                        </div>
                        <div className="matchup2 mb-11 bg-gray-700">
                            <Spokane4_Input />
                            <Spokane4_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1214, e.target.value)}
                            placeholder="winner 1127"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1214, e.target.value)}
                            placeholder="winner 1128"
                            ></input> */}
                        </div>
                        <div className="matchup2 mb-13 bg-gray-700">
                            <Spokane4_Input />
                            <Spokane4_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1215, e.target.value)}
                            placeholder="winner 1129"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1215, e.target.value)}
                            placeholder="winner 1130"
                            ></input> */}
                        </div>
                        <div className="matchup2-last bg-gray-700">
                            <Spokane4_Input />
                            <Spokane4_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1216, e.target.value)}
                            placeholder="winner 1131"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1216, e.target.value)}
                            placeholder="winner 1132"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round sweet-16 pt-4">
                        <div className="matchup3  bg-blue-700">
                            <Spokane4_Input />
                            <Spokane4_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1607, e.target.value)}
                            placeholder="winner 1213"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1607, e.target.value)}
                            placeholder="winner 1214"
                            ></input> */}
                        </div>
                        <div className="matchup3-last bg-blue-700">
                            <Spokane4_Input />
                            <Spokane4_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1608, e.target.value)}
                            placeholder="winner 1215"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1608, e.target.value)}
                            placeholder="winner 1216"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4 bg-gray-600">
                            <Spokane4_Input />
                            <Spokane4_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 8004, e.target.value)}
                            placeholder="winner 1607"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 8004, e.target.value)}
                            placeholder="winner 1608"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round final4">
                        <div className="mt-80 py-2 matchup bg-blue-500 border-b-2 border-white">
                            <Spokane4_Input />

                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 4001, e.target.value)}
                            placeholder="winner 8004"
                            ></input> */}
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}