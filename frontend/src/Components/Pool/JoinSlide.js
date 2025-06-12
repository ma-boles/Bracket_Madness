import React from "react";
import JoinForm from "../forms/JoinForm";

export default function JoinSlide ({ setSlideIndex, slideIndex }) {
    return (
        <div>

        <div className="md:py-18 px-12 md:bg-black/60 rounded-xl">
            <JoinForm />
        </div>
        <div className="flex px-12 pt-4">
            {slideIndex !== 1 && (
                <div className="md:hidden flex justify-center">
                    <button className="bg-white/10 text-white font-bold py-2 rounded-lg w-22 hover:text-black hover:bg-white"
                        onClick={() => setSlideIndex(1)}>
                        Back
                    </button>
                </div>
            )}
        </div>

        </div>
    )
}