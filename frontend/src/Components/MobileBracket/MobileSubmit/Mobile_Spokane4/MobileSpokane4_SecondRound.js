'use client'
import React, { useState, useEffect } from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";

export default function MobileSpokane4_SecondRound({ sectionId }) {
    const { userPicks, setUserPicks, handlePick, getWinnerFromGame, bracketData } = useBracket();
    const [ sectionStatus, setSectionStatus ] = useState(false);

    // Winners from Round 1
    const teamAWinner1125 = getWinnerFromGame(bracketData, 1125);
    const teamBWinner1126 = getWinnerFromGame(bracketData, 1126);
    const teamAWinner1127 = getWinnerFromGame(bracketData, 1127);
    const teamBWinner1128 = getWinnerFromGame(bracketData, 1128);
    const teamAWinner1129 = getWinnerFromGame(bracketData, 1129);
    const teamBWinner1130 = getWinnerFromGame(bracketData, 1130);
    const teamAWinner1131 = getWinnerFromGame(bracketData, 1131);
    const teamBWinner1132 = getWinnerFromGame(bracketData, 1132);


    useEffect(() => {
        const sectionGameIds = [1213, 1214, 1215, 1216];
        const regionPicks = userPicks["spokane4"];

        const pickedCount = sectionGameIds.filter((gameId) => !!regionPicks[gameId]?.winnerId).length;
        
        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);

    return (
        <>
            <div>
                <div className="bg-white/5 my-4 p-4">
                        {teamAWinner1125 ? (
                            <TeamButton region="spokane4" gameId={1213} team={teamAWinner1125}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                        {teamBWinner1126 ? (
                            <TeamButton region="spokane4" gameId={1213} team={teamBWinner1126}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                </div>
                <div className="bg-white/5 my-4 p-4">
                        {teamAWinner1127 ? (
                            <TeamButton region="spokane4" gameId={1214} team={teamAWinner1127}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                        {teamBWinner1128 ? (
                            <TeamButton region="spokane4" gameId={1214} team={teamBWinner1128}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                </div>
                <div className="bg-white/5 my-4 p-4">
                        {teamAWinner1129 ? (
                            <TeamButton region="spokane4" gameId={1215} team={teamAWinner1129}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                        {teamBWinner1130 ? (
                            <TeamButton region="spokane4" gameId={1215} team={teamBWinner1130}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                </div>
                <div className="bg-white/5 my-4 p-4">
                        {teamAWinner1131 ? (
                            <TeamButton region="spokane4" gameId={1216} team={teamAWinner1131}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                        {teamBWinner1132 ? (
                            <TeamButton region="spokane4" gameId={1216} team={teamBWinner1132}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                </div>
            </div>
        </>
    )
}