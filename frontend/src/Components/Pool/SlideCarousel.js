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

    return (
        <>
            <div className="relative overflow-hidden w-screen h-screen">

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
                    <div>
                    <button 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 
                    bg-blue-600 border-2 border-white font-bold w-30 p-3 rounded-4xl z-10 cursor-pointer"
                    onClick={handlePrev}>
                        Create
                    </button>
                    <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2
                     bg-blue-600 border-2 border-white font-bold w-30 p-3 rounded-4xl z-10 cursor-pointer"
                    onClick={handleNext}>
                        Join
                    </button>
                    </div>
                ): (
                    <button 
                    onClick={() => setSlideIndex(1)}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 border-2 border-white font-bold w-30 p-3 rounded-4xl z-10 cursor-pointer 
                    ${slideIndex === 0 ? 'right-4' : 'left-4' }`}>
                        Back
                    </button>
                )}

                {/* {slideIndex < 2 && (
                    
                )} */}

            </div>
        </>
    )
}

// {slideIndex > 0 && (
//                     <button 
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 
//                     bg-blue-600 border-2 border-white font-bold w-30 p-3 rounded-4xl z-10 cursor-pointer"
//                     onClick={handlePrev}>
//                         Create
//                     </button>
//                 )}

//                 {slideIndex < 2 && (
//                     <button 
//                     className="absolute right-4 top-1/2 transform -translate-y-1/2
//                      bg-blue-600 border-2 border-white font-bold w-30 p-3 rounded-4xl z-10 cursor-pointer"
//                     onClick={handleNext}>
//                         Join
//                     </button>
//                 )}
