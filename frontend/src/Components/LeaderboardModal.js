import { XMarkIcon, TrophyIcon } from "@heroicons/react/24/outline";

export default function LeaderboardModal({ isOpen, onClose, leaderboardData }) {
    is(!isOpen);


    return(
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-gray-900 text-white rounded-xl w-full max-w-md mx-4 shadow-lg relative">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                            <TrophyIcon className="w-6 h-6 text-yellow-400" />
                            <h2 className="text-lg font-semibold">Top Brackets (Global)</h2>
                        </div>
                        <button onClick={onClose} className="hover:text-red-400 transition">
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Leaderboard List */}
                    <ul className="divide-y divide-gray-700">
                    {leaderboardData.length === 0 ? (
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
    )
}