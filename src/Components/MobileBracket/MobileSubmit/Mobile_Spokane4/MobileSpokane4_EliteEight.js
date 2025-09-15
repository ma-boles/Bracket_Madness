'use client'
import React, { useEffect } from "react";
import { useBracket } from "@/src/context/BracketContext";
import TeamButton from "@/src/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";
import { useMobileContext } from "@/src/context/MobileContext";


export default function MobileSpokane4_EliteElight() {
    const { userPicks, getWinnerFromGame, bracketData } = useBracket();
    const { setSectionStatus } = useMobileContext();
    const sectionId = 'spokane4_elite8';

    // Winners from Sweet 16
    const teamAWinner1607 = getWinnerFromGame(bracketData, 1607);
    const teamBWinner1608 = getWinnerFromGame(bracketData, 1608);

    useEffect(() => {
        const sectionGameIds = [8004];
        const regionPicks = userPicks["spokane4"];

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;

        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);
    
    return(
        <>
            <div>
                <div className="bg-white/5 my-4 p-4">
                    {teamAWinner1607 ? (
                            <TeamButton region="spokane4" gameId={8004} team={teamAWinner1607}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                    {teamBWinner1608 ? (
                            <TeamButton region="spokane4" gameId={8004} team={teamBWinner1608}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                </div>
            </div>
        </>
    )
}