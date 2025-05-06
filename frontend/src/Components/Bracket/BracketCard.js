'use client'
import React, { useContext, useEffect, useState } from "react";
import BracketInfoCard from "./BracketInfoCard";
import AuthContext from "@/context/AuthContext";
import axios from "axios";


export default function BracketCard({ name, bracketId, total_points, ranking, bracketInfoData }) {
    const [ showDetails, setShowDetails ] = useState(false);

    const handleToggle = () => {
        setShowDetails(prev => !prev);
    };

    return(
        <>
        <div className="m-2 bg-purple-900/10 rounded-lg">
            <div className="flex mt-2 h-20 bg-purple-900 cursor-pointer hover:border-2 rounded-lg" 
                onClick={handleToggle}>
                <div className="flex w-3/5 border-r border-white items-center justify-center" >
                    <h2 className="text-center underline"> 
                        {name}
                    </h2>
                </div>
                <div className="flex w-1/5 border-r border-white items-center justify-center">
                    <h2>
                        {total_points}
                    </h2>
                </div>
                <div className="flex w-1/5 items-center justify-center">
                    <h2>
                        {ranking}
                    </h2>
                </div>
            </div>
            <div className="flex justify-center flex-wrap">
                {showDetails && (
                    bracketInfoData?.map((item, index) => (
                        <BracketInfoCard 
                            key={index}
                            round={item.round}
                            round_rank={item.round_rank}
                            round_points={item.round_points}
                            />
                    ))
                )}
            </div>
        </div>

        </>
    )
}