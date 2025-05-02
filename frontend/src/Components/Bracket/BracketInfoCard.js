import React from "react";

export default function BracketInfoCard({ round, round_rank, round_points }) {
    return(
    <> 
    <div className="bg-black w-1/3 h-60 border border-white/70 rounded-lg ">
        <div className="border-b border-white/70">
            <h1 className="mx-2 py-1 font-semibold text-2xl">{round}</h1> 
        </div>
        <div className="flex justify-between">
            <div className="w-1/3 h-50">
                <div className=" h-1/2 flex justify-center items-center">
                    <p className="text-center text-2xl">#{round_rank}</p>
                </div>
                <div className="bg-white/10 h-1/2 flex items-center justify-center">
                    <p className="text-2xl text-center">{round_points} <span className="text-sm">pts</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center flex-grow">
                <p>graph</p>   
            </div>
        </div>
    </div>   
    </>
)}