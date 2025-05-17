import React, { useState } from "react";

export default function CreateForm () {
    const [formData, setFormData] = useState({
        poolName: "",
        poolCode: ""
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // do something with form data
    };

    const handleClear = (e) => {
        setFormData({
            poolName: "",
            poolCode: "",
        });
    };

    // once successfully submitted, auto generate a join code, display it on screen
    // create an creator dashboard include join code, user list, 
    // add user search which will send invite links to users dashboard

    return(
        <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto space-y-4 bg-white/5 rounded-xl">
            <h1 className="text-2xl text-center font-bold">Create a Pool</h1>
            <div>
                <label className="block font-medium mb-1">Pool Name</label>
                <input 
                type="text"
                name="poolName"
                value={formData.poolName}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Join Code</label>
                <input 
                type="text"
                name="poolCode"
                value={formData.poolCode}
                onChange={handleChange}
                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            <div className="flex justify-between gap-4">
                <button
                type="submit"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
                >Submit</button>
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