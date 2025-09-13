import React, { useState } from "react";
import DeletePoolButton from "./DeletePoolButton";
import Image from "next/image";

export default function ManageCard({ poolId, activeMembers, pendingMembers, onRemoveMember, onConfirmMember }) {

    return (
        <div className="block md:flex">
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
                                <button className="p-1 rounded-full hover:bg-red-600/90"
                                onClick={() => onRemoveMember(activeMember.user_id)}> 
                                    <Image           
                                        src="/circle-minus-solid.svg"
                                        alt="remove"
                                        width={20}
                                        height={20}
                                        className="invert opacity-90" 
                                    />
                                 </button>
                            </div>
                        ))
                    ) : (
                        <p className="my-2 p-1 font-semibold text-center text-xl text-white/50">No active members</p>
                    )}
                </div>

            </div>
                <DeletePoolButton poolId={poolId}/>
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
                                    <button className="p-1 mx-2 rounded-full hover:bg-red-600/90"
                                    onClick={() => onRemoveMember(pendingMember.user_id)}> 
                                        <Image           
                                            src="/circle-minus-solid.svg"
                                            alt="remove"
                                            width={20}
                                            height={20}
                                            className="invert opacity-90"
                                        />
                                    </button>
                                    <button className="p-1 rounded-full hover:bg-green-600/90"
                                    onClick={() => onConfirmMember(pendingMember.user_id)}> 
                                        <Image           
                                                src="/circle-plus-solid.svg"
                                                alt="add"
                                                width={20}
                                                height={20}
                                                className="invert opacity-90"
                                            />
                                     </button>
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