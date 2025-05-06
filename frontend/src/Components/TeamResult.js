import React from "react";

export default function TeamResult({ region, gameId, team }) {
    return (
        <>
            <div 
            className={`w-full border-none bg-white/5 py-1.5 pr-8 pl-3 text-md text-white team truncate whitespace-nowrap overflow-hidden
            `}
            >
            {team.seed} {team.name}
        </div>
        </>
    )
}