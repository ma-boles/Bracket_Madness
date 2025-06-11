'use client'
import React, { useState } from "react";
import MainSlide from "./MainSlide";
import CreateSlide from "./CreateSlide";
import JoinSlide from "./JoinSlide";


export default function SlideCarousel () {
    const [slideIndex, setSlideIndex] = useState(1);
    

    const handlePrev = () => {
        setSlideIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setSlideIndex((prev) => Math.max(prev + 1, 2));
    };

    // const handleCreateSuccess = (pool) =>{
    //     setCreatedPool(pool);
    //     setModalOpen(true);
    //     setSlideIndex(0);
    // };

    return (
        <>
            <div className="relative overflow-hidden w-full h-screen bg-white/5">

                {/* Slide track */}
                <div className="flex w-[300vw] transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${slideIndex * 100}vw)` }}>

                {/* slides */}
                    <div className="w-screen h-screen flex items-center justify-center">
                        <CreateSlide />
                    </div>
                    <div className="w-screen h-screen flex items-center justify-center">
                        <MainSlide />
                    </div>
                    <div className="w-screen h-screen flex items-center justify-center">
                        <JoinSlide />
                    </div>
                </div>

                {/* Navigation */}
                {slideIndex === 1 ? (
                    <div className="text-center">
                    <button 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 
                    bg-white/5 font-bold w-30 h-screen p-3 z-10 cursor-pointer
                    hover:bg-white/10"
                    onClick={handlePrev}>
                        Create
                    </button>
                    <button 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2
                    bg-white/5 font-bold w-30 h-screen p-3 z-10 cursor-pointer
                    hover:bg-white/10"
                    onClick={handleNext}>
                        Join 
                    </button>
                    </div>
                ): (
                    <button 
                    onClick={() => setSlideIndex(1)}
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/5 font-bold w-30 h-screen p-3 z-10 cursor-pointer 
                        hover:bg-white/10
                    ${slideIndex === 0 ? 'right-0' : 'left-0' }`}>
                        Back
                    </button>
                )}

            </div>
               
        </>
    )
}