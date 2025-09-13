'use client'
import React, { useState } from "react";
import BracketInfoCard from "./BracketInfoCard";
import LoadingMessage from "../ui/LoadingMessage";
import { useRouter } from "next/navigation";

export default function BracketCard({ name, bracketId, total_points, rank, accuracy_percentage, bracketInfoData, usePoolDisplay, poolRank, poolName, accuracyData }) {
    const [ showDetails, setShowDetails ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const router = useRouter();

    const styleClass = usePoolDisplay
        ? "bg-yellow-400 text-black"
        : "bg-purple-900";

    const displayRank = usePoolDisplay ? poolRank : rank;
    const displayName = usePoolDisplay ? poolName : name;

    const handleToggle = () => {
        setShowDetails(prev => !prev);
    };

    const handleView = () => {
        setLoading(true);
        router.push(`/bracket/${bracketId}`)
    };

    return(
        <>
        <div className='m-2 rounded-lg'>
            <div className="flex flex-row w-full items-center justify-between">
                <div className="my-auto pl-4 pr-2 font-bold cursor-pointer hover:underline"
                    onClick={handleView}>
                    View
                </div>

                {loading && (
                    <div> 
                        <LoadingMessage />
                    </div>
                )}

                <div className={`flex flex-row mx-auto mt-2 h-20 rounded-lg w-[90%] ${styleClass}`} >
                    <div className="flex w-1/5 border-r border-white items-center justify-center" >
                        <h2>
                            {bracketId}
                        </h2>
                    </div>
                    <div className="flex w-1/5 border-r px-2 border-white items-center justify-center" >
                        <h2 className="truncate"> 
                            {displayName}
                        </h2>
                    </div>
                    <div className="flex w-1/5 border-r border-white items-center justify-center">
                        <h2>
                            {total_points}
                        </h2>
                    </div>
                    <div className="flex w-1/5 border-r border-white items-center justify-center">
                        <h2>
                            {displayRank}
                        </h2>
                    </div>
                    <div className="flex w-1/5 items-center justify-center">
                        <h2>
                            {accuracy_percentage}
                        </h2>
                    </div>
                </div>

                <div className="m-auto pl-2 pr-4 font-bold cursor-pointer hover:underline"
                    onClick={handleToggle}>
                    Details
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

        </>
    )
}