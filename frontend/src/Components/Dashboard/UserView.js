import React, { useEffect, useState } from "react";
import PoolInvite from "./PoolInvite";
import UserPoolCard from "./UserPoolCard";

export default function UserView () {
    const [invites, setInvites] = useState([]);
    const [pools, setPools] = useState([]);


    useEffect(() => {
        const fetchInvites = async () => {
            const res = await fetch('/api/invites');
            const data = await res.json();
            setInvites(data.invites);
        };
        fetchInvites();
    }, []);

    const handleAcceptInvite = async (poolId) => {
        const res = await fetch('/api/pools/invite/accept', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ poolId }),
        });

        if(res.ok) {
            setInvites((prev) => prev.filter((inv) => inv.pool_id !== poolId ));
        }
    };

    useEffect(() => {
            const fetchPools  = async () => {
                const res = await fetch('/api/pools/member');
                const data = await res.json();
                setPools(data.pools);
            };
            fetchPools();
        }, []);

    return (
        <div className="w-full">
            <div className="border-4 p-2 border-white/30 rounded-lg">
                <div className="mx-2">
                    <h2 className="font-bold text-lg">Notifications Center</h2>
                </div>

                <div className="flex p-2 justify-center items-center">
                    {invites.map((invite) => (
                        <PoolInvite 
                            key={invite.pool_id}
                            inviterName={invite.inviter_name}
                            poolName={invite.pool_name}
                            poolId={invite.pool_id}
                            onAccept={handleAcceptInvite}/>
                    ))}
                </div>

            </div>

            <div className="flex mt-2 flex-wrap">
                {pools.map((pool) => (
                    <UserPoolCard 
                        key={pool.id}
                        poolName={pool.pool_name}
                        poolId={pool.id}
                    />
                ))}
            </div>
        </div>

    )
}