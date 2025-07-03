import React from "react";

export default function PredictionCard({ region, gameId, predictedTeam, actualTeam }) {
    if (!predictedTeam || !actualTeam) {
        console.warn(`Missing team for region ${region} and game ${gameId}`);
        return null;
    }    

    const correct = predictedTeam.team_name === actualTeam.team_name;

    return (
        <>
            <div className={`w-full rounded-md predictionResults ${
                actualTeam === null
                    ? 'bg-grey-600/30'
                    :correct 
                        ? 'bg-green-700/30' 
                        : 'bg-red-700/30'
                    }`}>
                <div>
                    <div className="bg-white/10 px-2 rounded text-white/50 truncate">
                        {predictedTeam?.seed} {predictedTeam?.team_name}
                    </div>
                    <div className="bg-white/5 px-2 rounded text-white truncate">
                        <strong>{actualTeam?.seed} {actualTeam?.team_name}</strong> 
                    </div>
                </div>
            </div>
        </>
    )
}