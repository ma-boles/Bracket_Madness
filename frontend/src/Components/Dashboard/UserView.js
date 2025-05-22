import React from "react";
import PoolInvite from "./PoolInvite";
import UserPoolCard from "./UserPoolCard";

export default function UserView () {
    return (
        <div className="w-full">
            <div className="border-4 p-2 border-white/30 rounded-lg">
                <div className="mx-2">
                    <h2 className="font-bold text-lg">Notifications Center</h2>
                </div>
                <div className="flex p-2 justify-center items-center">
                    <PoolInvite />
                </div>
            </div>
            <UserPoolCard />
        </div>

    )
}