import React from "react";

export default function SuccessModal ({ isOpen, onClose, poolName, inviteCode, onRedirect}) {
    if(!isOpen) return null;

    useEffect(() => {
        const handleEscape = (e) => {
            if(e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    if(!isOpen) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(inviteCode);
    };

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Pool Created Successfully!</h2>
                <p className="mb-2 text-lg font-medium">Pool Name:</p>
                <p className="mb-4 text-gray-800">{poolName}</p>

                <p className="mb-2 text-lg font-medium">Invite Code:</p>
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-blue-600 font-mono bg-gray-100 px-3 py-1 rounded">{inviteCode}</span>
                     <button
                        onClick={handleCopy}
                        className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
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
                    className="w-full text-gray-500 hover:text-gray-700 text-sm"
                    >
                    Close
                </button>
            </div>
        </div>
    )
}