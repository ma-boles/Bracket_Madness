'use client'
import React from "react";
import { useBracket  } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";


export default function MobileBirmingham2_EliteEight() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    

    // Winners from Sweet 16
    const teamAWinner1603 = getWinnerFromGame(bracketData, 1603);
    const teamBWinner1604 = getWinnerFromGame(bracketData, 1604);


    return (
        <>
            <div>
                <div className="bg-white/5 my-4 p-4">
                    {teamAWinner1603 ? ( 
                        <TeamButton region="birmingham2" gameId={8002} team={teamAWinner1603}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                    {teamBWinner1604 ? ( 
                        <TeamButton region="birmingham2" gameId={8002} team={teamBWinner1604}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                </div>
            </div>
        </>
    )
}