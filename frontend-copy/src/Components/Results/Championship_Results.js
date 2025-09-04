'use client'
import React from "react"
import TeamResult from "../TeamResult"
import { useBracket } from "@/src/context/BracketContext"
import ChampionshipResult from "./ChampionshipResult"

export default function Championship_Results({ results }) {
    const { getWinnerFromResults } = useBracket();
    
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
                    <div className="hidden sm:flex gap-6 p-4 bg-blue-600 rounded-md">
                        <div className="my-auto flex flex-col items-center">
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                    <TeamResult gameId={10001} team={winner8001} region="finalfour"/>
                                </div>
                            </div>
                            <div className="mx-auto w-33 pt-0 ">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                    <TeamResult gameId={10001} team={winner8004} region="finalfour"/>
                                </div>
                            </div>
                        </div>

                        <div className="pb-2 px-2 flex flex-col items-center">
                            <div className="flex py-4 px-8 my-4 bg-white/10 rounded-lg">
                                        <ChampionshipResult region="finalfour" gameId={10004} team={winner10003}/>
                            </div>
                                    <TeamResult region="finalfour" gameId={10003} team={winner10001}/>
                                    <TeamResult region="finalfour" gameId={10003} team={winner10002}/>
                        </div>

                        <div className="my-auto flex flex-col items-center">
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                    <TeamResult gameId={10002} team={winner8002} region="finalfour"/>
                                </div>
                            </div>
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                    <TeamResult gameId={10002} team={winner8003} region="finalfour"/>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Small view */}
                    <div className="sm:hidden flex flex-wrap justify-center gap-6 p-4 bg-blue-600 rounded-md">
                        <div className="my-auto flex flex-col items-center">
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                    <TeamResult gameId={10001} team={winner8001} region="finalfour"/>
                                </div>
                            </div>
                            <div className="mx-auto w-33 pt-0 ">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                    <TeamResult gameId={10001} team={winner8004} region="finalfour"/>
                                </div>
                            </div>
                        </div>

                        

                        <div className="my-auto flex flex-col items-center">
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                    <TeamResult gameId={10002} team={winner8002} region="finalfour"/>
                                </div>
                            </div>
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                    <TeamResult gameId={10002} team={winner8003} region="finalfour"/>
                                </div>
                            </div>
                        </div>
                        <div className="pb-2 px-2 flex flex-col items-center">
                            <TeamResult region="finalfour" gameId={10003} team={winner10001}/>
                            <TeamResult region="finalfour" gameId={10003} team={winner10002}/>
                            
                            <div className="flex py-4 px-8 my-4 bg-white/10 rounded-lg">
                                <ChampionshipResult region="finalfour" gameId={10004} team={winner10003}/>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}