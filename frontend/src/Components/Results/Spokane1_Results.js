'use client'
import React from "react";
import TeamResult from "../TeamResult";
import { useBracket } from "@/context/BracketContext";
import GameSlotResults from "./GameSlotResults";

export default function Spokane1_Results ({ results }) {
    const { getWinnerFromResults } = useBracket();

    const winner1001 = getWinnerFromResults(results, 1001);
    const winner8001 = getWinnerFromResults(results, 8001);

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
                        </div>
                        <div className="matchup2 mb-11 bg-blue-800">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={1202}
                                previousGames={[1103, 1104]}
                                results={results}/>
                        </div>
                        <div className="matchup2 mb-12 bg-blue-800">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={1203}
                                previousGames={[1105, 1106]}
                                results={results}/>
                        </div>
                        <div className="matchup2-last bg-blue-800">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={1204}
                                previousGames={[1107, 1108]}
                                results={results}/>
                        </div>
                    </div>

                    <div className="round sweet-16 pt-4">
                        <div className="matchup3 bg-zinc-700">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={1601}
                                previousGames={[1201, 1202]}
                                results={results}/>
                        </div>
                        <div className="matchup3-last bg-zinc-700">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={1602}
                                previousGames={[1203, 1204]}
                                results={results}/>
                        </div>
                    </div>

                    <div className="round elite8">
                        <div className="matchup4 bg-zinc-700">
                            <GameSlotResults 
                                region="spokane1"
                                gameId={8001}
                                previousGames={[1601, 1602]}
                                results={results}/>
                        </div>
                    </div>

                    <div className="round final4 ">
                        <div className="mt-80 py-2 matchup bg-blue-600 border-b-2 border-white">
                            {winner8001 && ( 
                                    <TeamResult region="spokane1" gameId={10001} team={winner8001}/>
                                )}
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}