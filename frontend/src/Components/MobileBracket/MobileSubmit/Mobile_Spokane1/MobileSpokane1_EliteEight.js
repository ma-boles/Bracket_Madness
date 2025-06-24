'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import dynamic from 'next/dynamic';
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";



export default function MobileSpokane1_EliteEight () {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const Select = dynamic(() => import('react-select'), { ssr: false });

    // Winners from Sweet 16
    const teamAWinner1601 = getWinnerFromGame(bracketData, 1601);
    const teamBWinner1602 = getWinnerFromGame(bracketData, 1602);

    return (
        <>
            <div className="p-4 bg-gray-600/20">
                    <div className="m-2">
                            {teamAWinner1601 ? ( 
                                    <TeamButton region="spokane1" gameId={8001} team={teamAWinner1601}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}
                                {teamBWinner1602 ? ( 
                                    <TeamButton region="spokane1" gameId={8001} team={teamBWinner1602}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}
                    </div>
                </div>
        </>
    )
}