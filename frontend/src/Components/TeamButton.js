'use client'
import { useContext, useEffect, useState } from "react";
import { useBracket } from "@/context/BracketContext"
import Cookies from "js-cookie";
import jwt from 'jsonwebtoken';
import AuthContext from "@/context/AuthContext";

export default function TeamButton({ region, gameId, team }) {
    const { userPicks, handleSelection } = useBracket();
    const { currentUser } = useContext(AuthContext);

    const selected = userPicks?.[region]?.[gameId] === team.name;
    const isDisabled = !currentUser;

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if(token) {
    //         try {
    //             const decoded = jwt.decode('token');

    //             if(decoded && decoded.userId) {
    //                 setCurrentUserId(decoded?.userId);
    //                 console.log('Current user ID set:', decoded.userId);

    //             } else {
    //                 ('Decoded token is invalid or userId missing.')
    //             }
    //         } catch(error) {
    //             console.log('Error decoding JWT:', error);
    //         }

    //     } else {
    //         console.log('No JWT token found, user not logged in');
    //     }
    // }, []);
    
    return (
        <button 
            className={`w-full border-none bg-white/5 py-1.5 pr-8 pl-3 text-md text-white cursor-pointer team truncate whitespace-nowrap overflow-hidden
                ${selected ? 'border border-white font-bold' : 'hover:bg-gray-500'}
                ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-white/5'}
                ${isDisabled ? 'pointer-events-none' : ''} 
            `}
            disabled={isDisabled}
            onClick={() => !isDisabled && handleSelection(region, gameId, team)}
            >
            {team.seed} {team.name}
        </button>
    );
}