'use client'
import React from "react";
import TeamResult from "../TeamResult";
import { useBracket } from "@/context/BracketContext";
import GameSlotResults from "./GameSlotResults";

export default function Spokane1_Results ({ results }) {
    const { bracketData, getWinnerFromGame, getWinnerFromResults } = useBracket();
    

     // Winner from First Four
     const winner1001 = getWinnerFromResults(results, 1001);

     // Winner from Elite 8
     const winner8001 = getWinnerFromResults(results, 8001);
 



         //  const teamBWinner1001 = getWinnerFromGame(bracketData, 1001);

     // Winners from Round 1
     const winner1101 = getWinnerFromResults(results, 1001);
     const winner1102 = getWinnerFromResults(results, 1102);
     const winner1103 = getWinnerFromResults(results, 1103);
     const winner1104 = getWinnerFromResults(results, 1104);
     const winner1105 = getWinnerFromResults(results, 1105);
     const winner1106 = getWinnerFromResults(results, 1106);
     const winner1107 = getWinnerFromResults(results, 1107);
     const winner1108 = getWinnerFromResults(results, 1108);

     const teamAWinner1101 = getWinnerFromGame(bracketData, 1101);
     const teamBWinner1102 = getWinnerFromGame(bracketData, 1102);
     const teamAWinner1103 = getWinnerFromGame(bracketData, 1103);
     const teamBWinner1104 = getWinnerFromGame(bracketData, 1104);
     const teamAWinner1105 = getWinnerFromGame(bracketData, 1105);
     const teamBWinner1106 = getWinnerFromGame(bracketData, 1106);
     const teamAWinner1107 = getWinnerFromGame(bracketData, 1107);
     const teamBWinner1108 = getWinnerFromGame(bracketData, 1108);
 
     // Winners from Round 2
     const winner1201 = getWinnerFromResults(results, 1201);
     const winner1202 = getWinnerFromResults(results, 1202);
     const winner1203 = getWinnerFromResults(results, 1203);
     const winner1204 = getWinnerFromResults(results, 1204);

     const teamAWinner1201 = getWinnerFromGame(bracketData, 1201);
     const teamBWinner1202 = getWinnerFromGame(bracketData, 1202);
     const teamAWinner1203 = getWinnerFromGame(bracketData, 1203);
     const teamBWinner1204 = getWinnerFromGame(bracketData, 1204);
 
     // Winners from Sweet 16
     const teamAWinner1601 = getWinnerFromGame(bracketData, 1601);
     const teamBWinner1602 = getWinnerFromGame(bracketData, 1602);
 

    return (
        <>
            <div className="west region">
                <div className="rounds">
                    <div className="round first-round">
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1101} team={{ id: 1, team_name: 'UCLA', seed: 1}} />
                            {winner1001 && ( 
                                <TeamResult region="spokane1" gameId={1101} team={winner1001}/>
                            )}
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1102} team={{ id: 8, team_name: 'Richmond', seed: 8}} />
                            <TeamResult region="spokane1" gameId={1102} team={{ id: 9, team_name: 'Georgia Tech', seed: 9}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1103} team={{ id: 5, team_name: 'Ole Miss', seed: 5}} />
                            <TeamResult region="spokane1" gameId={1103} team={{ id: 12, team_name: 'Ball St', seed: 12}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1104} team={{ id: 4, team_name: 'Baylor', seed: 4}} />
                            <TeamResult region="spokane1" gameId={1104} team={{ id: 13, team_name: 'Grand Canyon', seed: 13}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1105} team={{ id: 6, team_name: 'Florida St', seed: 6}} />
                            <TeamResult region="spokane1" gameId={1105} team={{ id: 11, team_name: 'George Mason', seed: 11}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1106} team={{ id: 3, team_name: 'LSU', seed: 3}} />
                            <TeamResult region="spokane1" gameId={1106} team={{ id: 14, team_name: 'San Diego St', seed: 14}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1107} team={{ id: 7, team_name: 'Michigan St', seed: 7}} />
                            <TeamResult region="spokane1" gameId={1107} team={{ id: 10, team_name: 'Harvard', seed: 10}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamResult region="spokane1" gameId={1108} team={{ id: 2, team_name: 'NC State', seed: 2}} />
                            <TeamResult region="spokane1" gameId={1108} team={{ id: 15, team_name: 'Vermont', seed: 15}} />
                        </div>
                    </div>

                    <div className="round second-round">
                        <div className="matchup2 mb-11 bg-blue-800">
                             <GameSlotResults 
                                region="spokane1"
                                gameId={1201}
                                previousGames={[1101, 1102]}
                                results={results}/>
                            {/* {winner1101 && ( 
                                    <TeamResult region="spokane1" gameId={1201} team={winner1101}/>
                                )}
                                {winner1102 && ( 
                                    <TeamResult region="spokane1" gameId={1201} team={winner1102}/>
                                )} */}
                        </div>
                        <div className="matchup2 mb-11 bg-blue-800">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={1202}
                                previousGames={[1103, 1104]}
                                results={results}/>
                            {/* {winner1203 ? ( 
                                    <TeamResult region="spokane1" gameId={1202} team={winner1203}/>
                                ) : (
                                    <p className="team"></p>
                                )}
                                {teamBWinner1104 ? ( 
                                    <TeamResult region="spokane1" gameId={1202} team={teamBWinner1104}/>
                                ) : (
                                    <p className="team"></p>
                                )} */}
                        </div>
                        <div className="matchup2 mb-12 bg-blue-800">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={1203}
                                previousGames={[1105, 1106]}
                                results={results}/>
                            {/* {teamAWinner1105 ? ( 
                                    <TeamResult region="spokane1" gameId={1203} team={teamAWinner1105}/>
                                ) : (
                                    <p className="team"></p>
                                )}
                                {teamBWinner1106 ? ( 
                                    <TeamResult region="spokane1" gameId={1203} team={teamBWinner1106}/>
                                ) : (
                                    <p className="team"></p>
                                )} */}
                        </div>
                        <div className="matchup2-last bg-blue-800">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={1204}
                                previousGames={[1107, 1108]}
                                results={results}/>
                            {/* {teamAWinner1107 ? ( 
                                    <TeamResult region="spokane1" gameId={1204} team={teamAWinner1107}/>
                                ) : (
                                    <p className="team"></p>
                                )}
                                {teamBWinner1108 ? ( 
                                    <TeamResult region="spokane1" gameId={1204} team={teamBWinner1108}/>
                                ) : (
                                    <p className="team"></p>
                                )} */}
                        </div>
                    </div>

                    <div className="round sweet-16 pt-4">
                        <div className="matchup3 bg-zinc-700">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={1601}
                                previousGames={[1201, 1202]}
                                results={results}/>
                            {/* {teamAWinner1201 ? ( 
                                    <TeamResult region="spokane1" gameId={1601} team={teamAWinner1201}/>
                                ) : (
                                    <p className="team"></p>
                                )}
                                {teamBWinner1202 ? ( 
                                    <TeamResult region="spokane1" gameId={1601} team={teamBWinner1202}/>
                                ) : (
                                    <p className="team"></p>
                                )} */}
                        </div>
                        <div className="matchup3-last bg-zinc-700">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={1602}
                                previousGames={[1203, 1204]}
                                results={results}/>
                            {/* {teamAWinner1203 ? ( 
                                    <TeamResult region="spokane1" gameId={1602} team={teamAWinner1203}/>
                                ) : (
                                    <p className="team"></p>
                                )}
                                {teamBWinner1204 ? ( 
                                    <TeamResult region="spokane1" gameId={1602} team={teamBWinner1204}/>
                                ) : (
                                    <p className="team"></p>
                                )} */}
                        </div>
                    </div>

                    <div className="round elite8">
                        <div className="matchup4 bg-zinc-700">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={8001}
                                previousGames={[1601, 1602]}
                                results={results}/>
                            {/* {teamAWinner1601 ? ( 
                                    <TeamResult region="spokane1" gameId={8001} team={teamAWinner1601}/>
                                ) : (
                                    <p className="team"></p>
                                )}
                                {teamBWinner1602 ? ( 
                                    <TeamResult region="spokane1" gameId={8001} team={teamBWinner1602}/>
                                ) : (
                                    <p className="team"></p>
                                )} */}
                        </div>
                    </div>

                    <div className="round final4 ">
                        <div className="mt-80 py-2 matchup bg-blue-600 border-b-2 border-white">
                            {/* <GameSlotResults 
                                region="spokane1"
                                gameId={4001}
                                previousGames={[8001]}
                                results={results}/> */}
                            {winner8001 && ( 
                                    <TeamResult region="spokane1" gameId={4001} team={winner8001}/>
                                )}
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}