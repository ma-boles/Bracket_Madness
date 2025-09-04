'use client'
import NavBar from "@/src/Components/NavBar";
import SlideCarousel from "@/src/Components/Pool/SlideCarousel";

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