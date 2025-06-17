'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import dynamic from 'next/dynamic';
import TeamButton from "@/Components/TeamButton";



export default function MobileSpokane1_FirstRound() {
    const { userPicks, setUserPicks, handlePick, bracketData, getWinnerFromGame } = useBracket();
    const Select = dynamic(() => import('react-select'), { ssr: false });

    // Winner from First Four
    const teamBWinner1001 = getWinnerFromGame(bracketData, 1001);

    return(
        <>
            <div className="west region">
                <div className="rounds">
                    <div className="round first-round">
                        <div className="matchup bg-blue-800">
                            <TeamButton region="spokane1" gameId={1101} team={{ id: 1, name: 'UCLA', seed: 1}} />
                            {teamBWinner1001 ? ( 
                                <TeamButton region="spokane1" gameId={1101} team={teamBWinner1001}/>
                            ) : (
                                <p className="team">Select...</p>
                            )}
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="spokane1" gameId={1102} team={{ id: 8, name: 'Richmond', seed: 8}} />
                            <TeamButton region="spokane1" gameId={1102} team={{ id: 9, name: 'Georgia Tech', seed: 9}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="spokane1" gameId={1103} team={{ id: 5, name: 'Ole Miss', seed: 5}} />
                            <TeamButton region="spokane1" gameId={1103} team={{ id: 12, name: 'Ball St', seed: 12}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="spokane1" gameId={1104} team={{ id: 4, name: 'Baylor', seed: 4}} />
                            <TeamButton region="spokane1" gameId={1104} team={{ id: 13, name: 'Grand Canyon', seed: 13}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="spokane1" gameId={1105} team={{ id: 6, name: 'Florida St', seed: 6}} />
                            <TeamButton region="spokane1" gameId={1105} team={{ id: 11, name: 'George Mason', seed: 11}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="spokane1" gameId={1106} team={{ id: 3, name: 'LSU', seed: 3}} />
                            <TeamButton region="spokane1" gameId={1106} team={{ id: 14, name: 'San Diego St', seed: 14}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="spokane1" gameId={1107} team={{ id: 7, name: 'Michigan St', seed: 7}} />
                            <TeamButton region="spokane1" gameId={1107} team={{ id: 10, name: 'Harvard', seed: 10}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="spokane1" gameId={1108} team={{ id: 2, name: 'NC State', seed: 2}} />
                            <TeamButton region="spokane1" gameId={1108} team={{ id: 15, name: 'Vermont', seed: 15}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }