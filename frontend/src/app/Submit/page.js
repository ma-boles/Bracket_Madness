'use client'
import React, { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import NavBar from "../../Components/NavBar";
import DesktopBracket_Layout from "@/Components/BracketLayout/DesktopBracket_Layout";
import MobileBracket_Layout from "@/Components/BracketLayout/MobileBracket_Layout";
import { useBracket } from "@/context/BracketContext";
import { useSearchParams } from "next/navigation";
import AuthContext from "@/context/AuthContext";
import ConfirmationModal from "@/Components/ConfirmationModal";
import toast from "react-hot-toast";
import { ButtonSpinner } from "@/Components/ui/ButtonSpinner";

export default function Submit() {
    const { currentUser } = useContext(AuthContext);
    const [ isValidated, setIsValidated ] = useState(false);
    const { bracketData, resetBracket } = useBracket();
    const [ showModal, setShowModal ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isLoadingCheckPicks, setIsLoadingCheckPicks ] = useState(false);
    const [ isLoadingSubmit, setIsLoadingSubmit ] = useState(false);
    const [ bracketName, setBracketName] = useState("");
    const [ bracketId, setBracketId ] = useState(null);
    const [ picksValid, setPicksValid ] = useState(false);
    const [ isFinalFourActive, setIsFinalFourActive ] = useState(false);
    const searchParams = useSearchParams();
    const poolId = searchParams.get('pool_id');

    const handleLockIn = () => {
        setShowModal(true);
        setPicksValid(false);
    };

    const handleCheckPicks = () => {
        console.log("Check Picks Clicked");
        console.log("Bracket Data Before Check:", bracketData);
        setIsLoadingCheckPicks(true);

        const numberOfGames = 67; 

        const pickCount = Object.keys(bracketData).length;
        console.log("Pick count:", pickCount);
    
        if (pickCount === 0) {
            // If no picks have been made, trigger the alert
            toast.error('Please make a pick for every game before submitting.',{
                style: {
                    background: '#333',
                    color: '#fff',
                    duration: 4000,
                }
            })
            setIsLoadingCheckPicks(false);
            setIsValidated(false);
            return; 
        }
    
        // If there are picks, check if all have a winnerId
        const allPicked = Object.values(bracketData).every(pick => pick?.winnerId);
        console.log('All picks made:', allPicked);
    
        if (allPicked && pickCount === numberOfGames) {
            // If all picks are made and we have the right number of picks
            setIsValidated(true);
            setIsLoadingCheckPicks(false);
            toast.success('All picks are made. You can submit now!', {
                style: {
                    background: '#333',
                    color: '#fff',
                    duration: 4000,
                }
            });
        } else {
            toast.error('Please make a pick for every game before submitting.',{
                style: {
                    background: '#333',
                    color: '#fff',
                    duration: 4000,
                }
            })
            setIsValidated(false);
            setIsLoadingCheckPicks(false);
        }
    };


    const handleSubmitBracket = async () => {
        setIsLoadingSubmit(true);

        const bracketPayload = {
            bracket_name: bracketName || null,
            pool_id: poolId ? Number(poolId) : null
        };

        try {
        const res = await fetch ("/api/brackets", {
            method: "POST",
            headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify(bracketPayload),
        });

        const data = await res.json();
        const bracketId = data.bracket_id;
        console.log('Bracket creation response:', data);

        if(data.success) {
            setBracketId(bracketId);
            setIsLoadingSubmit(false);

            toast.success('Successful! Ready to submit below.',{
                style: {
                    background: '#333',
                    color: '#fff',
                    duration: 4000,
                }
            })
        } else {
            setIsLoadingSubmit(fale);

            console.error('Bracket creation failed:', error.message);
            toast.error('Bracket creation failed. Please try again.',{
                style: {
                    background: '#333',
                    color: '#fff',
                    duration: 4000,
                }
            })
        };

        setShowModal(false);
        setBracketName("");

    } catch(error) {
        console.error('Error creating bracket:', error)
    }
};


    const submitPicks = async () => {
        setIsLoading(true);

            if(!currentUser) {
                console.error('Error: User not logged in.');
                return;
            }

            if(!bracketId) {
                console.error('Error: Bracket ID is missing.');
                return;
            }

            try{
                console.log('Submitting picks with Bracket ID:', bracketId);

                const response = await fetch('/api/submit-picks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        bracketData,
                        bracket_id: bracketId,
                        pool_id: poolId ? Number(poolId) : null
                    }),
                    credentials: 'include' // Ensure cookies are sent
                });

                const result = await response.json();

                if(result.success) {
                    console.log('Bracket ID:', bracketId);
                    toast.success('Successfully submitted', {
                            style: {
                                background: '#333',
                                color: '#fff'
                            }
                    })
                    setIsLoading(false);
                    resetBracket();

                }  else {
                    toast.error('Submission failed. Please try again', {
                        style: {
                            background: '#333',
                            color: '#fff',
                            duration: 4000,
                        }
                })

            }
            } catch (error) {toast.success('Submission error. Please try again.', {
                style: {
                    background: '#333',
                    color: '#fff',
                    duration: 4000,
                }
            })

        }
        };

    return(
        <>
            <nav>
                <NavBar />
            </nav>
            <div>
                <DesktopBracket_Layout />
                <MobileBracket_Layout onEnterFinalFour={() => setIsFinalFourActive(true)}/>


                <ConfirmationModal 
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    onVerify={handleCheckPicks}
                    onSubmitBracket={handleSubmitBracket}
                    picksValid={isValidated}
                    bracketName={bracketName}
                    setBracketName={setBracketName}
                    isLoadingCheckPicks={isLoadingCheckPicks}
                    isLoadingSubmit={isLoadingSubmit}/>

                {currentUser && (
                <>
                    {/* Desktop: always show */}
                    <div className="hidden lg:flex justify-center items-center">
                    <button
                        className="mb-6 mt-2 rounded-lg border border-white hover:bg-white/15 transition-colors flex items-center justify-center font-bold w-1/4 h-12 mx-2 cursor-pointer"
                        onClick={handleLockIn}
                    >
                        Lock In Picks
                    </button>
                    
                    <button
                        className={`mb-6 mt-2 rounded-lg bg-blue-700 border border-blue-700 transition-colors flex items-center justify-center font-medium w-1/4 h-12 mx-2 ${!isValidated ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        disabled={!isValidated}
                        onClick={submitPicks}
                    >
                        {isLoading ? (
                                <ButtonSpinner size={4} /> 
                            ) : (
                                'Submit'
                            )}
                    </button>

                    <div
                        className="mb-6 mt-2 bg-white/5 rounded-lg flex items-center justify-center font-bold w-1/6 h-12 mx-2"
                    >
                     Picks Remaining: <span className="font-bold"> 11</span>
                    </div>
                    

                    </div>

                    {/* Mobile: only show if Final Four is active */}
                    {isFinalFourActive && (
                    <div className="flex lg:hidden justify-center items-center">
                        <button
                        className="mb-6 rounded-lg border border-white hover:bg-white/15 transition-colors flex items-center justify-center font-bold w-1/2 h-12 mx-2 cursor-pointer"
                        onClick={handleLockIn}
                        >
                        Lock In Picks
                        </button>

                        <button
                        className={`mb-6 rounded-lg bg-blue-700 border border-blue-700 transition-colors flex items-center justify-center font-medium w-1/2 h-12 mx-2 ${!isValidated ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        disabled={!isValidated}
                        onClick={submitPicks}
                        >
                        {isLoading ? (
                                <ButtonSpinner size={4} /> 
                            ) : (
                                'Submit'
                            )}
                        </button>

                        <div
                        className="mb-6 mt-2 bg-white/5 rounded-lg hidden sm:flex items-center justify-center font-bold w-1/6 h-12 mx-2"
                        >
                        Picks Remaining: <span className="font-bold"> 11</span>
                        </div>

                    </div>
                    )}
                </>
                )}

                {/* {currentUser && (
                <div className="hidden lg:flex justify-center items-center">
                    <button className="mb-6 rounded-lg border border-white hover:bg-white/15 transition-colors flex items-center justify-center font-bold w-1/4 h-12 mx-2 cursor-pointer"
                        onClick={handleLockIn}
                        >Lock In Picks</button>
                    <button className={`mb-6 rounded-lg border border-solid bg-blue-600 border-white/[0.8] transition-colors flex items-center justify-center font-medium w-1/4 h-12 mx-2 ${!isValidated ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        disabled={!isValidated}
                        onClick={submitPicks}
                        >
                        Submit
                    </button>
                </div>

                {isFinalFourActive && (
                    <div className="hidden lg:flex justify-center items-center">
                    <button className="mb-6 rounded-lg border border-white hover:bg-white/15 transition-colors flex items-center justify-center font-bold w-1/4 h-12 mx-2 cursor-pointer"
                        onClick={handleLockIn}
                        >Lock In Picks</button>
                    <button className={`mb-6 rounded-lg border border-solid bg-blue-600 border-white/[0.8] transition-colors flex items-center justify-center font-medium w-1/4 h-12 mx-2 ${!isValidated ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        disabled={!isValidated}
                        onClick={submitPicks}
                        >
                        Submit
                    </button>
                </div>
                )}
                    )} */}
                    {/* <button onClick={handleLockIn}>Show modal</button> */}

            </div>
        </>
    )
}