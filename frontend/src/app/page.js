require('dotenv').config();
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-black items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="items-center sm:items-start">
        <div className="flex flex-col items-center justify-center p-10">
         <Image
          src="/BracketMadness_background.jpg"
          alt="Bracket Madness logo"
          width={640}
          height={400}
          priority
        />
          <div className="flex">

            <Link href="/auth"
              className="
              rounded-full border border-solid border-white/[0.8] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium w-50 h-12 mx-2">
              Log In / Sign Up
            </Link>

            <Link href="/Results"
              className="
              rounded-full border border-solid border-white/[0.8] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium w-50 h-12 mx-2">
              Bracket
            </Link>
          </div>
        </div>

      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>footer</p>
      </footer> */}
    </div>
  );
}
