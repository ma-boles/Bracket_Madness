'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";


export default function MobileBirmingham3_FirstRound() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    
    // Winners from First Four
    const teamBWinner1003 = getWinnerFromGame(bracketData, 1003);
    const teamBWinner1004 = getWinnerFromGame(bracketData, 1004);
    
    return(
        <>
            <div className="round first-round">
                <div className="matchup--r bg-blue-800">
                    <TeamButton region="birmingham3" gameId={1117} team={{ id: 35, name: 'Texas', seed: 1}} />
                    {teamBWinner1004 ? (
                        <TeamButton region="birmingham3" gameId={1117} team={teamBWinner1004}/>
                    ) : (
                        <p className="team">Select...</p>
                    )}
                </div>
                <div className="matchup--r bg-blue-800">
                    <TeamButton region="birmingham3" gameId={1118} team={{ id: 42, name: 'Illinois', seed: 8}} />
                    <TeamButton region="birmingham3" gameId={1118} team={{ id: 43, name: 'Creighton', seed: 9}} />
                </div>
                <div className="matchup--r bg-blue-800">
                    <TeamButton region="birmingham3" gameId={1119} team={{ id: 39, name: 'Tennessee', seed: 5}} />
                    <TeamButton region="birmingham3" gameId={1119} team={{ id: 47, name: 'South Florida', seed: 12}} />
                </div>
                <div className="matchup--r bg-blue-800">
                    <TeamButton region="birmingham3" gameId={1120} team={{ id: 38, name: 'Ohio State', seed: 4}} />
                    <TeamButton region="birmingham3" gameId={1120} team={{ id: 48, name: 'Montana St', seed: 13}} />
                </div>
                <div className="matchup--r bg-blue-800">
                    <TeamButton region="birmingham3" gameId={1121} team={{ id: 40, name: 'Michigan', seed: 6}} />
                    {teamBWinner1003 ? (
                        <TeamButton region="birmingham3" gameId={1121} team={teamBWinner1003}/>
                    ) : (
                        <p className="team">Select...</p>
                    )}
                </div>
                <div className="matchup--r bg-blue-800">
                    <TeamButton region="birmingham3" gameId={1122} team={{ id: 37, name: 'Notre Dame', seed: 3}} />
                    <TeamButton region="birmingham3" gameId={1122} team={{ id: 49, name: 'SF Austin', seed: 14}} />
                </div>
                <div className="matchup--r bg-blue-800">
                    <TeamButton region="birmingham3" gameId={1123} team={{ id: 41, name: 'Louisville', seed: 7}} />
                    <TeamButton region="birmingham3" gameId={1123} team={{ id: 44, name: 'Nebraska', seed: 10}} />
                </div>
                <div className="matchup--r bg-blue-800">
                    <TeamButton region="birmingham3" gameId={1124} team={{ id: 36, name: 'TCU', seed: 2}} />
                    <TeamButton region="birmingham3" gameId={1124} team={{ id: 50, name: 'Fair Dickinson', seed: 15}} />
                </div>
            </div>
        </>
    )
}