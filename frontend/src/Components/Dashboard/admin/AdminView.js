import React, { useEffect, useState } from "react";
import AdminPoolCard from "./AdminPoolCard";
import ConfirmationCard from "./ConfirmationCard";

export default function AdminView () {
    const [pools, setPools] = useState([]);

    useEffect(() => {
        const fetchPools  = async () => {
            const res = await fetch('/api/pools/admin');
            const data = await res.json();
            setPools(data.pools);
        };
        fetchPools();
    }, []);

    return (
        <div className="p-2 w-full">

            {/* is notification needed? confirmation now taking place in manage card */}

            {/* <div className="p-2 bg-white/10 rounded-lg">
                <div className="mx-2">
                    <h2 className="mx-3 font-bold text-lg">Notifications</h2>
                </div>
                <div className="p-2">

                </div>
            </div> */}

            <div>
                {pools.length === 0 && (
                    <h1 className="my-2 p-1 font-semibold text-center text-2xl text-white/50">No Pools Created</h1>
                )}
            </div>

            <div className="flex flex-wrap">
                {pools?.map((pool) => (
                    <AdminPoolCard 
                        key={pool.id}
                        poolId={pool.id}
                        poolName={pool.pool_name}
                        inviteCode={pool.code}/>
                ))}
            </div>
        </div>
    )
}