
import React from 'react';
import { ArrowLeft, RotateCcw, ArrowDownToLine, ArrowUpFromLine, Zap, GitBranch, Users } from 'lucide-react';

interface WalletViewProps {
  onClose: () => void;
}

const WalletView: React.FC<WalletViewProps> = ({ onClose }) => {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-3 md:p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-foreground font-semibold text-sm md:text-base">SOL Wallet</span>
            <span className="text-muted-foreground text-xs md:text-sm">Operation Log</span>
          </div>
        </div>
        <div className="flex space-x-2 md:space-x-3">
          <button className="px-3 py-1.5 md:px-4 md:py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-xs md:text-sm">
            Import
          </button>
          <button className="px-3 py-1.5 md:px-4 md:py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-xs md:text-sm">
            Create Wallet
          </button>
        </div>
      </div>

      <div className="p-3 md:p-4">
        {/* Wallet selector */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-foreground text-sm md:text-base">📁 W1 Wallet1</span>
            <span className="text-primary text-xs md:text-sm">Primary</span>
            <span className="text-muted-foreground text-xs">ZsZZX...6sz</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-foreground text-sm md:text-base">0 SOL</span>
            <button className="text-muted-foreground hover:text-foreground">
              ⋮
            </button>
          </div>
        </div>

        {/* Balance card */}
        <div className="bg-card rounded-xl p-4 md:p-6 mb-6 text-center">
          <div className="text-xs md:text-sm text-muted-foreground mb-2">📁 W1 Wallet1 Primary</div>
          <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">0 SOL</div>
          <div className="text-muted-foreground">~$0</div>
        </div>

        {/* Action buttons - Primary actions */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
          <div className="text-center">
            <button className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 hover:bg-primary/30 transition-colors">
              <ArrowDownToLine className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </button>
            <span className="text-xs md:text-sm text-muted-foreground">Deposit</span>
          </div>
          <div className="text-center">
            <button className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 hover:bg-primary/30 transition-colors">
              <ArrowUpFromLine className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </button>
            <span className="text-xs md:text-sm text-muted-foreground">Withdraw</span>
          </div>
          <div className="text-center">
            <button className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 hover:bg-primary/30 transition-colors">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </button>
            <span className="text-xs md:text-sm text-muted-foreground">Buy</span>
          </div>
        </div>

        {/* Secondary action buttons */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
          <div className="text-center">
            <button className="w-12 h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center mb-2 hover:bg-muted/80 transition-colors">
              <GitBranch className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
            </button>
            <span className="text-xs md:text-sm text-muted-foreground">Consolidate</span>
          </div>
          <div className="text-center">
            <button className="w-12 h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center mb-2 hover:bg-muted/80 transition-colors">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
            </button>
            <span className="text-xs md:text-sm text-muted-foreground">Distribute</span>
          </div>
        </div>

        {/* Activity section */}
        <div className="bg-card rounded-xl p-3 md:p-4">
          <h3 className="font-semibold text-foreground mb-4 text-sm md:text-base">Activity</h3>
          
          <div className="hidden md:flex items-center justify-between mb-4 text-xs md:text-sm text-muted-foreground">
            <div className="flex space-x-4">
              <button className="hover:text-foreground flex items-center space-x-1">
                <span>Maker</span>
                <span>📊</span>
              </button>
              <button className="hover:text-foreground">Type</button>
              <button className="hover:text-foreground">Token</button>
              <button className="hover:text-foreground">Total</button>
              <button className="hover:text-foreground flex items-center space-x-1">
                <span>USD</span>
                <span>💰</span>
              </button>
              <button className="hover:text-foreground">Amount</button>
              <button className="hover:text-foreground">Price</button>
            </div>
          </div>

          <div className="text-center text-muted-foreground py-8">
            <div className="mb-2">
              <div className="w-16 h-16 mx-auto bg-muted/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl">📊</span>
              </div>
            </div>
            <p className="text-sm">No activity yet</p>
            <p className="text-xs text-muted-foreground/60 mt-1">Your trading activity will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletView;
