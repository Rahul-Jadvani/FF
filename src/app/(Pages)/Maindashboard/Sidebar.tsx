import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Flag,
  Award,
  Gem,
  BarChart2,
  Users,
  Clock,
  Settings,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Overview",
      path: "/Maindashboard",
    },
    {
      icon: <Flag className="w-5 h-5" />,
      label: "Food Flags",
      path: "/FoodFlags",
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: "Achievements",
      path: "/Achievements",
    },
    {
      icon: <Gem className="w-5 h-5" />,
      label: "NFT Collection",
      path: "/NFTCollection",
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      label: "Analytics",
      path: "/analytics",
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Community",
      path: "/community",
    },
    { icon: <Clock className="w-5 h-5" />, label: "History", path: "/history" },
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 bg-dark-lighter border-r border-gray-800 flex flex-col h-screen sticky top-0`}
    >
      <div className="h-16 flex items-center justify-center border-b border-gray-800">
        <span
          className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 ${
            !isOpen && "hidden"
          }`}
        >
          Feed Forward
        </span>
      </div>

      <nav className="p-4 flex-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors mb-1 group
              ${
                location.pathname === item.path
                  ? "bg-gray-800/50 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/30"
              }`}
          >
            <div className="relative">
              {item.icon}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity" />
            </div>
            <span className={`${!isOpen && "hidden"} text-sm`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-400 hover:text-white group">
          <div className="relative">
            <Settings className="w-5 h-5" />
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity" />
          </div>
          <span className={`${!isOpen && "hidden"} text-sm`}>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-red-400 hover:text-red-300 group">
          <div className="relative">
            <LogOut className="w-5 h-5" />
            <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity" />
          </div>
          <span className={`${!isOpen && "hidden"} text-sm`}>Logout</span>
        </button>
      </div>
    </aside>
  );
}

// ================
// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import {
//   Home,
//   Flag,
//   Award,
//   Gem,
//   BarChart2,
//   Users,
//   Clock,
//   Settings,
//   LogOut,
// } from "lucide-react";

// interface SidebarProps {
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
// }

// export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
//   const [mounted, setMounted] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname(); // Hook to get the current path

//   useEffect(() => {
//     setMounted(true); // Ensures client-side rendering
//   }, []);

//   const menuItems = [
//     { icon: <Home className="w-5 h-5" />, label: "Overview", path: "/" },
//     {
//       icon: <Flag className="w-5 h-5" />,
//       label: "Food Flags",
//       path: "/food-flags",
//     },
//     {
//       icon: <Award className="w-5 h-5" />,
//       label: "Achievements",
//       path: "/achievements",
//     },
//     {
//       icon: <Gem className="w-5 h-5" />,
//       label: "NFT Collection",
//       path: "/nft-collection",
//     },
//     {
//       icon: <BarChart2 className="w-5 h-5" />,
//       label: "Analytics",
//       path: "/analytics",
//     },
//     {
//       icon: <Users className="w-5 h-5" />,
//       label: "Community",
//       path: "/community",
//     },
//     { icon: <Clock className="w-5 h-5" />, label: "History", path: "/history" },
//   ];

//   if (!mounted) return null; // Render nothing until component mounts on the client

//   return (
//     <aside
//       className={`${
//         isOpen ? "w-64" : "w-20"
//       } transition-all duration-300 bg-dark-lighter border-r border-gray-800 flex flex-col h-screen sticky top-0`}
//     >
//       <div className="h-16 flex items-center justify-center border-b border-gray-800">
//         <span
//           className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 ${
//             !isOpen && "hidden"
//           }`}
//         >
//           Feed Forward
//         </span>
//       </div>

//       <nav className="p-4 flex-1">
//         {menuItems.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => router.push(item.path)}
//             className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors mb-1 group
//               ${
//                 pathname === item.path
//                   ? "bg-gray-800/50 text-white"
//                   : "text-gray-400 hover:text-white hover:bg-gray-800/30"
//               }`}
//           >
//             <div className="relative">
//               {item.icon}
//               <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity" />
//             </div>
//             <span className={`${!isOpen && "hidden"} text-sm`}>
//               {item.label}
//             </span>
//           </button>
//         ))}
//       </nav>

//       <div className="p-4 border-t border-gray-800">
//         <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-400 hover:text-white group">
//           <div className="relative">
//             <Settings className="w-5 h-5" />
//             <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity" />
//           </div>
//           <span className={`${!isOpen && "hidden"} text-sm`}>Settings</span>
//         </button>
//         <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors text-red-400 hover:text-red-300 group">
//           <div className="relative">
//             <LogOut className="w-5 h-5" />
//             <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity" />
//           </div>
//           <span className={`${!isOpen && "hidden"} text-sm`}>Logout</span>
//         </button>
//       </div>
//     </aside>
//   );
// }
