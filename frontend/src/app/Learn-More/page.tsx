import Header from "../../Components/LearnMore/Header";
import Footer from "../../Components/LearnMore/Footer";
import Features from "../../Components/LearnMore/Features";
import { LayoutDashboard } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header title="BracketMadness" />

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-8">
        <section id="home"  className="bg-black text-white py-24 px-14">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Your Bracket, Reimagined
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              A modern web app for tournament brackets — built for March Madness, flexible for any sport, and designed for competitors who like to play smart.
            </p>
            <a
              href="#demo"
              className="inline-block bg-blue-600 font-semibold px-8 py-4 rounded-md text-lg hover:bg-blue-500 transition"
            >
              View Demo
            </a>
          </div>
        </section>

        <section id="features" className="w-full bg-white/5 text-center px-8">
            <Features />
        </section>

        <section className="py-20 px-14 w-full bg-purple-950/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Bracket Madness?</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Traditional tournament brackets often lack flexibility, insight, and engagement — especially for competitive players and organizers.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Bracket Madness introduces a dynamic scoring system that rewards strategic underdog picks and multipliers that keep every round exciting.
              Built with a mobile-first mindset, it ensures smooth experiences whether on desktop or on the go.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Designed for sports fans, tournament organizers, and anyone who loves competition, it’s ready to power brackets for any sport or event.
            </p>
          </div>
        </section>

        <section id="demo" className="bg-white/5 w-full text-center py-20 px-14">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Demo Coming Soon</h2>
              <p className="text-lg text-gray-300 mb-10">
                The bracket experience is almost ready. You’ll be able to explore features, try the scoring system, and see how underdog picks stack up.
              </p>
              <div className="w-full h-[300px] border-4 border-white/50 rounded-lg flex items-center justify-center text-gray-500 text-xl">
                <LayoutDashboard className="w-12 h-12 mb-4" />
                <p className="text-lg font-medium text-white/70">Interactive bracket demo coming soon</p>
              </div>
            </div>
        </section>
      </main>

      <Footer />
     </>
  );
}