import React from "react";
import AdminPoolCard from "./AdminPoolCard";
import { usePools } from "@/src/context/PoolsContext";
import LoadingMessage from "../../ui/LoadingMessage";

export default function AdminView () {
    const { adminPools, isLoading } = usePools();

    return (
        <div className="p-2 w-full">
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