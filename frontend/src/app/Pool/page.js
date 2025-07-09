'use client'
// import { useContext } from "react";
// import AuthContext from "@/context/AuthContext";
import NavBar from "@/Components/NavBar";
import SlideCarousel from "@/Components/Pool/SlideCarousel";

export default function Pool () {
    

    return (
        <>
        <nav>
            <NavBar />
        </nav>

        <main className="w-full relative overflow-x-hidden overflow-y-auto">
            <SlideCarousel />
        </main>
        </>
    )
}