'use client'
import React, { useState, useEffect } from "react";
import { useBracket  } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";
import { useMobileContext } from "@/context/MobileContext";

export default function MobileBirmingham2_SweetSixteen() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const { setSectionStatus } = useMobileContext();
    const sectionId = 'birmingham2_sweet16';

    // Winners from Round 2
    const teamAWinner1205 = getWinnerFromGame(bracketData, 1205);
    const teamBWinner1206 = getWinnerFromGame(bracketData, 1206);
    const teamAWinner1207 = getWinnerFromGame(bracketData, 1207);
    const teamBWinner1208 = getWinnerFromGame(bracketData, 1208);

    useEffect(() => {
        const sectionGameIds = [1603, 1604];
        const regionPicks = userPicks["birmingham2"];

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;
        
        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);


    return(
        <>

            <div>
                <div className="bg-blue-600/40 my-4 p-4">
                    {teamAWinner1205 ? ( 
                        <TeamButton region="birmingham2" gameId={1603} team={teamAWinner1205}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                    {teamBWinner1206 ? ( 
                        <TeamButton region="birmingham2" gameId={1603} team={teamBWinner1206}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    {teamAWinner1207 ? ( 
                        <TeamButton region="birmingham2" gameId={1604} team={teamAWinner1207}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                    {teamBWinner1208 ? ( 
                        <TeamButton region="birmingham2" gameId={1604} team={teamBWinner1208}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                </div>
            </div>
        </>
    )
}