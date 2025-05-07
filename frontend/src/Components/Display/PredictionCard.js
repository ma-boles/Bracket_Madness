import React from "react";

export default function PredictionCard({ region, gameId, predictedTeam, actualTeam }) {
    if (!predictedTeam || !actualTeam) {
        console.warn(`Missing team for region ${region} and game ${gameId}`);
        return null;
    }    

    const correct = predictedTeam.team_name === actualTeam.team_name;

    return (
        <>
            <div className={`w-full p-2 rounded-md ${correct ? 'bg-green-700/30' : 'bg-red-700/30'}`}>
                <div className="text-sm text-gray-300">{region}</div>
                
                <div className="flex flex-col gap-1">
                    <div className="bg-white/10 px-3 py-1 rounded text-white truncate">
                        <strong>Prediction:</strong> {predictedTeam.seed} {predictedTeam.team_name}
                    </div>
                    <div className="bg-white/5 px-3 py-1 rounded text-white truncate">
                        <strong>Result:</strong> {actualTeam.seed} {actualTeam.team_name}
                    </div>
                </div>
            </div>
        {/* <div 
            className={`w-full border-none bg-white/5 pl-3 team text-md text-white truncate whitespace-nowrap overflow-hidden`}
            >
            {team.seed} {team.team_name}
        </div> */}
        </>
    )
}