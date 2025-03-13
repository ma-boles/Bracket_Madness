import React from "react";

export default function South() {
    return(
        <>
        <div className="south region">
                <div className="rounds">
                    <div className="round first-round">
                        <div className="matchup bg-pink-500">
                            <div className="team">seed 1</div>
                            <div className="team border-r border-black">seed 16</div>
                        </div>
                        <div className="matchup bg-yellow-500">
                            <div className="team">seed 8</div>
                            <div className="team border-r border-black">seed 9</div>
                        </div>
                        <div className="matchup bg-orange-600">
                            <div className="team">seed 5</div>
                            <div className="team border-r border-black">seed 12</div>
                        </div>
                        <div className="matchup bg-teal-500">
                            <div className="team">seed 4</div>
                            <div className="team border-r border-black">seed 13</div>
                        </div>
                        <div className="matchup bg-slate-600">
                            <div className="team">seed 6</div>
                            <div className="team border-r border-black">seed 11</div>
                        </div>
                        <div className="matchup bg-lime-600">
                            <div className="team">seed 3</div>
                            <div className="team border-r border-black">seed 14</div>
                        </div>
                        <div className="matchup bg-blue-600 border-r-indigo-500">
                            <div className="team">seed 7</div>
                            <div className="team border-r border-black">seed 10</div>
                        </div>
                        <div className="matchup bg-green-600">
                            <div className="team">seed 2</div>
                            <div className="team border-r border-black">seed 15</div>
                        </div>
                    </div>
                    <div className="round second-round">
                        <div className="matchup2 mb-12 bg-green-600 border-r border-black justify-between">
                            <div className="team">winner 1</div>
                            <div className="team">winner 2</div>
                        </div>
                        <div className="matchup2 mb-12 border-r-indigo-500">
                            <div className="team">winner 3</div>
                            <div className="team">winner 4</div>
                        </div>
                        <div className="matchup2 mb-14 bg-lime-600 border-r-2 border-black">
                            <div className="team">winner 5</div>
                            <div className="team">winner 6</div>
                        </div>
                        <div className="matchup2-last bg-slate-600">
                            <div className="team">winner 7</div>
                            <div className="team">winner 8</div>
                        </div>
                    </div>
                    <div className="round sweet-16">
                        <div className="matchup3 bg-pink-500">
                            <div className="team">winner 9</div>
                            <div className="team">winner 10</div>
                        </div>
                        <div className="matchup3 bg-yellow-500">
                            <div className="team">winner 11</div>
                            <div className="team">winner 12</div>
                        </div>
                    </div>
                    <div className="round elite8">
                        <div className="matchup4 bg-orange-600">
                            <div className="team">winner 13</div>
                            <div className="team">winner 14</div>
                        </div>
                    </div>
                    <div className="round final4">
                        <div className="mt-110 matchup bg-teal-500 ">
                            <div className="team">winner 15</div>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}