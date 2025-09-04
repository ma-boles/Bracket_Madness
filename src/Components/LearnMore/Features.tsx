import { Trophy, Users, Zap, TrendingUp } from 'lucide-react';

export default function Features() {
  return (
    <section className="mx-auto w-full flex justify-center text-center py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-6xl px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Better Experience. A Bigger Vision Ahead.</h2>
        <p className="text-gray-300 mb-12 text-lg">
          From casual picks to competitive matchups, our bracket tools are crafted for modern fans — with new game modes, community features, and new ways to play coming soon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex items-start gap-5">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Round Multipliers</h3>
              <p className="text-gray-300">
                Points rise through each round — climb the leaderboard with smart picks. 
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Underdog Bonuses</h3>
              <p className="text-gray-300">
                Bold picks. Big payoffs. The lower the seed, the higher the score.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-7">
            <Zap className="w-8 h-8 text-yellow-500" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Live Tournament Tracking</h3>
              <p className="text-gray-300">
                Brackets update automatically throughout game days, so you can stay on top of the action and your rank — no manual refresh needed.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="w-8 h-8 text-yellow-500" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Pool-Friendly</h3>
              <p className="text-gray-300">
                Compete with friends, coworkers, or your whole crew — no extra setup needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}