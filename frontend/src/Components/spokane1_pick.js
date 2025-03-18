'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import Select from "react-select";
import dynamic from 'next/dynamic';



export default function WestPick() {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    const Select = dynamic(() => import('react-select'), { ssr: false });

    return(
        <>
            <div className="west region">
                <div className="rounds">
                    <div className="round first-round">
                        <div className="matchup bg-blue-800">
                            <Select classNamePrefix="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1101, e.target.value)}
                            placeholder="seed 1"
                            />
                            <Select classNamePrefix="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1101, e.target.value)}
                            placeholder="seed 16"
                            />
                        </div>
                        <div className="matchup bg-blue-800">
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1102, e.target.value)}
                            placeholder="seed 8"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1102, e.target.value)}
                            placeholder="seed 9"
                            />
                        </div>
                        <div className="matchup bg-blue-800">
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1103, e.target.value)}
                            placeholder="seed 5"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1103, e.target.value)}
                            placeholder="seed 12"
                            />
                        </div>
                        <div className="matchup bg-blue-800">
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1104, e.target.value)}
                            placeholder="seed 4"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1104, e.target.value)}
                            placeholder="seed 13"
                            />
                        </div>
                        <div className="matchup bg-blue-800">
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1105, e.target.value)}
                            placeholder="seed 6"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1105, e.target.value)}
                            placeholder="seed 11"
                            />
                        </div>
                        <div className="matchup bg-blue-800">
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1106, e.target.value)}
                            placeholder="seed 3"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1106, e.target.value)}
                            placeholder="seed 14"
                            />
                        </div>
                        <div className="matchup bg-blue-800">
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1107, e.target.value)}
                            placeholder="seed 7"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1107, e.target.value)}
                            placeholder="seed 10"
                            />
                        </div>
                        <div className="matchup bg-blue-800">
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1108, e.target.value)}
                            placeholder="seed 2"
                            />
                            <Select className="team"
                            type="text"
                            onChange={(e) => handlePick('west', 1108, e.target.value)}
                            placeholder="seed 15"
                            />
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2 mb-8 bg-gray-700">
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
                        <div className="matchup2 mb-8 bg-gray-700">
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
                        <div className="matchup2 mb-14 bg-gray-700">
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
                        <div className="matchup2-last bg-gray-700">
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
                        <div className="matchup3  bg-blue-700">
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
                        <div className="matchup3-last bg-blue-700">
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
                        <div className="matchup4 bg-gray-600">
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
                        <div className="mt-100 matchup bg-blue-500">
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