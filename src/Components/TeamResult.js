import React from "react";

export default function TeamResult({ region, gameId, team }) {
    if (!team && process.env.NODE_ENV === "development") {
        console.warn(`Missing team for region ${region} and game ${gameId}`);
    }

    return (
        <>
        <div 
            className={`w-full border-none bg-white/5 pl-3 team text-md text-white truncate whitespace-nowrap overflow-hidden`}
            >
            {team?.seed} {team?.team_name}
        </div>
        </>
    )
}