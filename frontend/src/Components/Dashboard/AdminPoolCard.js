import React, { useEffect, useState } from "react";
import ManageCard from "./ManageCard";

export default function AdminPoolCard () {
    const [manageCard, setManageCard] = useState(false);
    const [query, setQuery] = useState(' ');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

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

    return (
        <div className="flex m-2">
            <div className="flex flex-col justify-between w-80 h-80 bg-white/10 border border-white rounded-xl">
                    <div className="p-2 bg-yellow-400 rounded-t-xl text-black">
                        <h2 className="font-bold">Pool Name</h2>
                        <h2>Pool ID: #000</h2>
                    </div>
                    <div className="m-4 p-2 h-30 border border-white">
                        <h2 className="font-semibold">Invite</h2>


                        <input 
                            type="text"
                            value={query}
                            placeholder="Search usernames..."
                            onChange={(e) => setQuery(e.target.value)}
                            className="bg-white text-gray-700 text-center"/>

                        {loading && <div className="absolute top-full mt-1 text-sm text-gray-500">Loading...</div>}

                        {suggestions.length > 0 && (
                            <ul className="absolute z-10 w-full mt-1 bg-white border rounded shadow">
                                {suggestions.map((user, index) => {
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setQuery(user.username);
                                            setSuggestions([]); // close dropdown
                                        }}
                                        >
                                        {user.username}
                                    </li>
                                })}
                            </ul>

                        )}

                        {!loading && query.length >= 2 && suggestions.length === 0 && (
                                <div className="absolute top-full mt-1 text-sm text-gray-400">No results found</div>
                            )}
                        <button className="bg-yellow-400 w-full h-8 border border-black text-black cursor-pointer">Send Invite</button>
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