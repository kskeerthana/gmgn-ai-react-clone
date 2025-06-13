
import React, { useState } from 'react';
import Header from '../components/Header';
import AuthModal from '../components/AuthModal';
import Navigation from '../components/Navigation';
import TokenCard from '../components/TokenCard';
import TradingView from '../components/TradingView';
import WalletView from '../components/WalletView';
import { Search, Filter, Settings, Menu, BarChart3 } from 'lucide-react';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [activeTab, setActiveTab] = useState('trenches');
  const [selectedToken, setSelectedToken] = useState<any>(null);
  const [showWallet, setShowWallet] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const mockTokens = [
    {
      name: 'SMCAT',
      symbol: 'SandMonkeyCat',
      avatar: '',
      address: '94ojY...ump',
      age: '6s',
      change1h: 1,
      change5m: 5,
      change1m: 0.1,
      volume: 'V $449.9',
      marketCap: 'MC $4K',
      holders: 4,
      transactions: 5,
    },
    {
      name: 'Alice',
      symbol: 'Alice Language Model',
      avatar: '',
      address: 'E1mVN...ump',
      age: '9s',
      change1h: 18,
      change5m: 3,
      change1m: -5,
      volume: 'V $2.8K',
      marketCap: 'MC $5.3K',
      holders: 5,
      transactions: 13,
    },
    {
      name: 'avine...',
      symbol: 'avinel',
      avatar: '',
      address: '25gmb...LFe',
      age: '11s',
      change1h: 0.8,
      change5m: 0.7,
      change1m: 2,
      volume: 'V $550.2',
      marketCap: 'MC $4K',
      holders: 2,
      transactions: 7,
    },
    {
      name: 'Dog S...',
      symbol: 'Dogs as Peaky Blinders',
      avatar: '',
      address: 'GEw2q...ump',
      age: '18s',
      change1h: 8.4,
      change5m: 7,
      change1m: 7,
      volume: 'V $342.4',
      marketCap: 'MC $4.5K',
      holders: 2,
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

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
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
      <Header 
        onSignUp={handleSignUp} 
        onLogIn={handleLogIn} 
        onWalletClick={handleWalletClick}
        isLoggedIn={isLoggedIn}
      />

      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {isLoggedIn && (
        <>
          {/* Desktop Controls Row */}
          <div className="hidden md:flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-primary text-base">🎯 Trenches</span>
                <button className="text-muted-foreground hover:text-foreground">▼</button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-sm">
                  <span>Customize</span>
                </button>
                <button className="flex items-center space-x-1 bg-muted px-3 py-1.5 rounded-lg text-sm">
                  <span>💎 Devs</span>
                </button>
                <button className="flex items-center space-x-1 bg-muted px-3 py-1.5 rounded-lg text-sm">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-1 bg-muted px-3 py-1.5 rounded-lg text-sm">
                  <BarChart3 className="w-4 h-4" />
                  <span>1</span>
                </button>
                <button className="flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-sm">
                  <span>⚡ Buy</span>
                </button>
                <button className="flex items-center space-x-1 bg-muted px-3 py-1.5 rounded-lg text-sm">
                  <span>≡ 0</span>
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">P1</span>
              <span className="text-sm">P2</span>
              <span className="text-sm">P3</span>
              <Settings className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden">
            <div className="flex items-center justify-between p-3 border-b border-border">
              <div className="flex items-center space-x-2">
                <span className="text-primary text-sm">🎯 Trenches</span>
                <button className="text-muted-foreground hover:text-foreground">▼</button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <button className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <Menu className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs">💎</span>
                  </button>
                  <button className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center space-x-2 bg-card border border-border rounded-lg px-2 py-1">
                  <BarChart3 className="w-3 h-3 text-primary" />
                  <span className="text-xs text-foreground">1</span>
                </div>
                <button className="flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-xs">
                  <span>⚡</span>
                </button>
                <div className="flex items-center space-x-1 bg-muted px-2 py-1 rounded-lg">
                  <span className="text-xs">≡ 0</span>
                </div>
                <span className="text-xs">P1 ▼</span>
                <Settings className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* New Creations Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-card/30 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-primary text-sm md:text-base">🌟 New Creations</span>
              <button className="text-muted-foreground hover:text-foreground">▼</button>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center space-x-2 bg-input rounded-lg px-3 py-2 flex-1 sm:flex-initial">
                <Search className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-xs md:text-sm text-foreground placeholder-muted-foreground outline-none flex-1 sm:w-auto"
                />
              </div>
              <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground">
                <Filter className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">Filter</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Token List */}
      <div className="p-3 md:p-4 space-y-3 md:space-y-4 pb-20 md:pb-4">
        {mockTokens.map((token, index) => (
          <div key={index} onClick={() => handleTokenClick(token)} className="cursor-pointer">
            <TokenCard {...token} />
          </div>
        ))}
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={handleSwitchAuthMode}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Index;
