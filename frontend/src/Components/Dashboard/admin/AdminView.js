import React from "react";
import AdminPoolCard from "./AdminPoolCard";
import { usePools } from "@/context/PoolsContext";

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
                    <div className="flex flex-col space-y-4 items-center justify-center mt-10">
                        <div
                            className={`
                            w-64 h-24 bg-gray-800 animate-pulse rounded-lg
                            transition-opacity duration-500 ease-out
                            ${isLoading ? 'opacity-100' : 'opacity-0'}
                            `}
                        />
                    </div>
                        ) : adminPools.length === 0 ? (
                            <h1 className="my-2 p-1 font-semibold text-center text-2xl text-white/50">
                            No Pools Created
                            </h1>
                        ) : (
                            <div className="flex flex-wrap">
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


//             <div>
//                 {adminPools.length === 0 && (
//                     <h1 className="my-2 p-1 font-semibold text-center text-2xl text-white/50">No Pools Created</h1>
//                 )}
//             </div>

//             <div className="flex flex-wrap">
//                 {adminPools?.map((pool) => (
//                     <AdminPoolCard 
//                         key={pool.id}
//                         poolId={pool.id}
//                         poolName={pool.pool_name}
//                         inviteCode={pool.code}/>
//                 ))}
//             </div>
//         </div>
//     )
// }