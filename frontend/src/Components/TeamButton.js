'use client'
import { useBracket } from "@/context/BracketContext"

export default function TeamButton({ region, gameId, team }) {
    const { userPicks, handleSelection } = useBracket();
    const selected = userPicks?.[region]?.[gameId] === team.name;

    return (
        <button 
            className={`w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white ${
                selected ? 'bg-blue-600' : 'bg-transparent hover:bg-gray-500'
            }`}
            onClick={() => handleSelection(region, gameId, team)}
            >
            {team.name}
            </button>
    );
}