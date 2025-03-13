import React from "react";
import Link from "next/link";

export default function Mens_Bracket() {
    return(
        <>
        <nav className="flex justify-between w-full">
            <Link href="/Profile" className="flex-1 p-2 cursor-pointer text-center bg-purple-600 hover:bg-black">
                Women's Bracket
            </Link>
            <Link href="/Mens_Bracket" className="flex-1 p-2 bg-red-500 cursor-pointer text-center hover:bg-black">
                    Men's Bracket
            </Link>
            <button className="flex-1 p-2 bg-yellow-500 cursor-pointer hover:bg-blue-600">Leader Board</button>
        </nav>
        <div className="bg-red-500">
            <h1>Men's Bracket</h1>
        </div>
        {/* <div className="bg-blue-600 text-center w-1/3 ml-auto">
            <ol>
                <li>user1</li>
                <li>user2</li>
                <li>user3</li>
            </ol>
        </div> */}
        </>
    )
}