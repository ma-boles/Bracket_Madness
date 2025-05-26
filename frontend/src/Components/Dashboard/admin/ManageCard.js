import React from "react";

export default function ManageCard({ poolId }) {

    const handleRemoveMember = async () => {
        const response = await fetch('/api/pools/member/remove', {
                method: "DELETE",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, poolId }),
            });
    }

    const handleConfirmMember = async () => {
         const response = await fetch('/api/pools/member/confirm', {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ poolId, targetUserId }),
            });
    }

    return (
        <div className="flex ">
        <div className="w-60 h-80 bg-white/10 p-4 ml-1 flex flex-col justify-between border border-white/30 rounded-xl">
            <div>
                <h2 className="font-semibold mb-1">Members:</h2>

                <div className="flex items-center justify-between border border-white/20 mb-4">
                    <div className="flex my-2 p-1">
                        <p>User Name</p>
                    </div>
                    <button className="px-2 mx-2 h-1/2 bg-red-600 rounded-full hover:bg-red-500"
                    onClick={handleRemoveMember}> - </button>
                </div>

            </div>
            <button className="px-4 py-2 w-full bg-red-500 rounded-xl font-bold hover:bg-red-600">DELETE POOL</button>
        </div>

        <div className="w-60 h-80 bg-white/10 p-4 ml-1 flex flex-col justify-between border border-white/30 rounded-xl">
            <div>
                <h2 className="font-semibold mb-1">Pending:</h2>
                <div className="flex items-center justify-between border border-white/20 mb-4">
                    <div className="flex my-2 p-1">
                        <p>User Name</p>
                    </div>
                    <div>
                        <button className="px-2 h-1/2 bg-red-600 rounded-full hover:bg-red-500"
                        onClick={handleRemoveMember}> - </button>
                        <button className="px-2 mx-2 h-1/2 bg-green-600 rounded-full hover:bg-green-500"
                        onClick={handleConfirmMember}> + </button>
                    </div>
                </div>

            </div>
        </div>
        </div>

    )
}