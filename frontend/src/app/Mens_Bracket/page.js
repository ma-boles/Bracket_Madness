import React from "react";
import NavBar from "../Components/NavBar";
import West from "../Components/west";
import East from "../Components/east";
import South from "../Components/south";
import Midwest from "../Components/midwest";

export default function Mens_Bracket() {
    return(
        <>
        <nav>
            <NavBar />
        </nav>
        <div className="bracket">
            <West />
            <East />
            <South />
            <Midwest />
        </div>
        </>
    )
}