
import React from 'react';
import { Search, Copy, Settings } from 'lucide-react';

interface HeaderProps {
  onSignUp: () => void;
  onLogIn: () => void;
  onWalletClick?: () => void;
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSignUp, onLogIn, onWalletClick, isLoggedIn = false }) => {
  return (
    <header className="flex items-center justify-between p-3 md:p-4 bg-background border-b border-border">
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs md:text-sm">G</span>
          </div>
          <span className="text-primary font-semibold text-sm md:text-base">GMGN</span>
        </div>
        
        {/* Desktop Navigation - Always visible */}
        <div className="hidden md:flex items-center space-x-4 ml-8">
          <button className="text-foreground hover:text-primary text-sm">Trenches</button>
          <button className="text-muted-foreground hover:text-foreground text-sm">New pair</button>
          <button className="text-muted-foreground hover:text-foreground text-sm">Trending</button>
          <button className="text-muted-foreground hover:text-foreground text-sm">CopyTrade</button>
          <button className="text-muted-foreground hover:text-foreground text-sm">Monitor</button>
          <button className="text-muted-foreground hover:text-foreground text-sm">Follow</button>
          <button className="text-muted-foreground hover:text-foreground text-sm">Holding</button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-3">
        {isLoggedIn ? (
          <>
            <div className="hidden md:flex items-center space-x-3 bg-input rounded-lg px-3 py-1.5">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search token/contract/wallet"
                className="bg-transparent text-sm text-foreground placeholder-muted-foreground outline-none w-48"
              />
              <span className="text-xs text-muted-foreground">⌘K</span>
            </div>
            
            <Search className="w-4 h-4 md:hidden text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
            
            <button
              onClick={onWalletClick}
              className="flex items-center space-x-1 text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <span className="hidden md:inline">≡</span>
              <span>SOL</span>
              <span className="text-muted-foreground">▼</span>
            </button>
            
            <div className="flex items-center space-x-2 bg-card border border-border rounded-lg px-2 py-1">
              <Copy className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span className="text-xs md:text-sm text-primary font-medium">0</span>
            </div>
            
            <button className="w-6 h-6 md:w-8 md:h-8 bg-muted rounded-full flex items-center justify-center">
              <Settings className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onSignUp}
              className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sign Up
            </button>
            <button
              onClick={onLogIn}
              className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
