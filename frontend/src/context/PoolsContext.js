import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const PoolsContext = createContext();

export const PoolsProvider = ({ children }) => {
    const [adminPools, setAdminPools] = useState([]);
    const [memberPools, setMemberPools] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchPools  = async () => {
        setIsLoading(true);

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
            toast.error('Error fetching pools.', {
                    style: {
                    background: '#333',
                    color: '#fff'
                    }})
        }
        finally {
            setIsLoading(false);
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
        <PoolsContext.Provider value={{ memberPools, adminPools, deletePool, leavePool, isLoading }} >
            {children}
        </PoolsContext.Provider>
    );
};

export const usePools = () => useContext(PoolsContext);