'use client'
import React from "react";
import TeamResult from "../TeamResult";
import { useBracket } from "@/context/BracketContext";

export default function GameSlotResults ({ region, gameId, previousGames, results }) {
    const { getWinnerFromResults } = useBracket();

    return (
        <div className="h-full flex flex-col justify-between">
            {previousGames.map(prevGameId => {
                const winner = getWinnerFromResults(results, prevGameId);
                return winner ? (
                    <TeamResult 
                        key={prevGameId}
                        region={region}
                        gameId={gameId}
                        team={winner}
                    />
                ) : (
                    <p key={prevGameId}
                    className={`w-full border-none bg-white/5 pl-3 team text-md text-white`}
                    ></p>
                )
            })}
        </div>

    )
}