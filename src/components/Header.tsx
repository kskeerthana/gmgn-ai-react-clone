
import React from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  onSignUp: () => void;
  onLogIn: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignUp, onLogIn }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-background border-b border-border">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">G</span>
          </div>
          <span className="text-primary font-semibold">SOL</span>
        </div>
        <Search className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
      </div>
      
      <div className="flex items-center space-x-3">
        <button
          onClick={onSignUp}
          className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          Sign Up
        </button>
        <button
          onClick={onLogIn}
          className="px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
        >
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
