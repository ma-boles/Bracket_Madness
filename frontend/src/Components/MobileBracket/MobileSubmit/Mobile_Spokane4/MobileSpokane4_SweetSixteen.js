'use client'
import React, { useState, useEffect } from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";

export default function MobileSpokane4_SweetSixteen({ sectionId }) {
    const { userPicks, setUserPicks, handlePick, getWinnerFromGame, bracketData } = useBracket();
    const [ sectionStatus, setSectionStatus ] = useState();

    // Winners from Round 2
    const teamAWinner1213 = getWinnerFromGame(bracketData, 1213);
    const teamBWinner1214 = getWinnerFromGame(bracketData, 1214);
    const teamAWinner1215 = getWinnerFromGame(bracketData, 1215);
    const teamBWinner1216 = getWinnerFromGame(bracketData, 1216);


    useEffect(() => {
        const sectionGameIds = [1607, 1608];
        const regionPicks = userPicks["spokane4"];

        const pickedCount = sectionGameIds.filter((gameId) > regionPicks[gameId]?.winnerId).length;

        const missingCount = sectionGameIds.length - pickedCount;

        setSectionStatus(sectionId, missingCount);
    },[userPicks, sectionId, setSectionStatus]);

    return (
        <>
            <div>
                <div className="bg-blue-600/40 my-4 p-4">
                    {teamAWinner1213 ? (
                        <TeamButton region="spokane4" gameId={1607} team={teamAWinner1213}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                        {teamBWinner1214 ? (
                            <TeamButton region="spokane4" gameId={1607} team={teamBWinner1214}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    {teamAWinner1215 ? (
                        <TeamButton region="spokane4" gameId={1608} team={teamAWinner1215}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                    {teamBWinner1216 ? (
                        <TeamButton region="spokane4" gameId={1608} team={teamBWinner1216}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                </div>
            </div>
        </>
    )
}