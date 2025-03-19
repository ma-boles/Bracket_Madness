'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar () {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            setUser(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        router.push('/');
    };

    return(
        <>
            <div className="flex w-full bg-white/85">
                <div className="flex-1 p-2 text-center text-black hover:bg-blue-600 hover:text-white transition 300s">
                    <Link href="/Womens_Bracket" className="2xl">
                        <p className="text-2xl">Bracket Results</p>
                    </Link>
                </div>
                <div className="flex-1 p-2 text-black text-center cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:text-white">
                    <Link href="/Bracket_Picks" className="2xl">
                        <p className="text-2xl">Bracket Picks</p>
                    </Link>
                </div>
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
                    {user ? (
                        <button className="w-24 p-2 mx-1 bg-red-600 cursor-pointer hover:bg-white hover:text-black transition duration-300 rounded-md" onClick={handleLogout}>Log Out</button>
                    ) : (
                    <Link href="/auth">
                        <button className="w-24 p-2 mx-1 bg-green-600  cursor-pointer hover:bg-white hover:text-black transition duration-300 rounded-md">Log In</button>
                    </Link>
                    )}
                    
                </div>
            </div>
        </>
    )
}