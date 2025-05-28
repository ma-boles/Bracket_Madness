import React, { useState } from "react";
import DeletePoolButton from "./DeletePoolButton";

export default function ManageCard({ poolId, pool, activeMembers, pendingMembers, onRemoveMember, onConfirmMember }) {

    return (
        <div className="flex">
        <div className="w-60 h-80 bg-white/10 px-2 py-4 flex flex-col justify-between border border-white/30 rounded-xl">
            <div>
                <h2 className="font-semibold mb-1 px-1">Members:</h2>

                <div>
                    {activeMembers.length > 0 ? (
                        activeMembers.map((activeMember) => (
                            <div key={activeMember.user_id}  className="flex items-center justify-between hover:bg-white/10 rounded-lg">
                                <div className="flex my-2 p-1">
                                    <p>{activeMember.username}</p>
                                </div>
                                <button className="px-2 mx-2 h-1/2 bg-red-600 rounded-full hover:bg-red-500"
                                onClick={() => onRemoveMember(activeMember.user_id)}> - </button>
                            </div>
                        ))
                    ) : (
                        <p className="my-2 p-1 font-semibold text-center text-xl text-white/50">No active members</p>
                    )}
                </div>

            </div>
                <DeletePoolButton poolId={pool.id}/>
        </div>

        <div className="w-60 h-80 bg-white/10 px-2 py-4  flex flex-col justify-between border border-white/30 rounded-xl">
            <div>
                <h2 className="font-semibold mb-1 px-1">Pending:</h2>
                <div>
                    {pendingMembers.length > 0 ? (
                        pendingMembers.map((pendingMember) => (
                            <div key={pendingMember.user_id} className="flex items-center justify-between hover:bg-white/10 rounded-lg">
                                <div className="flex my-2 p-1">
                                    <p>{pendingMember.username}</p>
                                </div>
                                <div>
                                    <button className="px-2 h-1/2 bg-red-600 rounded-full hover:bg-red-500"
                                    onClick={() => onRemoveMember(pendingMember.user_id)}> - </button>
                                    <button className="px-2 mx-2 h-1/2 bg-green-600 rounded-full hover:bg-green-500"
                                    onClick={() => onConfirmMember(pendingMember.user_id)}> + </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="my-2 p-1 font-semibold text-center text-xl text-white/50">No pending members</div>
                    )}
                </div>

            </div>
        </div>
        </div>

    )
}