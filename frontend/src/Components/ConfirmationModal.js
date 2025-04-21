import React, { useState } from "react";

export default function ConfirmationModal({ show, onClose, onVerify, onSubmitBracket, picksValid, bracketName, setBracketName }) {
    if(!show) return null;

    return (
        <>
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 z-40" onClick={onClose}/>
            <div className="py-4 px-28 fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-black text-center rounded-lg">
                <h1 className="mb-4 text-2xl font-bold">Verify</h1>

                {!picksValid ? (
                    <div>
                        <h2 className="font-semibold">Please verify your picks.</h2> 
                        <button className="p-2 w-52 border border-white rounded-lg cursor-pointer hover:bg-purple-600 hover:border-purple-600 transition duration-300" onClick={onVerify}>Submit</button>
                    </div>  
                    ) : (
                    <div>
                        <div>
                            <label className="font-semibold">Bracket Name (optional):</label>
                            <input
                            type="text"
                            placeholder="e.g. My Bracket 2025"
                            value={bracketName}
                            onChange={(e) => setBracketName(e.target.value)}
                            className="p-2 my-4 w-52 bg-white/10 rounded-lg"/>
                        </div>
                        <button className="p-2 w-52 border border-white rounded-lg cursor-pointer hover:bg-purple-600 hover:border-purple-600 transition duration-300" onClick={onSubmitBracket}>Submit</button>
                    </div>
                )}

            </div>
        </>
    )
}
                    