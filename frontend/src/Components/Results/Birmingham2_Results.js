'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamResult from "../TeamResult";
import GameSlotResults from "./GameSlotResults";

export default function Birmingham2_Results({ results }) {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame, getWinnerFromResults } = useBracket();
    
    // First Four Winner
    const winner1002 = getWinnerFromResults(results, 1002);

    // Elite 8 Winner
    const winner8002 = getWinnerFromResults(results, 8002);


    // Winners from Round 1
    const teamAWinner1109 = getWinnerFromGame(bracketData, 1109);
    const teamBWinner1110 = getWinnerFromGame(bracketData, 1110);
    const teamAWinner1111 = getWinnerFromGame(bracketData, 1111);
    const teamBWinner1112 = getWinnerFromGame(bracketData, 1112);
    const teamAWinner1113 = getWinnerFromGame(bracketData, 1113);
    const teamBWinner1114 = getWinnerFromGame(bracketData, 1114);
    const teamAWinner1115 = getWinnerFromGame(bracketData, 1115);
    const teamBWinner1116 = getWinnerFromGame(bracketData, 1116);

    // Winners from Round 2
    const teamAWinner1205 = getWinnerFromGame(bracketData, 1205);
    const teamBWinner1206 = getWinnerFromGame(bracketData, 1206);
    const teamAWinner1207 = getWinnerFromGame(bracketData, 1207);
    const teamBWinner1208 = getWinnerFromGame(bracketData, 1208);

    // Winners from Sweet 16
    const teamAWinner1603 = getWinnerFromGame(bracketData, 1603);
    const teamBWinner1604 = getWinnerFromGame(bracketData, 1604);

    

    return (
        <>
        <div className="midwest region">
            <div className="rounds">
                <div className="round final4">
                        <div className="mt-105 py-2 matchup--r bg-blue-600 border-b-2 border-white">
                            {winner8002 && ( 
                                <TeamResult region="birmingham2" gameId={4002} team={winner8002}/>
                            )}
                        </div>
                    </div>

                    <div className="round elite8">
                        <div className="matchup4--r bg-zinc-700">
                            <GameSlotResults 
                                region="birmingham2"
                                gameId={8002}
                                previousGames={[1603, 1604]}
                                results={results}
                                />
                            {/* {teamAWinner1603 ? ( 
                                <TeamResult region="birmingham2" gameId={8002} team={teamAWinner1603}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1604 ? ( 
                                <TeamResult region="birmingham2" gameId={8002} team={teamBWinner1604}/>
                            ) : (
                                <p className="team">Select...</p>
                            )} */}
                        </div>
                    </div>

                    <div className="round sweet-16 pt-4">
                        <div className="matchup3--r bg-zinc-700">
                            <GameSlotResults 
                                region="birmingham2"
                                gameId={1603}
                                previousGames={[1205, 1206]}
                                results={results}
                                />
                            {/* {teamAWinner1205 ? ( 
                                <TeamResult region="birmingham2" gameId={1603} team={teamAWinner1205}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1206 ? ( 
                                <TeamResult region="birmingham2" gameId={1603} team={teamBWinner1206}/>
                            ) : (
                                <p className="team">Select...</p>
                            )} */}
                        </div>
                        <div className="matchup3-last--r bg-zinc-700">
                            <GameSlotResults 
                                region="birmingham2"
                                gameId={1604}
                                previousGames={[1207, 1208]}
                                results={results}
                                />
                            {/* {teamAWinner1207 ? ( 
                                <TeamResult region="birmingham2" gameId={1604} team={teamAWinner1207}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1208 ? ( 
                                <TeamResult region="birmingham2" gameId={1604} team={teamBWinner1208}/>
                            ) : (
                                <p className="team">Select...</p>
                            )} */}
                        </div>
                    </div>

                    <div className="round second-round">
                        <div className="matchup2--r mb-11 bg-blue-800">
                            <GameSlotResults 
                                region="birmingham2"
                                gameId={1205}
                                previousGames={[1109, 1110]}
                                results={results}
                                />
                            {/* {teamAWinner1109 ? ( 
                                <TeamResult region="birmingham2" gameId={1205} team={teamAWinner1109}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1110 ? ( 
                                <TeamResult region="birmingham2" gameId={1205} team={teamBWinner1110}/>
                            ) : (
                                <p className="team">Select...</p>
                            )} */}
                        </div>
                        <div className="matchup2--r mb-11 bg-blue-800">
                            <GameSlotResults 
                                region="birmingham2"
                                gameId={1206}
                                previousGames={[1111, 1112]}
                                results={results}
                                />
                            {/* {teamAWinner1111 ? ( 
                                <TeamResult region="birmingham2" gameId={1206} team={teamAWinner1111}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1112 ? ( 
                                <TeamResult region="birmingham2" gameId={1206} team={teamBWinner1112}/>
                            ) : (
                                <p className="team">Select...</p>
                            )} */}
                        </div>
                        <div className="matchup2--r mb-12 bg-blue-800">
                        <   GameSlotResults 
                                region="birmingham2"
                                gameId={1207}
                                previousGames={[1113, 1114]}
                                results={results}
                                />
                            {/* {teamAWinner1113 ? ( 
                                <TeamResult region="birmingham2" gameId={1207} team={teamAWinner1113}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1114 ? ( 
                                <TeamResult region="birmingham2" gameId={1207} team={teamBWinner1114}/>
                            ) : (
                                <p className="team">Select...</p>
                            )} */}
                        </div>
                        <div className="matchup2-last--r bg-blue-800">
                            <GameSlotResults 
                                region="birmingham2"
                                gameId={1208}
                                previousGames={[1115, 1116]}
                                results={results}
                                />
                            {/* {teamAWinner1115 ? ( 
                                <TeamResult region="birmingham2" gameId={1208} team={teamAWinner1115}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1116 ? ( 
                                <TeamResult region="birmingham2" gameId={1208} team={teamBWinner1116}/>
                            ) : (
                                <p className="team">Select...</p>
                            )} */}
                        </div>
                    </div>
                    <div className="round first-round">
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1109} team={{ id: 18, team_name: 'South Carolina', seed: 1}} />
                            <TeamResult region="birmingham2" gameId={1109} team={{ id: 34, team_name: 'Tennessee Tech', seed: 16}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1110} team={{ id: 25, team_name: 'Utah', seed: 8}} />
                            <TeamResult region="birmingham2" gameId={1110} team={{ id: 26, team_name: 'Indiana', seed: 9}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1111} team={{ id: 22, team_name: 'Alabama', seed: 5}} />
                            <TeamResult region="birmingham2" gameId={1111} team={{ id: 30, team_name: 'Green Bay', seed: 12}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1112} team={{ id: 21, team_name: 'Maryland', seed: 4}} />
                            <TeamResult region="birmingham2" gameId={1112} team={{ id: 31, team_name: 'Norfolk St', seed: 13}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1113} team={{ id: 23, team_name: 'West Virginia', seed: 6}} />
                            {winner1002 && ( 
                                <TeamResult region="birmingham2" gameId={1113} team={winner1002}/>
                            )}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1114} team={{ id: 20, team_name: 'North Carolina', seed: 3}} />
                            <TeamResult region="birmingham2" gameId={1114} team={{ id: 32, team_name: 'Oregon St', seed: 14}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1115} team={{ id: 24, team_name: 'Vanderbilt', seed: 7}} />
                            <TeamResult region="birmingham2" gameId={1115} team={{ id: 27, team_name: 'Oregon', seed: 10}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1116} team={{ id: 19, team_name: 'Duke', seed: 2}} />
                            <TeamResult region="birmingham2" gameId={1116} team={{ id: 33, team_name: 'Lehigh', seed: 15}} />
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}