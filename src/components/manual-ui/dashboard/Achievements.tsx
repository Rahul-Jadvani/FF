import React from 'react';
import { Award, Star } from 'lucide-react';

export default function Achievements() {
  const badges = [
    { name: 'First Donation', level: 'Gold', progress: 100 },
    { name: 'Community Hero', level: 'Silver', progress: 75 },
    { name: 'Earth Saver', level: 'Bronze', progress: 45 },
    { name: 'Quick Responder', level: 'Gold', progress: 90 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Achievements</h2>
          <Award className="w-5 h-5 text-emerald-500" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {badges.map((badge, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">{badge.name}</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{badge.level}</div>
              <div className="h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${badge.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}