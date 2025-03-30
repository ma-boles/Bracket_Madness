'use client'
import { createContext, useContext, useEffect, useState  } from "react";

const BracketContext = createContext();

export const BracketProvider = ({ children }) => {
    const [ bracketData, setBracketData ] = useState({});
    const [ selectedTeam, setSelectedTeam ] = useState(null);
    const [ userPicks, setUserPicks ] = useState({ 
        spokane1: {},
        birmingham2: {},
        birmingham3: {},
        spokane4: {},
        firstfour: {},
        championship: {},
    });

    useEffect(() => {
        console.log('BracketData Update:', bracketData);
    }, [bracketData]);

    const handlePick = (region, game_id, team) => {
        if(!team) return;

        setUserPicks((prevPicks) => ({
            ...prevPicks,
            [region]: {
                ...(prevPicks[region] || {}),
                [game_id]: team.name,
            },
        }));

        setBracketData((prevData) => ({
            ...prevData,
            [game_id]: {
                region,
                gameId: game_id,
                winnerId: team.id,
                winnerName: team.name
            },
        }));
    };

    // Handle selection and update BracketContext
    const handleSelection = (region, gameId, team) => {
        if(!team) return;
        console.log('Selected team:', team);
            
        setSelectedTeam(team);
        handlePick(region, gameId, team);
    };

    return(
        <BracketContext.Provider value={{
            userPicks,
            bracketData,
            handlePick,
            handleSelection
        }}> 
        {children}
        </BracketContext.Provider>
    );
};

export const useBracket = () => useContext(BracketContext);