'use client'
import React, { useEffect } from "react";

export default function SuccessModal ({ onClose, poolName, inviteCode, onRedirect}) {

    useEffect(() => {
        const handleEscape = (e) => {
            if(e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);


    const handleCopy = () => {
        navigator.clipboard.writeText(inviteCode);
    };

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white/10 border border-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Pool Created Successfully!</h2>
                <p className="mb-2 text-lg text-white/90 font-medium">Pool Name:</p>
                <p className="mb-4 text-xl font-bold">{poolName}</p>

                <p className="mb-2 text-lg font-medium">Invite Code:</p>
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-blue-600 font-mono bg-gray-100 px-3 py-1 text-xl rounded">{inviteCode}</span>
                     <button
                        onClick={handleCopy}
                        className="text-sm px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Copy
                     </button>
                </div> 

                <button
                    onClick={onRedirect}
                    className="w-full text-black/90 bg-yellow-400 hover:bg-white/90 font-semibold py-2 rounded mb-2"
                    >
                    Go to Admin Dashboard
                </button>
                <button
                    onClick={onClose}
                    className="w-full text-gray-300 hover:text-gray-600 text-sm"
                    >
                    Close
                </button>
            </div>
        </div>
    )
}