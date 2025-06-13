
import React from 'react';

interface WalletViewProps {
  onClose: () => void;
}

const WalletView: React.FC<WalletViewProps> = ({ onClose }) => {
  return (
    <div className="bg-background min-h-screen">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            ←
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-foreground font-semibold">SOL Wallet</span>
            <span className="text-muted-foreground text-sm">Operation Log</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors">
            Import
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Create Wallet
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-foreground">📁 W1 Wallet1</span>
            <span className="text-primary text-sm">Primary</span>
            <span className="text-muted-foreground text-xs">ZsZZX...6sz</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-foreground">0 SOL</span>
            <button className="text-muted-foreground hover:text-foreground">
              ⋮
            </button>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 mb-6 text-center">
          <div className="text-sm text-muted-foreground mb-2">📁 W1 Wallet1 Primary</div>
          <div className="text-4xl font-bold text-foreground mb-2">0 SOL</div>
          <div className="text-muted-foreground">~$0</div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <button className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 hover:bg-primary/30 transition-colors">
              <span className="text-primary text-xl">🔄</span>
            </button>
            <span className="text-sm text-muted-foreground">Deposit</span>
          </div>
          <div className="text-center">
            <button className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 hover:bg-primary/30 transition-colors">
              <span className="text-primary text-xl">🔄</span>
            </button>
            <span className="text-sm text-muted-foreground">Withdraw</span>
          </div>
          <div className="text-center">
            <button className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 hover:bg-primary/30 transition-colors">
              <span className="text-primary text-xl">🔄</span>
            </button>
            <span className="text-sm text-muted-foreground">Buy</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <button className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-2 hover:bg-muted/80 transition-colors">
              <span className="text-muted-foreground text-xl">🔗</span>
            </button>
            <span className="text-sm text-muted-foreground">Consolidate</span>
          </div>
          <div className="text-center">
            <button className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-2 hover:bg-muted/80 transition-colors">
              <span className="text-muted-foreground text-xl">🔄</span>
            </button>
            <span className="text-sm text-muted-foreground">Distribute</span>
          </div>
        </div>

        <div className="bg-card rounded-xl p-4">
          <h3 className="font-semibold text-foreground mb-4">Activity</h3>
          
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <div className="flex space-x-4">
              <button className="hover:text-foreground">Maker 📊</button>
              <button className="hover:text-foreground">Type</button>
              <button className="hover:text-foreground">Token</button>
              <button className="hover:text-foreground">Total</button>
              <button className="hover:text-foreground">USD 💰</button>
              <button className="hover:text-foreground">Amount</button>
              <button className="hover:text-foreground">Price</button>
            </div>
          </div>

          <div className="text-center text-muted-foreground py-8">
            <p>No activity yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletView;
