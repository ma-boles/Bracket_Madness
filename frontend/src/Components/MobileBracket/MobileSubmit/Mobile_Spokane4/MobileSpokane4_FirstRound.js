'use client'
import React, { useState, useEffect } from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import { useMobileContext } from "@/context/MobileContext";

export default function MobileSpokane4_FirstRound() {
    const { userPicks, setUserPicks, handlePick, getWinnerFromGame, bracketData } = useBracket();
    const { setSectionStatus } = useMobileContext();
    const sectionId = 'spokane4_rd1';

    useEffect(() => {
        const sectionGameIds = [1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132];
        const regionPicks = userPicks["spokane4"];

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;

        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);

    return (
        <>
            <div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="spokane4" gameId={1125} team={{ id: 53, name: 'USC', seed: 1}} />
                    <TeamButton region="spokane4" gameId={1125} team={{ id: 68, name: 'UNC Greensboro', seed: 16}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="spokane4" gameId={1126} team={{ id: 60, name: 'California', seed: 8}} />
                    <TeamButton region="spokane4" gameId={1126} team={{ id: 61, name: 'Mississippi St', seed: 9}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="spokane4" gameId={1127} team={{ id: 57, name: 'Kansas St', seed: 5}} />
                    <TeamButton region="spokane4" gameId={1127} team={{ id: 64, name: 'Fairfield', seed: 12}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="spokane4" gameId={1128} team={{ id: 56, name: 'Kentucky', seed: 4}} />
                    <TeamButton region="spokane4" gameId={1128} team={{ id: 65, name: 'Liberty', seed: 13}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="spokane4" gameId={1129} team={{ id: 58, name: 'Iowa', seed: 6}} />
                    <TeamButton region="spokane4" gameId={1129} team={{ id: 63, name: 'Murray St', seed: 11}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="spokane4" gameId={1130} team={{ id: 55, name: 'Oklahoma', seed: 3}} />
                    <TeamButton region="spokane4" gameId={1130} team={{ id: 66, name: 'FGCU', seed: 14}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="spokane4" gameId={1131} team={{ id: 59, name: 'Oklahoma St', seed: 7}} />
                    <TeamButton region="spokane4" gameId={1131} team={{ id: 62, name: 'S Dakota St', seed: 14}} />
                </div>
                <div className="bg-blue-600/40 my-4 p-4">
                    <TeamButton region="spokane4" gameId={1132} team={{ id: 54, name: 'UCONN', seed: 2}} />
                    <TeamButton region="spokane4" gameId={1132} team={{ id: 67, name: 'Arkansas St', seed: 15}} />
                </div>
            </div>  
        </>
    )
}