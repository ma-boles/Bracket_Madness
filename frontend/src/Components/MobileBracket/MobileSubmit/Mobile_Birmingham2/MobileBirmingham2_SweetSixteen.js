'use client'
import React from "react";
import { useBracket  } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";


export default function MobileBirmingham2_SweetSixteen() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();

    // Winners from Round 2
    const teamAWinner1205 = getWinnerFromGame(bracketData, 1205);
    const teamBWinner1206 = getWinnerFromGame(bracketData, 1206);
    const teamAWinner1207 = getWinnerFromGame(bracketData, 1207);
    const teamBWinner1208 = getWinnerFromGame(bracketData, 1208);


    return(
        <>

            <div className="round sweet-16 pt-4">
                <div className="matchup3--r bg-zinc-700">
                    {teamAWinner1205 ? ( 
                        <TeamButton region="birmingham2" gameId={1603} team={teamAWinner1205}/>
                    ) : (
                        <p className="team">Select...</p>
                    )}
                    {teamBWinner1206 ? ( 
                        <TeamButton region="birmingham2" gameId={1603} team={teamBWinner1206}/>
                    ) : (
                        <p className="team">Select...</p>
                    )}
                </div>
                <div className="matchup3-last--r bg-zinc-700">
                    {teamAWinner1207 ? ( 
                        <TeamButton region="birmingham2" gameId={1604} team={teamAWinner1207}/>
                    ) : (
                        <p className="team">Select...</p>
                    )}
                    {teamBWinner1208 ? ( 
                        <TeamButton region="birmingham2" gameId={1604} team={teamBWinner1208}/>
                    ) : (
                        <p className="team">Select...</p>
                    )}
                </div>
            </div>
        </>
    )
}