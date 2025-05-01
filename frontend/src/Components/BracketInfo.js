import React from "react";

export default function BracketInfo() {
    return(
        <>
        <div className="flex m-2 h-20 bg-purple-900 border border-white rounded-lg" >
            <div className="flex w-1/4 border-r border-white items-center justify-center" >
                <h2 className="text-center underline"> 
                    Bracket Name
                </h2>
            </div>
            <div className="flex w-1/4 border-r border-white items-center justify-center">
                <h2>
                    Bracket ID
                </h2>
            </div>
            <div className="flex w-1/4 border-r border-white items-center justify-center">
                <h2>
                    Total Points
                </h2>
            </div>
            <div className="flex w-1/4 items-center justify-center">
                <h2>
                    Ranking
                </h2>
            </div>
        </div>
        </>
    )
}