import { createContext, useContext, useEffect, useState } from "react";

const PoolsContext = createContext();

export const PoolsProvider = ({ children }) => {
    const [adminPools, setAdminPools] = useState([]);
    const [memberPools, setMemberPools] = useState([]);

    const fetchPools  = async () => {
        try {
            const [adminRes, memberRes] = await Promise.all([
                fetch('/api/pools/admin'),
                fetch('/api/pools/member')
            ]); 
            const adminData = await adminRes.json();
            const memberData = await memberRes.json();

            setAdminPools(adminData.pools || []);
            setMemberPools(memberData.pools || []);
        } catch (error) {
            console.error('Error fetching pools:', error);
        }
    };

    const deletePool = (poolId) => {
        setAdminPools(prev => prev.filter(pool => pool.id !== poolId));
    };

    const leavePool = (poolId) => {
        setMemberPools(prev => prev.filter(pool => pool.id !== poolId));
    };


    useEffect(() => {
        fetchPools();
    }, [])

    return(
        <PoolsContext.Provider value={{ memberPools, adminPools, deletePool, leavePool }} >
            {children}
        </PoolsContext.Provider>
    );
};

export const usePools = () => useContext(PoolsContext);