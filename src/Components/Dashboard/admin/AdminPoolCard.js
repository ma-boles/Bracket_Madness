import React, { useEffect, useState, Fragment } from "react";
import { Combobox, ComboboxOption, ComboboxOptions, Transition, ComboboxInput } from "@headlessui/react";
import ManageCard from "./ManageCard";
import toast from "react-hot-toast";

export default function AdminPoolCard ({ poolId, poolName, inviteCode }) {
    const [showManageCard, setShowManageCard] = useState(false);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [members, setMembers] = useState({active: [], pending: []});

    const handleManage = async () => {
        if(!showManageCard) {
            try {
                const res = await fetch(`/api/pools/${poolId}/members`);
                const data = await res.json();
                setMembers({ active: data.activeMembers, pending: data.pendingMembers });
            } catch(error) {
                console.error("Failed to load members:", error);
                toast.error("Failed to load members", {
                    className: 'toastError',
                });
            }
            
        }
        setShowManageCard(prev => !prev)
    };

    const handleRemoveMember = async (userId) => {
        try {
            const response = await fetch('/api/pools/member/remove', {
                method: "DELETE",
                credentials: 'include',
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, poolId }),
            });

            const data = await response.json();

            if(response.ok) {
                    toast.success("Member removed successfully", {
                        className: 'toastSuccess',
                    });
                
                // Update member lists post removal by triggering useEffect
                setMembers(prevMembers => ({
                    ...prevMembers,
                    active: prevMembers.active.filter(member => member.user_id !== userId),
                    pending: prevMembers.pending.filter(member => member.user_id !== userId)
                }));
            } else {
                toast.error(data.message || "Failed to remove members", {
                    className: 'toastError',
                });
            }
        } catch (error) {
            console.error("Error removing member:", error);
                toast.error("An unexpected error occurred", {
                    className: 'toastError',
                });
        }
    };

     const handleConfirmMember = async (targetUserId) => {
        try {

         const response = await fetch('/api/pools/member/confirm', {
                method: "POST",
                credentials: 'include',
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ poolId, targetUserId }),
            });

            const data = await response.json();

            if(response.ok) {
                toast.success("Member confirmed successfully", {
                    className: 'toastSuccess',
                });

                // Refetch members list after confirmation
                const res = await fetch(`/api/pools/${poolId}/members`);
                const updatedData = await res.json();
                setMembers({ active: updatedData.activeMembers, pending: updatedData.pendingMembers });
            } else {
                toast.error(data.message || "Failed to confirm member", {
                    className: 'toastError',
                });
            } 
    } catch(error) {
        console.error("Something went wrong while confirming member:", error)
            toast.error("Something went wrong while confirming member", {
                className: 'toastError',
            });

        }
}

    useEffect(() => {
        // request not sent unless 2 characters are provided
        if(query?.length < 2) {
            setSuggestions([]);
            return;
        }

        const delayDebounce = setTimeout(() => {
        setLoading(true);

        // Fetch matching usernames from backend
        fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
            setSuggestions(data);
            setLoading(false);
        })
        .catch(() => {
            setSuggestions([]);
            setLoading(false);
        })
    }, 300)

    return () => clearTimeout(delayDebounce);
}, [query]);

    const handleUserSelect = (user) => {
        setSelectedUser(user)
        setQuery('');
        setSuggestions([]);
    }
  
    const handleInviteClick = async () => {
        try {
            const res = await fetch('/api/pools/invite', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: selectedUser.id,
                    poolId,
                })
            });

            const data = await res.json();
            if(res.ok) {
                toast.success('Invite sent!', {
                    className: 'toastSuccess',
                });
            } else {
                toast.error(data.message, {
                    className: 'toastError',
                });
            }
        } catch (error) {
            console.error('Invite failed:', error);
            toast.error('Something went wrong', {
                className: 'toastError',
            });
        }
    };

    return (
        <div className="flex flex-col lg:flex-row m-2">
            <div className="flex flex-col justify-between w-80 h-80 bg-white/10 border border-white rounded-xl">
                    <div className="flex justify-between p-2 bg-yellow-400 rounded-t-xl text-black">
                        <div>
                            <h2 className="font-bold">{poolName}</h2>
                            <h2><strong>ID:</strong> {poolId}</h2>
                        </div>
                        <div className="mt-auto">
                            <h2><strong>Code:</strong> {inviteCode}</h2>
                        </div>

                    </div>
                    <div className="m-4 border border-white">
                        <div className="p-4">
                            <div className="relative h-30 w-full">
                                <h2 className="font-semibold">Invite</h2>
                                <Combobox value={selectedUser} 
                                    onChange={handleUserSelect}>
                                    <ComboboxInput 
                                    placeholder="Search username"
                                    onChange={(e) => setQuery(e.target.value)}
                                    displayValue={(user) => user?.username || ''}
                                    className="w-full bg-white text-gray-700 text-center text-lg"
                                    />
                                    <Transition
                                        as={Fragment}
                                        show={suggestions.length > 0}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                        afterLeave={() => setSuggestions([])}
                                    >

                                        <ComboboxOptions className="absolute z-10 w-full mt-1 max-h-60 overflow-auto rounded bg-black/90 border border-white shadow-lg">
                                            {suggestions?.length === 0 && query?.length >= 2 && !loading ? (
                                                <div className="p-2 text-gray-400 cursor-default select-none">
                                                No results found.
                                                </div>
                                            ) : (
                                                suggestions.map((user, index) => (
                                                    <ComboboxOption
                                                        key={index}
                                                        value={user}
                                                        className={({ active, selected }) =>
                                                            `cursor-pointer select-none p-2 ${
                                                            active ? "bg-yellow-400/50" : ""
                                                            } ${selected ? "font-bold" : ""}`
                                                        }
                                                        >
                                                        {user.username}
                                                        </ComboboxOption>
                                                        ))
                                                    )}
                                        </ComboboxOptions>

                                    </Transition>

                                </Combobox>

                                <button className="bg-yellow-400 w-full h-8 mt-2 border border-black text-black cursor-pointer"
                                    onClick={handleInviteClick}
                                    >
                                    Send Invite
                                </button>

                                {!loading && query?.length >= 2 && suggestions?.length === 0 && (
                                        <div className="text-center mt-4 text-md text-white font-semibold">No results found</div>
                                    )}

                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-4">
                        <button className="underline cursor-pointer hover:text-yellow-400"
                        onClick={handleManage}>Manage</button>
                    </div>
            </div>
            {showManageCard && (
                <ManageCard 
                poolId={poolId}
                activeMembers={members.active}
                pendingMembers={members.pending}
                onRemoveMember={handleRemoveMember}
                onConfirmMember={handleConfirmMember}/>
            )}

    </div>
    )
}