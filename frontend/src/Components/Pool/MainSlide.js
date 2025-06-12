import React from "react";

export default function MainSlide ({ handlePrev, handleNext }) {
    return (
        <div className="h-full w-full flex justify-center items-center overflow-y-auto">
        <div className="flex flex-col md:flex-row p-4 py-8 sm:p-6 md:p-8 sm:w-5/6 md:w-2/3 md:bg-black/20 items-center justify-center rounded-xl
        mobile-landscape-padding">
            <div className="w-2/3 md:px-4 md:pt-0 py-6 font-bold  portrait-padding">
                <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">Start a <span className="text-yellow-400">Bracket Battle </span>with
                <br></br> Your Friends</h1>
            </div>
            <br></br>
            <div className="w-2/3 leading-relaxed">
                <h1 className="text-lg sm:text-xl md:text-2xl">Create your own <strong>private pool, invite the crew,</strong> and <strong>compete</strong> for ultimate <strong className="underline"> bragging rights</strong>.</h1>
                <br></br>
                <h1 className="text-lg sm:text-xl md:text-2xl"><strong>Office rivalries, family fueds, fantasy league showdowns</strong> -- all settled right here.</h1>
                <br></br>
                <h1 className="text-lg sm:text-xl md:text-2xl">No pressure, just pure <strong className="text-yellow-400 border"> madness</strong>  -- your way.</h1>
            </div>
            <div className="pt-6 md:hidden flex justify-center items-center">
                <button className="bg-white/10 text-white font-bold py-2  m-2 rounded-lg w-22 hover:text-black hover:bg-white"
                    onClick={handlePrev}>
                        Create
                </button>
                <button className="bg-white/10 font-bold py-2 m-2 rounded-lg w-22 hover:text-black hover:bg-white"
                    onClick={handleNext}>
                        Join
                </button>
            </div>
        </div>
        </div>
    )
}