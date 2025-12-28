"use client";

import { useMemo, useState } from "react";

type LinkItem = { name: string; icon: string };

export function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const links: LinkItem[] = useMemo(
    () => [
      { name: "Dashboard", icon: "/icons/image 6.svg" },
      { name: "Clients", icon: "/icons/image 7.svg" },
      { name: "Success stories", icon: "/icons/image 8.svg" },
      { name: "Battlecards", icon: "/icons/image 9.svg" },
      { name: "Analytics", icon: "/icons/image 10.svg" },
      { name: "Proof page", icon: "/icons/image 13.svg" },
      { name: "AI Copilot", icon: "/icons/image 11.svg" },
      { name: "Chats sécurisés", icon: "/icons/image 12.svg" },
    ],
    []
  );

  return (
    <aside
      className="
        sticky top-0
        h-[100dvh]
        w-[234px]
        px-4 py-6
        flex flex-col justify-between
        bg-gradient-to-b
        from-[#0E4C78]
        via-[#073A5A]
        to-[#032134]
        border-r border-white/20
      "
    >
      {/* Logo */}
      <div>
        <div className="flex items-center gap-4">
          <img
            src="/icons/Exclude.svg"
            alt="logo"
            className="h-8 w-8"
          />
          <span className="text-[#87DFFF] font-semibold tracking-tight text-[28px] leading-none">
            valfred
          </span>
        </div>

        {/* Menu */}
        <nav className="mt-5 flex flex-col gap-2">
          {links.map((link) => {
            const isActive = active === link.name;

            return (
              <button
                key={link.name}
                onClick={() => setActive(link.name)}
                className={[
                  "group w-full flex items-center gap-3 text-left transition",
                  "h-12",
                  isActive
                    ? [
                        "rounded-full px-3",
                        "bg-gradient-to-r from-[#2A7FB0]/60 to-[#1E5E86]/60",
                        "border border-white/20",
                        "shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
                        "text-[#9BE7FF]",
                      ].join(" ")
                    : "px-3 text-white/85 hover:bg-white/[0.04]",
                ].join(" ")}
              >
                <img
                  src={link.icon}
                  alt=""
                  className={[
                    "h-4 w-4 ml-3",
                    isActive ? "opacity-100" : "opacity-80",
                  ].join(" ")}
                />

                <span
                  className={[
                    "text-[14px] leading-[21px]",
                    isActive ? "font-semibold" : "font-medium",
                  ].join(" ")}
                >
                  {link.name}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div>
        <div className="h-px w-full bg-white/10 mb-4" />

        <button
          className="
            w-full h-12
            rounded-full
            bg-white/[0.10]
            border border-white/20
            flex items-center gap-3
            pl-2 pr-4
            hover:bg-white/[0.14]
            transition
          "
        >
          <img
            src="/icons/Ellipse 1.svg"
            alt="avatar"
            className="h-8 w-8 rounded-full object-cover border border-white/20"
          />

          <span className="text-white/90 text-[14px]">
            William Dupont
          </span>

          <img
            src="/icons/Frame.svg"
            alt=""
            className="ml-auto h-4 w-4 opacity-80"
          />
        </button>
      </div>
    </aside>
  );
}