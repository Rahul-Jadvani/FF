// "use client";
// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { Menu, Bell, Wallet, User, Sun, Moon } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Overview from "./Overview";
// import FoodFlags from "./FoodFlags";
// import Achievements from "./Achievements";
// import NFTCollection from "./NFTCollection";
// import Analytics from "./Analytics";
// import Community from "./Community";
// import History from "./History";

// export default function DashboardLayout() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark");
//   };

//   return (
//     <div
//       className={`flex h-screen ${
//         isDarkMode ? "dark bg-dark-darker" : "bg-gray-50"
//       }`}
//     >
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       <div className="flex-1 overflow-auto">
//         <nav
//           className={`${
//             isDarkMode
//               ? "bg-dark-lighter border-gray-800"
//               : "bg-white border-gray-200"
//           } border-b sticky top-0 z-10`}
//         >
//           <div className="px-4 h-16 flex items-center justify-between">
//             <button
//               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//               className={`p-2 rounded-lg ${
//                 isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100"
//               }`}
//             >
//               <Menu
//                 className={`w-6 h-6 ${
//                   isDarkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               />
//             </button>

//             <div className="flex items-center gap-6">
//               {/* FeedCoin Balance */}
//               <div className="flex items-center gap-2">
//                 <img
//                   src="/feedcoin-icon.svg"
//                   alt="FeedCoin"
//                   className="w-5 h-5"
//                 />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 font-semibold">
//                   2,450 FC
//                 </span>
//               </div>

//               {/* Wallet */}
//               <button
//                 className={`p-2 rounded-lg ${
//                   isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100"
//                 }`}
//               >
//                 <Wallet
//                   className={`w-5 h-5 ${
//                     isDarkMode ? "text-gray-400" : "text-gray-600"
//                   }`}
//                 />
//               </button>

//               {/* Notifications */}
//               <button
//                 className={`p-2 rounded-lg ${
//                   isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100"
//                 }`}
//               >
//                 <Bell
//                   className={`w-5 h-5 ${
//                     isDarkMode ? "text-gray-400" : "text-gray-600"
//                   }`}
//                 />
//               </button>

//               {/* Theme Toggle */}
//               <button
//                 onClick={toggleTheme}
//                 className={`p-2 rounded-lg ${
//                   isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100"
//                 }`}
//               >
//                 {isDarkMode ? (
//                   <Sun className="w-5 h-5 text-gray-400" />
//                 ) : (
//                   <Moon className="w-5 h-5 text-gray-600" />
//                 )}
//               </button>

//               {/* Profile */}
//               <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800/50">
//                 <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 flex items-center justify-center">
//                   <User className="w-5 h-5 text-white" />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </nav>

//         <main className="p-6">
//           <Routes>
//             <Route

//               path="/Overview"
//               element={<Overview isDarkMode={isDarkMode} />}
//             />
//             <Route
//               path="/FoodFlags"
//               element={<FoodFlags isDarkMode={isDarkMode} />}
//             />
//             <Route
//               path="/Achievements"
//               element={<Achievements isDarkMode={isDarkMode} />}
//             />
//             <Route
//               path="/NFTCollection"
//               element={<NFTCollection isDarkMode={isDarkMode} />}
//             />
//             <Route
//               path="/Analytics"
//               element={<Analytics isDarkMode={isDarkMode} />}
//             />
//             <Route
//               path="/Community"
//               element={<Community isDarkMode={isDarkMode} />}
//             />
//             <Route
//               path="/History"
//               element={<History isDarkMode={isDarkMode} />}
//             />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Menu, Bell, Wallet, User, Sun, Moon } from "lucide-react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import FoodFlags from "./FoodFlags";
import Achievements from "./Achievements";
import NFTCollection from "./NFTCollection";
import Analytics from "./Analytics";
import Community from "./Community";
import History from "./History";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "dark bg-dark-darker" : "bg-gray-50"
      }`}
    >
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 overflow-auto">
        <nav
          className={`${
            isDarkMode
              ? "bg-dark-lighter border-gray-800"
              : "bg-white border-gray-200"
          } border-b sticky top-0 z-10`}
        >
          <div className="px-4 h-16 flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-2 rounded-lg ${
                isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100"
              }`}
            >
              <Menu
                className={`w-6 h-6 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </button>

            <div className="flex items-center gap-6">
              {/* FeedCoin Balance */}
              <div className="flex items-center gap-2">
                <img
                  src="/feedcoin-icon.svg"
                  alt="FeedCoin"
                  className="w-5 h-5"
                />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 font-semibold">
                  2,450 FC
                </span>
              </div>

              {/* Wallet */}
              <button
                className={`p-2 rounded-lg ${
                  isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100"
                }`}
              >
                <Wallet
                  className={`w-5 h-5 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                />
              </button>

              {/* Notifications */}
              <button
                className={`p-2 rounded-lg ${
                  isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100"
                }`}
              >
                <Bell
                  className={`w-5 h-5 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100"
                }`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {/* Profile */}
              <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800/50">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </button>
            </div>
          </div>
        </nav>

        <main className="p-6">
          <Routes>
            {/* Redirect from root path to /Overview */}
            <Route path="/" element={<Navigate to="/Maindashboard" replace />} />

            <Route
              path="/Maindashboard"
              element={<Overview isDarkMode={isDarkMode} />}
            />
            <Route
              path="/FoodFlags"
              element={<FoodFlags isDarkMode={isDarkMode} />}
            />
            <Route
              path="/Achievements"
              element={<Achievements isDarkMode={isDarkMode} />}
            />
            <Route
              path="/NFTCollection"
              element={<NFTCollection isDarkMode={isDarkMode} />}
            />
            <Route
              path="/Analytics"
              element={<Analytics isDarkMode={isDarkMode} />}
            />
            <Route
              path="/Community"
              element={<Community isDarkMode={isDarkMode} />}
            />
            <Route
              path="/History"
              element={<History isDarkMode={isDarkMode} />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}
