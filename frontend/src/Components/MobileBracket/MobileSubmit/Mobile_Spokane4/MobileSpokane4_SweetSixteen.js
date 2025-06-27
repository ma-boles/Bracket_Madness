'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";

export default function MobileSpokane4_SweetSixteen() {
    const { userPicks, setUserPicks, handlePick, getWinnerFromGame, bracketData } = useBracket();

    // Winners from Round 2
    const teamAWinner1213 = getWinnerFromGame(bracketData, 1213);
    const teamBWinner1214 = getWinnerFromGame(bracketData, 1214);
    const teamAWinner1215 = getWinnerFromGame(bracketData, 1215);
    const teamBWinner1216 = getWinnerFromGame(bracketData, 1216);

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