'use client'
import React from "react";
import TeamButton from "@/Components/TeamButton";
import { useBracket } from "@/context/BracketContext";

export default function MobileRound_FirstFour() {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    
    return(
        <>
            <div className="pt-4">
                        <div className="pb-6 px-4 flex flex-col">
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
                        <div className="pb-6 px-4 flex flex-col">
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
                        <div className="pb-6 px-4 flex flex-col">
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
                        <div className="pb-6 px-4 flex flex-col">
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