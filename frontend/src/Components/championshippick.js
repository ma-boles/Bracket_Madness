'use client'
import React from "react";
import { useBracket } from "@/context/BracketContext";
import Spokane1_Input from "./Spokane1/Spokane1_Input";
import Birmingham2_Input from "./Birmingham2/Birmingham2_Input";
import Birmingham3_Input from "./Birmingham3/Birmingham3_Input";
import Spokane4_Input from "./Spokane4/Spokane4_Input";
import Winner_Input_4001 from "./Championship_Input/Winner_Input_4001";
import Winner_Input_4002 from "./Championship_Input/Winner_Input_4002";
import Championship_Input from "./Championship_Input/Championship_Input";


export default function ChampionshipPick () {
    const { userPicks, setUserPicks, handlePick } = useBracket();
    
    return (
        <>
            <div className="round">
                    <div className="flex gap-6 p-4 bg-blue-600 rounded-md">
                        <div className="my-auto flex flex-col items-center">
                            <Spokane1_Input region='finalfour' gameId={9001}/>
                            <Spokane4_Input region='finalfour' gameId={9001}/>
                        </div>

                        <div className="p-2 flex flex-col items-center">
                            <Championship_Input region='championship' gameId={10001}/>

                            <h1 className="text-2xl pb-2">Championship</h1>

                            <Winner_Input_4001 region='finalfour' gameId={100000}/>
                            <Winner_Input_4002 region='finalfour' gameId={100000}/>
                        </div>

                        <div className="my-auto flex flex-col items-center">
                            <Birmingham2_Input region='finalfour' gameId={9002}/>
                            <Birmingham3_Input region='finalfour' gameId={9002}/>
                        </div>
                    </div>
            </div>
        </>
    )
}