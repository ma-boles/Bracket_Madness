import FirstFour from "../firstfourpick";
import ChampionshipPick from "../championshippick";
import Spokane1_Pick from "../spokane1_pick";
import Birmingham2_Pick from "../birmingham2_pick";
import Birmingham3_Pick from "../birmingham3_pick";
import Spokane4_Pick from "../spokane4_pick";

export default function DesktopBracket_Layout () {
    return (
        <>
            <div className="w-full">
                    <FirstFour />
                </div>
                <div>
                    <div className="flex">
                        <Spokane1_Pick />
                        <Birmingham2_Pick />
                    </div>
                        <ChampionshipPick />
                    <div className="flex">
                        <Spokane4_Pick />
                        <Birmingham3_Pick />

                    </div>

                </div>        
        </>
    )
}