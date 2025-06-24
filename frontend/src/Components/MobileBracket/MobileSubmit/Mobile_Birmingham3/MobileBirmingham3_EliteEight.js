'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";


export default function MobileBirmingham3_EliteEight() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    
    // Winners from Sweet 16
    const teamAWinner1605 = getWinnerFromGame(bracketData, 1605);
    const teamBWinner1606 = getWinnerFromGame(bracketData, 1606);


    return (
        <>
            <div className="p-4 bg-gray-600/20">
                <div className="m-2">
                    {teamAWinner1605 ? (
                        <TeamButton region="birmingham3" gameId={8003} team={teamAWinner1605}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                    {teamBWinner1606 ? (
                        <TeamButton region="birmingham3" gameId={8003} team={teamBWinner1606}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                </div>
            </div>  
        </>
    )
}