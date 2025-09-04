'use client'
import React, { useEffect} from "react";
import { useBracket } from "@/src/context/BracketContext";
import TeamButton from "@/src/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";
import { useMobileContext } from "@/src/context/MobileContext";


export default function MobileBirmingham3_SecondRound() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const { setSectionStatus } = useMobileContext();
    const sectionId = 'birmingham3_rd2';

    // Winners from Round 1
    const teamAWinner1117 = getWinnerFromGame(bracketData, 1117);
    const teamBWinner1118 = getWinnerFromGame(bracketData, 1118);
    const teamAWinner1119 = getWinnerFromGame(bracketData, 1119);
    const teamBWinner1120 = getWinnerFromGame(bracketData, 1120);
    const teamAWinner1121 = getWinnerFromGame(bracketData, 1121);
    const teamBWinner1122 = getWinnerFromGame(bracketData, 1122);
    const teamAWinner1123 = getWinnerFromGame(bracketData, 1123);
    const teamBWinner1124 = getWinnerFromGame(bracketData, 1124);

    useEffect(() => {
        const sectionGameIds = [1209, 1210, 1211, 1212];
        const regionPicks = userPicks["birmingham3"];

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;
        
        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);


    return (
        <>
            <div>
                    <div className="bg-white/5 my-4 p-4">
                        {teamAWinner1117 ? (
                                <TeamButton region="birmingham3" gameId={1209} team={teamAWinner1117}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1118 ? (
                                <TeamButton region="birmingham3" gameId={1209} team={teamBWinner1118}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                    </div>
                    <div className="bg-white/5 my-4 p-4">
                            {teamAWinner1119 ? (
                                <TeamButton region="birmingham3" gameId={1210} team={teamAWinner1119}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1120 ? (
                                <TeamButton region="birmingham3" gameId={1210} team={teamBWinner1120}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                    </div>
                    <div className="bg-white/5 my-4 p-4">
                            {teamAWinner1121 ? (
                                <TeamButton region="birmingham3" gameId={1211} team={teamAWinner1121}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1122 ? (
                                <TeamButton region="birmingham3" gameId={1211} team={teamBWinner1122}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                    </div>
                    <div className="bg-white/5 my-4 p-4">
                            {teamAWinner1123 ? (
                                <TeamButton region="birmingham3" gameId={1212} team={teamAWinner1123}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1124 ? (
                                <TeamButton region="birmingham3" gameId={1212} team={teamBWinner1124}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                    </div>
                </div>
        </>
    )
}