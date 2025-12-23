"use client";
import { useState } from "react";

export function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const links = [
    { name: "Dashboard", icon: "/icons/image 6.png" },
    { name: "Clients", icon: "/icons/image 7.png" },
    { name: "Success stories", icon: "/icons/image 8.png" },
    { name: "Battlecards", icon: "/icons/image 9.png" },
    { name: "Analytics", icon: "/icons/image 10.png" },
    { name: "Proof page", icon: "/icons/image 13.png" },
    { name: "AI Copilot", icon: "/icons/image 11.png" },
    { name: "Chats sécurisés", icon: "/icons/image 12.png" },
  ];

  return (
    <aside
      className="
        sticky top-0
        w-[220px]
        min-h-[100dvh]
        flex flex-col
        px-5 py-8
        bg-gradient-to-b
        from-[#0B3A5A]
        via-[rgba(3,33,52,1)]
        to-[#021823]
        border-r
        border-white/20
      "
    >
      {/* Logo */}
      <div className="flex items-center mb-6 text-[#87DFFF]">
        <img src="/icons/image 5.png" className="w-6 h-6 mr-3" />

        <span
          className="
            font-semibold
            text-[25px]
            leading-[24px]
            opacity-100
            relative
            top-[0px]
          "
        >
          valfred
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive = active === link.name;

          return (
            <button
              key={link.name}
              onClick={() => setActive(link.name)}
              className={`
                flex items-center
                px-3 py-2.5
                rounded-full
                transition
                ${
                  isActive
                    ? `
                      bg-[#87DFFF]/20
                      text-[#87DFFF]
                      border
                      border-white/20
                    `
                    : "text-white/90 hover:text-[#87DFFF]"
                }
              `}
            >
              <img
                src={link.icon}
                className={`w-4 h-4 mr-3 ${
                  isActive ? "opacity-100" : "opacity-80"
                }`}
              />

              <span
                className="
                  text-[12px]
                  leading-[21px]
                  opacity-100
                  font-medium
                "
              >
                {link.name}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="flex-1" />

      {/* Footer */}
      <div className="pt-6 flex items-center text-white/80">
        <img
          src="https://via.placeholder.com/32"
          className="w-8 h-8 rounded-full mr-3"
        />
        <span className="text-sm">William Dupont</span>
      </div>
    </aside>
  );
}
