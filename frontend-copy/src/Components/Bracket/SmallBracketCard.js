'use client'
import React, { useState } from "react";
import BracketInfoCard from "./BracketInfoCard";


export default function SmallBracketCard({ name, bracketId, total_points, rank, accuracy_percentage, bracketInfoData, usePoolDisplay, poolRank, poolName, accuracyData }) {
    const [ showDetails, setShowDetails ] = useState(false);

    const styleClass = usePoolDisplay
        ? "bg-yellow-400 text-black"
        : "bg-purple-900";

    const displayRank = usePoolDisplay ? poolRank : rank;
    const displayName = usePoolDisplay ? poolName : name;

    const handleToggle = () => {
        setShowDetails(prev => !prev);
    };

    return(
        <div className='m-2 w-full rounded-lg'>
            <div className={`border-4 border-white rounded-lg ${styleClass}`}>
                <div className="mx-auto" >
                    <div className="flex border-b border-white">
                        <div className="w-1/2 px-2 pt-2 border-r border-white items-center justify-center" >
                            <span className="p-2 font-bold">Bracket ID:</span>
                            <h2 className="p-2">
                                {bracketId}
                            </h2>
                        </div>
                        <div className="w-1/2 px-2 pt-2 items-center justify-center" >
                            <span className="p-2 font-bold">Bracket/Pool Name:</span>
                            <h2 className="p-2">
                                {displayName}
                            </h2>
                        </div>
                    </div>
                    <div className="flex border-b border-white">
                        <div className="w-1/2 px-2 pt-2 border-r border-white items-center justify-center">
                            <span className="p-2 font-bold">Points:</span>
                            <h2 className="p-2">
                                {total_points}
                            </h2>
                        </div>
                        <div className="w-1/2 px-2 pt-2 items-center justify-center">
                            <span className="p-2 font-bold">Rank:</span>
                            <h2 className="p-2">
                                {displayRank}
                            </h2>
                        </div>
                    </div>
                    <div className="px-2 pt-2 border-b border-white items-center justify-center">
                        <span className="font-bold p-2">Percentage:</span>
                        <h2 className="p-2">
                            {accuracy_percentage}
                        </h2>
                    </div>
                </div>

                <div className="flex py-4">
                    <div className="m-auto font-bold cursor-pointer hover:underline"
                        onClick={handleToggle}>
                        Details
                    </div>
                </div>
            </div>

            <div className="flex justify-center flex-wrap">
                {showDetails && (
                        <BracketInfoCard 
                            bracketInfoData={bracketInfoData}
                            usePoolDisplay={usePoolDisplay}
                            accuracyData={accuracyData}
                            />
                    // ))
                )}
            </div>
        </div>
    )
}