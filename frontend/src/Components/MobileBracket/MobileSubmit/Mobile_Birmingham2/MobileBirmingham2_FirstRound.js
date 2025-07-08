'use client'
import React, { useState, useEffect } from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "@/Components/TeamButton";
import SelectPlaceholder from "../../SelectPlaceholder";


export default function MobileBirmingham2_FirstRound({ sectionId }) {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const [ sectionStatus, setSectionStatus ] = useState(false);

    const teamBWinner1002 = getWinnerFromGame(bracketData, 1002);
    
    useEffect(() => {
        const sectionGameIds = [1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116];
        const regionPicks = userPicks["birmingham2"];

        const pickedCount = sectionGameIds.filter((gameId) => !!regionPicks[gameId]?.winnerId).length;
        
        const isComplete = sectionGameIds.length === pickedCount;

        setSectionStatus(sectionId, isComplete);
    },[userPicks, sectionId, setSectionStatus]);

    return(
        <>
            <div>
                        <div className="bg-blue-600/40 my-4 p-4">
                            <TeamButton region="birmingham2" gameId={1109} team={{ id: 18, name: 'South Carolina', seed: 1}} />
                            <TeamButton region="birmingham2" gameId={1109} team={{ id: 34, name: 'Tennessee Tech', seed: 16}} />
                        </div>
                        <div className="bg-blue-600/40 my-4 p-4">
                            <TeamButton region="birmingham2" gameId={1110} team={{ id: 25, name: 'Utah', seed: 8}} />
                            <TeamButton region="birmingham2" gameId={1110} team={{ id: 26, name: 'Indiana', seed: 9}} />
                        </div>
                        <div className="bg-blue-600/40 my-4 p-4">
                            <TeamButton region="birmingham2" gameId={1111} team={{ id: 22, name: 'Alabama', seed: 5}} />
                            <TeamButton region="birmingham2" gameId={1111} team={{ id: 30, name: 'Green Bay', seed: 12}} />
                        </div>
                        <div className="bg-blue-600/40 my-4 p-4">
                            <TeamButton region="birmingham2" gameId={1112} team={{ id: 21, name: 'Maryland', seed: 4}} />
                            <TeamButton region="birmingham2" gameId={1112} team={{ id: 31, name: 'Norfolk St', seed: 13}} />
                        </div>
                        <div className="bg-blue-600/40 my-4 p-4">
                            <TeamButton region="birmingham2" gameId={1113} team={{ id: 23, name: 'West Virginia', seed: 6}} />
                            {teamBWinner1002 ? ( 
                                <TeamButton region="birmingham2" gameId={1113} team={teamBWinner1002}/>
                            ) : (
                                <SelectPlaceholder />
                            )}
                        </div>
                        <div className="bg-blue-600/40 my-4 p-4">
                            <TeamButton region="birmingham2" gameId={1114} team={{ id: 20, name: 'North Carolina', seed: 3}} />
                            <TeamButton region="birmingham2" gameId={1114} team={{ id: 32, name: 'Oregon St', seed: 14}} />
                        </div>
                        <div className="bg-blue-600/40 my-4 p-4">
                            <TeamButton region="birmingham2" gameId={1115} team={{ id: 24, name: 'Vanderbilt', seed: 7}} />
                            <TeamButton region="birmingham2" gameId={1115} team={{ id: 27, name: 'Oregon', seed: 10}} />
                        </div>
                        <div className="bg-blue-600/40 my-4 p-4">
                            <TeamButton region="birmingham2" gameId={1116} team={{ id: 19, name: 'Duke', seed: 2}} />
                            <TeamButton region="birmingham2" gameId={1116} team={{ id: 33, name: 'Lehigh', seed: 15}} />
                        </div>
                </div>
        </>
    )
}