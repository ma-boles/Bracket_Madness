'use client'
import React, { useContext, useEffect, useState } from "react";
import LoadingMessage from "@/Components/ui/LoadingMessage";
import NavBar from "../../Components/NavBar";
import FirstFour_Result from "@/Components/Results/FirstFour_Results";
import Spokane1_Results from "@/Components/Results/Spokane1_Results";
import Birmingham2_Results from "@/Components/Results/Birmingham2_Results";
import Birmingham3_Results from "@/Components/Results/Birmingham3_Results";
import Spokane4_Results from "@/Components/Results/Spokane4_Results";
import Championship_Results from "@/Components/Results/Championship_Results";
import axios from "axios";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function Results() {
    const [ resultsData, setResultsData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const router = useRouter();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if(!currentUser) {
            toast.error("Page not avaiable in Demo Mode");
            router.push('/Submit');
        }
    }, [currentUser]);

    if(!currentUser) return null;
    
    // useEffect(() => {
    //     const fetchResults = async () => {
    //         try {
    //             const res = await axios.get('/api/results');
                       
    //             await new Promise(resolve => setTimeout(resolve, 500));

    //             setResultsData(res.data);
    //         } catch(error) {
    //             console.error('Failed to fetch results:', error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };
    //     fetchResults();
    // }, []);

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
        <div className="flex justify-center items-center">
            {isLoading && (
                <LoadingMessage />
            )}

            <div className="w-screen h-screen overflow-x-auto hide-scrollbar"> 

            <div className="px-0 py-6 gap-6"> 

                {/* First Four */}
                <div className="w-[400px] mx-auto mb-6">
                    <FirstFour_Result results={firstFourResultsData} />
                </div>

                {/* Top half of bracket */}
                <div className="flex  mx-auto mb-6">
                    <div>
                        <Spokane1_Results results={spokane1ResultsData} />
                    </div>
                    <div>
                        <Birmingham2_Results results={birmingham2ResultsData} />
                    </div>
                </div>


                {/* Championship */}
                <div className="w-[400px] mx-auto mb-6">
                    <Championship_Results results={finalRoundsResultsData} />
                </div>


                {/* Bottom half of bracket */}
                <div className="flex mx-auto">
                    <div>
                        <Spokane4_Results results={spokane4ResultsData} />
                    </div>
                    <div>
                        <Birmingham3_Results results={birmingham3ResultsData} />
                    </div>
                </div>
                </div>
            </div>
    </div>
    
    </>
    )
}