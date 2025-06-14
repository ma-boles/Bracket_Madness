'use client'
import React, { useState } from "react";
import BracketInfoCard from "./BracketInfoCard";
import Link from "next/link";


export default function SmallBracketCard({ name, bracketId, total_points, rank, accuracy_percentage, bracketInfoData, usePoolDisplay, poolRank, poolName }) {
    const [ showDetails, setShowDetails ] = useState(false);

    const styleClass = usePoolDisplay
        ? "bg-orange-400 text-black"
        : "bg-blue-900";

    const displayRank = usePoolDisplay ? poolRank : rank;
    const displayName = usePoolDisplay ? poolName : name;

    const handleToggle = () => {
        setShowDetails(prev => !prev);
    };

    return(
        <div>
        <div className='m-2 w-50 rounded-lg'>
            <div className={`border-4 border-white rounded-lg ${styleClass}`}>
                <div className="mx-auto mt-2" >
                    <div className="pt-2 border-b border-white items-center justify-center" >
                        <span className="p-2 font-bold">Bracket ID | Name:</span>
                        <h2 className="p-2">
                            {bracketId} | {displayName}
                        </h2>
                    </div>
                    <div className="pt-2 border-b border-white items-center justify-center">
                        <span className="p-2 font-bold">Points | Rank :</span>
                        <h2 className="p-2">
                            {total_points} | {displayRank}
                        </h2>
                    </div>
                    <div className="pt-2 items-center justify-center">
                        <span className="font-bold p-2">Percentage</span>
                        <h2 className="p-2">
                            {accuracy_percentage}
                        </h2>
                    </div>
                </div>

                <div className="flex py-4 border-t border-white">
                    <div className="m-auto font-bold cursor-pointer hover:underline">
                        <Link href={`/bracket/${bracketId}`}>
                            View
                        </Link>
                    </div>

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
                            />
                    // ))
                )}
            </div>
        </div>

        </div>
    )
}