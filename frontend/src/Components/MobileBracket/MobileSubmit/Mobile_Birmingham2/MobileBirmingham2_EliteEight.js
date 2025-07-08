'use client'
import React, { useState, useEffect } from "react";
import { useBracket  } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";


export default function MobileBirmingham2_EliteEight({ sectionId }) {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const [ sectionStatus, setSectionStatus ] = useState(false);

    // Winners from Sweet 16
    const teamAWinner1603 = getWinnerFromGame(bracketData, 1603);
    const teamBWinner1604 = getWinnerFromGame(bracketData, 1604);

    useEffect(() => {
        const sectionGameIds = [8002];
        const regionPicks = userPicks["birmingham2"];

        const pickedCount = sectionGameIds.filter((gameId) => !!regionPicks[gameId]?.winnerId).length;

        const complete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, complete);
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