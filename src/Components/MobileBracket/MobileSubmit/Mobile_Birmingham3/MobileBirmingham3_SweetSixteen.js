'use client'
import React, { useEffect } from "react";
import { useBracket } from "@/src/context/BracketContext";
import TeamButton from "@/src/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";
import { useMobileContext } from "@/src/context/MobileContext";


export default function MobileBirmingham3_SweetSixteen() {
    const { userPicks, bracketData, getWinnerFromGame } = useBracket();
    const { setSectionStatus } = useMobileContext();
    const sectionId = 'birmingham3_sweet16';

    // Winners from Round 2
    const teamAWinner1209 = getWinnerFromGame(bracketData, 1209);
    const teamBWinner1210 = getWinnerFromGame(bracketData, 1210);
    const teamAWinner1211 = getWinnerFromGame(bracketData, 1211);
    const teamBWinner1212 = getWinnerFromGame(bracketData, 1212);

    useEffect(() => {
        const sectionGameIds = [1605, 1606];
        const regionPicks = userPicks["birmingham3"];

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;

        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);

    return (
        <>
              <div>
                    <div className="bg-blue-800 my-4 p-4">
                            {teamAWinner1209 ? (
                                <TeamButton region="birmingham3" gameId={1605} team={teamAWinner1209}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1210 ? (
                                <TeamButton region="birmingham3" gameId={1605} team={teamBWinner1210}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                    </div>
                    <div className="bg-blue-800 my-4 p-4">
                            {teamAWinner1211 ? (
                                <TeamButton region="birmingham3" gameId={1606} team={teamAWinner1211}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1212 ? (
                                <TeamButton region="birmingham3" gameId={1606} team={teamBWinner1212}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                    </div>
                </div>
        </>
    )
}