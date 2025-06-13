
import React from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'trenches', label: 'Trenches' },
    { id: 'new', label: 'New' },
    { id: 'trending', label: 'Trending' },
    { id: 'copytrade', label: 'CopyTrade' },
    { id: 'monitor', label: 'Monitor' },
    { id: 'follow', label: 'Follow' },
  ];

  return (
    <nav className="flex items-center space-x-6 px-4 py-3 border-b border-border overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`whitespace-nowrap text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'text-foreground border-b-2 border-primary pb-3'
              : 'text-muted-foreground hover:text-foreground pb-3'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
