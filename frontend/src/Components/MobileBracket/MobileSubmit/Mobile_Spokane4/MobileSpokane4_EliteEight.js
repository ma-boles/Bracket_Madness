'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";

export default function MobileSpokane4_EliteElight() {
    const { userPicks, setUserPicks, handlePick, getWinnerFromGame, bracketData } = useBracket();

    // Winners from Sweet 16
    const teamAWinner1607 = getWinnerFromGame(bracketData, 1607);
    const teamBWinner1608 = getWinnerFromGame(bracketData, 1608);

    return(
        <>
            <div>
                <div className="bg-white/5 my-4 p-4">
                    {teamAWinner1607 ? (
                            <TeamButton region="spokane4" gameId={8004} team={teamAWinner1607}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                    {teamBWinner1608 ? (
                            <TeamButton region="spokane4" gameId={8004} team={teamBWinner1608}/>
                        ) : (
                            <SelectPlaceholder />
                        )}
                </div>
            </div>
        </>
    )
}