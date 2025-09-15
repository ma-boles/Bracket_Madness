import { useMobileContext } from "@/src/context/MobileContext";

export default function RoundsNav({ activeTab, setActiveTab }) {
    const { sections } = useMobileContext();

    const roundMap = {
        "firstfour": ["firstfour"],
        "round1": ["spokane1_rd1", "birmingham2_rd1", "birmingham3_rd1", "spokane4_rd1"],
        "round2": ["spokane1_rd2", "birmingham2_rd2", "birmingham3_rd2", "spokane4_rd2"],
        "sweet16": ["spokane1_sweet16", "birmingham2_sweet16", "birmingham3_sweet16", "spokane4_sweet16"],
        "elite8": ["spokane1_elite8", "birmingham2_elite8", "birmingham3_elite8", "spokane4_elite8"],
        "finalfour": ["finalfour"]
};

    const tabs = [
        { label: 'First Four', sectionId: 'firstfour' },
        { label: 'Rd 1', sectionId: 'round1' }, 
        { label: 'Rd 2', sectionId: 'round2' }, 
        { label: 'Sweet 16', sectionId: 'sweet16' }, 
        { label: 'Elite 8', sectionId: 'elite8' }, 
        { label: 'Final 4', sectionId: 'finalfour' }, 
    ];


    return (
        <div>
            <div className="flex justify-around p-2 bg-slate-100 rounded-lg shadow-md">
                {tabs.map(({ label, sectionId }) => {
                    const sectionIds = roundMap[sectionId] || {};
                    const isComplete = sectionIds.every(id => sections[id]);
                    const showRedDot = !isComplete;

                    return (
                         <button
                        key={label}
                        onClick={() => setActiveTab(label)}
                        className={`relative px-3 py-1 text-sm font-semibold ${
                            activeTab === label ? 'text-yellow-600 border-b-2 border-yellow-400' : 'text-gray-600'
                        }`}
                    >
                        {label}
                        {showRedDot && (
                            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-600" />
                        )}
                    </button>
                    );
                })}

            </div>
        </div>
    );
}