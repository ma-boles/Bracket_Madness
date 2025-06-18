'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";

export default function MobileSpokane4_EliteElight() {
    const { userPicks, setUserPicks, handlePick, getWinnerFromGame, bracketData } = useBracket();

    // Winners from Sweet 16
    const teamAWinner1607 = getWinnerFromGame(bracketData, 1607);
    const teamBWinner1608 = getWinnerFromGame(bracketData, 1608);

    return(
        <>
            <div className="round elite8">
                <div className="matchup4 bg-zinc-700">
                    {teamAWinner1607 ? (
                            <TeamButton region="spokane4" gameId={8004} team={teamAWinner1607}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                    {teamBWinner1608 ? (
                            <TeamButton region="spokane4" gameId={8004} team={teamBWinner1608}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                </div>
            </div>
        </>
    )
}