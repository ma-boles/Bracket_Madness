import React from "react";
import NavBar from "../../Components/NavBar";
import West from "../../Components/spokane1_pick";
import East from "../../Components/spokane4_pick";
import South from "../../Components/birmingham3_pick";
import Midwest from "../../Components/birmingham2_pick";
import FirstFour from "../../Components/firstfourpick";
import Championship from "../../Components/championshippick";

export default function Bracket_Picks() {
    return(
        <>
            <nav>
                <NavBar />
            </nav>
            <div className="bg-black">
                <div className="w-full">
                    <FirstFour />
                </div>
                <div>
                <div className="flex">
                    <West />
                    <Midwest />
                </div>
                    <Championship />
                <div className="flex">
                    <East />
                    <South />
                </div>
                </div>
            </div>
        </>
    )
}