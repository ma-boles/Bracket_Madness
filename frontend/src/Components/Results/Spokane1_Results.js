'use client'
import React from "react";
import TeamResult from "../TeamResult";
import { useBracket } from "@/context/BracketContext";

export default function Spokane1_Results () {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    

     // Winner from First Four
     const teamBWinner1001 = getWinnerFromGame(bracketData, 1001);

     // Winners from Round 1
     const teamAWinner1101 = getWinnerFromGame(bracketData, 1101);
     const teamBWinner1102 = getWinnerFromGame(bracketData, 1102);
     const teamAWinner1103 = getWinnerFromGame(bracketData, 1103);
     const teamBWinner1104 = getWinnerFromGame(bracketData, 1104);
     const teamAWinner1105 = getWinnerFromGame(bracketData, 1105);
     const teamBWinner1106 = getWinnerFromGame(bracketData, 1106);
     const teamAWinner1107 = getWinnerFromGame(bracketData, 1107);
     const teamBWinner1108 = getWinnerFromGame(bracketData, 1108);
 
     // Winners from Round 2
     const teamAWinner1201 = getWinnerFromGame(bracketData, 1201);
     const teamBWinner1202 = getWinnerFromGame(bracketData, 1202);
     const teamAWinner1203 = getWinnerFromGame(bracketData, 1203);
     const teamBWinner1204 = getWinnerFromGame(bracketData, 1204);
 
     // Winners from Sweet 16
     const teamAWinner1601 = getWinnerFromGame(bracketData, 1601);
     const teamBWinner1602 = getWinnerFromGame(bracketData, 1602);
 
     // Winner from Elite 8
     const teamAWinner8001 = getWinnerFromGame(bracketData, 8001);
 
    return (
        <>
            <div className="west region">
                <div className="rounds">
                    <div className="round first-round">
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1101} team={{ id: 1, name: 'UCLA', seed: 1}} />
                            {teamBWinner1001 ? ( 
                                <TeamButton region="spokane1" gameId={1101} team={teamBWinner1001}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1102} team={{ id: 8, name: 'Richmond', seed: 8}} />
                            <TeamResult region="spokane1" gameId={1102} team={{ id: 9, name: 'Georgia Tech', seed: 9}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1103} team={{ id: 5, name: 'Ole Miss', seed: 5}} />
                            <TeamResult region="spokane1" gameId={1103} team={{ id: 12, name: 'Ball St', seed: 12}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1104} team={{ id: 4, name: 'Baylor', seed: 4}} />
                            <TeamResult region="spokane1" gameId={1104} team={{ id: 13, name: 'Grand Canyon', seed: 13}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1105} team={{ id: 6, name: 'Florida St', seed: 6}} />
                            <TeamResult region="spokane1" gameId={1105} team={{ id: 11, name: 'George Mason', seed: 11}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1106} team={{ id: 3, name: 'LSU', seed: 3}} />
                            <TeamResult region="spokane1" gameId={1106} team={{ id: 14, name: 'San Diego St', seed: 14}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1107} team={{ id: 7, name: 'Michigan St', seed: 7}} />
                            <TeamResult region="spokane1" gameId={1107} team={{ id: 10, name: 'Harvard', seed: 10}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1108} team={{ id: 2, name: 'NC State', seed: 2}} />
                            <TeamResult region="spokane1" gameId={1108} team={{ id: 15, name: 'Vermont', seed: 15}} />
                        </div>
                    </div>

                    <div className="round second-round">
                        <div className="matchup2 mb-11 bg-blue-800">
                            {teamAWinner1101 ? ( 
                                    <TeamResult region="spokane1" gameId={1201} team={teamAWinner1101}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                                {teamBWinner1102 ? ( 
                                    <TeamResult region="spokane1" gameId={1201} team={teamBWinner1102}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                        </div>
                        <div className="matchup2 mb-11 bg-blue-800">
                            {teamAWinner1103 ? ( 
                                    <TeamResult region="spokane1" gameId={1202} team={teamAWinner1103}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                                {teamBWinner1104 ? ( 
                                    <TeamResult region="spokane1" gameId={1202} team={teamBWinner1104}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                        </div>
                        <div className="matchup2 mb-12 bg-blue-800">
                            {teamAWinner1105 ? ( 
                                    <TeamResult region="spokane1" gameId={1203} team={teamAWinner1105}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                                {teamBWinner1106 ? ( 
                                    <TeamResult region="spokane1" gameId={1203} team={teamBWinner1106}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                        </div>
                        <div className="matchup2-last bg-blue-800">
                            {teamAWinner1107 ? ( 
                                    <TeamResult region="spokane1" gameId={1204} team={teamAWinner1107}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                                {teamBWinner1108 ? ( 
                                    <TeamResult region="spokane1" gameId={1204} team={teamBWinner1108}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                        </div>
                    </div>

                    <div className="round sweet-16 pt-4">
                        <div className="matchup3 bg-zinc-700">
                            {teamAWinner1201 ? ( 
                                    <TeamResult region="spokane1" gameId={1601} team={teamAWinner1201}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                                {teamBWinner1202 ? ( 
                                    <TeamResult region="spokane1" gameId={1601} team={teamBWinner1202}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                        </div>
                        <div className="matchup3-last bg-zinc-700">
                            {teamAWinner1203 ? ( 
                                    <TeamResult region="spokane1" gameId={1602} team={teamAWinner1203}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                                {teamBWinner1204 ? ( 
                                    <TeamResult region="spokane1" gameId={1602} team={teamBWinner1204}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                        </div>
                    </div>

                    <div className="round elite8">
                        <div className="matchup4 bg-zinc-700">
                            {teamAWinner1601 ? ( 
                                    <TeamResult region="spokane1" gameId={8001} team={teamAWinner1601}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                                {teamBWinner1602 ? ( 
                                    <TeamResult region="spokane1" gameId={8001} team={teamBWinner1602}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                        </div>
                    </div>

                    <div className="round final4 ">
                        <div className="mt-80 py-2 matchup bg-blue-600 border-b-2 border-white">
                            {teamAWinner8001 ? ( 
                                    <TeamResult region="spokane1" gameId={4001} team={teamAWinner8001}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}