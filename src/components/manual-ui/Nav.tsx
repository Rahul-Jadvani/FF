// "use client";
// import React, { useState, useEffect } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";

import { FloatingNav } from "../ui/floating-navbar";

// export function Nav() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Navbar className="top-2" />
//     </div>
//   );
// }

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   const [isVisible, setIsVisible] = useState<boolean>(false);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       // Show the navbar if the cursor is near the top 50px of the window
//       if (e.clientY < 430) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     // Add the event listener for mouse movement
//     window.addEventListener("mousemove", handleMouseMove);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       className={cn(
//         "fixed max-w-xl mx-auto z-10 transition-transform duration-500",
//         isVisible ? "translate-y-1" : "-translate-y-20", // Hides/shows the navbar
//         className
//       )}
//     >
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Home" >
//           <ProductItem
//             title="hey"
//             href="/Maindashboard"
//           />
//         </MenuItem>

//         <MenuItem setActive={setActive} active={active} item="Dashboard">

//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Cases"></MenuItem>
//         <MenuItem
//           setActive={setActive}
//           active={active}
//           item="About us"
//         ></MenuItem>
//         <MenuItem
//           setActive={setActive}
//           active={active}
//           item="Contact us"
//         ></MenuItem>
//       </Menu>
//     </div>
//   );
// }
import { Home, Info, User } from "lucide-react";

export default function Page() {
  const navItems = [
    { name: "Home", link: "/", icon: <Home /> },
    { name: "About", link: "/about", icon: <Info /> },
    { name: "Dashboard", link: "/", icon: <Home /> },
    { name: "Cases", link: "/cases", icon: <Info /> },
    { name: "Contact Us ", link: "/", icon: <Home /> },
    { name: "Cases", link: "/cases", icon: <Info /> },
    
  ];

  return (
    <div>
      <FloatingNav navItems={navItems}  />
    </div>
  );
}
