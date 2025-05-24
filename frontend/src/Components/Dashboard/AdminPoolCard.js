import React, { useEffect, useState, Fragment } from "react";
import { Combobox, ComboboxOption, ComboboxOptions, Transition, ComboboxInput } from "@headlessui/react";
import ManageCard from "./ManageCard";
import toast from "react-hot-toast";

export default function AdminPoolCard ({ poolId, poolName, inviteCode }) {
    const [manageCard, setManageCard] = useState(false);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleManage = () => {
        setManageCard(prev => !prev)
    };

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
                console.log("Suggestions returned from API:", data); // 👈 ADD THIS
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
                    style: {
                        background: '#333',
                        color: '#fff'
                    }});
            } else {
                toast.success(data.message, {
                    style: {
                        background: '#333',
                        color: '#fff'
                    }});
            }
        } catch (error) {
            console.error('Invite failed:', error);
            toast.success('Something went wrong', {
                style: {
                    background: '#333',
                    color: '#fff'
                }});
        }
    };

    return (
        <div className="flex m-2">
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
            {manageCard && (
                <ManageCard />
            )}

    </div>
    )
}




//                                  <input 
//                                     type="text"
//                                     value={query}
//                                     placeholder="Search usernames"
//                                     onChange={(e) => setQuery(e.target.value)}
//                                     className="w-full bg-white text-gray-700 text-center text-lg"/>

//                                 {/* {loading && <div className="absolute top-full mt-1 text-sm text-gray-500">Loading...</div>} */}

//                                 {suggestions.length > 0 && (
//                                     <ul className="absolute z-10 w-full mt-1 bg-black/90 border rounded shadow">
             
//                                         {suggestions.map((user, index) => (
//                                             <li
//                                                 key={index}
//                                                 className="p-2 hover:bg-yellow-400/50 cursor-pointer"
//                                                 onMouseDown={() => {
//                                                     // setQuery(user.username);
//                                                     // setSuggestions([]); // close dropdown
//                                                     handleUserSelect(user)
//                                                 }}
//                                                 >
//                                                 {user.username}
//                                             </li>
//                                         ))}
//                                     </ul>

//                                 )}