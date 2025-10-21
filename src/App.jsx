import React, { useState, useEffect } from 'react';
import { Trophy, Users, Calendar, Gamepad2, Menu, X, ChevronRight, Star, Zap, Shield, Bell, Search, Award, Clock, Gift, PlayCircle, Crown, Target, Eye, User, LogOut, Settings, DollarSign, Heart, Share2, CheckCircle, Video } from 'lucide-react';

export default function GameArena() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showGameModal, setShowGameModal] = useState(false);
  const [showTournamentModal, setShowTournamentModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [countdown, setCountdown] = useState(86400);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 86400);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const games = [
    { id: 1, name: 'Valorant', prize: '$5,000', players: '2,450', image: '🎯', color: 'from-red-500 to-pink-500', status: 'Open', entryFee: '$10' },
    { id: 2, name: 'League of Legends', prize: '$10,000', players: '3,890', image: '⚔️', color: 'from-blue-500 to-cyan-500', status: 'Open', entryFee: '$15' },
    { id: 3, name: 'CS:GO', prize: '$7,500', players: '4,120', image: '🔫', color: 'from-orange-500 to-yellow-500', status: 'Open', entryFee: '$12' },
    { id: 4, name: 'Fortnite', prize: '$6,000', players: '5,230', image: '🏗️', color: 'from-purple-500 to-pink-500', status: 'Full', entryFee: '$8' },
    { id: 5, name: 'Rocket League', prize: '$4,500', players: '1,890', image: '🚗', color: 'from-green-500 to-blue-500', status: 'Open', entryFee: '$10' },
    { id: 6, name: 'Apex Legends', prize: '$5,500', players: '2,670', image: '🎮', color: 'from-red-600 to-orange-500', status: 'Open', entryFee: '$10' }
  ];

  const tournaments = [
    { id: 1, name: 'Weekend Warriors', date: 'Oct 25-27', status: 'Registration Open', prize: '$2,500', participants: '128/256', game: 'Valorant' },
    { id: 2, name: 'Champions League', date: 'Nov 1-15', status: 'Coming Soon', prize: '$15,000', participants: '0/512', game: 'League of Legends' },
    { id: 3, name: 'Pro Circuit Finals', date: 'Nov 20-22', status: 'Invite Only', prize: '$25,000', participants: '16/32', game: 'CS:GO' }
  ];

  const filteredGames = games.filter(game => 
    game.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (activeTab === 'all' || (activeTab === 'open' && game.status === 'Open'))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full border border-purple-500/30">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Welcome Back</h2>
              <button onClick={() => setShowLoginModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setShowLoginModal(false); }} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-purple-500/30 focus:border-purple-500 focus:outline-none" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Password</label>
                <input type="password" className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-purple-500/30 focus:border-purple-500 focus:outline-none" placeholder="••••••••" required />
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition font-semibold">
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}

      {showRegisterModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full border border-purple-500/30">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Create Account</h2>
              <button onClick={() => setShowRegisterModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setShowRegisterModal(false); }} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Username</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-purple-500/30 focus:border-purple-500 focus:outline-none" placeholder="ProGamer123" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-purple-500/30 focus:border-purple-500 focus:outline-none" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Password</label>
                <input type="password" className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-purple-500/30 focus:border-purple-500 focus:outline-none" placeholder="••••••••" required />
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition font-semibold">
                Create Account
              </button>
            </form>
          </div>
        </div>
      )}

      {showGameModal && selectedGame && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-2xl w-full border border-purple-500/30 my-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className={`text-6xl bg-gradient-to-br ${selectedGame.color} w-20 h-20 rounded-xl flex items-center justify-center`}>
                  {selectedGame.image}
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{selectedGame.name}</h2>
                  <p className="text-gray-400">Competitive Tournament</p>
                </div>
              </div>
              <button onClick={() => setShowGameModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-black/40 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Prize Pool</div>
                <div className="text-2xl font-bold text-yellow-400">{selectedGame.prize}</div>
              </div>
              <div className="bg-black/40 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Active Players</div>
                <div className="text-2xl font-bold text-purple-400">{selectedGame.players}</div>
              </div>
              <div className="bg-black/40 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Entry Fee</div>
                <div className="text-2xl font-bold text-green-400">{selectedGame.entryFee}</div>
              </div>
              <div className="bg-black/40 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Status</div>
                <div className={`text-lg font-bold ${selectedGame.status === 'Open' ? 'text-green-400' : 'text-red-400'}`}>{selectedGame.status}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Tournament Rules</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>All players must be registered 30 minutes before start</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>No cheating or hacking - instant disqualification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Screenshots required for match results</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => { setShowGameModal(false); if(!isLoggedIn) setShowRegisterModal(true); }}
                className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition font-semibold"
                disabled={selectedGame.status === 'Full'}
              >
                {selectedGame.status === 'Full' ? 'Tournament Full' : 'Enter Tournament'}
              </button>
              <button className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500/20 transition">
                <Heart className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500/20 transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {showTournamentModal && selectedTournament && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-3xl w-full border border-purple-500/30 my-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedTournament.name}</h2>
                <p className="text-gray-400">{selectedTournament.game} Tournament</p>
              </div>
              <button onClick={() => setShowTournamentModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-black/40 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Prize Pool</div>
                <div className="text-2xl font-bold text-yellow-400">{selectedTournament.prize}</div>
              </div>
              <div className="bg-black/40 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Participants</div>
                <div className="text-2xl font-bold text-purple-400">{selectedTournament.participants}</div>
              </div>
              <div className="bg-black/40 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Dates</div>
                <div className="text-xl font-bold text-blue-400">{selectedTournament.date}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Prize Distribution</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
                  <span className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-yellow-400" />
                    1st Place
                  </span>
                  <span className="font-bold text-yellow-400">50%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-lg border border-gray-500/30">
                  <span className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-gray-400" />
                    2nd Place
                  </span>
                  <span className="font-bold text-gray-400">30%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg border border-orange-600/30">
                  <span className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-orange-600" />
                    3rd Place
                  </span>
                  <span className="font-bold text-orange-600">20%</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => { setShowTournamentModal(false); if(!isLoggedIn) setShowRegisterModal(true); }}
                className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition font-semibold"
              >
                {selectedTournament.status === 'Invite Only' ? 'Request Invitation' : 'Register Now'}
              </button>
              <button className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500/20 transition">
                <Video className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500/20 transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="fixed w-full bg-black bg-opacity-50 backdrop-blur-lg z-40 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GameArena
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#tournaments" className="hover:text-purple-400 transition">Tournaments</a>
              <a href="#games" className="hover:text-purple-400 transition">Games</a>
              <a href="#leaderboard" className="hover:text-purple-400 transition">Leaderboard</a>
              <a href="#live" className="hover:text-purple-400 transition flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                Live
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="relative p-2 hover:bg-purple-500/20 rounded-lg transition">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
              </button>

              {isLoggedIn ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition"
                  >
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg border border-purple-500/30 shadow-xl">
                      <div className="p-2">
                        <button className="w-full px-4 py-2 text-left hover:bg-purple-500/20 rounded-lg transition flex items-center gap-2">
                          <User className="w-4 h-4" />
                          My Profile
                        </button>
                        <button className="w-full px-4 py-2 text-left hover:bg-purple-500/20 rounded-lg transition flex items-center gap-2">
                          <Trophy className="w-4 h-4" />
                          Tournaments
                        </button>
                        <button className="w-full px-4 py-2 text-left hover:bg-purple-500/20 rounded-lg transition flex items-center gap-2">
                          <Settings className="w-4 h-4" />
                          Settings
                        </button>
                        <div className="border-t border-purple-500/30 my-2"></div>
                        <button 
                          onClick={() => { setIsLoggedIn(false); setShowUserMenu(false); }}
                          className="w-full px-4 py-2 text-left hover:bg-red-500/20 rounded-lg transition flex items-center gap-2 text-red-400"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => setShowLoginModal(true)}
                    className="px-4 py-2 text-purple-400 border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={() => setShowRegisterModal(true)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition"
                  >
                    Register
                  </button>
                </>
              )}
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Compete. Win. Dominate.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join the ultimate esports tournament platform and win real prizes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => isLoggedIn ? null : setShowRegisterModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5" />
              {isLoggedIn ? 'Browse Tournaments' : 'Get Started Free'}
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-white transition">
              Watch Live Matches
            </button>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-6 rounded-xl border border-purple-500/50 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Next Tournament</h3>
                <p className="text-gray-300">Weekend Warriors Championship</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{formatTime(countdown)}</div>
                  <div className="text-xs text-gray-400">Time Remaining</div>
                </div>
                <button 
                  onClick={() => isLoggedIn ? null : setShowRegisterModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition whitespace-nowrap font-semibold"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why GameArena?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition cursor-pointer">
              <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Prizes</h3>
              <p className="text-gray-400">Cash rewards and exclusive gaming gear</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition cursor-pointer">
              <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Matchmaking</h3>
              <p className="text-gray-400">Skill-based pairing for fair competition</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition cursor-pointer">
              <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Anti-Cheat</h3>
              <p className="text-gray-400">Secure platform with fraud detection</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition cursor-pointer">
              <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Brackets</h3>
              <p className="text-gray-400">Real-time tournament progression</p>
            </div>
          </div>
        </div>
      </div>

      <div id="games" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Games</h2>
          <p className="text-center text-gray-400 mb-8">Compete in the most popular esports titles</p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 rounded-lg border border-purple-500/30 focus:border-purple-500 focus:outline-none text-white"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-3 rounded-lg transition ${activeTab === 'all' ? 'bg-purple-500' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                All Games
              </button>
              <button
                onClick={() => setActiveTab('open')}
                className={`px-4 py-3 rounded-lg transition ${activeTab === 'open' ? 'bg-purple-500' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                Open
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <div 
                key={game.id}
                onClick={() => { setSelectedGame(game); setShowGameModal(true); }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500 transition cursor-pointer transform hover:scale-105"
              >
                <div className={`text-6xl mb-4 bg-gradient-to-br ${game.color} w-20 h-20 rounded-xl flex items-center justify-center`}>
                  {game.image}
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold">{game.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${game.status === 'Open' ? 'bg-green-500' : 'bg-gray-500'}`}>
                    {game.status}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-gray-400 text-sm">
                    <span className="flex items-center gap-2">
                      <Trophy className="w-4 h-4" /> Prize Pool
                    </span>
                    <span className="text-yellow-400 font-semibold">{game.prize}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400 text-sm">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" /> Players
                    </span>
                    <span className="text-white">{game.players}</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition flex items-center justify-center gap-2">
                  View Details <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="tournaments" className="py-20 bg-black/30 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Tournaments</h2>
          
          <div className="space-y-4">
            {tournaments.map((tournament) => (
              <div 
                key={tournament.id}
                onClick={() => { setSelectedTournament(tournament); setShowTournamentModal(true); }}
                className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500 transition cursor-pointer transform hover:scale-[1.02]"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="bg-purple-500 rounded-lg p-3">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{tournament.name}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {tournament.date}
                        </span>
                        <span>• {tournament.game}</span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" /> {tournament.participants}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Prize Pool</div>
                      <div className="text-3xl font-bold text-yellow-400">{tournament.prize}</div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                      tournament.status === 'Registration Open' ? 'bg-green-500' :
                      tournament.status === 'Coming Soon' ? 'bg-blue-500' : 'bg-purple-500'
                    }`}>
                      {tournament.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
          <Star className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of gamers competing for glory and prizes. Your next victory awaits.
          </p>
          <button 
            onClick={() => setShowRegisterModal(true)}
            className="px-10 py-4 bg-white text-purple-600 rounded-lg text-lg font-bold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Create Free Account
          </button>
        </div>
      </div>

      <footer className="bg-black border-t border-purple-500/30 py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="w-6 h-6 text-purple-400" />
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