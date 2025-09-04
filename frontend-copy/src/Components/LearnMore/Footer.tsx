import { Github, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-purple-950/30 to-zinc-900
 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Get in the Game</h2>
        <p className="text-gray-400 text-lg">
          Built for fans. Powered by play. Made to grow the women&apos;s game.
        </p>
        <a
          href="/Submit"
          className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-500 transition"
        >
          Launch Demo
        </a>
        <p className="mt-4 italic text-gray-400 text-md">
          More coming soon. We&apos;re just getting started.
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <a href="https://github.com/ma-boles" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
          <a href="https://linkedin.com/in/mary-boles" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BracketMadness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}