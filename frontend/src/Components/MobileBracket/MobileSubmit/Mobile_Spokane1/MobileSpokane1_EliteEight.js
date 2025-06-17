'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import dynamic from 'next/dynamic';
import TeamButton from "@/Components/TeamButton";



export default function MobileSpokane1_EliteEight () {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const Select = dynamic(() => import('react-select'), { ssr: false });

    // Winners from Sweet 16
    const teamAWinner1601 = getWinnerFromGame(bracketData, 1601);
    const teamBWinner1602 = getWinnerFromGame(bracketData, 1602);

    return (
        <>
            <div className="round elite8">
                    <div className="matchup4 bg-zinc-700">
                            {teamAWinner1601 ? ( 
                                    <TeamButton region="spokane1" gameId={8001} team={teamAWinner1601}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                                {teamBWinner1602 ? ( 
                                    <TeamButton region="spokane1" gameId={8001} team={teamBWinner1602}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                    </div>
                </div>
        </>
    )
}