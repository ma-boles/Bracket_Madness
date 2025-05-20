import React, { useState } from "react";
import SuccessModal from "../Pool/SuccessModal";

export default function CreateForm () {
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
            alert("Pool name is required.");
            return;
        }

        try {
            // Check name availability
            const checkRes = await fetch(`api/pools/check-name?name=${formData.poolName}`);
            const { available } = await checkRes.json();

            if(!available) {
                alert("Pool name already taken.");
                return;
            }

            // generate code
            const generateCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();
            const inviteCode = generateCode();

            // post to backend
            const res = await fetch("/api/pools", {
                method: "POST",
                headers : { "Content-Type": "application/json" },
                body: JSON.stringify({
                    poolName: formData.poolName,
                    inviteCode: inviteCode
                })
            });

            if(!res.ok) {
                const error = await res.json();
                console.error("Error creating pool:", error);
                alert("Could not create pool.");
                return;
            }

            const data = await res.json();
            console.log("Pool created:", data);
             
            alert(`Pool created! Invite code: ${data.inviteCode}`);
        } catch (error) {
            console.error("Failed to create pool", error);
            alert("Something went wrong.");
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
                {/* <label className="block font-medium mb-1">Pool Name</label> */}
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
                {/* <label className="block font-medium mb-1">Join Code</label> */}
                {/* <input 
                type="text"
                name="poolCode"
                value={formData.poolCode}
                onChange={handleChange}
                placeholder="Join Code"
                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                /> */}
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