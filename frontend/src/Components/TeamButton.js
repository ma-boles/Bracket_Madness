'use client'
import { useContext } from "react";
import { useBracket } from "@/context/BracketContext"
import AuthContext from "@/context/AuthContext";

export default function TeamButton({ region, gameId, team }) {
    const { userPicks, handleSelection } = useBracket();
    const { currentUser } = useContext(AuthContext);

    const selected = userPicks?.[region]?.[gameId] === team.name;
    // const isDisabled = !currentUser;

    return (
        <button 
            className={`w-full border border-black/20 bg-white/5 py-3 px-4 text-md text-white text-center cursor-pointer truncate whitespace-nowrap overflow-hidden
                sm:w-[8.3rem] 
                sm:h-[2.75rem] 
                sm:pr-8
                sm:pl-3
                sm:px-2 
                sm:py-3.5 
                sm:border-[2px] 
                sm:border-[rgba(49,43,43,0.119)]
                sm:text-left
                ${selected ? 'border border-white font-bold' : 'hover:bg-gray-500'}
 
            `}
                // ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-white/5'}
                // ${isDisabled ? 'pointer-events-none' : ''}
            // disabled={isDisabled}
            onClick={() => handleSelection(region, gameId, team)}
            >
            {team.seed} {team.name}
        </button>
    );
}