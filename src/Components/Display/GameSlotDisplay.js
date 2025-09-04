'use client'
import React from "react";
import PredictionCard from "./PredictionCard";
import { useBracket } from "@/src/context/BracketContext";

export default function GameSlotDisplay ({ region, gameId, previousGames, results, predictions }) {
    const { getWinnerFromResults } = useBracket();

    const normalize = (str) => (str ? str.toLowerCase().replace(/\s+/g, '') : '');

    return (
        <div className="h-full flex flex-col justify-between">
            {previousGames.map(prevGameId => {
                const winner = getWinnerFromResults(results, prevGameId);
                const predicted = predictions.find(
                    (p) => normalize(p.region) === normalize(region) &&
                    p.game_id === prevGameId
                );
                
                return winner && predicted ? (
                    <PredictionCard 
                        key={prevGameId}
                        region={region}
                        gameId={gameId}
                        predictedTeam={predicted}
                        actualTeam={winner}
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