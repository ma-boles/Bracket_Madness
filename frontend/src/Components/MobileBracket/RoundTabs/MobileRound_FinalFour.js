'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import { useAuth } from "@/context/AuthContext";
import TeamButton from "@/Components/TeamButton";
import ChampionshipButton from "@/Components/ChampionshButton";
import SelectPlaceholder from "../SelectPlaceholder";
import Image from "next/image";


export default function MobileRound_FinalFour () {
    const { bracketData, getWinnerFromGame } = useBracket();
    const { currentUser } = useAuth();

    // Winners Elite 8
    const teamAWinner8001 = getWinnerFromGame(bracketData, 8001);
    const teamAWinner8002 = getWinnerFromGame(bracketData, 8002);
    const teamAWinner8003 = getWinnerFromGame(bracketData, 8003);
    const teamAWinner8004 = getWinnerFromGame(bracketData, 8004);

    // Winners Final Four
    const teamAWinner10001 = getWinnerFromGame(bracketData, 10001);
    const teamBWinner10002 = getWinnerFromGame(bracketData, 10002);

    // Champion
    const teamAWinner10003 = getWinnerFromGame(bracketData, 10003);

    const lockInPicks = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <>
                <div className="p-4 bg-blue-600/50">
                        <div className="my-auto flex flex-col items-center">
                            <div className="w-full">
                                <p className="my-2 bg-black/30 text-center">Semifinal #1</p>
                               
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                 {teamAWinner8001 ? ( 
                                    <TeamButton region="spokane1" gameId={10001} team={teamAWinner8001}/>
                                ) : (
                                    <p
                                        className="
                                            w-full 
                                            border border-black/20
                                            py-3 px-4 text-base text-white text-center bg-white/5
                                            truncate whitespace-nowrap overflow-hidden relative
                                            lg:w-[8.3rem] 
                                            lg:h-[2.75rem] 
                                            lg:px-2 
                                            lg:py-2 
                                            lg:border-[2px] 
                                            lg:border-[rgba(49,43,43,0.119)]
                                            lg:text-left
                                        "
                                        >
                                        Spokane 1
                                        </p>
                                )}
                                </div>
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                {teamAWinner8004 ? (
                                    <TeamButton region="spokane4" gameId={10001} team={teamAWinner8004}/>
                                ) : (
                                    <p
                                        className="
                                            w-full 
                                            border border-black/20
                                            py-3 px-4 text-base text-white text-center bg-white/5
                                            truncate whitespace-nowrap overflow-hidden relative
                                            lg:w-[8.3rem] 
                                            lg:h-[2.75rem] 
                                            lg:px-2 
                                            lg:py-2 
                                            lg:border-[2px] 
                                            lg:border-[rgba(49,43,43,0.119)]
                                            lg:text-left
                                        "
                                        >
                                        Spokane 4
                                        </p>
                                )}
                                </div>

                        </div>

                            <div className="w-full">
                                <p className="my-2 bg-black/30 text-center">Semifinal #2</p>

                                {teamAWinner8002 ? (
                                    <TeamButton region="birmingham2" gameId={10002} team={teamAWinner8002}/>
                                ) : (
                                    <p
                                        className="
                                            w-full 
                                            border border-black/20
                                            py-3 px-4 text-base text-white text-center bg-white/5
                                            truncate whitespace-nowrap overflow-hidden relative
                                            lg:w-[8.3rem] 
                                            lg:h-[2.75rem] 
                                            lg:px-2 
                                            lg:py-2 
                                            lg:border-[2px] 
                                            lg:border-[rgba(49,43,43,0.119)]
                                            lg:text-left
                                        "
                                        >
                                        Birmingham 2
                                        </p>
                                )}
                            </div>
                            <div className="w-full">
                                {teamAWinner8003 ? (
                                    <TeamButton region="birmingham3" gameId={10002} team={teamAWinner8003}/>
                                ) : (
                                    <p
                                        className="
                                            w-full 
                                            border border-black/20
                                            py-3 px-4 text-base text-white text-center bg-white/5
                                            truncate whitespace-nowrap overflow-hidden relative
                                            lg:w-[8.3rem] 
                                            lg:h-[2.75rem] 
                                            lg:px-2 
                                            lg:py-2 
                                            lg:border-[2px] 
                                            lg:border-[rgba(49,43,43,0.119)]
                                            lg:text-left
                                        "
                                        >
                                        Birmingham 3
                                        </p>
                                )}
                            </div>
                    </div>

                        <div className="pb-2 px-2 mt-8 flex flex-col items-center">
                            <p className="my-2 px-4 py-2 bg-black/30 text-center">Championship</p>

                            {teamAWinner10001 ? (
                                    <TeamButton region="finalfour" gameId={10003} team={teamAWinner10001}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}
                                {teamBWinner10002 ? (
                                    <TeamButton region="finalfour" gameId={10003} team={teamBWinner10002}/>
                                ) : (
                                    <SelectPlaceholder />
                                )}

                            <div className="flex py-4 px-8 mt-8 bg-white/5 rounded-lg">
                                {teamAWinner10003 ? (
                                        <ChampionshipButton region="finalfour" gameId={10004} team={teamAWinner10003}/>
                                    ) : (
                                        <SelectPlaceholder />
                                    )}
                                    {currentUser && (
                                        <button className="ml-2 p-2 cursor-pointer rounded-lg border border-white/70" onClick={lockInPicks}>
                                        <Image 
                                            alt="lock in"
                                            src="../lock-open-solid.svg"
                                            className="image-filter"
                                            width={22}
                                            height={40}
                                            />
                                        </button>
                                     )}
                            </div>

                        </div>
                    </div>
        </>
    )
}