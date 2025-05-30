import React, { useState } from "react";
import toast from "react-hot-toast";

export default function CreateForm ({ onSuccess }) {
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

        if(!formData.poolName.trim()) {
            toast.success('Poolname is required.', {
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
                toast.success('Pool name already', {
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
                const error = await res.json();
                console.error("Error creating pool:", error);
                toast.success('Could not create pool.', {
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
            console.error("Failed to create pool", error);
            toast.success('Something went wrong.', {
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
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 font-bold py-2 px-4 rounded"
                >Create</button>
                <button
                type="button"
                onClick={handleClear}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                    Clear
                </button>
            </div>
        </form>

    );
}