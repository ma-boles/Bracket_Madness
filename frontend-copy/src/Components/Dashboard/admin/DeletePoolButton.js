'use client'
import React from "react";
import toast from "react-hot-toast";
import { usePools } from "@/src/context/PoolsContext";

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
                        className: 'toastError',
                    });
                return; 
            }

                toast.success('Pool deleted successfully!', {
                    className: 'toastSuccess',
                });

            // Updates UI following removal
            deletePool(poolId);


        } catch(error) {
            console.error('Error deleting pool:', error);
            toast.error('Something went wrong.', {
                className: 'toastError',
            });
    }
};

    return (
            <button className="px-4 py-2 w-full bg-red-600/90 rounded-xl font-bold hover:bg-red-600"
            onClick={handleDelete}>DELETE POOL</button>
    )
}
