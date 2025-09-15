'use client'
import React, { useEffect } from "react";
import { useBracket } from "@/src/context/BracketContext";
import TeamButton from "@/src/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";
import { useMobileContext } from "@/src/context/MobileContext";



export default function MobileSpokane1_EliteEight () {
    const { userPicks, bracketData, getWinnerFromGame } = useBracket();
    const { setSectionStatus } = useMobileContext();
    const sectionId = 'spokane1_elite8';

    // Winners from Sweet 16
    const teamAWinner1601 = getWinnerFromGame(bracketData, 1601);
    const teamBWinner1602 = getWinnerFromGame(bracketData, 1602);

    useEffect(() => {
        const sectionGameIds = [8001];
        const regionPicks = userPicks["spokane1"];

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;
        
        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);


    return (
        <>
            <div>
                    <div className="bg-white/5 my-4 p-4">
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