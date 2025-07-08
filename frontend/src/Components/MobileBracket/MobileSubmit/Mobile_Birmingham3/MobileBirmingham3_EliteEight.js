'use client'
import React, { useState, useEffect } from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";


export default function MobileBirmingham3_EliteEight({ sectionId }) {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const [ sectionStatus, setSectionStatus ] = useState(false);
    
    // Winners from Sweet 16
    const teamAWinner1605 = getWinnerFromGame(bracketData, 1605);
    const teamBWinner1606 = getWinnerFromGame(bracketData, 1606);

    useEffect(() => {
        const sectionGameIds = [8003];
        const regionPicks = userPicks["birmingham3"];

        const pickedCount = sectionGameIds.filter((gameId) => !!regionPicks[gameId]?.winnerId).length;
        
        const complete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, complete);
    },[userPicks, sectionId, setSectionStatus]);

    return (
        <>
            <div>
                <div className="bg-white/5 my-4 p-4">
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