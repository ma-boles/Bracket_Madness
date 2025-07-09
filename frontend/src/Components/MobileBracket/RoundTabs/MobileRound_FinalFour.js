'use client'
import React, { useEffect } from "react";
import { useBracket } from "@/context/BracketContext";
import { useAuth } from "@/context/AuthContext";
import TeamButton from "@/Components/TeamButton";
import ChampionshipButton from "@/Components/ChampionshButton";
import SelectPlaceholder from "../SelectPlaceholder";
import Image from "next/image";
import { useMobileContext } from "@/context/MobileContext";


export default function MobileRound_FinalFour ({ onMount }) {
    const sectionId = 'finalfour';
    const { bracketData, getWinnerFromGame, userPicks } = useBracket();
    const { currentUser } = useAuth();
    const { setSectionStatus } = useMobileContext();


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

    useEffect(() => {
        onMount?.();
    }, [onMount]);


    useEffect(() => {
        const sectionGameIds = [10001, 10002, 10003];
        const regionPicks = userPicks["finalfour"] || {};

        const pickedCount = sectionGameIds.filter(gameId => !!regionPicks[gameId]).length;
        
        const isComplete = sectionGameIds.length === pickedCount;
        
        setSectionStatus(sectionId, isComplete);
    }, [userPicks, sectionId, setSectionStatus]);


    return (
        <>
                <div>
                        <div className="my-auto flex flex-col items-center bg-white/5 px-4 pb-4 pt-2">
                            <p className="px-4 py-2 bg-black/30 font-semibold text-center">Semifinals</p>

                            <div className="w-full my-4 bg-blue-600/40 p-4">
                               
                                <div className="rounded-lg border-none text-sm/6 text-white">

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
                                <div className="rounded-lg border-none text-sm/6 text-white">
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
                        <div className="bg-blue-600/40 p-4 w-full">
                            <div className="w-full">

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
                    </div>

                        <div className="mt-8 flex flex-col items-center bg-white/5 px-4 pb-4 pt-2">
                            <p className="my-2 px-4 py-2 bg-black/30 font-semibold text-center">Championship</p>

                            <div className="w-full my-4 bg-blue-600/40 p-4">
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
                            </div>

                            <p className="mt-4 px-4 py-2 text-2xl bg-black/30 font-semibold text-center">Champion</p>
                            <div className="flex w-full px-8 py-4 my-2 bg-blue-600/40 p-4">
                                {teamAWinner10003 ? (
                                        <ChampionshipButton region="finalfour" gameId={10004} team={teamAWinner10003}/>
                                    ) : (
                                        <SelectPlaceholder />
                                    )}
                            </div>

                        </div>
                    </div>
        </>
    )
}