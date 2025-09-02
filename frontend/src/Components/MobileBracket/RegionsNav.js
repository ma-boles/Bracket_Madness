import { useMobileContext } from "@/src/context/MobileContext";

export default function RegionsNav({ activeRegion, setActiveRegion, activeRoundTab }) {
    const { sections } = useMobileContext();

    const roundKeyMap = {
        "Rd 1": "rd1",
        "Rd 2": "rd2",
        "Sweet 16": "sweet16",
        "Elite 8": "elite8",
    };

    const regionMap = {
        "Spokane 1": ["spokane1_rd1", "spokane1_rd2", "spokane1_sweet16", "spokane1_elite8"],
        "Birmin... 2": ["birmingham2_rd1", "birmingham2_rd2", "birmingham2_sweet16", "birmingham2_elite8"],
        "Birmin... 3": ["birmingham3_rd1", "birmingham3_rd2", "birmingham3_sweet16", "birmingham3_elite8"],
        "Spokane 4": ["spokane4_rd1", "spokane4_rd2", "spokane4_sweet16", "spokane4_elite8"],
};

    const regionTabs = Object.keys(regionMap);

    return (
        <div>
            <div className="flex justify-around p-2 mt-1 bg-slate-100 rounded-lg shadow-md">
                {regionTabs.map(region => {
                    const sectionIds = regionMap[region];
                    const activeRoundKey = roundKeyMap[activeRoundTab];

                    const sectionIdForActiveRound = activeRoundTab
                    ? sectionIds.find(id =>
                        id.includes(activeRoundTab.toLowerCase().replace(/\s+/g, ""))
                        )
                    : null;

                    const isComplete = sectionIdForActiveRound ? sections[sectionIdForActiveRound] : true;
                    const showRedDot = !!activeRoundKey && !isComplete;

                    // const showRedDot = activeRoundTab !== "First Four" && !isComplete;

                    // const isComplete = sectionIds.every(id => sections[id]); // all complete
                    // const showRedDot = !isComplete;

                    return (

                    <button
                        key={region}
                        onClick={() => setActiveRegion(region)}
                        className={`relative px-3 py-1 text-sm font-semibold ${
                            activeRegion === region ? 'text-yellow-600 border-b-2 border-yellow-400' : 'text-gray-600'
                        }`}
                    >
                        {region}
                        {showRedDot && (
                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
                        )}
                    </button>
                    );
                })}
            </div>
        </div>
    );
}

// const regions = [
//         'Spokane 1', 'Birmin... 2', 'Birmin... 3', 'Spokane 4',
//     ];

//     return (
//         <div>
//             <div className="flex justify-around p-2 mt-1 bg-slate-100 rounded-lg shadow-md">
//                 {regions.map((region) => (
//                     <button
//                         key={region}
//                         onClick={() => setActiveRegion(region)}
//                         className={`px-3 py-1 text-sm font-semibold ${
//                             activeRegion === region ? 'text-yellow-600 border-b-2 border-yellow-400' : 'text-gray-600'
//                         }`}
//                     >
//                         {region}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );