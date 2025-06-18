'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";

export default function MobileSpokane4_SecondRound() {
    const { userPicks, setUserPicks, handlePick, getWinnerFromGame, bracketData } = useBracket();

    // Winners from Round 1
    const teamAWinner1125 = getWinnerFromGame(bracketData, 1125);
    const teamBWinner1126 = getWinnerFromGame(bracketData, 1126);
    const teamAWinner1127 = getWinnerFromGame(bracketData, 1127);
    const teamBWinner1128 = getWinnerFromGame(bracketData, 1128);
    const teamAWinner1129 = getWinnerFromGame(bracketData, 1129);
    const teamBWinner1130 = getWinnerFromGame(bracketData, 1130);
    const teamAWinner1131 = getWinnerFromGame(bracketData, 1131);
    const teamBWinner1132 = getWinnerFromGame(bracketData, 1132);

    return (
        <>
            <div className="round second-round">
                <div className="matchup2 mb-11 bg-blue-800">
                        {teamAWinner1125 ? (
                            <TeamButton region="spokane4" gameId={1213} team={teamAWinner1125}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                        {teamBWinner1126 ? (
                            <TeamButton region="spokane4" gameId={1213} team={teamBWinner1126}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                </div>
                <div className="matchup2 mb-11 bg-blue-800">
                        {teamAWinner1127 ? (
                            <TeamButton region="spokane4" gameId={1214} team={teamAWinner1127}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                        {teamBWinner1128 ? (
                            <TeamButton region="spokane4" gameId={1214} team={teamBWinner1128}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                </div>
                <div className="matchup2 mb-13 bg-blue-800">
                        {teamAWinner1129 ? (
                            <TeamButton region="spokane4" gameId={1215} team={teamAWinner1129}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                        {teamBWinner1130 ? (
                            <TeamButton region="spokane4" gameId={1215} team={teamBWinner1130}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                </div>
                <div className="matchup2-last bg-blue-800">
                        {teamAWinner1131 ? (
                            <TeamButton region="spokane4" gameId={1216} team={teamAWinner1131}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                        {teamBWinner1132 ? (
                            <TeamButton region="spokane4" gameId={1216} team={teamBWinner1132}/>
                        ) : (
                            <p className="team">Select...</p>
                        )}
                </div>
            </div>
        </>
    )
}