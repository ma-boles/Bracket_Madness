import { useState } from 'react';
import MobileRound_FirstFour from './RoundTabs/MobileRound_FirstFour';
import MobileRound_FirstRound from './RoundTabs/MobileRound_FirstRound';
import MobileRound_SecondRound from './RoundTabs/MobileRound_SecondRound';
import MobileRound_SweetSixteen from './RoundTabs/MobileRound_SweetSixteen';
import MobileRound_EliteEight from './RoundTabs/MobileRound_EliteEight';
import MobileRound_Championship from './RoundTabs/MobileRound_Championship';

export default function RoundsNav() {
    const [activeTab, setActiveTab] = useState('First Four');

    const tabs = [
        'First Four', 'Rd 1', 'Rd 2', 'Sweet 16',
        'Elite 8', 'Final 4'
    ];

    return (
        <div>
            <div className="flex justify-around p-2 bg-slate-100 rounded-lg shadow-md">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1 text-sm font-semibold ${
                            activeTab === tab ? 'text-yellow-600 border-b-2 border-yellow-400' : 'text-gray-600'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="mt-4">
                {activeTab === 'First Four' && <MobileRound_FirstFour />}
                {activeTab === 'Rd 1' && <MobileRound_FirstRound />}
                {activeTab === 'Rd 2' && <MobileRound_SecondRound />}
                {activeTab === 'Sweet 16' && <MobileRound_SweetSixteen />}
                {activeTab === 'Elite 8' && <MobileRound_EliteEight />}
                {activeTab === "Final 4" && <MobileRound_Championship />}
            </div>
        </div>
    );
}
