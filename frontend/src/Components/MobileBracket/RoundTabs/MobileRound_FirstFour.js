'use client'
import React, { useEffect, useState } from "react";
import TeamButton from "@/Components/TeamButton";
import { useBracket } from "@/context/BracketContext";
import { useMobileContext } from "@/context/MobileContext";

export default function MobileRound_FirstFour({ sectionId }) {
    const [ missing, setMissing] = useState(true);
    const { userPicks, setUserPicks, handlePick } = useBracket();
    const [ sectionStatus, setSectionStatus ] = useState(false);

    useEffect(() => {
        const regionPicks = userPicks["firstfour"];
        const sectionGameIds = [1001, 1002, 1003, 1004];

        const pickedCount = sectionGameIds.filter((gameId) => !!regionPicks[gameId]?.winnerId).length;

        const isComplete = sectionGameIds.length === pickedCount;
        
        setSectionStatus(sectionId, isComplete);
    }, [userPicks, sectionId, setSectionStatus]);


    return(
        <>
            <div className="pt-4">
                        <div className=" bg-white/5 mb-4 pb-6 px-4 pt-2 flex flex-col">
                            <h1 className="w-33 mb-2 bg-white/20 text-center">Spokane 1</h1>
                            <TeamButton 
                                region='firstfour'
                                gameId={1001}
                                team={{ id: 16, name: 'UCSD', seed: 16}}
                                />
                            <TeamButton 
                                region='firstfour'
                                gameId={1001}
                                team={{ id: 17, name: 'Southern', seed: 16}}
                                />
                        </div>
                        <div className="bg-white/5 my-4 pt-2 pb-6 px-4 flex flex-col">
                            <h1 className="w-33 mb-2 bg-white/20 text-center">Birmingham 2</h1>
                            <TeamButton 
                                region='firstfour'
                                gameId={1002}
                                team={{ id: 28, name: 'Washington', seed: 11}}
                                />
                            <TeamButton 
                                region='firstfour'
                                gameId={1002}
                                team={{ id: 29, name: 'Columbia', seed: 11}}
                                />
                        </div>
                        <div className="bg-white/5 my-4 pt-2 pb-6 px-4 flex flex-col">
                            <h1 className="w-33 mb-2 bg-white/20 text-center">Birmingham 3</h1>
                            <TeamButton 
                                region='firstfour'
                                gameId={1003}
                                team={{ id: 45, name: 'Iowa St', seed: 11}}
                                />
                            <TeamButton 
                                region='firstfour'
                                gameId={1003}
                                team={{ id: 46, name: 'Princeton', seed: 11}}
                                />
                        </div>
                        <div className="bg-white/5 my-2 pt-2 pb-6 px-4 flex flex-col">
                            <h1 className="w-33 mb-2 bg-white/20 text-center">Birmingham 3</h1>
                            <TeamButton 
                                region='firstfour'
                                gameId={1004}
                                team={{ id: 51, name: 'High Point', seed: 16}}
                                />
                            <TeamButton 
                                region='firstfour'
                                gameId={1004}
                                team={{ id: 52, name: 'William & Mary', seed: 16}}
                                />
                        </div>
            </div>
        </>
    )
}