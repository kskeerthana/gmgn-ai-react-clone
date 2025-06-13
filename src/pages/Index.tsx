
import React, { useState } from 'react';
import Header from '../components/Header';
import AuthModal from '../components/AuthModal';
import Navigation from '../components/Navigation';
import TokenCard from '../components/TokenCard';
import TradingView from '../components/TradingView';
import WalletView from '../components/WalletView';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [activeTab, setActiveTab] = useState('trenches');
  const [selectedToken, setSelectedToken] = useState<any>(null);
  const [showWallet, setShowWallet] = useState(false);

  const mockTokens = [
    {
      name: 'Osama Bin Llama',
      symbol: 'Bin L...',
      avatar: '',
      address: 'GiQso...ump',
      age: '2s',
      change1h: 8.3,
      change5m: 3,
      change1m: 3,
      volume: 'V $282.9',
      marketCap: 'MC $4.4K',
      holders: 3,
      transactions: 2,
    },
    {
      name: 'Cat Strike',
      symbol: 'STRIK...',
      avatar: '',
      address: 'BXoKq...UPb',
      age: '4s',
      change1h: 2.1,
      change5m: -5,
      change1m: 26,
      volume: 'V $70.7',
      marketCap: 'MC $4K',
      holders: 2,
      transactions: 1,
    },
    {
      name: 'Grib',
      symbol: 'GRIB',
      avatar: '',
      address: 'HVyAm...ump',
      age: '9s',
      change1h: 23.5,
      change5m: 19,
      change1m: 10,
      volume: 'V $1.3K',
      marketCap: 'MC $5.9K',
      holders: 9,
      transactions: 15,
    },
    {
      name: 'MOON AURA',
      symbol: 'LUNAR',
      avatar: '',
      address: '7PkSF...rTT',
      age: '11s',
      change1h: 0,
      change5m: 0,
      change1m: 0,
      volume: 'V $2.45',
      marketCap: 'MC $11.4K',
      holders: 7,
      transactions: 3,
    },
  ];

  const handleSignUp = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleLogIn = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleSwitchAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };

  const handleTokenClick = (token: any) => {
    setSelectedToken(token);
  };

  const handleWalletClick = () => {
    setShowWallet(true);
  };

  if (showWallet) {
    return <WalletView onClose={() => setShowWallet(false)} />;
  }

  if (selectedToken) {
    return (
      <TradingView
        tokenName={selectedToken.name}
        tokenSymbol={selectedToken.symbol}
        price="$0.034025"
        change24h={67.97}
        onClose={() => setSelectedToken(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onSignUp={handleSignUp} onLogIn={handleLogIn} />

      {/* Alert Banner */}
      <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">⚠️</span>
            <span className="text-yellow-200">
              To experience the full features of the GMGN app, please download it from the Google Play
            </span>
          </div>
          <button className="text-yellow-500 hover:text-yellow-400">✕</button>
        </div>
      </div>

      {/* Secondary Alert */}
      <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-3 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">⚠️</span>
            <span className="text-yellow-200">
              SnipeX & X Tracker are unavailable for upgrades. Will resurge soon.
            </span>
          </div>
          <button className="text-yellow-500 hover:text-yellow-400">✕</button>
        </div>
      </div>

      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Trenches Controls */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <span className="text-primary">🎯 Trenches</span>
          <button className="text-muted-foreground hover:text-foreground">▼</button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-muted rounded flex items-center justify-center">
              <span className="text-xs">☰</span>
            </button>
            <button className="w-8 h-8 bg-muted rounded flex items-center justify-center">
              <span className="text-xs">🏠</span>
            </button>
            <button className="w-8 h-8 bg-muted rounded flex items-center justify-center">
              <span className="text-xs">📊</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-primary">⚡ 0</span>
            <button onClick={handleWalletClick} className="text-muted-foreground hover:text-foreground">
              P1 ▼
            </button>
            <button className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <span className="text-xs">⚙️</span>
            </button>
          </div>
        </div>
      </div>

      {/* New Creations Filter */}
      <div className="flex items-center justify-between p-4 bg-card/50">
        <div className="flex items-center space-x-2">
          <span className="text-primary">🌟 New Creations</span>
          <button className="text-muted-foreground hover:text-foreground">▼</button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-muted rounded-lg px-3 py-1">
            <span className="text-muted-foreground">🔍</span>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm text-foreground placeholder-muted-foreground outline-none"
            />
          </div>
          <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground">
            <span>📊</span>
            <span className="text-sm">Filter</span>
          </button>
        </div>
      </div>

      {/* Token List */}
      <div className="p-4 space-y-4">
        {mockTokens.map((token, index) => (
          <div key={index} onClick={() => handleTokenClick(token)}>
            <TokenCard {...token} />
          </div>
        ))}
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={handleSwitchAuthMode}
      />
    </div>
  );
};

export default Index;
