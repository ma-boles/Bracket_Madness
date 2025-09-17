import { Check, ArrowRight, AlertCircle, ListChecks, Lock  } from 'lucide-react';
import { isDemo } from '@/config';

export default function HowToPlayModal ({ onClose }) {
    return (
        <div className="fixed inset-0 flex flex-col h-screen justify-center items-center bg-black/80 backdrop-blur-sm z-50">
            <div className="w-120 pt-4 bg-gradient-to-br from-pink-800/70 via-pink-700/40 to-purple-950/50  rounded-2xl shadow-xl shadow-black/50 
  border border-white/10 backdrop-blur-md">
                <h2 className="p-4 text-3xl font-extrabold text-center">How to Fill Your Bracket</h2>
                <ul className='py-8 px-4'>          
                    <li className="flex items-center text-xl gap-2 p-2">
                        <Check className="shrink-0 mx-2" />
                        <span>
                            <span className="font-extrabold">Pick Winners</span> — Click on a team to advance them.
                        </span>
                    </li>
                    <li className="flex items-center text-xl gap-2 p-2">
                        <ArrowRight className="shrink-0 mx-2" />
                        <span>
                            <span className="font-extrabold">Fill All Rounds</span> — Continue until you&apos;ve chosen a champion.
                        </span>
                    </li>
                    <li className="flex items-center text-xl gap-2 p-2">
                        <AlertCircle className="shrink-0 mx-2" />
                        <span>
                            <span className="font-extrabold">Check for Gaps</span> — If a slot is white, select a team from the previous round to advance.
                        </span>
                    </li>   
                    <li className="flex items-center text-xl gap-2 p-2">
                        <ListChecks className="shrink-0 mx-2" />
                        <span>
                            <span className="font-extrabold">Track Progress</span> — Use the <span className="italic text-gray-200">Picks Remaining</span> counter at the bottom.
                        </span>
                    </li>
                </ul>

                <div className="mb-8 px-6 flex items-center justify-center space-x-8">
                    {!isDemo && (
                        <label className="flex items-center space-x-2 text-sm text-gray-300">
                            <input type="checkbox" className="accent-pink-600" />
                            <span className='text-base'>Don&apos;t show this again</span>
                        </label>
                    )}
                    

                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-pink-100 underline rounded-lg hover:text-white transition-colors"
                        >
                            Close
                        </button>
                </div>

            </div>
        </div>
    )
}