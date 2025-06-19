export default function RoundsNav({ activeTab, setActiveTab }) {

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
        </div>
    );
}
