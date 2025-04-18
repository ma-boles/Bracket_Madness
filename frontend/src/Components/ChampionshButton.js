'use client'
import { useBracket } from "@/context/BracketContext"

export default function ChampionshipButton({ region, gameId, team }) {
    const { userPicks, handleSelection } = useBracket();
    const selected = userPicks?.[region]?.[gameId] === team.name;

    return (
        <button 
            className={`w-50 text-xl font-bold text-white truncate whitespace-nowrap overflow-hidden`}
            onClick={() => handleSelection(region, gameId, team)}
            >
            {team.seed} {team.name}
        </button>
    );
}