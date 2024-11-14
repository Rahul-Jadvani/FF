import React from 'react';
import { Gem } from 'lucide-react';

export default function NFTGallery() {
  const nfts = [
    {
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=800&q=80",
      name: "Earth Saver #123",
      rarity: "Legendary",
      perks: "Premium donor status"
    },
    {
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?auto=format&fit=crop&w=800&q=80",
      name: "Community Hero #045",
      rarity: "Rare",
      perks: "Priority matching"
    },
    {
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      name: "Impact Maker #078",
      rarity: "Epic",
      perks: "Governance rights"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">NFT Collection</h2>
          <Gem className="w-5 h-5 text-emerald-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nfts.map((nft, index) => (
            <div key={index} className="group relative bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden">
              <img src={nft.image} alt={nft.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">{nft.name}</h3>
                <span className="text-xs text-emerald-500">{nft.rarity}</span>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{nft.perks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}