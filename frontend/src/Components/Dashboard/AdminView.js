import React from "react";
import PoolCard from "./PoolCard";

export default function AdminView () {
    return (
        <div className="p-2">
            <div className="flex flex-wrap">
                <PoolCard />
            </div>
        </div>
    )
}