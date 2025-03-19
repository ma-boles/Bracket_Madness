import React from "react";
import WestPick from "../../Components/spokane1_pick";
import EastPick from "../../Components/spokane4_pick";
import SouthPick from "../../Components/birmingham3_pick";
import MidwestPick from "../../Components/birmingham2_pick";
import NavBar from "../../Components/NavBar";
import FirstFourPick from "../../Components/firstfourpick";
import ChampionshipPick from "../../Components/championshippick";



export default function Womens_Bracket() {
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
                <ChampionshipPick />
                <div className="flex">
                    <EastPick />
                    <SouthPick />
                </div>
            </div>
        </div>
        </>
    )
}