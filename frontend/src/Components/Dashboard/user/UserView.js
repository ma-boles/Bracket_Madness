'use client'
import React, { useEffect, useState } from "react";
import InviteCard from "./InviteCard";
import UserPoolCard from "./UserPoolCard";
import { usePools } from "@/context/PoolsContext";

import ReminderCard from "./ReminderCard";

export default function UserView () {
    const [invites, setInvites] = useState([]);
    const { pools } = usePools();

    useEffect(() => {
        const fetchInvites = async () => {
            const res = await fetch('/api/invites');
            const data = await res.json();
            setInvites(data.invites);
        };
        fetchInvites();
    }, []);

    const handleAcceptInvite = async (poolId) => {
        const res = await fetch('/api/pools/member/confirm', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ poolId }),
        });

        if(res.ok) {
            setInvites((prev) => prev.filter((inv) => inv.pool_id !== poolId ));
        }
    };


    return (
        <div className="w-full">
            {invites.length > 0 && (
                <div className="p-2 bg-white/10 rounded-lg">
                    <div className="mx-2">
                        <h2 className="mx-3 font-bold text-lg">Notifications</h2>
                    </div>

                        <div className="flex flex-wrap p-2">
                            {invites.map((invite) => (
                                <InviteCard 
                                    key={invite.pool_id}
                                    inviterName={invite.inviter_name}
                                    poolName={invite.pool_name}
                                    poolId={invite.pool_id}
                                    onAccept={handleAcceptInvite}/>
                            ))}

                    </div>
                </div>
            )}

            <div>
                {pools.length === 0 && (
                    <h1 className="my-2 p-1 font-semibold text-center text-2xl text-white/50">No Pools Joined</h1>
                )}
            </div>

            <div className="flex mt-2 flex-wrap">
                {pools.map((pool) => (
                    <UserPoolCard 
                        key={pool.id}
                        poolName={pool.pool_name}
                        poolId={pool.id}
                        status={pool.status}
                        bracketSubmitted={pool.bracket_submitted}
                    />
                ))}
            </div>
        </div>

    )
}