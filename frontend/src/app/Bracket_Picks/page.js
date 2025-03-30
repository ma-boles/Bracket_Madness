'use client'
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import NavBar from "../../Components/NavBar";
import FirstFour from "../../Components/firstfourpick";
import ChampionshipPick from "../../Components/championshippick";
import Spokane1_Pick from "../../Components/spokane1_pick";
import Birmingham2_Pick from "../../Components/birmingham2_pick";
import Birmingham3_Pick from "../../Components/birmingham3_pick";
import Spokane4_Pick from "../../Components/spokane4_pick";
import { useBracket } from "@/context/BracketContext";

export default function Bracket_Picks() {
    const [ currentUserId, setCurrentUserId ] = useState(null);
    const { bracketData } = useBracket();

        const fetchUserId = () => {
            const token = document.cookie
                .split('; ')
                .find(row => row.startsWith('token='))
                ?.split('=')[1];

            if(!token) {
                console.error('No token found. User might not be logged in.');
                return;
            }

            try{
                const decoded = jwtDecode(token);
                setCurrentUserId(decoded.userId);
                console.log('User ID from token:', decoded.userId);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        };

        useEffect(() => {
            fetchUserId();
        }, []);

        const submitPicks = async () => {
            if(!currentUserId) {
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
                        picks: Object.values(bracketData), 
                        user_id: currentUserId
                    }),
                    credential: 'include' // Ensure cookies are sent
                });

                const result = await response.json();
                if(response.success) {
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
            <div className="bg-black">
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
                <div className="flex justify-center items-center">
                <button className="mb-6 rounded-lg border border-solid bg-blue-600 border-white/[0.8] transition-colors flex items-center justify-center hover:bg-white hover:text-black hover:border-transparent font-medium w-1/3 h-12 mx-2 cursor-pointer"
                    onClick={submitPicks}>
                    Submit
                </button>
            </div>
            </div>
        </>
    )
}