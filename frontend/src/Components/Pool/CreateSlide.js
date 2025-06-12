'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CreateForm from "../forms/CreateForm";
import SuccessModal from "./SuccessModal";

export default function CreateSlide ({ slideIndex, setSlideIndex }) {
        const [modalOpen, setModalOpen] = useState(false);
        const [createdPool, setCreatedPool] = useState({ name: "", code: ""});
        const router = useRouter();
        
        return (
                <div>
                        

                <div className="md:py-18 px-12 md:bg-black/60 rounded-xl">
                        {modalOpen ? (
                        <SuccessModal 
                                isOpen={modalOpen}
                                onClose={() => setModalOpen(false)}
                                poolName={createdPool.name}
                                inviteCode={createdPool.code}
                                onRedirect={() => router.push('/Dashboard')}/>
                        ):(
                                <CreateForm 
                                onSuccess={(pool) => {
                                        setCreatedPool(pool)
                                        setModalOpen(true);
                                }}/>
                        )}
                </div>

                <div className="flex justify-end px-12 pt-4">
                        {slideIndex !== 1 && (
                                <div className="md:hidden flex justify-center">
                                        <button className="bg-white/10 text-white font-bold py-2 rounded-lg w-22 hover:text-black hover:bg-white"
                                        onClick={() => setSlideIndex(1)}>
                                        Back
                                        </button>
                                </div>
                        )}
                        </div>
                </div>
        )
}