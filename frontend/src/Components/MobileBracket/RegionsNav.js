import { useState } from 'react';
import MobileRegion_Spokane1 from './RegionTabs/MobileRegion_Spokane1';
import MobileRegion_Birmingham2 from './RegionTabs/MobileRegion_Birmingham2';
import MobileRegion_Birmingham3 from './RegionTabs/MobileRegion_Birmingham3';
import MobileRegion_Spokane4 from './RegionTabs/MobileRegion_Spokane4';


export default function RegionsNav() {
    const [activeRegion, setActiveRegion] = useState('Spokane 1');

    const regions = [
        'Spokane 1', 'Birmingham 2', 'Birmingham 3', 'Spokane 4',
    ];

    return (
        <div>
            <div className="flex justify-around p-2 bg-slate-100 rounded-lg shadow-md">
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

            <div className="mt-4">
                {activeRegion === 'Spokane 1' && <MobileRegion_Spokane1 />}
                {activeRegion === 'Birmingham 2' && <MobileRegion_Birmingham2 />}
                {activeRegion === 'Birmingham 3' && <MobileRegion_Birmingham3 />}
                {activeRegion === 'Spokane 4' && <MobileRegion_Spokane4 />}
            </div>
        </div>
    );
}