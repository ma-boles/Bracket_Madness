import NavBar from "@/Components/NavBar";
import Image from "next/image";
import SlideCarousel from "@/Components/Pool/SlideCarousel";

export default function Pool () {
    return (
        <>
        <nav>
            <NavBar />
        </nav>
            <div className="flex justify-between mx-2 my-8 h-50 bg-gradient-to-r from-blue-600 via-black to-black rounded-lg">
                <h1 className="p-6 text-4xl font-bold">Pool</h1>
                    <Image
                        src="/BracketMadness_background.jpg"
                        alt="header"
                        width={570}
                        height={330}
                         className="py-2 object-cover opacity-40"
                    />
                </div>

        <main className="w-full relative overflow-x-hidden overflow-y-auto">
            <SlideCarousel />
        </main>
        </>
    )
}