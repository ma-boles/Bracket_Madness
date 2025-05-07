'use client'
import React from "react"
import TeamResult from "../TeamResult"
import GameSlotResults from "./GameSlotResults"
import { useBracket } from "@/context/BracketContext"
import ChampionshipResult from "./ChampionshipResult"

export default function Championship_Results({ results }) {
    const { bracketData, getWinnerFromGame, getWinnerFromResults } = useBracket();

    const finalFourResults = results.filter(r => r.round === 'Final Four');
    const championshipResults = results.filter(r => r.round === 'Championship');
    
    // Winners Elite 8
    const winner8001 = getWinnerFromResults(results, 8001);
    const winner8002 = getWinnerFromResults(results, 8002);
    const winner8003 = getWinnerFromResults(results, 8003);
    const winner8004 = getWinnerFromResults(results, 8004);

    // Champion
    const winner10003 = getWinnerFromResults(results, 10003);


    // Winners Final Four
    const winner10001 = getWinnerFromResults(results, 10001);
    const winner10002 = getWinnerFromResults(results, 10002);

   ;

    return (
        <>
            <div className="round">
                    <div className="flex gap-6 p-4 bg-blue-600 rounded-md">
                        <div className="my-auto flex flex-col items-center">
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                {/* <GameSlotResults 
                                gameId={10001}
                                previousGames={[8001, 8004]}
                                results={results}
                                /> */}
                                 {winner8001 && ( 
                                    <TeamResult gameId={10001} team={winner8001}/>
                                )}
                                </div>
                            </div>
                            <div className="mx-auto w-33 pt-0 ">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                {winner8004 && (
                                    <TeamResult gameId={10001} team={winner8004}/>
                                )}
                                </div>
                            </div>
                        </div>

                        <div className="pb-2 px-2 flex flex-col items-center">
                            <div className="flex py-4 px-8 my-4 bg-white/10 rounded-lg">
                                {winner10003 && (
                                        <ChampionshipResult region="finalfour" gameId={10004} team={winner10003}/>
                                    )}
                            </div>

                            {/* <GameSlotResults 
                                region="championship"
                                gameId={10003}
                                previousGames={[10001, 10002]}
                                results={results}
                                /> */}
                                {winner10001 && (
                                    <TeamResult region="finalfour" gameId={10003} team={winner10001}/>
                                )}
                                {winner10002 && (
                                    <TeamResult region="finalfour" gameId={10003} team={winner10002}/>
                                )}
                        </div>

                        <div className="my-auto flex flex-col items-center">
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                {winner8002 && (
                                    <TeamResult gameId={10002} team={winner8002}/>
                                )}
                                </div>
                            </div>
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                {winner8003 && (
                                    <TeamResult gameId={10002} team={winner8003}/>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}