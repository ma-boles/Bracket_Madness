'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";


export default function MobileBirmingham3_SweetSixteen() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    
    // Winners from Round 2
    const teamAWinner1209 = getWinnerFromGame(bracketData, 1209);
    const teamBWinner1210 = getWinnerFromGame(bracketData, 1210);
    const teamAWinner1211 = getWinnerFromGame(bracketData, 1211);
    const teamBWinner1212 = getWinnerFromGame(bracketData, 1212);


    return (
        <>
              <div>
                    <div className="bg-blue-600/40 my-4 p-4">
                            {teamAWinner1209 ? (
                                <TeamButton region="birmingham3" gameId={1605} team={teamAWinner1209}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1210 ? (
                                <TeamButton region="birmingham3" gameId={1605} team={teamBWinner1210}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                    </div>
                    <div className="bg-blue-600/40 my-4 p-4">
                            {teamAWinner1211 ? (
                                <TeamButton region="birmingham3" gameId={1606} team={teamAWinner1211}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                            {teamBWinner1212 ? (
                                <TeamButton region="birmingham3" gameId={1606} team={teamBWinner1212}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                    </div>
                </div>
        </>
    )
}