'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";


export default function MobileBirmingham3_SecondRound() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();

    // Winners from Round 1
    const teamAWinner1117 = getWinnerFromGame(bracketData, 1117);
    const teamBWinner1118 = getWinnerFromGame(bracketData, 1118);
    const teamAWinner1119 = getWinnerFromGame(bracketData, 1119);
    const teamBWinner1120 = getWinnerFromGame(bracketData, 1120);
    const teamAWinner1121 = getWinnerFromGame(bracketData, 1121);
    const teamBWinner1122 = getWinnerFromGame(bracketData, 1122);
    const teamAWinner1123 = getWinnerFromGame(bracketData, 1123);
    const teamBWinner1124 = getWinnerFromGame(bracketData, 1124);

    return (
        <>
            <div className="round second-round">
                    <div className="matchup2--r mb-11 bg-blue-800">
                        {teamAWinner1117 ? (
                                <TeamButton region="birmingham3" gameId={1209} team={teamAWinner1117}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1118 ? (
                                <TeamButton region="birmingham3" gameId={1209} team={teamBWinner1118}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}   
                    </div>
                    <div className="matchup2--r mb-11 bg-blue-800">
                            {teamAWinner1119 ? (
                                <TeamButton region="birmingham3" gameId={1210} team={teamAWinner1119}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1120 ? (
                                <TeamButton region="birmingham3" gameId={1210} team={teamBWinner1120}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                    </div>
                    <div className="matchup2--r mb-12 bg-blue-800">
                            {teamAWinner1121 ? (
                                <TeamButton region="birmingham3" gameId={1211} team={teamAWinner1121}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1122 ? (
                                <TeamButton region="birmingham3" gameId={1211} team={teamBWinner1122}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                    </div>
                    <div className="matchup2-last--r bg-blue-800">
                            {teamAWinner1123 ? (
                                <TeamButton region="birmingham3" gameId={1212} team={teamAWinner1123}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1124 ? (
                                <TeamButton region="birmingham3" gameId={1212} team={teamBWinner1124}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                    </div>
                </div>
        </>
    )
}