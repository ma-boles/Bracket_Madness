import React from "react";
import WestPick from "../../Components/westpick";
import EastPick from "../../Components/eastpick";
import SouthPick from "../../Components/southpick";
import MidwestPick from "../../Components/midwestpick";
import NavBar from "../../Components/NavBar";
import FirstFourPick from "../../Components/firstfourpick";
import ChampionshipPick from "../../Components/championshippick";


export default function Profile() {
    return(
        <>
        <nav>
            <NavBar />
        </nav>
        <div className="bg-slate-800">
            <div className="w-full">
                <FirstFourPick />
            </div>
            <div>
                <div className="flex">
                    <WestPick />
                    <MidwestPick />
                </div>
            <Championship />
                <div className="flex">
                    <EastPick />
                    <SouthPick />
                </div>
            </div>
        </div>
        </>
    )
}