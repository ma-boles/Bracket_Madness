import React, { useState } from "react";
import toast from "react-hot-toast";

export default function JoinForm () {
    const [formData, setFormData] = useState({
        poolName: "",
        inviteCode: ""
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!formData.poolName.trim() || !formData.inviteCode.trim()) {
            toast.success('Please enter both pool name and invite code', {
            style: {
                background: '#333',
                color: '#fff'
            }});

            return;
        } 

        try {
            const response = await fetch('/api/pools/join', {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    poolName: formData.poolName.trim(),
                    inviteCode: formData.inviteCode.trim(),
                }),
                credentials: 'include'
            });

            const data = await response.json();

            if(response.ok) {
                toast.success(`Success! You joined pool: ${data.poolName}`, {
                    style: {
                        background: '#333',
                        color: '#fff'
                    }});
                // redirect ?
            } else {
                toast.success(data.error || "Failed to join pool.", {
                    style: {
                        background: '#333',
                        color: '#fff'
                    }});
            }
        } catch (error) {
            toast.success('An unexpected error occurred', {
            style: {
                background: '#333',
                color: '#fff'
            }
        });
            console.error(error);
        }
    };

    const handleClear = (e) => {
        setFormData({
            poolName: "",
            inviteCode: "",
        });
    };

    return(
        <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto space-y-4 bg-white/5 rounded-xl">
            <h1 className="text-2xl text-center font-bold">Join a Pool</h1>
            <div>
                <input 
                type="text"
                name="poolName"
                value={formData.poolName}
                onChange={handleChange}
                placeholder="Pool Name"
                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            <div>
                <input 
                type="text"
                name="inviteCode"
                value={formData.inviteCode}
                onChange={handleChange}
                placeholder="Invite Code"
                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            <div className="flex justify-between gap-4">
                <button
                type="submit"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
                >Join</button>
                <button
                type="button"
                onClick={handleClear}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer"
                >
                    Clear
                </button>
            </div>
        </form>
    );
}