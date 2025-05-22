import React from "react";
import AdminPoolCard from "./AdminPoolCard";

export default function AdminView () {
    return (
        <div className="p-2">
            <div className="flex flex-wrap">
                <AdminPoolCard />
            </div>
        </div>
    )
}