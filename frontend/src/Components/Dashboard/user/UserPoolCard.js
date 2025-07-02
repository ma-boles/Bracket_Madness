import React, { useState, useEffect } from "react";
import Link from "next/link";
import LeavePoolButton from "./LeavePoolButton";
import { useRouter } from "next/navigation";
import { usePools } from "@/context/PoolsContext";
import toast from "react-hot-toast";

export default function UserPoolCard ({ poolId, poolName, bracketSubmitted }) {
    const router = useRouter();
    const { fetchPoolBrackets } = usePools();
    const [bracketRank, setBracketRank] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBrackets = async () => {
            const data = await fetchPoolBrackets(poolId);
            setBracketRank(data);
            setLoading(false);
        };
        loadBrackets();
    }, [poolId]);

    const handleValidatePool = async () => {
        const res = await fetch(`/api/pool-membership/validate?pool_id=${poolId}`);
        const data = await res.json();

        if(data.ok) {
            router.push(`/Submit?pool_id=${poolId}`);
        } else {
            toast.error(data.message || 'You cannot fill out a bracket for this pool.', {
                        style: {
                        background: '#333',
                        color: '#fff'
                    }}
                )
            }
    };

    return(
        <div className="my-2 mx-1 border-2 border-white/70 flex flex-col justify-between rounded-xl"> 
           <div className="p-2 bg-blue-600 rounded-t-xl">
                <h1 className="font-bold">{poolName} </h1>
                <h1><strong>ID</strong>: {poolId}</h1>
           </div>

            <div className="relative p-4 w-80">
                <div className="relative bg-white/5 h-40">
                    <h2 className="mb-2 underline text-lg text-center">Standings</h2>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul>
                        {bracketRank.map((bracket, idx) => (
                            <li key={bracket.id} className="flex p-2 text-lg rounded-sm hover:bg-white/20">
                                <div className="indent-1">
                                    {idx + 1}
                                </div>
                                <div className="mx-2">
                                    {bracket.username}
                                </div>
                                <div className="px-4 flex-grow text-right">
                                    {bracket.points} pts
                                </div>
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>

                    {bracketSubmitted === 0 && (
                        <div className="absolute inset-0 z-10 bg-black/70 bg-opacity-50 backdrop-blur-md rounded-xl flex items-center justify-center">
                            <div className="p-8 text-center">
                                <h2 className="font-semibold text-xl mb-4">Submit a  bracket for <br></br> full access.</h2>
                                <Link href="/Submit">
                                    <button className="mt-2 px-4 py-2 w-full font-medium bg-blue-600 rounded-lg hover:bg-white/80 hover:text-black"
                                    onClick={handleValidatePool}>Submit Bracket</button>
                                </Link>
                            </div>
                        </div>
                    )}
           </div>

           <div className="px-2">
                <LeavePoolButton poolId={poolId}/>
           </div>

        </div>
    )
}