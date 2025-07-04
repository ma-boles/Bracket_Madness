'use client'
import React from "react";
import toast from "react-hot-toast";
import { usePools } from "@/context/PoolsContext";

export default function LeavePoolButton ({ poolId }) {
    const { leavePool } = usePools();
    
    const handleLeave = async () => {
        const confirmed = confirm('Are you sure you want to leave this pool? This action cannot be undone. ');

        if(!confirmed) return;

        try {
            const res = await fetch(`/api/pools/leave/${poolId}`, {
                method: 'DELETE',
                credentials:'include',
            });

            const data = await res.json();

            if(!res.ok) {
                    toast.error(data.message || 'Failed to leave pool.', {
                        style: {
                        background: '#333',
                        color: '#fff'
                    }
                });
                return; 
            }

                toast.success('Successfully left pool!', {
                    style: {
                    background: '#333',
                    color: '#fff'
                }
            });

            // Updates UI following removal
            leavePool(poolId);

            // redirect?

        } catch(error) {
            console.error('Error leaving pool:', error);
            toast.error('Something went wrong.', {
                style: {
                background: '#333',
                color: '#fff'
            }
        });
    }
};

    return (
            <button className="py-2 my-2 bg-red-600 w-full rounded-lg font-semibold hover:bg-white/80 hover:text-black"
            onClick={handleLeave}>LEAVE POOL</button>
    )
}