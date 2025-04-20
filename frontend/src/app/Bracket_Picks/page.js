'use client'
import React, { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import NavBar from "../../Components/NavBar";
import FirstFour from "../../Components/firstfourpick";
import ChampionshipPick from "../../Components/championshippick";
import Spokane1_Pick from "../../Components/spokane1_pick";
import Birmingham2_Pick from "../../Components/birmingham2_pick";
import Birmingham3_Pick from "../../Components/birmingham3_pick";
import Spokane4_Pick from "../../Components/spokane4_pick";
import { useBracket } from "@/context/BracketContext";
import AuthContext from "@/context/AuthContext";

export default function Bracket_Picks() {
    const { currentUser } = useContext(AuthContext);
    const [ isValidated, setIsValidated ] = useState(false);
    const { bracketData } = useBracket();

    const handleCheckPicks = () => {
        console.log("Check Picks Clicked");
        console.log("Bracket Data Before Check:", bracketData);
    
        const numberOfGames = 63; 

        const pickCount = Object.keys(bracketData).length;
        console.log("Pick count:", pickCount);
    
        if (pickCount === 0) {
            // If no picks have been made, trigger the alert
            alert("Please make a pick for every game before submitting.");
            setIsValidated(false);
            return; 
        }
    
        // If there are picks, check if all have a winnerId
        const allPicked = Object.values(bracketData).every(pick => pick?.winnerId);
        console.log('All picks made:', allPicked);
    
        if (allPicked && pickCount === numberOfGames) {
            // If all picks are made and we have the right number of picks
            setIsValidated(true);
            alert("All picks are made. You can submit now!");
        } else {
            alert("Please make a pick for every game before submitting.");
            setIsValidated(false);
        }
    };

        const submitPicks = async () => {

            if(!currentUser) {
                console.error('Error: User not logged in.');
                return;
            }

            try{
                const response = await fetch('/api/submit-picks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        bracketData,
                    }),
                    credentials: 'include' // Ensure cookies are sent
                });

                const result = await response.json();

                if(result.success) {
                    console.log('Bracket successfully submitted');
                }  else {
                    console.error('Submission failed:', result.message);
                }
            } catch (error) {
                console.error('Submission error:', error);
            }
        };

    return(
        <>
            <nav>
                <NavBar />
            </nav>
            <div className="bg-white/15">
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
                
                {currentUser && (
                <div className="flex justify-center items-center">
                    <button className="mb-6 rounded-lg border border-white hover:bg-white/15 transition-colors flex items-center justify-center font-bold w-1/4 h-12 mx-2 cursor-pointer"
                        onClick={handleCheckPicks}
                        >Lock In Picks</button>
                    <button className={`mb-6 rounded-lg border border-solid bg-blue-600 border-white/[0.8] transition-colors flex items-center justify-center font-medium w-1/4 h-12 mx-2 ${!isValidated ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        disabled={!isValidated}
                        onClick={submitPicks}
                        >
                        Submit
                    </button>
                </div>
                    )}

            </div>
        </>
    )
}