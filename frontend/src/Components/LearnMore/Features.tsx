import { Trophy, Users, Zap, TrendingUp } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Bracket Fans</h2>
        <p className="text-gray-300 mb-12 text-lg">
          Thoughtfully designed for both casual players and competitive bracketologists.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex items-start gap-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Round Multipliers</h3>
              <p className="text-gray-300">
                Points increase with each round — pick wisely in the later stages.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Underdog Bonuses</h3>
              <p className="text-gray-300">
                Get rewarded for bold picks. The lower the seed, the higher the reward.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Zap className="w-8 h-8 text-yellow-500" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Real-Time Scoring</h3>
              <p className="text-gray-300">
                Brackets update as games finish. Track your rank instantly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="w-8 h-8 text-yellow-500" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Pool-Friendly</h3>
              <p className="text-gray-300">
                Share brackets and compete in groups with friends or co-workers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}