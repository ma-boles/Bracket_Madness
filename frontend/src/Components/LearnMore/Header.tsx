'use client'
import { useState } from "react";

type Headerprops = {
    title: string;
};

export default function Header ({ title }: Headerprops) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full py-4 px-6 bg-blue-600 shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold">{title}</h1>

                {/* Hamburger Button */}
                <button
                className="md:hidden focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    )}
                </svg>
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-6">
                    <NavLinks />
                </nav>
            </div>

                {/* Mobile nav dropdown */}
                {menuOpen && (
                    <div className="md:hidden px-6 pb-4">
                        <nav className="flex flex-col space-y-3">
                            <NavLinks />
                        </nav>
                    </div>
                )}
        </header>
    );
}

function NavLinks() {
    return (
        <>
            <nav className="space-x-6">
                <a href="#home" className="text-gray-200 hover:text-white font-medium">
                    Home
                </a>
                <a href="#features" className="text-gray-200 hover:text-white font-medium">
                    Features
                </a>
                <a href="#demo" className="text-gray-200 hover:text-white font-medium">
                    Demo
                </a>
            </nav>
        </>
    )
}