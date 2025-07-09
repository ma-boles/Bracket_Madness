'use client'
import React, { useState, useEffect } from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";
import { useMobileContext } from "@/context/MobileContext";


export default function MobileBirmingham3_FirstRound() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const { setSectionStatus } = useMobileContext();
    const sectionId = 'birmingham3_rd1';

    // Winners from First Four
    const teamBWinner1003 = getWinnerFromGame(bracketData, 1003);
    const teamBWinner1004 = getWinnerFromGame(bracketData, 1004);
    
    useEffect(() => {
        const sectionGameIds = [1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124];
        const regionPicks = userPicks["birmingham3"];

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;

        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);

    return(
        <>
            <div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="birmingham3" gameId={1117} team={{ id: 35, name: 'Texas', seed: 1}} />
                    {teamBWinner1004 ? (
                        <TeamButton region="birmingham3" gameId={1117} team={teamBWinner1004}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="birmingham3" gameId={1118} team={{ id: 42, name: 'Illinois', seed: 8}} />
                    <TeamButton region="birmingham3" gameId={1118} team={{ id: 43, name: 'Creighton', seed: 9}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="birmingham3" gameId={1119} team={{ id: 39, name: 'Tennessee', seed: 5}} />
                    <TeamButton region="birmingham3" gameId={1119} team={{ id: 47, name: 'South Florida', seed: 12}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="birmingham3" gameId={1120} team={{ id: 38, name: 'Ohio State', seed: 4}} />
                    <TeamButton region="birmingham3" gameId={1120} team={{ id: 48, name: 'Montana St', seed: 13}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="birmingham3" gameId={1121} team={{ id: 40, name: 'Michigan', seed: 6}} />
                    {teamBWinner1003 ? (
                        <TeamButton region="birmingham3" gameId={1121} team={teamBWinner1003}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="birmingham3" gameId={1122} team={{ id: 37, name: 'Notre Dame', seed: 3}} />
                    <TeamButton region="birmingham3" gameId={1122} team={{ id: 49, name: 'SF Austin', seed: 14}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="birmingham3" gameId={1123} team={{ id: 41, name: 'Louisville', seed: 7}} />
                    <TeamButton region="birmingham3" gameId={1123} team={{ id: 44, name: 'Nebraska', seed: 10}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="birmingham3" gameId={1124} team={{ id: 36, name: 'TCU', seed: 2}} />
                    <TeamButton region="birmingham3" gameId={1124} team={{ id: 50, name: 'Fair Dickinson', seed: 15}} />
                </div>
            </div>
        </>
    )
}