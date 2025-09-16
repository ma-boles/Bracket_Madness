import Header from "../../Components/LearnMore/Header";
import Footer from "../../Components/LearnMore/Footer";
import Features from "../../Components/LearnMore/Features";

export default function Home() {
  return (
    <>
      <Header/>

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <section id="home" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-600/70 via-zinc-900 to-purple-950 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              The New Era of Play
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 italic">
              It starts with a bracket. It grows into a platform.
            </p>
            <a
              href="/Submit"
              className="inline-block bg-purple-600 font-semibold px-8 py-4 rounded-md text-lg hover:bg-purple-500 transition"
            >
              Launch Demo
            </a>
          </div>
        </section>

        <section id="features" className="w-full bg-white/5 text-center">
            <Features />
        </section>

        <section className="py-20 px-14 w-full bg-purple-950/90">
          <div className="max-w-3xl mx-auto text-left">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Bracket Madness?</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Women&apos;s sports — especially basketball — are experiencing unprecedented growth, with surging audience numbers, increased media coverage, rising sponsorships, and booming social engagement. Yet one major piece is still missing: interactive, fan-driven platforms like daily fantasy sports (DFS) and sports betting, which have taken off in men&apos;s sports but remain largely absent in the women&apos;s game.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Bracket Madness was created to fill that gap — providing a dynamic, engaging platform that not only celebrates the women&apos;s game but also fuels its continued growth by offering fans new ways to compete, connect, and play.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              To bring that vision to life, we started with a reimagined bracket experience. With bold scoring mechanics like underdog bonuses and round multipliers, every pick has weight — and every round keeps players engaged.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              And because fans live on their phones, Bracket Madness is built mobile-first for a smooth experience, whether you&apos;re at home or courtside.
            </p>
          </div>
        </section>

        <section id="demo" className="bg-white/10 w-full text-center py-20 px-6 md:px-14">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Demo Now Live</h2>
              <p className="text-lg text-gray-300 mb-10">
                Explore an early version of the Bracket Madness platform — a live preview of the bracket UI and design in action. 
                While features like live updates and pool creation aren&apos;t live yet, this demo offers a clear look at the foundation of what&apos;s coming.  
              </p>
            </div>
        </section>
      </main>

      <Footer />
     </>
  );
}