import React from "react";
import BracketInfoCard from "./BracketInfoCard";


export default function BracketCard({ name, id, total_points, ranking}) {

    const bracketInfoData = [
        { round: 'First Four', round_rank: 19, round_points: 40 },
        { round: '1st Round', round_rank: 7, round_points: 80 },
        { round: '2nd Rd', round_rank: 1, round_points: 30 },
        { round: 'Sweet 16', round_rank: 29, round_points: 50 },
        { round: 'Elite 8', round_rank: 59, round_points: 20 },
        { round: 'Final Four', round_rank: 5, round_points: 10 },
        { round: 'Championship', round_rank: 1, round_points: 30 },
    ];

    return(
        <>
        <div className="m-2 bg-purple-900/10 rounded-lg ">
            <div className="flex mt-2 h-20 bg-purple-900 border border-white rounded-lg" >
                <div className="flex w-1/4 border-r border-white items-center justify-center" >
                    <h2 className="text-center underline"> 
                        {name}
                    </h2>
                </div>
                <div className="flex w-1/4 border-r border-white items-center justify-center">
                    <h2>
                        {id}
                    </h2>
                </div>
                <div className="flex w-1/4 border-r border-white items-center justify-center">
                    <h2>
                        {total_points}
                    </h2>
                </div>
                <div className="flex w-1/4 items-center justify-center">
                    <h2>
                        {ranking}
                    </h2>
                </div>
            </div>
            <div className="flex justify-center flex-wrap">
                {bracketInfoData.map((item, index) => (
                    <BracketInfoCard 
                        key={index}
                        round={item.round}
                        round_rank={item.round_rank}
                        round_points={item.round_points}
                        />
                ))}
            </div>
        </div>

        </>
    )
}