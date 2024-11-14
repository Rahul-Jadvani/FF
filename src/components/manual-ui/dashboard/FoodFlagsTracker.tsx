import React from 'react';
import { Flag, TrendingUp } from 'lucide-react';

export default function FoodFlagsTracker() {
  const stats = [
    { label: 'Active Flags', value: '12', change: '+3' },
    { label: 'Total Donations', value: '156', change: '+22' },
    { label: 'Impact Score', value: '892', change: '+89' },
  ];

  return (
    <div className="bg-dark-lighter rounded-xl neon-border">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white neon-glow">Food Flags Tracker</h2>
          <Flag className="w-5 h-5 text-primary" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-dark-darker rounded-lg p-4">
              <div className="text-sm text-gray-400">{stat.label}</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-2xl font-semibold text-white">{stat.value}</span>
                <span className="flex items-center text-sm text-primary">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="h-2 bg-dark-darker rounded-full overflow-hidden">
            <div className="h-full bg-primary shadow-neon rounded-full" style={{ width: '75%' }} />
          </div>
          <div className="mt-2 text-sm text-gray-400">
            Monthly goal progress: 75%
          </div>
        </div>
      </div>
    </div>
  );
}