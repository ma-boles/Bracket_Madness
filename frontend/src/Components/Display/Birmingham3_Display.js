'use client'
import React from "react";
import TeamResult from "../TeamResult";
import GameSlotDisplay from "./GameSlotDisplay";
import { useBracket } from "@/context/BracketContext";

export default function Birmingham3_Display({ results, predictions }) {
    const {  getWinnerFromResults } = useBracket();

    // Winners from First Four
    const winner1003 = getWinnerFromResults(results, 1003);
    const winner1004 = getWinnerFromResults(results, 1004);

    // Winner from Elite 8
    const winner8003 = getWinnerFromResults(results, 8003);
    

    return (
    <>
        <div className="midwest region">
            <div className="rounds">
                <div className="round final4">
                        <div className="mt-105 py-2 matchup--r border-b-2 border-white">
                            {winner8003 && (
                                <TeamResult region="birmingham3" gameId={4003} team={winner8003}/>
                            )}
                        </div>
                    </div>

                    <div className="round elite8">
                        <div className="matchup4--r">
                            <GameSlotDisplay 
                                region="birmingham3"
                                gameId={8003}
                                previousGames={[1605, 1606]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                    </div>

                    <div className="round sweet-16 pt-4">
                        <div className="matchup3--r">
                            <GameSlotDisplay 
                                region="birmingham3"
                                gameId={1605}
                                previousGames={[1209, 1210]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                        <div className="matchup3-last--r">
                            <GameSlotDisplay 
                                region="birmingham3"
                                gameId={1606}
                                previousGames={[1211, 1212]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                    </div>

                    <div className="round second-round">
                        <div className="matchup2--r mb-11">
                            <GameSlotDisplay 
                                region="birmingham3"
                                gameId={1209}
                                previousGames={[1117, 1118]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                        <div className="matchup2--r mb-11">
                            <GameSlotDisplay 
                                region="birmingham3"
                                gameId={1210}
                                previousGames={[1119, 1120]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                        <div className="matchup2--r mb-12">
                            <GameSlotDisplay 
                                region="birmingham3"
                                gameId={1211}
                                previousGames={[1121, 1122]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                        <div className="matchup2-last--r">
                            <GameSlotDisplay 
                                region="birmingham3"
                                gameId={1212}
                                previousGames={[1123, 1124]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                    </div>

                    <div className="round first-round">
                        <div className="matchup--r">
                            <TeamResult region="birmingham3" gameId={1117} team={{ id: 35, team_name: 'Texas', seed: 1}} />
                            {winner1004 && (
                                <TeamResult region="birmingham3" gameId={1117} team={winner1004}/>
                            )}
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham3" gameId={1118} team={{ id: 42, team_name: 'Illinois', seed: 8}} />
                            <TeamResult region="birmingham3" gameId={1118} team={{ id: 43, team_name: 'Creighton', seed: 9}} />
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham3" gameId={1119} team={{ id: 39, team_name: 'Tennessee', seed: 5}} />
                            <TeamResult region="birmingham3" gameId={1119} team={{ id: 47, team_name: 'South Florida', seed: 12}} />
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham3" gameId={1120} team={{ id: 38, team_name: 'Ohio State', seed: 4}} />
                            <TeamResult region="birmingham3" gameId={1120} team={{ id: 48, team_name: 'Montana St', seed: 13}} />
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham3" gameId={1121} team={{ id: 40, team_name: 'Michigan', seed: 6}} />
                            {winner1003 && (
                                <TeamResult region="birmingham3" gameId={1121} team={winner1003}/>
                            )}
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham3" gameId={1122} team={{ id: 37, team_name: 'Notre Dame', seed: 3}} />
                            <TeamResult region="birmingham3" gameId={1122} team={{ id: 49, team_name: 'SF Austin', seed: 14}} />
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham3" gameId={1123} team={{ id: 41, team_name: 'Louisville', seed: 7}} />
                            <TeamResult region="birmingham3" gameId={1123} team={{ id: 44, team_name: 'Nebraska', seed: 10}} />
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham3" gameId={1124} team={{ id: 36, team_name: 'TCU', seed: 2}} />
                            <TeamResult region="birmingham3" gameId={1124} team={{ id: 50, team_name: 'Fair Dickinson', seed: 15}} />
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}