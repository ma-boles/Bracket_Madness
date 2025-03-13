import React from "react";

export default function Championship () {
    return (
        <>
        <div className="bg-blue-600 p-4">
            <div className="flex gap-6">
                <div className="flex flex-col items-center">
                <p className="text-white mb-2">Semifinal</p>
                <input className="bg-white border-2 border-black p-2 rounded-md" />
                </div>
                <div className="flex flex-col items-center">
                <p className="text-white mb-2">Champion</p>
                <input className="bg-white border-2 border-black p-2 rounded-md" />
                </div>
                <div className="flex flex-col items-center">
                <p className="text-white mb-2">Semifinal</p>
                <input className="bg-white border-2 border-black p-2 rounded-md" />
                </div>
            </div>
        </div>
        </>
    )
}