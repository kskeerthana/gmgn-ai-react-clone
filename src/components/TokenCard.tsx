
import React from 'react';

interface TokenCardProps {
  name: string;
  symbol: string;
  avatar: string;
  address: string;
  age: string;
  change1h: number;
  change5m: number;
  change1m: number;
  volume: string;
  marketCap: string;
  holders: number;
  transactions: number;
}

const TokenCard: React.FC<TokenCardProps> = ({
  name,
  symbol,
  avatar,
  address,
  age,
  change1h,
  change5m,
  change1m,
  volume,
  marketCap,
  holders,
  transactions,
}) => {
  const formatChange = (change: number) => {
    const isPositive = change > 0;
    return (
      <span className={isPositive ? 'text-primary' : 'text-destructive'}>
        {isPositive ? '+' : ''}{change.toFixed(1)}%
      </span>
    );
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
              {symbol.charAt(0)}
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-foreground">{name}</h3>
              <span className="text-sm text-muted-foreground">{symbol}</span>
            </div>
            <p className="text-xs text-muted-foreground">{age}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
            <span>👥 {holders}</span>
            <span>📊 {transactions}</span>
          </div>
          <button className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
            <span className="text-primary text-lg">⚡</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm mb-3">
        <div className="flex space-x-4">
          <div>
            <span className="text-muted-foreground">1h: </span>
            {formatChange(change1h)}
          </div>
          <div>
            <span className="text-muted-foreground">5m: </span>
            {formatChange(change5m)}
          </div>
          <div>
            <span className="text-muted-foreground">1m: </span>
            {formatChange(change1m)}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>💰 {volume}</span>
        <span>📈 MC {marketCap}</span>
      </div>
    </div>
  );
};

export default TokenCard;
