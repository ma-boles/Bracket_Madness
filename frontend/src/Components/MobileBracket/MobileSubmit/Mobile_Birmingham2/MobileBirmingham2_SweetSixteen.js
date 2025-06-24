'use client'
import React from "react";
import { useBracket  } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";

export default function MobileBirmingham2_SweetSixteen() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();

    // Winners from Round 2
    const teamAWinner1205 = getWinnerFromGame(bracketData, 1205);
    const teamBWinner1206 = getWinnerFromGame(bracketData, 1206);
    const teamAWinner1207 = getWinnerFromGame(bracketData, 1207);
    const teamBWinner1208 = getWinnerFromGame(bracketData, 1208);


    return(
        <>

            <div className="p-4 bg-blue-600/40">
                <div className="m-2">
                    {teamAWinner1205 ? ( 
                        <TeamButton region="birmingham2" gameId={1603} team={teamAWinner1205}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                    {teamBWinner1206 ? ( 
                        <TeamButton region="birmingham2" gameId={1603} team={teamBWinner1206}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                </div>
                <div className="m-2">
                    {teamAWinner1207 ? ( 
                        <TeamButton region="birmingham2" gameId={1604} team={teamAWinner1207}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                    {teamBWinner1208 ? ( 
                        <TeamButton region="birmingham2" gameId={1604} team={teamBWinner1208}/>
                    ) : (
                        <SelectPlaceholder />
                    )}
                </div>
            </div>
        </>
    )
}