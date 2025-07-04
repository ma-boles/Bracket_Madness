'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import { useAuth } from "@/context/AuthContext";
import TeamButton from "./TeamButton";
import ChampionshipButton from "./ChampionshButton";
import TeamPlaceholder from "./TeamPlaceholder";


export default function ChampionshipPick () {
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


    return (
        <>
            <div className="round">
                    <div className="flex gap-6 p-4 bg-blue-600 rounded-md">
                        <div className="my-auto flex flex-col items-center">
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                 {teamAWinner8001 ? ( 
                                    <TeamButton region="spokane1" gameId={10001} team={teamAWinner8001}/>
                                ) : (
                                    <p className="team team--submit text-black">Spokane 1</p>
                                )}
                                </div>
                            </div>
                            <div className="mx-auto w-33 pt-0 ">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                {teamAWinner8004 ? (
                                    <TeamButton region="spokane4" gameId={10001} team={teamAWinner8004}/>
                                ) : (
                                    <p className="team team--submit text-black">Spokane 4</p>
                                )}
                                </div>
                            </div>
                        </div>

                        <div className="pb-2 px-2 flex flex-col items-center">
                            <div className="flex py-4 px-8 my-4 bg-white/10 rounded-lg">
                                {teamAWinner10003 ? (
                                        <ChampionshipButton region="finalfour" gameId={10004} team={teamAWinner10003}/>
                                    ) : (
                                        <TeamPlaceholder />
                                    )}
                            </div>

                                {teamAWinner10001 ? (
                                    <TeamButton region="finalfour" gameId={10003} team={teamAWinner10001}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                                {teamBWinner10002 ? (
                                    <TeamButton region="finalfour" gameId={10003} team={teamBWinner10002}/>
                                ) : (
                                    <TeamPlaceholder />
                                )}
                        </div>

                        <div className="my-auto flex flex-col items-center">
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                {teamAWinner8002 ? (
                                    <TeamButton region="birmingham2" gameId={10002} team={teamAWinner8002}/>
                                ) : (
                                    <p className="team team--submit text-black">Birmingham 2</p>
                                )}
                                </div>
                            </div>
                            <div className="mx-auto w-33 pt-0">
                                <div className="rounded-lg border-none bg-white/5 text-sm/6 text-white">
                                {teamAWinner8003 ? (
                                    <TeamButton region="birmingham3" gameId={10002} team={teamAWinner8003}/>
                                ) : (
                                    <p className="team team--submit text-black">Birmingham 3</p>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}