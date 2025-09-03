'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const [isLoadingBracket, setIsLoadingBracket] = useState(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const router = useRouter();

  const handleLoginClick = async (e) => {
    setIsLoadingLogin(true);
    await router.push('/auth');
  };

  const handleBracketClick = async (e) => {
    setIsLoadingBracket(true);
    await router.push('/Submit');

    // await router.push('/Results');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify-center items-center sm:items-start">
        <div className="flex flex-col items-center justify-center p-10">
         <Image
          src="/BracketMadness_background.jpg"
          alt="Bracket Madness logo"
          width={640}
          height={400}
          priority
          className="max-w-full h-auto"
        />
          <div className="flex">

          <Link href="/Learn-More" target="_blank" rel="noopener noreferrer">
              <button
                className="rounded-full border border-solid border-white/[0.8] text-white transition-colors flex items-center justify-center hover:text-black hover:bg-[#f2f2f2] hover:border-transparent font-medium 
                w-40 h-10 mx-2
                sm:w-50 sm:h-12 sm:text-base"
                // onClick={handleLoginClick}
                disabled={isLoadingLogin}>
                  {isLoadingLogin ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Learn More'
                    // 'Log In / Sign Up'
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
                  'Explore App'
                  // 'Bracket'
                )}
            </button>
          </div>
        </div>

      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>footer</p>
      </footer> */}
    </div>
  );
}
