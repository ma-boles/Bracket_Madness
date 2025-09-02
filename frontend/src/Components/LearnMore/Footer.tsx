import { Github, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to Run Your Bracket?</h2>
        <p className="text-gray-400 text-lg">
          Built for March Madness, flexible for any sports tournament.
        </p>
        <a
          href="/Submit"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-500 hover:text-black  transition"
        >
          Explore App
        </a>

        <div className="flex justify-center gap-6 mt-10">
          <a href="https://github.com/ma-boles" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-blue-400 transition" />
          </a>
          <a href="https://linkedin.com/in/mary-boles" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-400 transition" />
          </a>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BracketMadness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}