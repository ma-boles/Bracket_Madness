'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";


export default function MobileBirmingham3_SweetSixteen() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    
    // Winners from Round 2
    const teamAWinner1209 = getWinnerFromGame(bracketData, 1209);
    const teamBWinner1210 = getWinnerFromGame(bracketData, 1210);
    const teamAWinner1211 = getWinnerFromGame(bracketData, 1211);
    const teamBWinner1212 = getWinnerFromGame(bracketData, 1212);


    return (
        <>
              <div className="round sweet-16 pt-4">
                    <div className="matchup3--r bg-zinc-700">
                            {teamAWinner1209 ? (
                                <TeamButton region="birmingham3" gameId={1605} team={teamAWinner1209}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1210 ? (
                                <TeamButton region="birmingham3" gameId={1605} team={teamBWinner1210}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                    </div>
                    <div className="matchup3-last--r bg-zinc-700">
                            {teamAWinner1211 ? (
                                <TeamButton region="birmingham3" gameId={1606} team={teamAWinner1211}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                            {teamBWinner1212 ? (
                                <TeamButton region="birmingham3" gameId={1606} team={teamBWinner1212}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                    </div>
                </div>
        </>
    )
}