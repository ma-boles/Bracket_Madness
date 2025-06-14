import React from "react";
import AccuracyChart from "./AccuracyChart";
import BarChart from "./BarChart";

export default function BracketInfoCard({ bracketInfoData, usePoolDisplay, accuracyData }) {

    const filtered = bracketInfoData.filter(item => item.round && typeof item.round_points !== 'undefined' );

    const labels = filtered.map(item => item.round);
    const points = filtered.map(item => item.round_points);

    // const accuracyItem = bracketInfoData.find(item => item.correct_predictions !== undefined );
    // const correct = accuracyItem?.correct_predictions || 0;
    // const total = accuracyItem?.total_predictions || 0;

    const correct = accuracyData?.correct_predictions || 0;
    const total = accuracyData?.total_predictions || 0;
    
    return(
    <> 
    <div className="w-full h-96 m-2 bg-black/50 rounded-lg ">
        <div className="flex pt-2 justify-center">
            <p className="px-2 text-xl">Picks: {correct} / {total}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <AccuracyChart correct={correct} total={total} usePoolDisplay={usePoolDisplay} />
            </div>
            <div className="w-full lg:w-1/2">
                <BarChart labels={labels} data={points} usePoolDisplay={usePoolDisplay} />
            </div>
        </div>
    </div>   
    </>
)}