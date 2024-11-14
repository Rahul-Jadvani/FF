"use client";

import React from "react";
import {
  Menu,
  Home,
  Flag,
  Award,
  Gem,
  Vote,
  Settings,
  LogOut,
} from "lucide-react";
import Sidebar from "./Sidebar";
import FoodFlagsTracker from "./FoodFlagsTracker";
import Achievements from "./Achievements";
import NFTGallery from "./NFTGallery";
import DAOPanel from "./DAOPanel";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="flex h-screen bg-dark-darker">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 overflow-auto">
        <nav className="bg-dark-lighter border-b border-gray-800">
          <div className="px-4 h-16 flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-800/50"
            >
              <Menu className="w-6 h-6 text-gray-400" />
            </button>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-800/50">
                <Settings className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </nav>

        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FoodFlagsTracker />
            <Achievements />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <NFTGallery />
            </div>
            <div className="lg:col-span-1">
              <DAOPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
