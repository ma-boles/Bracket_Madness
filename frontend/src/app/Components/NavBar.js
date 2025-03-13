import React from "react";
import Link from "next/link";

export default function NavBar () {
    return(
        <>
            <div className="flex w-full">
                <div className="flex-1 p-2 text-center bg-red-500 cursor-pointer transition-all duration-300 hover:bg-black">
                    <Link href="/Profile" className="2xl">
                        <p className="text-2xl">Women's Bracket</p>
                    </Link>
                </div>
                <div className="flex-1 p-2 bg-yellow-500 text-center cursor-pointer transition-all duration-300 hover:bg-black">
                    <Link href="/Mens_Bracket" className="2xl">
                        <p className="text-2xl">Men's Bracket</p>
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
            </div>
        </>
    )
}