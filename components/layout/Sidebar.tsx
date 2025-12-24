"use client";

import { useMemo, useState } from "react";

type LinkItem = { name: string; icon: string };

export function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const links: LinkItem[] = useMemo(
    () => [
      { name: "Dashboard", icon: "/icons/image 6.png" },
      { name: "Clients", icon: "/icons/image 7.png" },
      { name: "Success stories", icon: "/icons/image 8.png" },
      { name: "Battlecards", icon: "/icons/image 9.png" },
      { name: "Analytics", icon: "/icons/image 10.png" },
      { name: "Proof page", icon: "/icons/image 13.png" },
      { name: "AI Copilot", icon: "/icons/image 11.png" },
      { name: "Chats sécurisés", icon: "/icons/image 12.png" },
    ],
    []
  );

  return (
    <aside
      className="
        sticky top-0
        h-[100dvh]
        w-[230px]
        px-4 py-6
        flex flex-col
        bg-gradient-to-b from-[#0B3A5A] via-[#032134] to-[#021823]
        border-r border-white/10
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-1">
        <img src="/icons/image 5.png" alt="logo" className="h-6 w-6" />
        <span className="text-[#87DFFF] font-semibold tracking-tight text-[22px] leading-none">
          valfred
        </span>
      </div>

      {/* Nav */}
      <nav className="mt-8 flex flex-col gap-2">
        {links.map((link) => {
          const isActive = active === link.name;

          return (
            <button
              key={link.name}
              onClick={() => setActive(link.name)}
              className={[
                "group w-full flex items-center gap-3",
                "px-3 py-[10px] rounded-full",
                "transition-all duration-200",
                "text-left",
                isActive
                  ? "bg-[#87DFFF]/15 text-[#87DFFF] border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
                  : "text-white/85 hover:text-[#87DFFF] hover:bg-white/[0.04]",
              ].join(" ")}
            >
              {/* petite pastille active (comme un repère visuel) */}
              <span
                className={[
                  "h-2 w-2 rounded-full",
                  "transition-opacity",
                  isActive ? "bg-[#87DFFF] opacity-100" : "bg-white opacity-20 group-hover:opacity-40",
                ].join(" ")}
                aria-hidden="true"
              />

              <img
                src={link.icon}
                alt=""
                className={[
                  "h-4 w-4",
                  "transition-opacity",
                  isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100",
                ].join(" ")}
              />

              <span className="text-[12.5px] leading-[18px] font-medium">
                {link.name}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="flex-1" />

      {/* Footer (user) */}
      <div className="mt-6">
        <div className="h-px w-full bg-white/10 mb-4" />

        <button
          className="
            w-full flex items-center gap-3
            px-3 py-3 rounded-2xl
            bg-white/[0.04] hover:bg-white/[0.06]
            border border-white/10
            transition
          "
        >
          <img
            src="https://via.placeholder.com/40"
            alt="avatar"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white/90 text-[12.5px] font-medium">
              William Dupont
            </span>
            <span className="text-white/50 text-[11px]">
              Administrateur
            </span>
          </div>

          <div className="ml-auto text-white/50 text-xs">›</div>
        </button>
      </div>
    </aside>
  );
}