import React from "react";
import JoinForm from "../forms/JoinForm";
import FeatureGate from "./FeatureGate";

export default function JoinSlide ({ isUser }) {
    return (
        <div className="md:py-18 px-12 md:bg-black/60 rounded-xl">
            <FeatureGate isUser={isUser}>
                <JoinForm />
            </FeatureGate>
        </div>
    )
}