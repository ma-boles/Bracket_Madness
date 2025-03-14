import React from "react";
import West from "../Components/west";
import East from "../Components/east";
import South from "../Components/south";
import Midwest from "../Components/midwest";
import NavBar from "../Components/NavBar";
import FirstFour from "../Components/firstfour";
import Championship from "../Components/championship";

export default function Profile() {
    return(
        <>
        <nav>
            <NavBar />
        </nav>
        <div className="bg-slate-800">
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