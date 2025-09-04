import React from "react";

export default function ConfirmationCard () {
    return (
        <div className="text-center mx-2">
             <div className="p-4 m-1 w-80 bg-orange-600 rounded-md">
                <h1 className="my-2 font-semibold text-2xl">Confirmation</h1>
                <p className="my-4 text-lg">Confirm <strong>username</strong> joining <strong>poolname</strong>.</p>

                <div>
                    <button className="px-4 py-2 w-full bg-white/90 text-black rounded-lg hover:bg-blue-600 hover:text-white"
                        >
                            Confirm
                        </button>
                </div>

            </div>
        </div>
    )
}