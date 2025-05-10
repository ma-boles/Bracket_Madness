import React from "react";
import Spokane1_Display from "@/Components/Display/Spokane1_Display";
import Birmingham2_Display from "@/Components/Display/Birmingham2_Display";
import Birmingham3_Display from "@/Components/Display/Birmingham3_Display";
import Spokane4_Display from "@/Components/Display/Spokane4_Display";
import Championship_Display from "@/Components/Display/Championship_Display";


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

    const grouped = predictionsWithResults.reduce((acc, pred) => {
        if(!acc[pred.region]) acc[pred.region] = [];
        acc[pred.region].push(pred);
        return acc;
    }, {});

    const groupedRound = predictionsWithResults.reduce((acc, pred) => {
        if(pred.round === "Elite 8" || pred.round === "Final Four" || pred.round === "Championship") {
            if(!acc["FinalRounds"]) acc["FinalRounds"] = [];
            acc["FinalRounds"].push(pred);
        } else {
            if(!acc[pred.round]) acc[pred.round] = [];
            acc[pred.round].push(pred);
        }
        return acc;
    }, {});

    const game1001 = grouped["Spokane 1"]?.find(g => g.game_id === 1001);
    const game1002 = grouped["Birmingham 2"]?.find(g => g.game_id === 1002);
    const game1003 = grouped["Birmingham 3"]?.find(g => g.game_id === 1003);
    const game1004 = grouped["Birmingham 3"]?.find(g => g.game_id === 1004);

    const game8001 = groupedRound.FinalRounds.find(g => g.game_id === 8001);
    const game8002 = groupedRound.FinalRounds.find(g => g.game_id === 8002);
    const game8003 = groupedRound.FinalRounds.find(g => g.game_id === 8003);
    const game8004 = groupedRound.FinalRounds.find(g => g.game_id === 8004);


    return (
        <main className="bg-zinc-900">
            <div className="flex">
                {grouped["Spokane 1"] && <Spokane1_Display predictions={grouped["Spokane 1"]} results={results} game8001={game8001} game1001={game1001}/>}
                {grouped["Birmingham 2"] && <Birmingham2_Display predictions={grouped["Birmingham 2"]} results={results} game8002={game8002} game1002={game1002}/>}
            </div>
                {groupedRound?.FinalRounds && (<Championship_Display groupedRound={groupedRound} />)}
            <div className="flex">
                {grouped["Spokane 4"] && <Spokane4_Display predictions={grouped["Spokane 4"]} results={results} game8004={game8004}/> }
                {grouped["Birmingham 3"] && <Birmingham3_Display predictions={grouped["Birmingham 3"]} results={results} game8003={game8003} game1003={game1003} game1004={game1004}/>}
            </div>
        </main>











    //     <main className="max-w-3xl mx-auto p-6">
    //         <div className="grid grid-cols-1 gap-4">
    //             {predictionsWithResults.map((pred) => (
    //                 <div key={pred.game_id}>
    //                     <PredictionCard 
    //                         region={pred.region}
    //                         gameId={pred.game_id}
    //                         predictedTeam={pred}
    //                         actualTeam={pred.actualTeam}
    //                     />
    //                 </div>
    //             ))}
    //         </div>
    //   </main>
    );
} 