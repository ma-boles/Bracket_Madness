'use client'
import { useBracket } from "@/context/BracketContext"

export default function TeamButton({ region, gameId, team }) {
    const { userPicks, handleSelection } = useBracket();
    const selected = userPicks?.[region]?.[gameId] === team.name;

    return (
        <button 
            className={`w-full border-none bg-white/5 py-1.5 pr-8 pl-3 text-md text-white cursor-pointer team truncate whitespace-nowrap overflow-hidden${
                selected ? 'border border-white font-bold' : 'hover:bg-gray-500'
            }`}
            onClick={() => handleSelection(region, gameId, team)}
            >
            {team.seed} {team.name}
        </button>
    );
}