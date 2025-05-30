import { createContext, useContext, useEffect, useState } from "react";

const PoolsContext = createContext();

export const PoolsProvider = ({ children }) => {
    const [pools, setPools] = useState([]);

        const fetchAdminPools  = async () => {
            try {
                const res = await fetch('/api/pools/admin');
                const data = await res.json();
                setPools(data.pools || []);
            } catch (error) {
                console.error('Failed to fetch admin pools:', error);
            }
        };

    const deletePool = (poolId) => {
        setPools(prev => prev.filter(pool => pool.id !== poolId));
    };

    const leavePool = (poolId) => {
        setPools(prev => prev.filter(pool => pool.id !== poolId));
    };

    useEffect(() => {
        fetchAdminPools();
    }, [])

    return(
        <PoolsContext.Provider value={{ pools, fetchAdminPools, deletePool, leavePool }} >
            {children}
        </PoolsContext.Provider>
    );
};

export const usePools = () => useContext(PoolsContext);