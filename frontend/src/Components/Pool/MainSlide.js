import React from "react";

export default function MainSlide () {
    return (
        <div className="p-8 w-2/3 bg-black/20 items-center justify-center flex rounded-xl">
            <div className="font-bold">
                <h1 className="text-6xl leading-tight">Start a <span className="text-yellow-400">Bracket Battle </span>with
                <br></br> Your Friends</h1>
            </div>
            <br></br>
            <div className="w-2/3 leading-relaxed">
                <h1 className="text-3xl">Create you own <strong>private pool, invite the crew,</strong> and <strong>compete</strong> for ultimate <strong className="text-orange-400 "> bragging rights</strong>.</h1>
                <br></br>
                <h1 className="text-3xl"><strong>Office rivalries, family fueds, fantasy league showdowns</strong> -- all settled right here.</h1>
                <br></br>
                <h1 className="text-3xl">No pressure, just pure <strong className="text-yellow-400 border"> madness</strong>  -- your way.</h1>
            </div>

        </div>
    )
}