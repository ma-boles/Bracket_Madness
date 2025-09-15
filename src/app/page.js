'use client'
import Link from "next/link";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { isDemo } from "@/config";
import AuthContext from "../context/AuthContext";


export default function Home() {
  const [isLoadingBracket, setIsLoadingBracket] = useState(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  const isUser = !!currentUser;

  const handleLoginClick = async (e) => {
    setIsLoadingLogin(true);
  };

  const handleBracketClick = async (e) => {
    setIsLoadingBracket(true);
    const exploreRoute = isDemo && isUser ? '/Submit' : '/Results' 
    
    await router.push(exploreRoute);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center items-center sm:items-start">
        <div className="flex flex-col items-center justify-center p-10">
          <div className="flex flex-col items-center text-center my-8">
              <span className="text-[12vw] font-anton font-extrabold leading-none transform scale-y-125">BRACKET</span>
              <span className="w-[40%] border-t-4 my-2"></span>
              <span className="text-[12vw] font-light font-oswald leading-none transform scale-y-125">MADNESS</span>
          </div>

          <div className="flex">

          <Link href={ isDemo ? '/Learn-More' : '/auth' } target="_blank" rel="noopener noreferrer">
              <button
                className="rounded-full border border-solid border-white/[0.8] text-white transition-colors flex items-center justify-center hover:text-black hover:bg-[#f2f2f2] hover:border-transparent font-medium 
                w-40 h-10 mx-2
                sm:w-50 sm:h-12 sm:text-base"
                onClick={handleLoginClick}
                disabled={isLoadingLogin}>
                  {isLoadingLogin ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    isDemo ? 'Learn More' : 'Log In  / Sign Up'
                  )}
              </button>
          </Link>

            <button
              className="rounded-full border border-solid border-white/[0.8] text-white transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:text-black hover:border-transparent font-medium 
              w-40 h-10 mx-2
              sm:w-50 sm:h-12 sm:text-base"
              onClick={handleBracketClick}
              disabled={isLoadingBracket}>
                {isLoadingBracket ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  isDemo && isUser ? 'Explore Demo' : 'Bracket'
                )}
            </button>
          </div>
        </div>
      </main>

      <footer className="py-4 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} BracketMadness. All rights reserved.
      </footer>
    </div>
  );
}
