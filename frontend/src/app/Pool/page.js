import NavBar from "@/Components/NavBar";
import SlideCarousel from "@/Components/Pool/SlideCarousel";

export default function Pool () {
    return (
        <>
        <nav>
            <NavBar />
        </nav>
        <div className="h-40 m-2 bg-orange-600">
            <h1>Pool Header</h1>
        </div>

        <main>
            <SlideCarousel />
        </main>
        </>
    )
}