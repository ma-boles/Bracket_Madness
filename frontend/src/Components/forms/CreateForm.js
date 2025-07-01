import React, { useState } from "react";
import toast from "react-hot-toast";
import { ButtonSpinner } from "../ui/ButtonSpinner";

export default function CreateForm ({ onSuccess, isUser }) {
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


        if(!formData.poolName.trim()) {
            setIsLoading(false);

            toast.error('Poolname is required.', {
            style: {
                background: '#333',
                color: '#fff'
            }});
            return;
        }

        try {
            // Check name availability
            const checkRes = await fetch(`api/pools/check-name?name=${encodeURIComponent(formData.poolName)}`);
            const { available } = await checkRes.json();

            if(!available) {
                setIsLoading(false);

                toast.success('Pool name already taken', {
                    style: {
                        background: '#333',
                        color: '#fff'
                    }});
                return;
            }


            // post to backend
            const res = await fetch("/api/pools", {
                method: "POST",
                headers : { "Content-Type": "application/json" },
                body: JSON.stringify({
                    poolName: formData.poolName,
                })
            });

            if(!res.ok) {
                setIsLoading(false);

                const error = await res.json();
                console.error("Error creating pool:", error);
                toast.error('Could not create pool.', {
                    style: {
                        background: '#333',
                        color: '#fff'
                    }});
                return;
            }

            const data = await res.json();
            console.log("Pool created:", data);

            if(onSuccess) {
                onSuccess({ name: data.poolName || formData.poolName, code: data.inviteCode })
            }
        
        } catch (error) {
            setIsLoading(false);
            
            console.error("Failed to create pool", error);
            toast.error('Something went wrong.', {
            style: {
                background: '#333',
                color: '#fff'
            }});
        }
    };

    const handleClear = (e) => {
        setFormData({
            poolName: "",
        });
    };


    return(
        <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto space-y-4 bg-white/5 rounded-xl">
            {isUser ? (
<>

            <h1 className="text-2xl text-center font-bold">Create a Pool</h1>
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

            <div className="flex justify-between gap-4">
                <button
                type="submit"
                className='flex-1 font-bold py-2 px-4 bg-yellow-400 hover:bg-yellow-500 rounded transition-colors'>                
                    {isLoading ? (
                        <ButtonSpinner />
                    ) : (
                        'Create'
                    )}

                    </button>

                <button
                type="button"
                onClick={handleClear}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                    Clear
                </button>
            </div>
            </>) : (
                <h1 className="text-2xl text-center font-bold"> Sign in to use this feature</h1>
            )}
        </form>

    );
}