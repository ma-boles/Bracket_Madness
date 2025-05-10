'use client'
import React from "react"

export default function FinalFourCard_Display({  game, size = "default" }) {
  if (!game || !game.actualTeam) {
    console.warn("Missing data for game:", game);
    return null;
  };

    const correct = game.team_name === game.actualTeam?.team_name;
    const isLarge = size === "finalfour";

    return (
          <div className={`w-full rounded-md  
          ${correct ? 'bg-green-700/30' : 'bg-red-700/30'}
          ${isLarge ? 'text-lg' : 'predictionResults'}
          `}>
              <div>
                <p className="bg-white/10 px-2 rounded text-white/50 truncate">
                    {game.seed} {game.team_name}
                </p>
                <p className="bg-white/5 px-2 rounded text-white truncate">
                  <strong>{game.actualTeam?.seed} {game.actualTeam?.team_name || 'TBA'}</strong>
                </p>
              </div>
          </div>
      )
    }