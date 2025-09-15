'use client'
import React, { useEffect } from "react";
import { useBracket } from "@/src/context/BracketContext";
import TeamButton from "@/src/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";
import { useMobileContext } from "@/src/context/MobileContext";


export default function MobileBirmingham2_EliteEight() {
    const { userPicks, bracketData, getWinnerFromGame } = useBracket();
    const { setSectionStatus } = useMobileContext();
    const sectionId = 'birmingham2_elite8';

    // Winners from Sweet 16
    const teamAWinner1603 = getWinnerFromGame(bracketData, 1603);
    const teamBWinner1604 = getWinnerFromGame(bracketData, 1604);

    useEffect(() => {
        const sectionGameIds = [8002];
        const regionPicks = userPicks["birmingham2"];

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;

        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);


    return (
        <>
            <div>
                <div className="bg-white/5 my-4 p-4">
                    {teamAWinner1603 ? ( 
                        <TeamButton region="birmingham2" gameId={8002} team={teamAWinner1603}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                    {teamBWinner1604 ? ( 
                        <TeamButton region="birmingham2" gameId={8002} team={teamBWinner1604}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                </div>
            </div>
        </>
    )
}