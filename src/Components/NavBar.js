'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { LightbulbIcon, User, Home, Trophy, InfoIcon, Menu, XIcon } from "lucide-react";

import UserMenu from "./UserMenu";
import LeaderboardModal from "./LeaderboardModal";
import LogoutButton from "../app/auth/components/LogoutButton";


export default function NavBar ({ onOpenHowToPlay, onOpenHowToPlayMobile }) {
    const router = useRouter();
    const { currentUser } = useAuth();
    const [showModal,setShowModal] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const submitAlert = () => {
        if(!currentUser) {
            toast('To submit a bracket, please log in.',{
                icon: '⚠️',
                className: 'toastWarning',
                duration: 4000,
            });
        } 
    };
    const mobileSubmitAlert = () => {
        setMobileMenuOpen(false);

        if(!currentUser) {
            toast('To submit a bracket, please log in.',{
                icon: '⚠️',
                className: 'toastWarning',
                duration: 4000,
            });
        } 
    };

    const handleLogIn = () => {
        router.push('/auth');
    };

    const toggleUserMenu = () => {
        setUserMenuOpen(prev => !prev);
    };

    const Icon = mobileMenuOpen ? XIcon : Menu;

    return(
        <>
            <div className="flex mt-2 px-2 rounded-xl justify-between items-center md:justify-center" >
                <div className="flex-1 items-center">
                    <div className="text-xl font-bold px-4">
                        <span className="font-extrabold">B</span>
                        <span className="px-1 font-light">|</span>
                        <span className="font-light">M</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:flex-4 text-lg">
                    <div className="flex-1 p-3 text-center cursor-pointer transition-all duration-300 
                            hover:bg-blue-600 rounded-lg">
                        <Link href="/Results">
                            <p>Results</p>
                        </Link>
                    </div>
                        <div className="flex-1 p-3 text-center cursor-pointer transition-all duration-300 
                            hover:bg-blue-600 rounded-lg">
                            <Link href="/Submit" onClick={submitAlert}>
                                <p>Submit</p>
                            </Link>
                        </div>
                    <div className="flex-1 p-3 text-center cursor-pointer transition-all duration-300 
                            hover:bg-blue-600 rounded-lg">
                        <Link href="/Pool">
                            <p>Pool</p>
                        </Link>
                    </div>

                </div>

                {/* Mobile Nav Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <Icon className="h-8 w-8 hover:bg-blue-600 rounded-md"/>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="fixed top-10 left-0 w-full bg-black/95 text-white flex flex-col items-center justify-center text-center text-xl z-20">
                        <Link href="/Submit" onClick={mobileSubmitAlert} className="w-full">
                            <button className="flex items-center w-full h-10 px-14 border border-transparent hover:border-blue-600 hover:bg-blue-600/30 cursor-pointer rounded-md">
                                Submit
                            </button>
                        </Link>
                        <Link href="/Pool" onClick={() => setMobileMenuOpen(false)} className="w-full">
                            <button className="flex items-center w-full h-10 px-14 border border-transparent hover:border-blue-600 hover:bg-blue-600/30 cursor-pointer rounded-md">
                                Pool
                            </button>
                        </Link>

                        {currentUser ? (
                            <div className="w-full">
                                <Link href="/Dashboard">
                                    <button
                                        className="flex items-center w-full h-10 border border-transparent hover:border-blue-600 hover:bg-blue-600/30 cursor-pointer rounded-md"
                                        role="menuitem"
                                        onClick={() => setUserMenuOpen(false)}
                                    >
                                    <div className="mx-4">
                                        <Home className="w-6 h-6 text-white" /> 
                                    </div>

                                        Dashboard
                                    </button>
                                </Link>

                                <button
                                    onClick={() => {
                                    setShowModal(true);
                                    setUserMenuOpen(false);
                                    }}
                                    className="flex items-center w-full h-10 my-1 border border-transparent hover:border-blue-600 hover:bg-blue-600/30 cursor-pointer rounded-md"
                                    role="menuitem"
                                >
                                <div className="mx-4">
                                    <Trophy className="w-6 h-6 text-white" /> 
                                </div>

                                    Leaderboard
                                </button>

                                <Link href="/Learn-More">
                                    <button
                                        className="flex items-center w-full h-10 border border-transparent hover:border-blue-600 hover:bg-blue-600/30 cursor-pointer rounded-md"
                                        role="menuitem"
                                        onClick={() => setUserMenuOpen(false)}
                                    >
                                    <div className="mx-4">
                                        <InfoIcon className="w-6 h-6 text-white" /> 
                                    </div>

                                        Learn More
                                    </button>
                                </Link>

                                 <button
                                    className="flex items-center w-full h-10 border border-transparent hover:border-blue-600 hover:bg-blue-600/30 cursor-pointer rounded-md"
                                    onClick={onOpenHowToPlayMobile}
>
                                    <div className="mx-4">
                                        <LightbulbIcon className="w-6 h-6 text-white" /> 
                                    </div>
                                        How To Play
                                </button>

                                <LogoutButton />
                            </div>


                        ) : (
                            <div className="w-full">
                                <button 
                                    disabled
                                    onClick={handleLogIn} 
                                    className="flex items-center bg-gray-300 text-gray-600 w-full h-10 px-14 border border-transparent !cursor-not-allowed rounded-md">
                                    Log In
                                </button>
                            </div>
                        )}

                    </div>
                )}

                <LeaderboardModal isOpen={showModal} onClose={() => setShowModal(false)} />


                <div className="hidden relative md:flex md:flex-1 w-1/5 p-2 justify-end items-center">
                    {currentUser ? (
                        <>
                        <div className="flex w-full px-2 justify-end">

                            <button
                                onClick={onOpenHowToPlay}
                                className="text-gray-300 hover:text-yellow-300 transition-colors px-2"
                                aria-label="How to Play"
                                >
                                <LightbulbIcon className="w-6 h-6" />
                            </button>
                            {/* User Icon Button */}
                            <button
                                onClick={toggleUserMenu}
                                aria-haspopup="true"
                                aria-expanded={userMenuOpen}
                                className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition"
                                title="User Menu"
                            >
                                {userMenuOpen ? (
                                    <XIcon className="w-7 h-7 text-white cursor-pointer" />
                                ) : (
                                    <User className="w-7 h-7 text-white cursor-pointer" />
                                )}

                            </button>
                        </div>
                        {userMenuOpen && (
                            <UserMenu 
                            currentUser={currentUser}
                            handleLogIn={handleLogIn}
                            setShowModal={setShowModal}
                            setUserMenuOpen={setUserMenuOpen}/>
                        )}
                        </>
                    ) : (
                        <div>
                            <button 
                                disabled
                                className="py-1 w-33 h-10 bg-gray-300 text-gray-600 !cursor-not-allowed transition duration-300 rounded-md"
                                onClick={handleLogIn}>
                                Log In
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}