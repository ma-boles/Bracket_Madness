'use client'
import React, { useState, useEffect } from "react";
import { useBracket } from "@/context/BracketContext";
import dynamic from 'next/dynamic';
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";



export default function MobileSpokane1_EliteEight ({ sectionId }) {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const [ sectionStatus, setSectionStatus ] = useState();
    
    const Select = dynamic(() => import('react-select'), { ssr: false });

    // Winners from Sweet 16
    const teamAWinner1601 = getWinnerFromGame(bracketData, 1601);
    const teamBWinner1602 = getWinnerFromGame(bracketData, 1602);

    useEffect(() => {
        const sectionGameIds = [8001];
        const regionPicks = userPicks["spokane1"];

        const pickedCount = sectionGameIds.filter((gameId) > regionPicks[gameId]?.winnerId).length;

        const missingCount = sectionGameIds.length - pickedCount;

        setSectionStatus(sectionId, missingCount);
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