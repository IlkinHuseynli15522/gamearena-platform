import React, { useState } from 'react';
import { Trophy, Users, Calendar, DollarSign, GamepadIcon, Menu, X, ChevronRight, Star, Zap, Shield } from 'lucide-react';

export default function GameArena() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { name: 'Valorant', prize: '$5,000', players: '2,450', image: '🎯', color: 'from-red-500 to-pink-500' },
    { name: 'League of Legends', prize: '$10,000', players: '3,890', image: '⚔️', color: 'from-blue-500 to-cyan-500' },
    { name: 'CS:GO', prize: '$7,500', players: '4,120', image: '🔫', color: 'from-orange-500 to-yellow-500' },
    { name: 'Fortnite', prize: '$6,000', players: '5,230', image: '🏗️', color: 'from-purple-500 to-pink-500' },
    { name: 'Rocket League', prize: '$4,500', players: '1,890', image: '🚗', color: 'from-green-500 to-blue-500' },
    { name: 'Apex Legends', prize: '$5,500', players: '2,670', image: '🎮', color: 'from-red-600 to-orange-500' }
  ];

  const tournaments = [
    { name: 'Weekend Warriors', date: 'Oct 25-27', status: 'Registration Open', prize: '$2,500' },
    { name: 'Champions League', date: 'Nov 1-15', status: 'Coming Soon', prize: '$15,000' },
    { name: 'Pro Circuit Finals', date: 'Nov 20-22', status: 'Invite Only', prize: '$25,000' }
  ];

  const features = [
    { icon: Trophy, title: 'Real Prizes', desc: 'Cash rewards and exclusive gaming gear' },
    { icon: Users, title: 'Matchmaking', desc: 'Skill-based pairing for fair competition' },
    { icon: Shield, title: 'Anti-Cheat', desc: 'Secure platform with fraud detection' },
    { icon: Zap, title: 'Live Brackets', desc: 'Real-time tournament progression' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black bg-opacity-50 backdrop-blur-lg z-50 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GamepadIcon className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GameArena
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#tournaments" className="hover:text-purple-400 transition">Tournaments</a>
              <a href="#games" className="hover:text-purple-400 transition">Games</a>
              <a href="#prizes" className="hover:text-purple-400 transition">Prizes</a>
              <a href="#about" className="hover:text-purple-400 transition">About</a>
            </div>

            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 text-purple-400 border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition">
                Sign In
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition">
                Register
              </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 border-t border-purple-500/30">
            <div className="px-4 py-4 space-y-3">
              <a href="#tournaments" className="block hover:text-purple-400">Tournaments</a>
              <a href="#games" className="block hover:text-purple-400">Games</a>
              <a href="#prizes" className="block hover:text-purple-400">Prizes</a>
              <a href="#about" className="block hover:text-purple-400">About</a>
              <button className="w-full px-4 py-2 text-purple-400 border border-purple-400 rounded-lg">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                Register
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Compete. Win. Dominate.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the ultimate esports tournament platform. Play your favorite games, compete against the best, and win real cash prizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-105">
              Join Tournament
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-white transition">
              Watch Live
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">$2.5M+</div>
              <div className="text-gray-400 mt-2">Total Prizes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">50K+</div>
              <div className="text-gray-400 mt-2">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">1,200+</div>
              <div className="text-gray-400 mt-2">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">24/7</div>
              <div className="text-gray-400 mt-2">Live Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why GameArena?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center group hover:transform hover:scale-105 transition">
                <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Games Section */}
      <div id="games" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Games</h2>
          <p className="text-center text-gray-400 mb-16">Compete in the most popular esports titles</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {games.map((game, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500 transition cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedGame(game)}
              >
                <div className={`text-6xl mb-4 bg-gradient-to-br ${game.color} w-20 h-20 rounded-xl flex items-center justify-center`}>
                  {game.image}
                </div>
                <h3 className="text-2xl font-bold mb-3">{game.name}</h3>
                <div className="flex justify-between items-center text-gray-400 mb-2">
                  <span className="flex items-center gap-2">
                    <Trophy className="w-4 h-4" /> {game.prize}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" /> {game.players}
                  </span>
                </div>
                <button className="w-full mt-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition flex items-center justify-center gap-2">
                  Enter Tournament <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tournaments */}
      <div id="tournaments" className="py-20 bg-black bg-opacity-30 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Upcoming Tournaments</h2>
          
          <div className="space-y-4">
            {tournaments.map((tournament, idx) => (
              <div key={idx} className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500 transition">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500 rounded-lg p-3">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{tournament.name}</h3>
                      <p className="text-gray-400">{tournament.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Prize Pool</div>
                      <div className="text-2xl font-bold text-yellow-400">{tournament.prize}</div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      tournament.status === 'Registration Open' ? 'bg-green-500' :
                      tournament.status === 'Coming Soon' ? 'bg-blue-500' : 'bg-purple-500'
                    }`}>
                      {tournament.status}
                    </span>
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
          <Star className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of gamers competing for glory and prizes. Your next victory awaits.
          </p>
          <button className="px-10 py-4 bg-white text-purple-600 rounded-lg text-lg font-bold hover:bg-gray-100 transition transform hover:scale-105">
            Create Free Account
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/30 py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GamepadIcon className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-bold">GameArena</span>
            </div>
            <p className="text-gray-400">The premier esports tournament platform for competitive gamers worldwide.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <div className="space-y-2 text-gray-400">
              <div>Tournaments</div>
              <div>Games</div>
              <div>Leaderboards</div>
              <div>Live Streams</div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <div className="space-y-2 text-gray-400">
              <div>Help Center</div>
              <div>Rules</div>
              <div>Fair Play</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <div className="space-y-2 text-gray-400">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>Cookie Policy</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-purple-500/30 text-center text-gray-400">
          © 2025 GameArena. All rights reserved.
        </div>
      </footer>
    </div>
  );
}