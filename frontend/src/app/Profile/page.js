import React from "react";
import West from "../Components/west";
import East from "../Components/east";
import South from "../Components/south";
import Midwest from "../Components/midwest";
import NavBar from "../Components/NavBar";
import Championship from "../Components/championship";

export default function Profile() {
    return(
        <>
        <nav>
            <NavBar />
        </nav>
        
        <div className="bracket">
            <div>
            {/* <West />
            <East /> */}
            </div>
            <Championship />
            <div>
            {/* <South />
            <Midwest /> */}
            </div>
            
        </div>
        </>
    )
}