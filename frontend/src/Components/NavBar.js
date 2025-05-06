'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoutButton from "@/app/auth/components/LogoutButton";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import toast from "react-hot-toast";

export default function NavBar () {
    const router = useRouter();
    const { currentUser } = useAuth();

 
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

    return(
        <>
            <div className="flex bg-white/5 mt-2 mx-12 rounded-xl justify-center items-center" >
                <div className="w-1/5 h-15 flex justify-center items-center">
                    <Image
                        src="/BM_logo4.jpg"
                        alt="logo"
                        width={150}
                        height={20}
                        className="object-cover opacity-60"
                    />
                </div>
                
                {/* Nav Buttons Section*/}
                <div className="flex flex-grow text-lg"> 
                    {currentUser && (
                        <div className="flex-1 p-3 text-center cursor-pointer transition-all duration-300 hover:bg-white/20 rounded-lg">
                            <Link href="/Dashboard">
                                <p>Dashboard</p>
                            </Link>
                        </div>
                    )}
                    <div className="flex-1 p-3 text-center hover:bg-white/20 transition 300s rounded-lg">
                        <Link href="/Results">
                            <p>Results</p>
                        </Link>
                    </div>
                        <div className="flex-1 p-3 text-center cursor-pointer transition-all duration-300 hover:bg-white/20 rounded-lg">
                            <Link href="/Submit" onClick={submitAlert}>
                                <p>Submit</p>
                            </Link>
                        </div>
                    

                    <div className="flex-1 p-3 text-center cursor-pointer transition-all duration-300 hover:bg-white/20 rounded-lg">
                        <ol className="px-1">
                        <li> 
                            <details>
                            <summary>Leader Board</summary>
                            <ul className="bg-base-100 p-2">
                                <li>user1</li>
                                <li>user2</li>
                                <li>user3</li>
                            </ul>
                            </details>
                        </li>
                        </ol>
                    </div>
                </div>
                <div className="flex w-1/6 p-2 justify-end items-center">
                    {currentUser ? (
                        <LogoutButton />
                    ) : (
                        <button className="w-24 p-2 mx-1 h-10 bg-green-600 cursor-pointer hover:bg-white hover:text-black transition duration-300 rounded-md" onClick={handleLogIn}>Log In</button>
                    )}
                    
                </div>
            </div>
        </>
    )
}