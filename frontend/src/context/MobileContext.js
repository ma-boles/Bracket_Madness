'use client'
import React, { createContext, useContext, useReducer } from "react";

const initialState = {
    sections: {}
};

const SET_SECTION_STATUS = 'SET_SECTION_STATUS';

function mobileReducer(state, action) {
    switch(action.type) {
        case SET_SECTION_STATUS:
            return {
                ...state,
                sections: {
                    ...state.sections,
                    [action.payload.sectionId]: action.payload.isComplete
                }
            };
            default:
                return state;
    }
}

const MobileContext = createContext();

export default function MobileProvider ({ children }) {
    const [state, dispatch] = useReducer(mobileReducer, initialState);

    const setSectionStatus = (sectionId, isComplete) => {
        dispatch({ type: SET_SECTION_STATUS, payload: { sectionId, isComplete } })
    };

    return (
        <MobileContext.Provider value={{ sections: state.sections, setSectionStatus }}>
            {children}
        </MobileContext.Provider>
    )
};

export function useMobileContext() {
    return useContext(MobileContext);
}