import { Trophy, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function LeaderboardModal({ isOpen, onClose }) {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!isOpen) return;

        const fetchLeaderboard = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch("/api/leaderboard");
                const json = await res.json();
                if (!res.ok) throw new Error(json.error || "Failed to fetch");
                setLeaderboardData(json.data);
            } catch (err) {
                setError("Error loading leaderboard.");
                console.error("Leaderboard fetch failed:", err);
            } finally {
                setLoading(false);
            }
            };

            fetchLeaderboard();
        }, [isOpen]);

        if (!isOpen) return null;


    return(
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                <div className="bg-black/70 text-white rounded-xl w-full max-w-md mx-4 shadow-lg relative">

                    <div className="flex items-center justify-between p-4 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                            <Trophy className="w-6 h-6 text-yellow-400" />
                            <h2 className="text-lg font-semibold">Top Brackets (Global)</h2>
                        </div>
                        <button onClick={onClose} className="hover:text-red-400 transition">
                            <XIcon className="w-6 h-6" />
                        </button>
                    </div>


                    <ul className="divide-y divide-gray-700">
                        {loading ? (
                            <li className="p-4 text-center text-gray-400">Loading...</li>
                        ) : error ? (
                            <li className="p-4 text-center text-red-400">{error}</li>
                        ) : leaderboardData.length === 0 ? (
                            <li className="p-4 text-center text-gray-400">No data available</li>
                        ) : (
                            leaderboardData.map((entry, idx) => (
                            <li
                                key={entry.id || idx}
                                className="flex justify-between items-center p-4 hover:bg-gray-800"
                            >
                                <div className="flex items-center gap-3">
                                <span className="font-bold text-yellow-400">#{idx + 1}</span>
                                <span>{entry.bracket_name}</span>
                                </div>
                                <span className="text-sm text-blue-300">{entry.points} pts</span>
                            </li>
                            ))
                        )}
                    </ul>
                
                </div>
            </div>
        );
    }