'use cient'
import React from "react";

export default function DeletePoolButton () {
    
    const handleDelete = async () => {
        const confirmed = confirm('Are you sure you want to delte this pool? This action cannot be undone. ');

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
                        color: '#fff'
                    }
                });
                return; 
            }

                toast.success('Pool deleted successfuly!', {
                    style: {
                    background: '#333',
                    color: '#fff'
                }
            });

            // redirect?

        } catch(error) {
            console.error('Error deleting pool:', error);
            toast.error('Someting went wrong.', {
                style: {
                background: '#333',
                color: '#fff'
            }
        });
    }
};

    return (
        <>
            <button className="px-4 py-2 w-full bg-red-600/90 rounded-xl font-bold hover:bg-red-600"
            onClick={handleDelete}>DELETE POOL</button>
        </>
    )
}
