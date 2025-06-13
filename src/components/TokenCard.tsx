
import React from 'react';
import { Copy, ExternalLink, BarChart3 } from 'lucide-react';

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
    <div className="bg-card border border-border rounded-xl p-3 md:p-4 hover:border-primary/50 transition-colors cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-muted">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                {symbol.charAt(0)}
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-foreground text-sm md:text-base">{name}</h3>
              <span className="text-xs text-muted-foreground">{symbol}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span>{age}</span>
              <span>{address}</span>
              <Copy className="w-3 h-3 cursor-pointer hover:text-foreground" />
              <ExternalLink className="w-3 h-3 cursor-pointer hover:text-foreground" />
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors">
          <span className="text-primary text-lg">⚡</span>
        </button>
      </div>

      <div className="flex items-center justify-between text-xs mb-3">
        <div className="flex items-center space-x-4">
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
        <div className="flex items-center space-x-2">
          <span className="text-muted-foreground">👥 {holders}</span>
          <span className="text-muted-foreground">📊 {transactions}</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center space-x-4">
          <span className="text-muted-foreground">{volume}</span>
          <span className="text-muted-foreground">{marketCap}</span>
        </div>
        <div className="flex items-center space-x-1">
          <BarChart3 className="w-3 h-3 text-muted-foreground" />
          <span className="text-muted-foreground">2</span>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
