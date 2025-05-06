'use client'
import React from "react";
import TeamButton from "../TeamButton";
import TeamResult from "../TeamResult";
import { useBracket } from "@/context/BracketContext";

export default function Birmingham3_Results() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    
    // Winners from First Four
    const teamBWinner1003 = getWinnerFromGame(bracketData, 1003);
    const teamBWinner1004 = getWinnerFromGame(bracketData, 1004);

    // Winners from Round 1
    const teamAWinner1117 = getWinnerFromGame(bracketData, 1117);
    const teamBWinner1118 = getWinnerFromGame(bracketData, 1118);
    const teamAWinner1119 = getWinnerFromGame(bracketData, 1119);
    const teamBWinner1120 = getWinnerFromGame(bracketData, 1120);
    const teamAWinner1121 = getWinnerFromGame(bracketData, 1121);
    const teamBWinner1122 = getWinnerFromGame(bracketData, 1122);
    const teamAWinner1123 = getWinnerFromGame(bracketData, 1123);
    const teamBWinner1124 = getWinnerFromGame(bracketData, 1124);

    // Winners from Round 2
    const teamAWinner1209 = getWinnerFromGame(bracketData, 1209);
    const teamBWinner1210 = getWinnerFromGame(bracketData, 1210);
    const teamAWinner1211 = getWinnerFromGame(bracketData, 1211);   
    const teamBWinner1212 = getWinnerFromGame(bracketData, 1212);

    // Winners from Sweet 16
    const teamAWinner1605 = getWinnerFromGame(bracketData, 1605);
    const teamBWinner1606 = getWinnerFromGame(bracketData, 1606);

    // Winner from Elite 8
    const teamAWinner8003 = getWinnerFromGame(bracketData, 8003);

    return (
    <>
        <div className="midwest region">
            <div className="rounds">
                <div className="round final4">
                        <div className="mt-105 py-2 matchup--r bg-blue-600 border-b-2 border-white">
                            {teamAWinner8003 ? (
                                <TeamResult region="birmingham3" gameId={4003} team={teamAWinner8003}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                    </div>

                    <div className="round elite8">
                        <div className="matchup4--r bg-zinc-700">
                            {teamAWinner1605 ? (
                                <TeamResult region="birmingham3" gameId={8003} team={teamAWinner1605}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1606 ? (
                                <TeamResult region="birmingham3" gameId={8003} team={teamBWinner1606}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                    </div>

                    <div className="round sweet-16 pt-4">
                        <div className="matchup3--r bg-zinc-700">
                            {teamAWinner1209 ? (
                                <TeamResult region="birmingham3" gameId={1605} team={teamAWinner1209}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1210 ? (
                                <TeamResult region="birmingham3" gameId={1605} team={teamBWinner1210}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup3-last--r bg-zinc-700">
                            {teamAWinner1211 ? (
                                <TeamResult region="birmingham3" gameId={1606} team={teamAWinner1211}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1212 ? (
                                <TeamResult region="birmingham3" gameId={1606} team={teamBWinner1212}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                    </div>

                    <div className="round second-round">
                        <div className="matchup2--r mb-11 bg-blue-800">
                        {teamAWinner1117 ? (
                                <TeamResult region="birmingham3" gameId={1209} team={teamAWinner1117}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1118 ? (
                                <TeamResult region="birmingham3" gameId={1209} team={teamBWinner1118}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}   
                        </div>
                        <div className="matchup2--r mb-11 bg-blue-800">
                            {teamAWinner1119 ? (
                                <TeamResult region="birmingham3" gameId={1210} team={teamAWinner1119}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1120 ? (
                                <TeamResult region="birmingham3" gameId={1210} team={teamBWinner1120}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup2--r mb-12 bg-blue-800">
                            {teamAWinner1121 ? (
                                <TeamResult region="birmingham3" gameId={1211} team={teamAWinner1121}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1122 ? (
                                <TeamResult region="birmingham3" gameId={1211} team={teamBWinner1122}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup2-last--r bg-blue-800">
                            {teamAWinner1123 ? (
                                <TeamResult region="birmingham3" gameId={1212} team={teamAWinner1123}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1124 ? (
                                <TeamResult region="birmingham3" gameId={1212} team={teamBWinner1124}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                    </div>

                    <div className="round first-round">
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham3" gameId={1117} team={{ id: 35, name: 'Texas', seed: 1}} />
                            {teamBWinner1004 ? (
                                <TeamResult region="birmingham3" gameId={1117} team={teamBWinner1004}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham3" gameId={1118} team={{ id: 42, name: 'Illinois', seed: 8}} />
                            <TeamResult region="birmingham3" gameId={1118} team={{ id: 43, name: 'Creighton', seed: 9}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham3" gameId={1119} team={{ id: 39, name: 'Tennessee', seed: 5}} />
                            <TeamResult region="birmingham3" gameId={1119} team={{ id: 47, name: 'South Florida', seed: 12}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham3" gameId={1120} team={{ id: 38, name: 'Ohio State', seed: 4}} />
                            <TeamResult region="birmingham3" gameId={1120} team={{ id: 48, name: 'Montana St', seed: 13}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham3" gameId={1121} team={{ id: 40, name: 'Michigan', seed: 6}} />
                            {teamBWinner1003 ? (
                                <TeamResult region="birmingham3" gameId={1121} team={teamBWinner1003}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham3" gameId={1122} team={{ id: 37, name: 'Notre Dame', seed: 3}} />
                            <TeamResult region="birmingham3" gameId={1122} team={{ id: 49, name: 'SF Austin', seed: 14}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham3" gameId={1123} team={{ id: 41, name: 'Louisville', seed: 7}} />
                            <TeamResult region="birmingham3" gameId={1123} team={{ id: 44, name: 'Nebraska', seed: 10}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham3" gameId={1124} team={{ id: 36, name: 'TCU', seed: 2}} />
                            <TeamResult region="birmingham3" gameId={1124} team={{ id: 50, name: 'Fair Dickinson', seed: 15}} />
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}