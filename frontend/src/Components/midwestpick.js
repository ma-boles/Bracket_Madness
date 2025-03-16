import React from "react";

export default function MidwestPick() {
    return(
        <>
        <div className="midwest region">
                <div className="rounds">
                <div className="round final4">
                        <div className="mt-100 matchup--r bg-teal-500 ">
                            <div className="team">winner 15</div>
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4--r bg-orange-600">
                            <div className="team">winner 13</div>
                            <div className="team">winner 14</div>
                        </div>
                    </div>
                    <div className="round sweet-16">
                        <div className="matchup3--r bg-pink-500">
                            <div className="team">winner 9</div>
                            <div className="team">winner 10</div>
                        </div>
                        <div className="matchup3-last--r bg-yellow-500">
                            <div className="team">winner 11</div>
                            <div className="team">winner 12</div>
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2--r mb-8 bg-green-600">
                            <div className="team">winner 1</div>
                            <div className="team">winner 2</div>
                        </div>
                        <div className="matchup2--r mb-8 border-r-indigo-500">
                            <div className="team">winner 3</div>
                            <div className="team">winner 4</div>
                        </div>
                        <div className="matchup2--r mb-14 bg-lime-600">
                            <div className="team">winner 5</div>
                            <div className="team">winner 6</div>
                        </div>
                        <div className="matchup2-last--r bg-slate-600">
                            <div className="team">winner 7</div>
                            <div className="team">winner 8</div>
                        </div>
                    </div>
                    <div className="round first-round">
                        <div className="matchup--r bg-pink-500">
                            <div className="team">seed 1</div>
                            <div className="team">seed 16</div>
                        </div>
                        <div className="matchup--r bg-yellow-500">
                            <div className="team">seed 8</div>
                            <div className="team">seed 9</div>
                        </div>
                        <div className="matchup--r bg-orange-600">
                            <div className="team">seed 5</div>
                            <div className="team">seed 12</div>
                        </div>
                        <div className="matchup--r bg-teal-500">
                            <div className="team">seed 4</div>
                            <div className="team">seed 13</div>
                        </div>
                        <div className="matchup--r bg-slate-600">
                            <div className="team">seed 6</div>
                            <div className="team">seed 11</div>
                        </div>
                        <div className="matchup--r bg-lime-600">
                            <div className="team">seed 3</div>
                            <div className="team">seed 14</div>
                        </div>
                        <div className="matchup--r bg-blue-600">
                            <div className="team">seed 7</div>
                            <div className="team">seed 10</div>
                        </div>
                        <div className="matchup--r bg-green-600">
                            <div className="team">seed 2</div>
                            <div className="team">seed 15</div>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}