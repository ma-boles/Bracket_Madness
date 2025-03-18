'use client'
import { createContext, useContext, useState  } from "react";

const BracketContext = createContext();

export const BracketProvider = ({ children }) => {
    const [ userPicks, setUserPicks ] = useState({ 
        west: {},
        east: {},
        south: {},
        midwest: {},
        firstfour: {},
        championship: {},
    });

    const handlePick = (region, game_id, team) => {
        setUserPicks((prevPicks) => ({
            ...prevPicks,
            [region]: {
                ...(prevPicks[region] || {}),
                [game_id]: team,
            },
        }));
    };

    const submitBracket = async () => {
        try{
            const response = await fetch('/api/submit-picks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userPicks),
            });

            if(!response.ok) {
                throw new Error('Failed to submit picks');
            } 
            console.log('Bracket successfully submitted');
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    return(
        <BracketContext.Provider value={{
            userPicks,
            handlePick,
            submitBracket
        }}> 
        {children}
        </BracketContext.Provider>
    );
};

export const useBracket = () => useContext(BracketContext);