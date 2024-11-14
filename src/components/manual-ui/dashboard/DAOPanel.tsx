import React from 'react';
import { Vote, ChevronRight } from 'lucide-react';

export default function DAOPanel() {
  const proposals = [
    {
      title: "Expand to New Region",
      status: "Active",
      votes: { for: 67, against: 33 }
    },
    {
      title: "Update Reward System",
      status: "Active",
      votes: { for: 82, against: 18 }
    },
    {
      title: "Community Guidelines",
      status: "Ended",
      votes: { for: 92, against: 8 }
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">DAO Voting</h2>
          <Vote className="w-5 h-5 text-emerald-500" />
        </div>

        <div className="space-y-4">
          {proposals.map((proposal, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">{proposal.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  proposal.status === 'Active' 
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300'
                }`}>
                  {proposal.status}
                </span>
              </div>
              <div className="h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${proposal.votes.for}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{proposal.votes.for}% For</span>
                <span>{proposal.votes.against}% Against</span>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors">
          <span>View All Proposals</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}