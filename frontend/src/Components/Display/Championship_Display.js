'use client'
import React from "react"
import FinalFourCard_Display from "./FinalFourCard_Display"


export default function Championship_Display({ groupedRound }) {

    const game8001 = groupedRound.FinalRounds.find(g => g.game_id === 8001);
    const game8002 = groupedRound.FinalRounds.find(g => g.game_id === 8002);
    const game8003 = groupedRound.FinalRounds.find(g => g.game_id === 8003);
    const game8004 = groupedRound.FinalRounds.find(g => g.game_id === 8004);

    const game10001 = groupedRound.FinalRounds.find(g => g.game_id === 10001);
    const game10002 = groupedRound.FinalRounds.find(g => g.game_id === 10002);
    const game10003 = groupedRound.FinalRounds.find(g => g.game_id === 10003);


    return (
        <>
            <div className="round">
                    <div className="flex gap-6 p-6 bg-black/20 rounded-md text-center">
                        <div className="my-auto flex flex-col items-center">
                            <div className="mx-auto pt-12">
                                <strong className="text-lg">Semifinal #1</strong>
                                <div className="w-42 h-37 mx-4 mt-2 flex flex-col justify-between border-r border-white bg-white/5 text-sm/6 text-white">
                                        {game8001 && <FinalFourCard_Display game={game8001} size="finalfour"/>}
                                        {game8004 && <FinalFourCard_Display game={game8004} size="finalfour"/>}
                                </div>
                            </div>
                        </div>

                        <div className="pb-2 px-2 flex flex-col items-center">
                            <strong className="text-xl">Champion</strong>
                            <div className="flex w-52 mb-6 mt-2 p-4 bg-white/10 border-2 border-white rounded-lg">
                                {game10003 && <FinalFourCard_Display game={game10003} size="finalfour"/>}
                            </div>

                            <div> 
                                <strong className="text-lg">Final</strong>
                            <div className="w-42 h-37 mt-2 flex flex-col justify-between border border-white">
                                {game10001 && <FinalFourCard_Display game={game10001} size="finalfour"/>}
                                {game10002 && <FinalFourCard_Display game={game10002} size="finalfour"/>}
                            </div>
                            </div>
                        </div>

                        <div className="my-auto flex flex-col items-center">
                            <div className="mx-auto pt-12">
                                <strong className="text-lg">Semifinal #2</strong>
                                <div className="w-42 h-37 mx-4 mt-2 flex flex-col justify-between border-l border-white bg-white/5 text-sm/6 text-white">
                                    {game8002 && <FinalFourCard_Display game={game8002} size="finalfour"/>}
                                    {game8003 && <FinalFourCard_Display game={game8003} size="finalfour"/>}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}