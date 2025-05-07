'use client'
import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import FirstFour_Result from "@/Components/Results/FirstFour_Results";
import Spokane1_Results from "@/Components/Results/Spokane1_Results";
import Birmingham2_Results from "@/Components/Results/Birmingham2_Results";
import Birmingham3_Results from "@/Components/Results/Birmingham3_Results";
import Spokane4_Results from "@/Components/Results/Spokane4_Results";
import Championship_Results from "@/Components/Results/Championship_Results";
import axios from "axios";

export default function Results() {
    const [ resultsData, setResultsData ] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const res = await axios.get('/api/results');
                setResultsData(res.data);
            } catch(error) {
                console.error('Failed to fetch results:', error);
            }
        };
        fetchResults();
    }, []);

    const firstFourResultsData = resultsData.filter(result => result.round === 'First Four');
    const spokane1ResultsData = resultsData.filter(result => result.region === 'Spokane 1');
    const birmingham2ResultsData = resultsData.filter(result => result.region === 'Birmingham 2');
    const birmingham3ResultsData = resultsData.filter(result => result.region === 'Birmingham 3');
    const spokane4ResultsData = resultsData.filter(result => result.region === 'Spokane 4');
    const finalRoundsResultsData = resultsData.filter(result => 
        ['Elite 8', 'Final Four', 'Championship'].includes(result.round)
    );


    return(
        <>
        <nav>
            <NavBar />
        </nav>
        <div>
            <div className="w-full">
                <FirstFour_Result results={firstFourResultsData}/>
            </div>
            <div>
                <div className="flex">
                    <Spokane1_Results results={spokane1ResultsData}/>
                    <Birmingham2_Results results={birmingham2ResultsData}/>
                </div>

                    <Championship_Results results={finalRoundsResultsData} />
                
                <div className="flex">
                    <Spokane4_Results results={spokane4ResultsData}/>
                    <Birmingham3_Results results={birmingham3ResultsData}/>
                </div>
            </div>
        </div>
        </>
    )
}