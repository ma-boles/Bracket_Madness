'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamResult from "../TeamResult";

export default function Birmingham2_Results() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    

    const teamBWinner1002 = getWinnerFromGame(bracketData, 1002);

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

    // Winner from Elite 8
    const teamAWinner8002 = getWinnerFromGame(bracketData, 8002);

    return (
        <>
        <div className="midwest region">
            <div className="rounds">
                <div className="round final4">
                        <div className="mt-105 py-2 matchup--r bg-blue-600 border-b-2 border-white">
                            {teamAWinner8002 ? ( 
                                <TeamResult region="birmingham2" gameId={4002} team={teamAWinner8002}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                    </div>

                    <div className="round elite8">
                        <div className="matchup4--r bg-zinc-700">
                            {teamAWinner1603 ? ( 
                                <TeamResult region="birmingham2" gameId={8002} team={teamAWinner1603}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1604 ? ( 
                                <TeamResult region="birmingham2" gameId={8002} team={teamBWinner1604}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                    </div>

                    <div className="round sweet-16 pt-4">
                        <div className="matchup3--r bg-zinc-700">
                            {teamAWinner1205 ? ( 
                                <TeamResult region="birmingham2" gameId={1603} team={teamAWinner1205}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1206 ? ( 
                                <TeamResult region="birmingham2" gameId={1603} team={teamBWinner1206}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup3-last--r bg-zinc-700">
                            {teamAWinner1207 ? ( 
                                <TeamResult region="birmingham2" gameId={1604} team={teamAWinner1207}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1208 ? ( 
                                <TeamResult region="birmingham2" gameId={1604} team={teamBWinner1208}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                    </div>

                    <div className="round second-round">
                        <div className="matchup2--r mb-11 bg-blue-800">
                            {teamAWinner1109 ? ( 
                                <TeamResult region="birmingham2" gameId={1205} team={teamAWinner1109}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1110 ? ( 
                                <TeamResult region="birmingham2" gameId={1205} team={teamBWinner1110}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup2--r mb-11 bg-blue-800">
                            {teamAWinner1111 ? ( 
                                <TeamResult region="birmingham2" gameId={1206} team={teamAWinner1111}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1112 ? ( 
                                <TeamResult region="birmingham2" gameId={1206} team={teamBWinner1112}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup2--r mb-12 bg-blue-800">
                            {teamAWinner1113 ? ( 
                                <TeamResult region="birmingham2" gameId={1207} team={teamAWinner1113}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1114 ? ( 
                                <TeamResult region="birmingham2" gameId={1207} team={teamBWinner1114}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup2-last--r bg-blue-800">
                            {teamAWinner1115 ? ( 
                                <TeamResult region="birmingham2" gameId={1208} team={teamAWinner1115}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1116 ? ( 
                                <TeamResult region="birmingham2" gameId={1208} team={teamBWinner1116}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                    </div>
                    <div className="round first-round">
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1109} team={{ id: 18, name: 'South Carolina', seed: 1}} />
                            <TeamResult region="birmingham2" gameId={1109} team={{ id: 34, name: 'Tennessee Tech', seed: 16}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1110} team={{ id: 25, name: 'Utah', seed: 8}} />
                            <TeamResult region="birmingham2" gameId={1110} team={{ id: 26, name: 'Indiana', seed: 9}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1111} team={{ id: 22, name: 'Alabama', seed: 5}} />
                            <TeamResult region="birmingham2" gameId={1111} team={{ id: 30, name: 'Green Bay', seed: 12}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1112} team={{ id: 21, name: 'Maryland', seed: 4}} />
                            <TeamResult region="birmingham2" gameId={1112} team={{ id: 31, name: 'Norfolk St', seed: 13}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1113} team={{ id: 23, name: 'West Virginia', seed: 6}} />
                            {teamBWinner1002 ? ( 
                                <TeamResult region="birmingham2" gameId={1113} team={teamBWinner1002}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1114} team={{ id: 20, name: 'North Carolina', seed: 3}} />
                            <TeamResult region="birmingham2" gameId={1114} team={{ id: 32, name: 'Oregon St', seed: 14}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1115} team={{ id: 24, name: 'Vanderbilt', seed: 7}} />
                            <TeamResult region="birmingham2" gameId={1115} team={{ id: 27, name: 'Oregon', seed: 10}} />
                        </div>
                        <div className="matchup--r bg-blue-800">
                            <TeamResult region="birmingham2" gameId={1116} team={{ id: 19, name: 'Duke', seed: 2}} />
                            <TeamResult region="birmingham2" gameId={1116} team={{ id: 33, name: 'Lehigh', seed: 15}} />
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}