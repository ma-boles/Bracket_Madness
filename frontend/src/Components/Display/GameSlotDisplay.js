'use client'
import React from "react";
import PredictionCard from "./PredictionCard";
import { useBracket } from "@/context/BracketContext";

export default function GameSlotDisplay ({ region, gameId, previousGames, results, predictions }) {
    const { getWinnerFromResults } = useBracket();

    const normalize = (str) => str.toLowerCase().replace(/\s+/g, '');


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
                    <p key={prevGameId}>TBA</p>
                )
            })}
        </div>

    )
}