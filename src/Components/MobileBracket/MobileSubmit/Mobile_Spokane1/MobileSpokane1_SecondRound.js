'use client'
import React, { useEffect } from "react";
import { useBracket } from "@/src/context/BracketContext";
import TeamButton from "@/src/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";
import { useMobileContext } from "@/src/context/MobileContext";


export default function MobileSpokane1_SecondRound () {
    const { userPicks, bracketData, getWinnerFromGame } = useBracket();
    const { setSectionStatus } = useMobileContext();
    const sectionId = 'spokane1_rd2';

    // Winners from Round 1
    const teamAWinner1101 = getWinnerFromGame(bracketData, 1101);
    const teamBWinner1102 = getWinnerFromGame(bracketData, 1102);
    const teamAWinner1103 = getWinnerFromGame(bracketData, 1103);
    const teamBWinner1104 = getWinnerFromGame(bracketData, 1104);
    const teamAWinner1105 = getWinnerFromGame(bracketData, 1105);
    const teamBWinner1106 = getWinnerFromGame(bracketData, 1106);
    const teamAWinner1107 = getWinnerFromGame(bracketData, 1107);
    const teamBWinner1108 = getWinnerFromGame(bracketData, 1108);

    useEffect(() => {
        const sectionGameIds = [1201, 1202, 1203, 1204];
        const regionPicks = userPicks["spokane1"];

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;

        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);

    return (
            <>
                <div>
                        <div className=" bg-white/5 my-4 p-4">
                            {teamAWinner1101 ? ( 
                                    <TeamButton region="spokane1" gameId={1201} team={teamAWinner1101}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}
                                {teamBWinner1102 ? ( 
                                    <TeamButton region="spokane1" gameId={1201} team={teamBWinner1102}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}
                        </div>
                        <div className="bg-white/5 my-4 p-4">
                            {teamAWinner1103 ? ( 
                                    <TeamButton region="spokane1" gameId={1202} team={teamAWinner1103}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}
                                {teamBWinner1104 ? ( 
                                    <TeamButton region="spokane1" gameId={1202} team={teamBWinner1104}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}
                        </div>
                        <div className="bg-white/5 my-4 p-4">
                            {teamAWinner1105 ? ( 
                                    <TeamButton region="spokane1" gameId={1203} team={teamAWinner1105}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}
                                {teamBWinner1106 ? ( 
                                    <TeamButton region="spokane1" gameId={1203} team={teamBWinner1106}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}
                        </div>
                        <div className="bg-white/5 my-4 p-4">
                            {teamAWinner1107 ? ( 
                                    <TeamButton region="spokane1" gameId={1204} team={teamAWinner1107}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}
                                {teamBWinner1108 ? ( 
                                    <TeamButton region="spokane1" gameId={1204} team={teamBWinner1108}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}
                        </div>
                    </div>
            </>
        )
    }