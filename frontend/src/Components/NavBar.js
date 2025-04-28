'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoutButton from "@/app/auth/components/LogoutButton";
import { useAuth } from "@/context/AuthContext";

export default function NavBar () {
    const router = useRouter();
    const { currentUser } = useAuth();

    const handleBracketClick = () => {
        if(currentUser) {
            router.push("/Bracket_Picks");
        } else {
            router.push("/auth");
        }
    };

    const handleLogIn = () => {
        router.push('/auth');
    }

    return(
        <>
            <div className="flex w-full bg-white/85">
                <div className="flex-1 p-2 text-center text-black hover:bg-blue-600 hover:text-white transition 300s">
                    <Link href="/Dashboard" className="2xl">
                        <p className="text-2xl">Dashboard</p>
                    </Link>
                </div>
                <div className="flex-1 p-2 text-center text-black hover:bg-blue-600 hover:text-white transition 300s">
                    <Link href="/Womens_Bracket" className="2xl">
                        <p className="text-2xl">Bracket Results</p>
                    </Link>
                </div>
                {currentUser && (
                    <div className="flex-1 p-2 text-black text-center cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:text-white">
                        <Link href="/Bracket_Picks" className="2xl">
                            <p className="text-2xl">Bracket Picks</p>
                        </Link>
                    </div>
                )}

                
                <div className="flex-1 p-2 bg-blue-600 text-center cursor-pointer transition-all duration-300 hover:bg-blue-500">
                     <ol className="px-1">
                    <li> 
                        <details>
                        <summary className="text-2xl">Leader Board</summary>
                        <ul className="bg-base-100 p-2">
                            <li>user1</li>
                            <li>user2</li>
                            <li>user3</li>
                        </ul>
                        </details>
                    </li>
                    </ol>
                </div>
                <div className="p-2 flex">
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