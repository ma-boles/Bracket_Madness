'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import Birmingham2_Input from "./Birmingham2/Birmingham2_Input";
import Birmingham2_Input11_FF from "./Birmingham2/Birmingham2_Input11_FF";

export default function Birmingham2_Pick() {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    
    return(
        <>
        <div className="midwest region">
            <div className="rounds">
                <div className="round final4">
                        <div className="mt-105 py-2 matchup--r bg-blue-500 border-b-2 border-white">
                            <Birmingham2_Input region='birmingham2' gameId={4002}/>
                        </div>
                    </div>

                    <div className="round elite8">
                        <div className="matchup4--r bg-gray-600">
                            <Birmingham2_Input region='birmingham2' gameId={8002}/>
                            <Birmingham2_Input region='birmingham2' gameId={8002}/>
                        </div>
                    </div>

                    <div className="round sweet-16 pt-4">
                        <div className="matchup3--r bg-blue-700">
                            <Birmingham2_Input region='birmingham2' gameId={1603}/>
                            <Birmingham2_Input region='birmingham2' gameId={1603}/>
                        </div>
                        <div className="matchup3-last--r bg-blue-700">
                            <Birmingham2_Input region='birmingham2' gameId={1604}/>
                            <Birmingham2_Input region='birmingham2' gameId={1604}/>
                        </div>
                    </div>

                    <div className="round second-round">
                        <div className="matchup2--r mb-11 bg-gray-700">
                            <Birmingham2_Input region='birmingham2' gameId={1205}/>
                            <Birmingham2_Input region='birmingham2' gameId={1205}/>
                        </div>
                        <div className="matchup2--r mb-11 bg-gray-700">
                            <Birmingham2_Input region='birmingham2' gameId={1206}/>
                            <Birmingham2_Input region='birmingham2' gameId={1206}/>
                        </div>
                        <div className="matchup2--r mb-12 bg-gray-700">
                            <Birmingham2_Input region='birmingham2' gameId={1207}/>
                            <Birmingham2_Input region='birmingham2' gameId={1207}/>
                        </div>
                        <div className="matchup2-last--r bg-gray-700">
                            <Birmingham2_Input region='birmingham2' gameId={1208}/>
                            <Birmingham2_Input region='birmingham2' gameId={1208}/>
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
                            <Birmingham2_Input11_FF region='birmingham2' gameId={1113}/>
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