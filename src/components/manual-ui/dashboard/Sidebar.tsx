import React from 'react';
import { Home, Flag, Award, Gem, Vote, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Overview' },
    { icon: <Flag className="w-5 h-5" />, label: 'Food Flags' },
    { icon: <Award className="w-5 h-5" />, label: 'Achievements' },
    { icon: <Gem className="w-5 h-5" />, label: 'NFT Collection' },
    { icon: <Vote className="w-5 h-5" />, label: 'DAO Voting' },
  ];

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-dark-lighter neon-border`}>
      <div className="h-16 flex items-center justify-center border-b border-gray-800">
        <span className={`font-semibold text-primary neon-glow ${!isOpen && 'hidden'}`}>Feed Forward</span>
      </div>
      
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors mb-1 text-gray-400 hover:text-primary"
          >
            {item.icon}
            <span className={`${!isOpen && 'hidden'} text-sm`}>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-4">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-red-400 hover:text-red-300">
          <LogOut className="w-5 h-5" />
          <span className={`${!isOpen && 'hidden'} text-sm`}>Logout</span>
        </button>
      </div>
    </aside>
  );
}