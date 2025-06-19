export default function RegionsNav({ activeRegion, setActiveRegion }) {

    const regions = [
        'Spokane 1', 'Birmin... 2', 'Birmin... 3', 'Spokane 4',
    ];

    return (
        <div>
            <div className="flex justify-around p-2 mt-1 bg-slate-100 rounded-lg shadow-md">
                {regions.map((region) => (
                    <button
                        key={region}
                        onClick={() => setActiveRegion(region)}
                        className={`px-3 py-1 text-sm font-semibold ${
                            activeRegion === region ? 'text-yellow-600 border-b-2 border-yellow-400' : 'text-gray-600'
                        }`}
                    >
                        {region}
                    </button>
                ))}
            </div>
        </div>
    );
}