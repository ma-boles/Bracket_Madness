import { useState } from "react";
import RoundsNav from "../MobileBracket/RoundsNav"
import RegionsNav from "../MobileBracket/RegionsNav"
import MobileRound_FirstFour from "../MobileBracket/RoundTabs/MobileRound_FirstFour";
import MobileRound_FinalFour from "../MobileBracket/RoundTabs/MobileRound_FinalFour";
import MobileSpokane1_SweetSixteen from "../MobileBracket/MobileSubmit/Mobile_Spokane1/MobileSpokane1_SweetSixteen";
import MobileSpokane1_EliteEight from "../MobileBracket/MobileSubmit/Mobile_Spokane1/MobileSpokane1_EliteEight";
import MobileSpokane1_SecondRound from "../MobileBracket/MobileSubmit/Mobile_Spokane1/MobileSpokane1_SecondRound";
import MobileSpokane1_FirstRound from "../MobileBracket/MobileSubmit/Mobile_Spokane1/MobileSpokane1_FirstRound";
import MobileBirmingham2_FirstRound from "../MobileBracket/MobileSubmit/Mobile_Birmingham2/MobileBirmingham2_FirstRound";
import MobileBirmingham2_SecondRound from "../MobileBracket/MobileSubmit/Mobile_Birmingham2/MobileBirmingham2_SecondRound";
import MobileBirmingham2_SweetSixteen from "../MobileBracket/MobileSubmit/Mobile_Birmingham2/MobileBirmingham2_SweetSixteen";
import MobileBirmingham2_EliteEight from "../MobileBracket/MobileSubmit/Mobile_Birmingham2/MobileBirmingham2_EliteEight";
import MobileBirmingham3_FirstRound from "../MobileBracket/MobileSubmit/Mobile_Birmingham3/MobileBirmingham3_FirstRound";
import MobileBirmingham3_SecondRound from "../MobileBracket/MobileSubmit/Mobile_Birmingham3/MobileBirmingham3_SecondRound";
import MobileBirmingham3_SweetSixteen from "../MobileBracket/MobileSubmit/Mobile_Birmingham3/MobileBirmingham3_SweetSixteen";
import MobileBirmingham3_EliteEight from "../MobileBracket/MobileSubmit/Mobile_Birmingham3/MobileBirmingham3_EliteEight";
import MobileSpokane4_FirstRound from "../MobileBracket/MobileSubmit/Mobile_Spokane4/MobileSpokane4_FirstRound";
import MobileSpokane4_SecondRound from "../MobileBracket/MobileSubmit/Mobile_Spokane4/MobileSpokane4_SecondRound";
import MobileSpokane4_SweetSixteen from "../MobileBracket/MobileSubmit/Mobile_Spokane4/MobileSpokane4_SweetSixteen";
import MobileSpokane4_EliteElight from "../MobileBracket/MobileSubmit/Mobile_Spokane4/MobileSpokane4_EliteEight";


export default function MobileBracket_Layout ({ onEnterFinalFour, picksRemaining }) {
    const [activeRegion, setActiveRegion] = useState(null);
    const [activeTab, setActiveTab] = useState(null);


    return (
        <div className="sm:hidden flex flex-col gap-4 p-2 min-h-screen">
        <div>
            <RoundsNav  activeTab={activeTab} setActiveTab={setActiveTab}/>
            {activeTab !== 'First Four' && activeTab !== 'Final 4' && (
                <RegionsNav activeRegion={activeRegion} setActiveRegion={setActiveRegion} activeRoundTab={activeTab} />
            )}
        </div>
        
        <div className="mb-6 mt-2 bg-white/5 rounded-lg sm:hidden flex items-center justify-center font-bold  h-12 mx-2">
                Picks Remaining: <span className="font-bold"> {picksRemaining} </span>
        </div>

        {!activeTab && (
            <div className="mt-12">
                <h1 className="text-2xl font-semibold text-center">Please Select Round</h1>
            </div>
        )}

            
        

        <div>
            {activeTab == 'First Four' && <MobileRound_FirstFour />}
            {activeTab === "Final 4" && <MobileRound_FinalFour onMount={onEnterFinalFour} />}

            {activeRegion === 'Spokane 1' && activeTab === 'Rd 1' && <MobileSpokane1_FirstRound />}
            {activeRegion === 'Spokane 1' && activeTab === 'Rd 2' && <MobileSpokane1_SecondRound />}
            {activeRegion === 'Spokane 1' && activeTab === 'Sweet 16' && <MobileSpokane1_SweetSixteen />}
            {activeRegion === 'Spokane 1' && activeTab === 'Elite 8' && <MobileSpokane1_EliteEight />}

            {activeRegion === 'Birmin... 2' && activeTab === 'Rd 1' && <MobileBirmingham2_FirstRound />}
            {activeRegion === 'Birmin... 2' && activeTab === 'Rd 2' && <MobileBirmingham2_SecondRound />}
            {activeRegion === 'Birmin... 2' && activeTab === 'Sweet 16' && <MobileBirmingham2_SweetSixteen />}
            {activeRegion === 'Birmin... 2' && activeTab === 'Elite 8' && <MobileBirmingham2_EliteEight />}

            {activeRegion === 'Birmin... 3' && activeTab === 'Rd 1' && <MobileBirmingham3_FirstRound />}
            {activeRegion === 'Birmin... 3' && activeTab === 'Rd 2' && <MobileBirmingham3_SecondRound />}
            {activeRegion === 'Birmin... 3' && activeTab === 'Sweet 16' && <MobileBirmingham3_SweetSixteen />}
            {activeRegion === 'Birmin... 3' && activeTab === 'Elite 8' && <MobileBirmingham3_EliteEight />}

            {activeRegion === 'Spokane 4' && activeTab === 'Rd 1' && <MobileSpokane4_FirstRound />}
            {activeRegion === 'Spokane 4' && activeTab === 'Rd 2' && <MobileSpokane4_SecondRound />}
            {activeRegion === 'Spokane 4' && activeTab === 'Sweet 16' && <MobileSpokane4_SweetSixteen />}
            {activeRegion === 'Spokane 4' && activeTab === 'Elite 8' && <MobileSpokane4_EliteElight />}

        </div>
        </div>
    )
}