'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CreateForm from "../forms/CreateForm";
import SuccessModal from "./SuccessModal";

export default function CreateSlide () {
        const [modalOpen, setModalOpen] = useState(true);
        const [createdPool, setCreatedPool] = useState({ name: "", code: ""});
        const router = useRouter();
        
        return (
                <div className="py-18 px-12 bg-black/60 rounded-xl">
                    <CreateForm 
                        onSuccess={(pool) => {
                                setCreatedPool(pool)
                                setModalOpen(true);
                        }}/>

                    <SuccessModal 
                        isOpen={modalOpen}
                        onClose={() => setModalOpen(false)}
                        poolName={createdPool.name}
                        inviteCode={createdPool.code}
                        onRedirect={() => router.push('/admin/dashboard')}/>
                </div>
        )
}