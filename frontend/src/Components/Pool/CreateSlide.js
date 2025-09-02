'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CreateForm from "../forms/CreateForm";
import SuccessModal from "./SuccessModal";
import FeatureGate from "./FeatureGate";

export default function CreateSlide ({ isUser }) {
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
                                        <FeatureGate isUser={isUser}>
                                                <CreateForm 
                                                        onSuccess={(pool) => {
                                                        setCreatedPool(pool)
                                                        setModalOpen(true);
                                        }}/>
                                        </FeatureGate>
                                        // <CreateForm 
                                        // isUser={isUser}
                                        // onSuccess={(pool) => {
                                        //         setCreatedPool(pool)
                                        //         setModalOpen(true);
                                        // }}/>
                                )}
                        </div>
                </div>
        )
}