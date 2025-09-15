'use client'
import React, { useEffect } from "react";
import { useBracket } from "@/src/context/BracketContext";
import TeamButton from "@/src/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";
import { useMobileContext } from "@/src/context/MobileContext";


export default function MobileBirmingham3_EliteEight() {
    const { userPicks, bracketData, getWinnerFromGame } = useBracket();
    const { setSectionStatus } = useMobileContext();
    const sectionId = 'birmingham3_elite8';

    // Winners from Sweet 16
    const teamAWinner1605 = getWinnerFromGame(bracketData, 1605);
    const teamBWinner1606 = getWinnerFromGame(bracketData, 1606);

    useEffect(() => {
        const sectionGameIds = [8003];
        const regionPicks = userPicks["birmingham3"];

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;
        
        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
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