import React from "react";

export default function ChampionshipResult({ region, gameId, team }) {
    return (
        <div 
            className={`w-50 text-xl font-bold text-white truncate whitespace-nowrap overflow-hidden`}
            >
            {team.seed} {team.name}
        </div>
    );
}