import { isDemo } from '@/config';

export default function HowToPlayMobile ({ onClose }) {
    return (
        <div className="fixed inset-0 flex flex-col px-4 h-screen justify-center items-center bg-black/80 backdrop-blur-sm z-50">
            <div className="p-4 bg-gradient-to-br from-pink-800/70 via-pink-700/40 to-purple-950/50  rounded-2xl shadow-xl shadow-black/50 border border-white/10 backdrop-blur-md">
                <h2 className="p-4 text-2xl font-extrabold text-center">How to Fill Your Mobile Bracket</h2>
                    <div className="space-y-6 py-4">
                        <div>
                            <h3 className="flex items-center text-lg font-bold">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-600 text-white mr-2 text-sm">
                                1
                            </span>
                            Select Rounds & Regions
                            </h3>
                            <p className="text-gray-300 text-base mt-2">
                            Use the top row for rounds and the row beneath for regions. They work together as you make picks.
                            </p>
                        </div>

                        <div>
                            <h3 className="flex items-center text-lg font-bold">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-600 text-white mr-2 text-sm">
                                2
                            </span>
                            Track Progress
                            </h3>
                            <p className="text-gray-300 text-base mt-2">
                            Watch the <span className="italic font-semibold">Picks Remaining</span> counter at the top and the red dots on tabs for missing picks.
                            </p>
                        </div>

                        <div>
                            <h3 className="flex items-center text-lg font-bold">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-600 text-white mr-2 text-sm">
                                3
                            </span>
                            Choose Teams
                            </h3>
                            <p className="text-gray-300 text-base mt-2">
                            Selected teams will highlight with a white border in their slot.
                            </p>
                        </div>
                    </div>

                    <div className="mb-4 px-6 flex items-center justify-center space-x-8">
                        {!isDemo && (
                            <label className="flex items-center space-x-2 text-sm text-gray-300">
                                <input type="checkbox" className="accent-pink-600" />
                                <span className='text-base'>Don&apos;t show this again</span>
                            </label>
                        )}
                        

                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-pink-200 underline rounded-lg hover:text-white transition-colors"
                            >
                                Close
                            </button>
                    </div>

            </div>
        </div>
    )
}