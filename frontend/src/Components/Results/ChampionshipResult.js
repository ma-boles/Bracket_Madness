import React from "react";

export default function ChampionshipResult({ team }) {
    return (
        <div 
            className={`w-50 text-xl font-bold text-white text-center truncate whitespace-nowrap overflow-hidden`}
            >
            {team?.seed} {team?.team_name}
        </div>
    );
}