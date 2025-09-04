import React from "react";
import TeamResult from "../TeamResult";

export default function FirstFour_Result() {
    return(
        <>
            <div className="round pt-4">
                <h1 className="py-2 text-center text-2xl">First Four</h1>
                    <div className="flex flex-wrap sm:flex-nowrap justify-center gap-0 pt-4 bg-blue-600 rounded-md">
                        <div className="pb-6 px-4 flex flex-col items-center">
                            <h1 className="w-33 mb-2 bg-black/20 text-center">Spokane 1</h1>
                            <TeamResult 
                                region='firstfour'
                                gameId={1001}
                                team={{ id: 16, team_name: 'UCSD', seed: 16}}
                                />
                            <TeamResult 
                                region='firstfour'
                                gameId={1001}
                                team={{ id: 17, team_name: 'Southern', seed: 16}}
                                />
                        </div>
                        <div className="pb-6 px-4 flex flex-col items-center">
                            <h1 className="w-33 mb-2 bg-black/20 text-center">Birmingham 2</h1>
                            <TeamResult 
                                region='firstfour'
                                gameId={1002}
                                team={{ id: 28, team_name: 'Washington', seed: 11}}
                                />
                            <TeamResult 
                                region='firstfour'
                                gameId={1002}
                                team={{ id: 29, team_name: 'Columbia', seed: 11}}
                                />
                        </div>
                        <div className="pb-6 px-4 flex flex-col items-center">
                            <h1 className="w-33 mb-2 bg-black/20 text-center">Birmingham 3</h1>
                            <TeamResult 
                                region='firstfour'
                                gameId={1003}
                                team={{ id: 45, team_name: 'Iowa St', seed: 11}}
                                />
                            <TeamResult 
                                region='firstfour'
                                gameId={1003}
                                team={{ id: 46, team_name: 'Princeton', seed: 11}}
                                />
                        </div>
                        <div className="pb-6 px-4 flex flex-col items-center">
                            <h1 className="w-33 mb-2 bg-black/20 text-center">Birmingham 3</h1>
                            <TeamResult 
                                region='firstfour'
                                gameId={1004}
                                team={{ id: 51, team_name: 'High Point', seed: 16}}
                                />
                            <TeamResult
                                region='firstfour'
                                gameId={1004}
                                team={{ id: 52, team_name: 'William & Mary', seed: 16}}
                                />
                        </div>
                    </div>
            </div>
        </>

    )
}