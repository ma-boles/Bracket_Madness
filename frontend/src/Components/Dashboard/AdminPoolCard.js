import React, { useEffect, useState, Fragment } from "react";
import { ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import ManageCard from "./ManageCard";

export default function AdminPoolCard () {
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
        if(query.length < 2) {
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
        setQuery(user.username);
        setSuggestions([]);
    }
  
    // const handleInputChange  = (e) => {
    //     setQuery(e.target.value);
    // };

    return (
        <div className="flex m-2">
            <div className="flex flex-col justify-between w-80 h-80 bg-white/10 border border-white rounded-xl">
                    <div className="p-2 bg-yellow-400 rounded-t-xl text-black">
                        <h2 className="font-bold">Pool Name</h2>
                        <h2>Pool ID: #000</h2>
                    </div>
                    <div className="m-4 border border-white">
                        <div className="p-4">
                            <div className="relative h-30 w-full">
                                <h2 className="font-semibold">Invite</h2>
                                
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    afterLeave={() => setSuggestions([])}
                                >

                                <ComboboxOptions className="absolute z-10 w-full mt-1 max-h-60 overflow-auto rounded bg-black/90 border border-white shadow-lg">
                                    {suggestions.length === 0 && query.length >= 2 && !loading ? (
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

                                <button className="bg-yellow-400 w-full h-8 mt-2 border border-black text-black cursor-pointer">Send Invite</button>
                                {!loading && query.length >= 2 && suggestions.length === 0 && (
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