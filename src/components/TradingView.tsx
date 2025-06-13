
import React from 'react';

interface TradingViewProps {
  tokenName: string;
  tokenSymbol: string;
  price: string;
  change24h: number;
  onClose: () => void;
}

const TradingView: React.FC<TradingViewProps> = ({
  tokenName,
  tokenSymbol,
  price,
  change24h,
  onClose,
}) => {
  const isPositive = change24h > 0;

  return (
    <div className="bg-background min-h-screen">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            ←
          </button>
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">{tokenSymbol.charAt(0)}</span>
          </div>
          <div>
            <h2 className="font-semibold text-foreground">{tokenName}</h2>
            <p className="text-xs text-muted-foreground">{tokenSymbol}</p>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          📤
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-primary">{price}</div>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-muted-foreground">Name ✓ CA ≡</span>
              <span className="text-primary">● 20/70</span>
              <span className="text-muted-foreground">🔥 0%</span>
              <span className="text-primary">✓✓✓ ✗</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-2 mb-4 text-xs">
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">1m +64.73%</span>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">5m +67.97%</span>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">1h +67.97%</span>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">24h +67.97%</span>
        </div>

        <div className="flex justify-center items-center mb-4">
          <div className="text-6xl font-bold text-muted-foreground/20">GMGN.AI</div>
        </div>

        <div className="bg-card rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4 text-xs">
              <button className="text-foreground">1S</button>
              <button className="text-foreground">15S</button>
              <button className="text-foreground">30S</button>
              <button className="text-foreground">1m</button>
              <button className="text-foreground">5m</button>
              <button className="text-foreground">15m</button>
              <button className="text-primary font-medium">1h ∨</button>
            </div>
            <div className="flex space-x-2">
              <button className="text-muted-foreground">📊</button>
              <button className="text-muted-foreground">Price/MC</button>
            </div>
          </div>
          
          <div className="text-right text-sm text-muted-foreground mb-2">
            <div>0.034025</div>
            <div className="text-primary">0.034025</div>
            <div>0.030000</div>
            <div>0.025000</div>
            <div className="bg-primary/20 text-primary px-2">27.68K Orders</div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 mb-6">
          <button className="text-muted-foreground hover:text-foreground">🎯</button>
          <span className="text-muted-foreground">00:0</span>
          <button className="text-muted-foreground hover:text-foreground">🔄</button>
        </div>

        <div className="bg-card rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Activity</h3>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Holders 115 💎 0.01% 👥</span>
            </div>
          </div>

          <div className="flex space-x-4 mb-4 text-sm">
            <button className="text-foreground">All</button>
            <button className="text-muted-foreground">Smart</button>
            <button className="text-muted-foreground">KOL/VC 2</button>
            <button className="text-muted-foreground">Following</button>
            <button className="text-muted-foreground">Remarks</button>
            <button className="text-muted-foreground">DEV</button>
            <button className="text-muted-foreground">Wash</button>
          </div>

          <div className="space-y-3">
            {[
              { type: 'Sell', amount: '$6.56', time: '0s', emoji: '📉💎' },
              { type: 'Buy', amount: '$11.01', time: '0s', emoji: '💰' },
              { type: 'Sell', amount: '$12.06', time: '1s', emoji: '📉💎' },
              { type: 'Buy', amount: '$1.62', time: '1s', emoji: '📉💎' },
              { type: 'Sell', amount: '$11.58', time: '1s', emoji: '📉💎' },
              { type: 'Buy', amount: '$7.78', time: '1s', emoji: '💰' },
            ].map((trade, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-muted-foreground">{trade.time}</span>
                  <span className={`text-sm font-medium ${
                    trade.type === 'Buy' ? 'text-primary' : 'text-destructive'
                  }`}>
                    {trade.type}
                  </span>
                  <span className="text-sm text-foreground">{trade.amount}</span>
                  <span className="text-xs">{trade.emoji}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <button className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-1">
              <span className="text-primary">⚡</span>
            </button>
            <span className="text-xs text-muted-foreground">Buy</span>
          </div>
          <div className="text-center">
            <button className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-1">
              <span className="text-muted-foreground">📊</span>
            </button>
            <span className="text-xs text-muted-foreground">Sell</span>
          </div>
          <div className="text-center">
            <button className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-1">
              <span className="text-muted-foreground">ℹ️</span>
            </button>
            <span className="text-xs text-muted-foreground">Info</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingView;
