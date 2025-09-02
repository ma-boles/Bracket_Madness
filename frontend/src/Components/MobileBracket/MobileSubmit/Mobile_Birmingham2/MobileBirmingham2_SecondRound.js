'use client'
import React, { useState, useEffect } from "react";
import { useBracket } from "@/src/context/BracketContext";
import TeamButton from "@/src/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";
import { useMobileContext } from "@/src/context/MobileContext";


export default function MobileBirmingham2_SecondRound() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const { setSectionStatus } = useMobileContext();
    const sectionId = 'birmingham2_rd2';

    useEffect(() => {
        const sectionGameIds = [1205, 1206, 1207, 1208];
        const regionPicks = userPicks["birmingham2"];

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;

        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);

    // Winners from Round 1
    const teamAWinner1109 = getWinnerFromGame(bracketData, 1109);
    const teamBWinner1110 = getWinnerFromGame(bracketData, 1110);
    const teamAWinner1111 = getWinnerFromGame(bracketData, 1111);
    const teamBWinner1112 = getWinnerFromGame(bracketData, 1112);
    const teamAWinner1113 = getWinnerFromGame(bracketData, 1113);
    const teamBWinner1114 = getWinnerFromGame(bracketData, 1114);
    const teamAWinner1115 = getWinnerFromGame(bracketData, 1115);
    const teamBWinner1116 = getWinnerFromGame(bracketData, 1116);


    return(
        <>
            <div>
                        <div className="bg-white/5 my-4 p-4">
                            {teamAWinner1109 ? ( 
                                <TeamButton region="birmingham2" gameId={1205} team={teamAWinner1109}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1110 ? ( 
                                <TeamButton region="birmingham2" gameId={1205} team={teamBWinner1110}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                        </div>
                        <div className="bg-white/5 my-4 p-4">
                            {teamAWinner1111 ? ( 
                                <TeamButton region="birmingham2" gameId={1206} team={teamAWinner1111}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1112 ? ( 
                                <TeamButton region="birmingham2" gameId={1206} team={teamBWinner1112}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                        </div>
                        <div className="bg-white/5 my-4 p-4">
                            {teamAWinner1113 ? ( 
                                <TeamButton region="birmingham2" gameId={1207} team={teamAWinner1113}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1114 ? ( 
                                <TeamButton region="birmingham2" gameId={1207} team={teamBWinner1114}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                        </div>
                        <div className="bg-white/5 my-4 p-4">
                            {teamAWinner1115 ? ( 
                                <TeamButton region="birmingham2" gameId={1208} team={teamAWinner1115}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1116 ? ( 
                                <TeamButton region="birmingham2" gameId={1208} team={teamBWinner1116}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                        </div>
                </div>
        </>
    )
}