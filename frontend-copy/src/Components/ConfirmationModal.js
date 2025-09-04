import React, { useState } from "react";
import { ButtonSpinner } from "./ui/ButtonSpinner";

export default function ConfirmationModal({ show, onClose, onVerify, onSubmitBracket, picksValid, bracketName, setBracketName, isLoadingCheckPicks, isLoadingSubmit }) {
    if(!show) return null;
    

    return (
        <>
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 z-40" onClick={onClose}/>
            <div className="py-4 px-28 fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-black text-center rounded-lg">

                {!picksValid ? (
                    <div>
                        <h2 className="mb-4 font-semibold text-xl">Please verify your picks.</h2>
                        <button className="p-2 m-2 w-52 border border-white rounded-lg cursor-pointer hover:bg-purple-600 hover:border-purple-600 transition duration-300" onClick={onVerify}>
                            {isLoadingCheckPicks ? (
                                    <ButtonSpinner size={4} /> 
                                ) : (
                                    'Verify'
                                )}
                            </button>
                    </div>
                    ) : (
                    <div>
                        <div className="my-2">
                            <label className="font-semibold text-xl">Bracket Name (optional):</label>
                            <input
                            type="text"
                            placeholder="e.g. My Bracket 2025"
                            value={bracketName}
                            onChange={(e) => setBracketName(e.target.value)}
                            className="p-2 mt-8 mx-2 w-52 bg-white/10 rounded-lg"/>
                        </div>
                        <button className="p-2 my-2 w-52 border border-white rounded-lg cursor-pointer hover:bg-purple-600 hover:border-purple-600 transition duration-300" onClick={onSubmitBracket}>
                            {isLoadingSubmit ? (
                                    <ButtonSpinner size={4} /> 
                                ) : (
                                    'Submit'
                                )}
                        </button>
                    </div>
                )}

            </div>
        </>
    )
}