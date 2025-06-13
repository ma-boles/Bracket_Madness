'use client'
import NavBar from "@/Components/NavBar";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import BracketCard from "@/Components/Bracket/BracketCard";
import AuthContext from "@/context/AuthContext";
import axios from "axios";
import ManagePools from "@/Components/Dashboard/ManagePools";

export default function Dashboard() {
    const [ bracketsView, setBracketsView ] = useState(true);
    const [ poolsView, setPoolsView ] = useState(false);
    const [ bracketsCardData, setBracketsCardData ] = useState([]);
    const [ globalBrackets,setGlobalBrackets ] = useState([]);
    const [ poolBrackets, setPoolBrackets ] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const userId = currentUser?.userId;

    useEffect(() => {
        const fetchBrackets = async () => {
            try {
                const res = await axios.get(`/api/brackets/user`);
                setGlobalBrackets(res.data.globalBrackets);
                setPoolBrackets(res.data.poolBrackets);
                // setBracketsCardData(res.data);
            } catch(error) {
                console.error('Failed to fetch bracket data:', error);
            }
        };
        if(userId) {
            fetchBrackets();
        }
    }, [userId]);

    const renderBracketCards = (brackets, isPool = false) => {
        return brackets.map((item, index) => {
            const bracketInfoData = [
                { round: 'First Four', round_points: item.first_four_points},
                { round: '1st Rd', round_points: item.first_round_points },
                { round: '2nd Rd', round_points: item.second_round_points },
                { round: 'Sweet 16', round_points: item.sweet16_points },
                { round: 'Elite 8', round_points: item.elite8_points },
                { round: 'Final Four', round_points: item.final4_points },
                { round: 'Champion', round_points: item.championship_points },
                { correct_predictions: item.correct_predictions, total_predictions: item.total_predictions }
            ];

            return (
                <BracketCard 
                    key={index}
                    bracketId={item.bracket_id}
                    name={item.bracket_name}
                    total_points={item.total_points}
                    rank={isPool ? undefined : item.rank}
                    accuracy_percentage={item.accuracy_percentage}
                    bracketInfoData={bracketInfoData}
                    poolRank={isPool ? item.pool_rank : undefined}
                    poolName={isPool ? item.pool_name : undefined}
                    usePoolDisplay={isPool}
                    />
            )
        })
    }

        
    // const bracketCards = bracketsCardData.map((item, index) => {
    //     const bracketInfoData = [
    //         { round: 'First Four', round_points: item.first_four_points},
    //         { round: '1st Rd', round_points: item.first_round_points },
    //         { round: '2nd Rd', round_points: item.second_round_points },
    //         { round: 'Sweet 16', round_points: item.sweet16_points },
    //         { round: 'Elite 8', round_points: item.elite8_points },
    //         { round: 'Final Four', round_points: item.final4_points },
    //         { round: 'Champion', round_points: item.championship_points },
    //         { correct_predictions: item.correct_predictions, total_predictions: item.total_predictions }
    //     ];


    //     return (
    //         <BracketCard 
    //             key={index}
    //             bracketId={item.bracket_id}
    //             name={item.bracket_name}
    //             total_points={item.total_points}
    //             rank={item.rank}
    //             accuracy_percentage={item.accuracy_percentage}
    //             bracketInfoData={bracketInfoData}
    //             />
    //     );
    // });
    
    const handleBracketsView = () => {
        setPoolsView(false);
        setBracketsView(true);
    };

    const handlePoolsView = () => {
        setPoolsView(true);
        setBracketsView(false);
    };

    return(
        <div>
            <nav>
                <NavBar />
            </nav>

            <div className="flex justify-between overflow-hidden mx-2 my-8 md:h-50 bg-gradient-to-r from-blue-600 via-black to-black rounded-lg">
                <h1 className="p-6 text-4xl font-bold">Dashboard</h1>
                <Image
                    src="/BracketMadness_background.jpg"
                    alt="header"
                    width={570}
                    height={330}
                    className="hidden md:block py-2 object-cover opacity-40"
                />
            </div>

            <div className="mx-2 py-4 border border-white bg-white/5 rounded-lg">
                <div className="flex m-4 pb-2">
                        <button className="ml-2 p-2 text-xl font-semibold border-b border-r border-white hover:bg-purple-900"
                        onClick={handleBracketsView}>My Brackets</button>
                        <button className="p-2 mx-2 text-xl font-semibold border-b border-r border-white hover:bg-yellow-400 hover:text-black "
                        onClick={handlePoolsView}>My Pools</button>
                    </div>
                    {bracketsView && (
                        <div>
                            <div className="hidden md:flex mx-auto py-2 rounded-t-lg w-[90%] bg-gradient-to-r from-white/15 to-transparent">
                                <p className="w-1/5 text-center font-semibold">ID</p>
                                <p className="w-1/5 text-center font-semibold">Bracket Name</p>
                                <p className="w-1/5 text-center font-semibold">Total Points</p>
                                <p className="w-1/5 text-center font-semibold">Rank</p>
                                <p className="w-1/5 text-center font-semibold">Percent</p>
                            </div>
                            {renderBracketCards(globalBrackets)}
                            {renderBracketCards(poolBrackets, true)}
                        </div>
                    )}
                {poolsView && (
                    <ManagePools />
                )}

            </div>
        </div>
    )
}