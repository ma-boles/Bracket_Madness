'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import Select from "react-select";
import dynamic from 'next/dynamic';
import Spokane1_Input from "./Spokane1/Spokane1_Input";
import Spokane1_Input_FF from "./Spokane1/Spokane1_Input_FF";



export default function WestPick() {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    const Select = dynamic(() => import('react-select'), { ssr: false });

    return(
        <>
            <div className="west region">
                <div className="rounds">
                    <div className="round first-round">
                        <div className="matchup bg-blue-800">
                            {/* <Select classNamePrefix="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1101, e.target.value)}
                            placeholder="UCLA"
                            /> */}
                            <p className="team">1 UCLA</p>
                            <Spokane1_Input_FF />
{/* 
                            <Select classNamePrefix="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1101, e.target.value)}
                            placeholder="seed 16"
                            /> */}

                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">8 Richmond</p>

                            {/* <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1102, e.target.value)}
                            placeholder="seed 8"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1102, e.target.value)}
                            placeholder="seed 9"
                            /> */}
                            <p className="team">9 Gerogia Tech</p>

                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">5 Ole Miss</p>
                            <p className="team">12 Ball State</p>

                            {/* <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1103, e.target.value)}
                            placeholder="seed 5"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1103, e.target.value)}
                            placeholder="seed 12"
                            /> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">4 Baylor</p>
                            <p className="team">13 GCU</p>

                            {/* <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1104, e.target.value)}
                            placeholder="seed 4"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1104, e.target.value)}
                            placeholder="seed 13"
                            /> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">6 FSU</p>
                            <p className="team">11 George M...</p>

                            {/* <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1105, e.target.value)}
                            placeholder="seed 6"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1105, e.target.value)}
                            placeholder="seed 11"
                            /> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">3 LSU</p>
                            <p className="team">14 SDSU</p>

                            {/* <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1106, e.target.value)}
                            placeholder="seed 3"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1106, e.target.value)}
                            placeholder="seed 14"
                            /> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">7 MSU</p>
                            <p className="team">10 Harvard</p>

                            {/* <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1107, e.target.value)}
                            placeholder="seed 7"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1107, e.target.value)}
                            placeholder="seed 10"
                            /> */}
                        </div>
                        <div className="matchup bg-blue-800">
                            <p className="team">2 NC State</p>
                            <p className="team">15 Vermont</p>

                            {/* <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1108, e.target.value)}
                            placeholder="seed 2"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1108, e.target.value)}
                            placeholder="seed 15"
                            /> */}
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2 mb-11 bg-gray-700">
                                <Spokane1_Input />
                                <Spokane1_Input />

                            {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1201, e.target.value)}
                            placeholder="winner 1101"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1201, e.target.value)}
                            placeholder="winner 1102"
                            ></input> */}
                        </div>
                        <div className="matchup2 mb-11 bg-gray-700">
                            <Spokane1_Input />
                            <Spokane1_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1202, e.target.value)}
                            placeholder="winner 1103"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1202, e.target.value)}
                            placeholder="winner 1104"
                            ></input> */}
                        </div>
                        <div className="matchup2 mb-12 bg-gray-700">
                            <Spokane1_Input />
                            <Spokane1_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1203, e.target.value)}
                            placeholder="winner 1105"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1203, e.target.value)}
                            placeholder="winner 1106"
                            ></input> */}
                        </div>
                        <div className="matchup2-last bg-gray-700">
                            <Spokane1_Input />
                            <Spokane1_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1204, e.target.value)}
                            placeholder="winner 1107"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1204, e.target.value)}
                            placeholder="winner 1108"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round sweet-16 pt-4">
                        <div className="matchup3 bg-blue-700">
                            <Spokane1_Input />
                            <Spokane1_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1601, e.target.value)}
                            placeholder="winner 1201"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1601, e.target.value)}
                            placeholder="winner 1202"
                            ></input> */}
                        </div>
                        <div className="matchup3-last bg-blue-700">
                            <Spokane1_Input />
                            <Spokane1_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1602, e.target.value)}
                            placeholder="winner 1203"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1602, e.target.value)}
                            placeholder="winner 1204"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4 bg-gray-600">
                            <Spokane1_Input />
                            <Spokane1_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 8001, e.target.value)}
                            placeholder="winner 1601"
                            ></input>
                            <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 8001, e.target.value)}
                            placeholder="winner 1602"
                            ></input> */}
                        </div>
                    </div>
                    <div className="round final4 ">
                        <div className="mt-80 py-2 matchup bg-blue-500 border-b-2 border-white">
                            <Spokane1_Input />
                        {/* <input className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 4001, e.target.value)}
                            placeholder="winner 8001"
                        ></input> */}
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}