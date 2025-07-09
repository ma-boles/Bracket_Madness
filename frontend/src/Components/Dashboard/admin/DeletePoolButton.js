'use client'
import React from "react";
import toast from "react-hot-toast";
import { usePools } from "@/context/PoolsContext";

export default function DeletePoolButton ({ poolId }) {
    const { deletePool } = usePools();
    
    const handleDelete = async () => {
        const confirmed = confirm('Are you sure you want to delete this pool? This action cannot be undone. ');

        if(!confirmed) return;

        try {
            const res = await fetch(`/api/pools/delete/${poolId}`, {
                method: 'DELETE',
                credentials:'include',
            });

            const data = await res.json();

            if(!res.ok) {
                    toast.error(data.message || 'Failed to delete pool.', {
                        style: {
                            background: '#333',
                            color: '#fff',
                            border: '2px solid #ef4444', 
                            padding: '12px 16px',
                            borderRadius: '8px',
                    }
                });
                return; 
            }

                toast.success('Pool deleted successfully!', {
                    style: {
                        background: '#333',
                        color: '#fff',
                        border: '2px solid #10b981',
                        padding: '12px 16px',
                        borderRadius: '8px',
                }
            });

            // Updates UI following removal
            deletePool(poolId);


        } catch(error) {
            console.error('Error deleting pool:', error);
            toast.error('Someting went wrong.', {
                style: {
                    background: '#333',
                    color: '#fff',
                    border: '2px solid #ef4444',
                    padding: '12px 16px',
                    borderRadius: '8px',
            }
        });
    }
};

    return (
            <button className="px-4 py-2 w-full bg-red-600/90 rounded-xl font-bold hover:bg-red-600"
            onClick={handleDelete}>DELETE POOL</button>
    )
}
