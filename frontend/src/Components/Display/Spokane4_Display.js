'use client'
import React from "react"
import GameSlotDisplay from "./GameSlotDisplay"
import FinalFourCard_Display from "./FinalFourCard_Display"
import TeamResult from "../TeamResult"

export default function Spokane4_Display({ results, predictions, game8004 }) {

    return (
        <>
        <div className="west region">
                <div className="rounds">
                    <div className="round first-round">
                        <div className="matchup">
                            <TeamResult region="spokane4" gameId={1125} team={{ id: 53, team_name: 'USC', seed: 1}} />
                            <TeamResult region="spokane4" gameId={1125} team={{ id: 68, team_name: 'UNC Greensboro', seed: 16}} />
                        </div>
                        <div className="matchup">
                            <TeamResult region="spokane4" gameId={1126} team={{ id: 60, team_name: 'California', seed: 8}} />
                            <TeamResult region="spokane4" gameId={1126} team={{ id: 61, team_name: 'Mississippi St', seed: 9}} />
                        </div>
                        <div className="matchup">
                            <TeamResult region="spokane4" gameId={1127} team={{ id: 57, team_name: 'Kansas St', seed: 5}} />
                            <TeamResult region="spokane4" gameId={1127} team={{ id: 64, team_name: 'Fairfield', seed: 12}} />
                        </div>
                        <div className="matchup">
                            <TeamResult region="spokane4" gameId={1128} team={{ id: 56, team_name: 'Kentucky', seed: 4}} />
                            <TeamResult region="spokane4" gameId={1128} team={{ id: 65, team_name: 'Liberty', seed: 13}} />
                        </div>
                        <div className="matchup">
                            <TeamResult region="spokane4" gameId={1129} team={{ id: 58, team_name: 'Iowa', seed: 6}} />
                            <TeamResult region="spokane4" gameId={1129} team={{ id: 63, team_name: 'Murray St', seed: 11}} />
                        </div>
                        <div className="matchup">
                            <TeamResult region="spokane4" gameId={1130} team={{ id: 55, team_name: 'Oklahoma', seed: 3}} />
                            <TeamResult region="spokane4" gameId={1130} team={{ id: 66, team_name: 'FGCU', seed: 14}} />
                        </div>
                        <div className="matchup">
                            <TeamResult region="spokane4" gameId={1131} team={{ id: 59, team_name: 'Oklahoma St', seed: 7}} />
                            <TeamResult region="spokane4" gameId={1131} team={{ id: 62, team_name: 'S Dakota St', seed: 14}} />
                        </div>
                        <div className="matchup">
                            <TeamResult region="spokane4" gameId={1132} team={{ id: 54, team_name: 'UCONN', seed: 2}} />
                            <TeamResult region="spokane4" gameId={1132} team={{ id: 67, team_name: 'Arkansas St', seed: 15}} />
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2 mb-11">
                            <GameSlotDisplay
                                region="spokane4"
                                gameId={1213}
                                previousGames={[1125, 1126]}
                                results={results} 
                                predictions={predictions}/>
                        </div>
                        <div className="matchup2 mb-11">
                            <GameSlotDisplay 
                                region="spokane4"
                                gameId={1214}
                                previousGames={[1127, 1128]}
                                results={results} 
                                predictions={predictions}/>
                        </div>
                        <div className="matchup2 mb-13">
                            <GameSlotDisplay 
                                region="spokane4"
                                gameId={1215}
                                previousGames={[1129, 1130]}
                                results={results} 
                                predictions={predictions}/>
                        </div>
                        <div className="matchup2-last">
                            <GameSlotDisplay 
                                region="spokane4"
                                gameId={1216}
                                previousGames={[1131, 1132]}
                                results={results} 
                                predictions={predictions}/>
                        </div>
                    </div>

                    <div className="round sweet-16 pt-4">
                        <div className="matchup3">
                            <GameSlotDisplay 
                                region="spokane4"
                                gameId={1607}
                                previousGames={[1213, 1214]}
                                results={results} 
                                predictions={predictions}/>
                        </div>
                        <div className="matchup3-last">
                            <GameSlotDisplay 
                                region="spokane4"
                                gameId={1608}
                                previousGames={[1215, 1216]}
                                results={results} 
                                predictions={predictions}/>
                        </div>
                    </div>

                    <div className="round elite8">
                        <div className="matchup4">
                            <GameSlotDisplay 
                                region="spokane4"
                                gameId={8004}
                                previousGames={[1607, 1608]}
                                results={results} 
                                predictions={predictions}/>
                        </div>
                    </div>

                    <div className="round final4">
                        <div className="mt-80 py-2 matchup border-b-2 border-white">
                            {game8004 && <FinalFourCard_Display game={game8004}/>}
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}