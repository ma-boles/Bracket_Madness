import React from "react";

export default function ReminderCard () {
    return (
        <div className="text-center mx-2">
             <div className="p-4 m-1 w-80 h-50 bg-orange-600 rounded-md">
                <h1 className="mb-2 font-semibold text-2xl">Reminder</h1>
                <p className="my-4 text-lg">Fill out a bracket for the <strong>pool name</strong> pool. Submit by <strong>deadline.</strong></p>

                <div>
                    <button className="px-4 py-2 w-full bg-white/80 text-black rounded-lg hover:bg-blue-600 hover:text-white"
                        >
                            To Bracket
                        </button>
                </div>

            </div>
        </div>
    )
}