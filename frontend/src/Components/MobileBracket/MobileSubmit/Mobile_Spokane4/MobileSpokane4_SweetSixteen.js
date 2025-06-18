'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";

export default function MobileSpokane4_SweetSixteen() {
    const { userPicks, setUserPicks, handlePick, getWinnerFromGame, bracketData } = useBracket();

    // Winners from Round 2
    const teamAWinner1213 = getWinnerFromGame(bracketData, 1213);
    const teamBWinner1214 = getWinnerFromGame(bracketData, 1214);
    const teamAWinner1215 = getWinnerFromGame(bracketData, 1215);
    const teamBWinner1216 = getWinnerFromGame(bracketData, 1216);

    return (
        <>
            <div className="round sweet-16 pt-4">
                <div className="matchup3  bg-zinc-700">
                    {teamAWinner1213 ? (
                        <TeamButton region="spokane4" gameId={1607} team={teamAWinner1213}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                        {teamBWinner1214 ? (
                            <TeamButton region="spokane4" gameId={1607} team={teamBWinner1214}/>
                        ) : (
                            <p className="team">Select...</p>
                                )}
                </div>
                <div className="matchup3-last bg-zinc-700">
                    {teamAWinner1215 ? (
                        <TeamButton region="spokane4" gameId={1608} team={teamAWinner1215}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                    {teamBWinner1216 ? (
                        <TeamButton region="spokane4" gameId={1608} team={teamBWinner1216}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                </div>
            </div>
        </>
    )
}