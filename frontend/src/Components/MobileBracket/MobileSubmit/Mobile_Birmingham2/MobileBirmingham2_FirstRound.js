'use client'
import React from "react";
import { useBracket  } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";


export default function MobileBirmingham2_FirstRound() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    
    const teamBWinner1002 = getWinnerFromGame(bracketData, 1002);

    return(
        <>
            <div className="p-4 bg-blue-600/40">
                        <div className="m-2">
                            <TeamButton region="birmingham2" gameId={1109} team={{ id: 18, name: 'South Carolina', seed: 1}} />
                            <TeamButton region="birmingham2" gameId={1109} team={{ id: 34, name: 'Tennessee Tech', seed: 16}} />
                        </div>
                        <div className="m-2">
                            <TeamButton region="birmingham2" gameId={1110} team={{ id: 25, name: 'Utah', seed: 8}} />
                            <TeamButton region="birmingham2" gameId={1110} team={{ id: 26, name: 'Indiana', seed: 9}} />
                        </div>
                        <div className="m-2">
                            <TeamButton region="birmingham2" gameId={1111} team={{ id: 22, name: 'Alabama', seed: 5}} />
                            <TeamButton region="birmingham2" gameId={1111} team={{ id: 30, name: 'Green Bay', seed: 12}} />
                        </div>
                        <div className="m-2">
                            <TeamButton region="birmingham2" gameId={1112} team={{ id: 21, name: 'Maryland', seed: 4}} />
                            <TeamButton region="birmingham2" gameId={1112} team={{ id: 31, name: 'Norfolk St', seed: 13}} />
                        </div>
                        <div className="m-2">
                            <TeamButton region="birmingham2" gameId={1113} team={{ id: 23, name: 'West Virginia', seed: 6}} />
                            {teamBWinner1002 ? ( 
                                <TeamButton region="birmingham2" gameId={1113} team={teamBWinner1002}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                        </div>
                        <div className="m-2">
                            <TeamButton region="birmingham2" gameId={1114} team={{ id: 20, name: 'North Carolina', seed: 3}} />
                            <TeamButton region="birmingham2" gameId={1114} team={{ id: 32, name: 'Oregon St', seed: 14}} />
                        </div>
                        <div className="m-2">
                            <TeamButton region="birmingham2" gameId={1115} team={{ id: 24, name: 'Vanderbilt', seed: 7}} />
                            <TeamButton region="birmingham2" gameId={1115} team={{ id: 27, name: 'Oregon', seed: 10}} />
                        </div>
                        <div className="m-2">
                            <TeamButton region="birmingham2" gameId={1116} team={{ id: 19, name: 'Duke', seed: 2}} />
                            <TeamButton region="birmingham2" gameId={1116} team={{ id: 33, name: 'Lehigh', seed: 15}} />
                        </div>
                </div>
        </>
    )
}