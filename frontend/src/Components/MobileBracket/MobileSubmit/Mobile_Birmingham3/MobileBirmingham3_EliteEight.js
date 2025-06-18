'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";


export default function MobileBirmingham3_EliteEight() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    
    // Winners from Sweet 16
    const teamAWinner1605 = getWinnerFromGame(bracketData, 1605);
    const teamBWinner1606 = getWinnerFromGame(bracketData, 1606);


    return (
        <>
            <div className="round elite8">
                <div className="matchup4--r bg-zinc-700">
                    {teamAWinner1605 ? (
                        <TeamButton region="birmingham3" gameId={8003} team={teamAWinner1605}/>
                    ) : (
                        <p className="team">Select...</p>
                    )}
                    {teamBWinner1606 ? (
                        <TeamButton region="birmingham3" gameId={8003} team={teamBWinner1606}/>
                    ) : (
                        <p className="team">Select...</p>
                    )}
                </div>
            </div>  
        </>
    )
}