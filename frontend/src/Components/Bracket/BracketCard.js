'use client'
import React, { useState } from "react";
import BracketInfoCard from "./BracketInfoCard";
import Link from "next/link";


export default function BracketCard({ name, bracketId, total_points, rank, accuracy_percentage, bracketInfoData }) {
    const [ showDetails, setShowDetails ] = useState(false);

    const handleToggle = () => {
        setShowDetails(prev => !prev);
    };

    return(
        <>
        <div className="m-2 bg-purple-900/10 rounded-lg">
            <div className="flex w-full">
                <div className="m-auto font-bold cursor-pointer hover:underline">
                    <Link href={`/bracket/${bracketId}`}>
                        View
                    </Link>
                </div>

                <div className="flex mx-auto mt-2 h-20 bg-purple-900 rounded-lg w-[90%]" >
                    <div className="flex w-1/5 border-r border-white items-center justify-center" >
                        <h2>
                            {bracketId}
                        </h2>
                    </div>
                    <div className="flex w-1/5 border-r border-white items-center justify-center" >
                        <h2> 
                            {name}
                        </h2>
                    </div>
                    <div className="flex w-1/5 border-r border-white items-center justify-center">
                        <h2>
                            {total_points}
                        </h2>
                    </div>
                    <div className="flex w-1/5 border-r border-white items-center justify-center">
                        <h2>
                            {rank}
                        </h2>
                    </div>
                    <div className="flex w-1/5 items-center justify-center">
                        <h2>
                            {accuracy_percentage}
                        </h2>
                    </div>
                </div>

                <div className="m-auto font-bold cursor-pointer hover:underline"
                    onClick={handleToggle}>
                    Details
                </div>
            </div>

            <div className="flex justify-center flex-wrap">
                {showDetails && (
                        <BracketInfoCard 
                            bracketInfoData={bracketInfoData}
                            />
                    // ))
                )}
            </div>
        </div>

        </>
    )
}