import React from "react";
import AdminPoolCard from "./AdminPoolCard";
import { usePools } from "@/context/PoolsContext";
import LoadingMessage from "@/Components/ui/LoadingMessage";

export default function AdminView () {
    const { adminPools, isLoading } = usePools();

    return (
        <div className="p-2 w-full">

            {/* <div className="p-2 bg-white/10 rounded-lg">
                <div className="mx-2">
                    <h2 className="mx-3 font-bold text-lg">Notifications</h2>
                </div>
                <div className="p-2">

                </div>
            </div> */}
                {isLoading ? (
                    <LoadingMessage />

                        ) : adminPools.length === 0 ? (
                            <h1 className="my-2 p-1 font-semibold text-center text-2xl text-white/50">
                            No Pools Created
                            </h1>
                        ) : (
                            <div className="flex flex-wrap justify-center md:justify-start">
                            {adminPools.map((pool) => (
                                <AdminPoolCard
                                key={pool.id}
                                poolId={pool.id}
                                poolName={pool.pool_name}
                                inviteCode={pool.code}
                                />
                            ))}
                    </div>
                )}
                </div>
            );
        };