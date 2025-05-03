import NavBar from "@/Components/NavBar";
import React from "react";
import Image from "next/image";
import BracketCard from "@/Components/Bracket/BracketCard";

export default function Dashboard() {

    const bracketsCardData = [
        { name: 'First Bracket 1', id: 6, total_points: 40, ranking: 5},
        { name: 'Bracket #2', id: 7, total_points: 40, ranking: 5},
    ];

    return(
        <>
        <nav>
            <NavBar />
        </nav>

        <div className="flex justify-between overflow-hidden mx-2 my-8 h-50 bg-gradient-to-r from-blue-600 via-black to-black rounded-lg">
            <h1 className="p-6 text-4xl font-bold"> Hello, username</h1>
            <Image
                src="/BracketMadness_background.jpg"
                alt="header"
                width={570}
                height={330}
                className="py-2 object-cover opacity-40"
            />
        </div>

        <div className="m-2 border border-white bg-white/5 rounded-lg">
            <h1 className="m-2 py-2 text-3xl font-semibold">My Brackets</h1>
            <div className="flex mx-2 py-2 bg-white/15 rounded-t-lg">
                <p className="w-1/4 text-center font-semibold">Bracket Name</p>
                <p className="w-1/4 text-center font-semibold">Bracket ID</p>
                <p className="w-1/4 text-center font-semibold">Total Points</p>
                <p className="w-1/4 text-center font-semibold">Ranking</p>
            </div>

            {bracketsCardData.map((item, index) => (
                    <BracketCard 
                        key={index}
                        name={item.name}
                        id ={item.id}
                        total_points={item.total_points}
                        ranking={item.ranking}
                        />
                    ))}
        </div>
        </>
    )
}