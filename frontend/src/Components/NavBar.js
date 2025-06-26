'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import toast from "react-hot-toast";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { HomeIcon, TrophyIcon, UserCircleIcon } from "@heroicons/react/24/outline";

import UserMenu from "./UserMenu";
import LeaderboardModal from "./LeaderboardModal";
import LogoutButton from "@/app/auth/components/LogoutButton";


export default function NavBar () {
    const router = useRouter();
    const { currentUser } = useAuth();
    const [showModal,setShowModal] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const submitAlert = () => {
        if(!currentUser) {
            toast.error('To submit a bracket, please Log In.',{
                style: {
                    background: '#333',
                    color: '#fff',
                    duration: 4000,
            }})
        } 
    };

    const handleLogIn = () => {
        router.push('/auth');
    };

    const toggleUserMenu = () => {
        setUserMenuOpen(prev => !prev);
    };

    return(
        <>
            <div className="flex mt-2 px-2 rounded-xl justify-between items-center md:justify-center" >
                {/* w-1/4 md:w-1/5 md:h-15 flex justify-center items-center */}
                <div className="flex items-center">
                    <Image
                        src="/BM_logo4.jpg"
                        alt="logo"
                        width={150}
                        height={20}
                        className="object-cover opacity-60 py-2 md:py-0"
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:flex-grow text-lg"> 
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
                        {mobileMenuOpen ? (
                            <XMarkIcon className="w-8 h-8"/>
                        ) : (
                            <Bars3Icon className="w-8 h-8"/>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="fixed top-17 left-0 w-full bg-black/95 text-white flex flex-col items-center justify-center text-center text-xl z-20">
                        <Link href="/Submit" onClick={() => setMobileMenuOpen(false)} className="w-full">
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
                                        <HomeIcon className="w-6 h-6 text-white" /> 
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
                                    <TrophyIcon className="w-6 h-6 text-white" /> 
                                </div>

                                    Leaderboard
                                </button>
                                
                                <LogoutButton />
                            </div>

                        ) : (
                            <button onClick={handleLogIn} className="flex items-center w-full h-10 px-14 border border-transparent hover:border-green-600 hover:bg-green-600/30 cursor-pointer rounded-md">
                                Log In
                            </button>
                        )}
                            

                    </div>
                )}

                <LeaderboardModal isOpen={showModal} onClose={() => setShowModal(false)} />


                <div className="hidden relative md:flex w-1/5 p-2 justify-end items-center">
                    {currentUser ? (
                        <>
                        <div className="flex w-full px-2 justify-end">
                        {/* User Icon Button */}
                            <button
                                onClick={toggleUserMenu}
                                aria-haspopup="true"
                                aria-expanded={userMenuOpen}
                                className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition"
                                title="User Menu"
                            >

                               <UserCircleIcon className="w-7 h-7 text-white cursor-pointer" />

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
                        <button className="py-1 w-33 h-10 bg-green-600 cursor-pointer hover:bg-white hover:text-black transition duration-300 rounded-md"
                        onClick={handleLogIn}>Log In</button>

                    )}

                </div>
            </div>
        </>
    )
}