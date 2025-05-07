import React from "react";
import PredictionCard from "@/Components/Display/PredictionCard";

export default async function BracketPage(props) {
    const { bracketId } = (await props.params);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const predictionRes = await fetch(`${baseUrl}/api/predictions/${bracketId}`, {
        cache: 'no-store',
    });

    if(!predictionRes.ok) {
        return <div className="text-red-600">Error loading predictions.</div>
    }

    const resultsRes = await fetch(`${baseUrl}/api/results`, {
        cache: 'no-store',
    });

    const results = await resultsRes.json();
    const predictions = await predictionRes.json();

    // Match results to prediction
    const predictionsWithResults = predictions.map((pred) => {
        const matchingResult = results.find(
            (result) => 
                result.region === pred.region && result.game_id === pred.game_id
        );
        return { ...pred, actualTeam: matchingResult };
    });

    return (
        <main className="max-w-3xl mx-auto p-6">

            <div className="grid grid-cols-1 gap-4">
                {predictionsWithResults.map((pred) => (
                    <div key={pred.game_id} className="border rounded-lg p-4 shadow-sm bg-blue">
                        <PredictionCard 
                            region={pred.region}
                            gameId={pred.game_id}
                            predictedTeam={pred}
                            actualTeam={pred.actualTeam}
                        />
                    </div>
                ))}
            </div>
      </main>
    );
} 



 {/* <PredictionCard 
                region={game.region}
                gameId={game.game_id}
                predictedTeam={{
                    seed: predictions.seed,
                    team_name: predictions.team_name,
                }}
                actualTeam={{
                    seed: result.seed,
                    team_name: result.team_name,
            }}

            <p className="text-sm text-gray-500">Round {pred.round} — Game {pred.game_id}</p>
              <p className="text-lg font-semibold mt-1">
                {pred.team_name} ({pred.seed}, {pred.region})
              </p>
            /> */}