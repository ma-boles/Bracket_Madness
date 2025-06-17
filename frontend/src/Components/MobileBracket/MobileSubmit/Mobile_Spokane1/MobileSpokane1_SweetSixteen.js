'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import dynamic from 'next/dynamic';
import TeamButton from "@/Components/TeamButton";



export default function MobileSpokane1_SweetSixteen () {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const Select = dynamic(() => import('react-select'), { ssr: false });

    // Winners from Round 2
    const teamAWinner1201 = getWinnerFromGame(bracketData, 1201);
    const teamBWinner1202 = getWinnerFromGame(bracketData, 1202);
    const teamAWinner1203 = getWinnerFromGame(bracketData, 1203);
    const teamBWinner1204 = getWinnerFromGame(bracketData, 1204);


    return (
        <>
            <div className="round sweet-16 pt-4">
                    <div className="matchup3 bg-zinc-700">
                            {teamAWinner1201 ? ( 
                                    <TeamButton region="spokane1" gameId={1601} team={teamAWinner1201}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                                {teamBWinner1202 ? ( 
                                    <TeamButton region="spokane1" gameId={1601} team={teamBWinner1202}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                    </div>
                    <div className="matchup3-last bg-zinc-700">
                            {teamAWinner1203 ? ( 
                                    <TeamButton region="spokane1" gameId={1602} team={teamAWinner1203}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                                {teamBWinner1204 ? ( 
                                    <TeamButton region="spokane1" gameId={1602} team={teamBWinner1204}/>
                                ) : (
                                    <p className="team">Select...</p>
                                )}
                    </div>
                </div>
        </>
    )
}