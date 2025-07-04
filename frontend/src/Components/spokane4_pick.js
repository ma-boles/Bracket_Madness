'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import TeamButton from "./TeamButton";
import TeamPlaceholder from "./TeamPlaceholder";

export default function Spokane4_Pick() {
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

    // Winners from Round 2
    const teamAWinner1213 = getWinnerFromGame(bracketData, 1213);
    const teamBWinner1214 = getWinnerFromGame(bracketData, 1214);
    const teamAWinner1215 = getWinnerFromGame(bracketData, 1215);
    const teamBWinner1216 = getWinnerFromGame(bracketData, 1216);

    // Winners from Sweet 16
    const teamAWinner1607 = getWinnerFromGame(bracketData, 1607);
    const teamBWinner1608 = getWinnerFromGame(bracketData, 1608);

    // Winner from Elite 8
    const teamAWinner8004 = getWinnerFromGame(bracketData, 8004);

    return(
        <>
        <div className="west region">
                <div className="rounds">
                    <div className="round first-round">
                        <div className="matchup bg-blue-800">
                            <TeamButton region="birmingham2" gameId={1125} team={{ id: 53, name: 'USC', seed: 1}} />
                            <TeamButton region="birmingham2" gameId={1125} team={{ id: 68, name: 'UNC Greensboro', seed: 16}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="birmingham2" gameId={1126} team={{ id: 60, name: 'California', seed: 8}} />
                            <TeamButton region="birmingham2" gameId={1126} team={{ id: 61, name: 'Mississippi St', seed: 9}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="birmingham2" gameId={1127} team={{ id: 57, name: 'Kansas St', seed: 5}} />
                            <TeamButton region="birmingham2" gameId={1127} team={{ id: 64, name: 'Fairfield', seed: 12}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="birmingham2" gameId={1128} team={{ id: 56, name: 'Kentucky', seed: 4}} />
                            <TeamButton region="birmingham2" gameId={1128} team={{ id: 65, name: 'Liberty', seed: 13}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="birmingham2" gameId={1129} team={{ id: 58, name: 'Iowa', seed: 6}} />
                            <TeamButton region="birmingham2" gameId={1129} team={{ id: 63, name: 'Murray St', seed: 11}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="birmingham2" gameId={1130} team={{ id: 55, name: 'Oklahoma', seed: 3}} />
                            <TeamButton region="birmingham2" gameId={1130} team={{ id: 66, name: 'FGCU', seed: 14}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="birmingham2" gameId={1131} team={{ id: 59, name: 'Oklahoma St', seed: 7}} />
                            <TeamButton region="birmingham2" gameId={1131} team={{ id: 62, name: 'S Dakota St', seed: 14}} />
                        </div>
                        <div className="matchup bg-blue-800">
                            <TeamButton region="birmingham2" gameId={1132} team={{ id: 54, name: 'UCONN', seed: 2}} />
                            <TeamButton region="birmingham2" gameId={1132} team={{ id: 67, name: 'Arkansas St', seed: 15}} />
                        </div>
                    </div>

                    <div className="round second-round">
                        <div className="matchup2 mb-11 bg-blue-800">
                                {teamAWinner1125 ? (
                                    <TeamButton region="spokane4" gameId={1213} team={teamAWinner1125}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                                {teamBWinner1126 ? (
                                    <TeamButton region="spokane4" gameId={1213} team={teamBWinner1126}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                        </div>
                        <div className="matchup2 mb-11 bg-blue-800">
                                {teamAWinner1127 ? (
                                    <TeamButton region="spokane4" gameId={1214} team={teamAWinner1127}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                                {teamBWinner1128 ? (
                                    <TeamButton region="spokane4" gameId={1214} team={teamBWinner1128}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                        </div>
                        <div className="matchup2 mb-13 bg-blue-800">
                                {teamAWinner1129 ? (
                                    <TeamButton region="spokane4" gameId={1215} team={teamAWinner1129}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                                {teamBWinner1130 ? (
                                    <TeamButton region="spokane4" gameId={1215} team={teamBWinner1130}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                        </div>
                        <div className="matchup2-last bg-blue-800">
                                {teamAWinner1131 ? (
                                    <TeamButton region="spokane4" gameId={1216} team={teamAWinner1131}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                                {teamBWinner1132 ? (
                                    <TeamButton region="spokane4" gameId={1216} team={teamBWinner1132}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                        </div>
                    </div>

                    <div className="round sweet-16 pt-4">
                        <div className="matchup3  bg-zinc-700">
                            {teamAWinner1213 ? (
                                    <TeamButton region="spokane4" gameId={1607} team={teamAWinner1213}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                                {teamBWinner1214 ? (
                                    <TeamButton region="spokane4" gameId={1607} team={teamBWinner1214}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                        </div>
                        <div className="matchup3-last bg-zinc-700">
                            {teamAWinner1215 ? (
                                    <TeamButton region="spokane4" gameId={1608} team={teamAWinner1215}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                                {teamBWinner1216 ? (
                                    <TeamButton region="spokane4" gameId={1608} team={teamBWinner1216}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                        </div>
                    </div>

                    <div className="round elite8">
                        <div className="matchup4 bg-zinc-700">
                            {teamAWinner1607 ? (
                                    <TeamButton region="spokane4" gameId={8004} team={teamAWinner1607}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                                {teamBWinner1608 ? (
                                    <TeamButton region="spokane4" gameId={8004} team={teamBWinner1608}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                        </div>
                    </div>

                    <div className="round final4">
                        <div className="mt-80 py-2 matchup bg-blue-600 border-b-2 border-white">
                            {teamAWinner8004 ? (
                                    <TeamButton region="spokane4" gameId={4004} team={teamAWinner8004}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}