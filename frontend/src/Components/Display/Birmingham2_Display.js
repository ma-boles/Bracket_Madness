'use client'
import React from "react";
import GameSlotDisplay from "../Display/GameSlotDisplay";
import FinalFourCard_Display from "./FinalFourCard_Display";
import TeamResult from "../TeamResult";

export default function Birmingham2_Display({ results, predictions, game1002, game8002 }) {    

    return (
        <>
        <div className="midwest region">
            <div className="rounds">
                <div className="round final4">
                        <div className="mt-105 py-2 matchup--r border-b-2 border-white">
                            <FinalFourCard_Display game={game8002}/>
                        </div>
                    </div>

                    <div className="round elite8">
                        <div className="matchup4--r">
                            <GameSlotDisplay 
                                region="birmingham2"
                                gameId={8002}
                                previousGames={[1603, 1604]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                    </div>

                    <div className="round sweet-16 pt-4">
                        <div className="matchup3--r">
                            <GameSlotDisplay 
                                region="birmingham2"
                                gameId={1603}
                                previousGames={[1205, 1206]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                        <div className="matchupdisplay3-last--r">
                            <GameSlotDisplay 
                                region="birmingham2"
                                gameId={1604}
                                previousGames={[1207, 1208]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                    </div>

                    <div className="round second-round">
                        <div className="matchup2--r mb-10">
                            <GameSlotDisplay 
                                region="birmingham2"
                                gameId={1205}
                                previousGames={[1109, 1110]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                        <div className="matchup2--r mb-14">
                            <GameSlotDisplay 
                                region="birmingham2"
                                gameId={1206}
                                previousGames={[1111, 1112]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                        <div className="matchup2--r mb-14">
                            <GameSlotDisplay 
                                region="birmingham2"
                                gameId={1207}
                                previousGames={[1113, 1114]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                        <div className="matchup2-last--r">
                            <GameSlotDisplay 
                                region="birmingham2"
                                gameId={1208}
                                previousGames={[1115, 1116]}
                                results={results}
                                predictions={predictions}
                                />
                        </div>
                    </div>
                    <div className="round first-round">
                        <div className="matchup--r">
                            <TeamResult region="birmingham2" gameId={1109} team={{ id: 18, team_name: 'South Carolina', seed: 1}} />
                            <TeamResult region="birmingham2" gameId={1109} team={{ id: 34, team_name: 'Tennessee Tech', seed: 16}} />
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham2" gameId={1110} team={{ id: 25, team_name: 'Utah', seed: 8}} />
                            <TeamResult region="birmingham2" gameId={1110} team={{ id: 26, team_name: 'Indiana', seed: 9}} />
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham2" gameId={1111} team={{ id: 22, team_name: 'Alabama', seed: 5}} />
                            <TeamResult region="birmingham2" gameId={1111} team={{ id: 30, team_name: 'Green Bay', seed: 12}} />
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham2" gameId={1112} team={{ id: 21, team_name: 'Maryland', seed: 4}} />
                            <TeamResult region="birmingham2" gameId={1112} team={{ id: 31, team_name: 'Norfolk St', seed: 13}} />
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham2" gameId={1113} team={{ id: 23, team_name: 'West Virginia', seed: 6}} />
                            <FinalFourCard_Display game={game1002}/>
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham2" gameId={1114} team={{ id: 20, team_name: 'North Carolina', seed: 3}} />
                            <TeamResult region="birmingham2" gameId={1114} team={{ id: 32, team_name: 'Oregon St', seed: 14}} />
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham2" gameId={1115} team={{ id: 24, team_name: 'Vanderbilt', seed: 7}} />
                            <TeamResult region="birmingham2" gameId={1115} team={{ id: 27, team_name: 'Oregon', seed: 10}} />
                        </div>
                        <div className="matchup--r">
                            <TeamResult region="birmingham2" gameId={1116} team={{ id: 19, team_name: 'Duke', seed: 2}} />
                            <TeamResult region="birmingham2" gameId={1116} team={{ id: 33, team_name: 'Lehigh', seed: 15}} />
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}