import React from "react";
import AccuracyChart from "./AccuracyChart";
import BarChart from "./BarChart";

export default function BracketInfoCard({ round, round_rank, round_points, total_predictions, correct_predictions }) {
    
    const labels = ['Round 1', 'Round 2', 'Sweet 16', 'Elite 8', 'Final 4', 'Finals', 'Champion'];
    const points = [10, 20, 15, 30, 25, 35, 40]
    
    return(
    <> 
    <div className="w-full h-96 m-2 bg-black/50 rounded-lg ">
        <div className="flex py-1 justify-center">
            <p className="py-1 px-2 text-xl">Correct picks: {correct_predictions} / {total_predictions}</p>
        </div>
        <div className="flex justify-between">
            <div className="flex items-center justify-center w-1/2">
                <AccuracyChart correct={correct_predictions} total={total_predictions}/>
            </div>
            <div className="w-1/2">
                <BarChart labels={labels} data={points}/>
            </div>
        </div>
    </div>   
    </>
)}