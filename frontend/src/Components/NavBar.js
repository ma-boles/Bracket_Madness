'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoutButton from "@/app/auth/components/LogoutButton";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import toast from "react-hot-toast";
import { HomeIcon, TrophyIcon, UserCircleIcon } from "@heroicons/react/24/outline";


export default function NavBar () {
    const router = useRouter();
    const { currentUser } = useAuth();

    const [userMenuOpen, setUserMenuOpen] = useState(false);

 
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
        setUserMenuOpen(!userMenuOpen);
    };

    return(
        <>
            <div className="flex mt-2 px-2 rounded-xl justify-center items-center" >
                <div className="w-1/5 h-15 flex justify-center items-center">
                    <Image
                        src="/BM_logo4.jpg"
                        alt="logo"
                        width={150}
                        height={20}
                        className="object-cover opacity-60"
                    />
                </div>

                <div className="flex flex-grow text-lg"> 

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

                <div className="flex w-1/5 p-2 justify-end items-center">
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
                        {/* Dropdown menu */}
                        {userMenuOpen && (
                            <div
                                className="absolute right-0 top-15 mt-2 p-1 w-48 bg-black/70 rounded-md shadow-lg py-1 z-50"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                                >
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
                                    // TODO: Replace with modal trigger for leaderboard or navigate to leaderboard page
                                    alert("Open Top 3 Leaderboard modal (to be implemented)");
                                    setUserMenuOpen(false);
                                    }}
                                    className="flex items-center  w-full h-10 my-1 border border-transparent hover:border-blue-600 hover:bg-blue-600/30 cursor-pointer rounded-md"
                                    role="menuitem"
                                >
                                    <div className="mx-4">
                                        <TrophyIcon className="w-6 h-6 text-white" /> 
                                    </div>
                                    Leaderboard
                                </button>
                                    <LogoutButton />
                                </div>
                        )}
                        </>
                    ) : (
                        <button
                            className="w-24 p-2 mx-1 h-10 bg-green-600 cursor-pointer hover:bg-white hover:text-black transition duration-300 rounded-md"
                            onClick={handleLogIn}
                            >
                            Log In
                        </button>
                    )}
                    
                </div>
            </div>
        </>
    )
}