import React, { useState } from "react";
import toast from "react-hot-toast";
import { ButtonSpinner } from "../ui/ButtonSpinner";

export default function JoinForm ({ isUser }) {
    const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);

        if(!formData.poolName.trim() || !formData.inviteCode.trim()) {
            setIsLoading(false);
            
            toast.error('Please enter both pool name and invite code', {
                className: 'toastError',
            });

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
                setIsLoading(false);

                toast.success(`Success! You joined ${data.poolName}!`, {
                    className: 'toastSuccess',
                    });

                } else {
                setIsLoading(false);

                toast.error(data.error || "Failed to join pool.", {
                    className: 'toastError',
                });
            }
        } catch (error) {
            setIsLoading(false);
            
            toast.error('An unexpected error occurred', {
                className: 'toastError',
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
            {isUser ? (
            <>
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
                    className='flex-1 font-bold py-2 px-4 text-black bg-yellow-500 hover:bg-yellow-400 rounded transition-colors'>
                    {isLoading ? (
                        <ButtonSpinner />
                    ) : (
                        'Join'
                    )}

                </button>

                <button
                    type="button"
                    onClick={handleClear}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer"
                    >
                    Clear
                </button>
            </div>   
            </>
            ) : (
                <h1 className="text-2xl text-center font-bold"> Sign in to use this feature</h1>
            )}
        </form>
    );
}