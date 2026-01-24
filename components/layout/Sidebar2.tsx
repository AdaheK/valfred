"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

type NavItem = { name: string; href: string; icon: string };

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Sidebar2() {
  const pathname = usePathname();

  const links: NavItem[] = useMemo(
    () => [
      { name: "Dashboard", href: "/", icon: "/icons/Sidebar/DashboardLogo.svg" },
      { name: "Clients", href: "/clients", icon: "/icons/Sidebar/ClientsLogo.svg" },
      { name: "Success stories", href: "/success-stories", icon: "/icons/Sidebar/SuccessStoriesLogo.svg" },
      { name: "Battlecards", href: "/battlecards", icon: "/icons/Sidebar/BattleCardsLogo.svg" },
      { name: "Analytics", href: "/analytics", icon: "/icons/Sidebar/AnalyticsLogo.svg" },
      { name: "Proof page", href: "/proof", icon: "/icons/Sidebar/ProofPageLogo.svg" },
      { name: "AI Copilot", href: "/ai-copilot", icon: "/icons/Sidebar/CopilotLogo.svg" },
      { name: "Chats sécurisés", href: "/secure-chats", icon: "/icons/Sidebar/SecureChatLogo.svg" },
    ],
    []
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <aside
      className={cn(
        "w-[234px] shrink-0",
        "h-screen sticky top-0",
        "flex flex-col justify-between",
        "px-4 py-6",
        "bg-white/[0.05]",
        "border-r border-white/20",
        "rounded-tr-[24px]" // ✅ arrondi haut droite
      )}
    >
      {/* Top */}
      <div className="w-[202px] flex flex-col gap-6">
        {/* ✅ Logo : agrandi, centré, et décalé à gauche */}
        <div className="w-full flex justify-center pt-2 pb-2">
          <img
            src="/icons/Logo-Valfred 4.svg"
            alt="logo"
            className="w-[110px] h-auto -translate-x-8"
            draggable={false}
          />
        </div>

        {/* Nav */}
        <nav className="w-[202px] flex flex-col gap-[2px]">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "w-[202px] h-[48px]",
                  "flex items-center gap-2",
                  "px-6 py-2",
                  active
                    ? cn("rounded-full", "bg-white/[0.05]", "border border-white/20")
                    : cn("rounded-lg", "hover:bg-white/[0.04] transition")
                )}
              >
                <img
                  src={link.icon}
                  alt=""
                  className={cn("w-4 h-4", active ? "opacity-100" : "opacity-90")}
                  draggable={false}
                />

                <span
                  className={cn(active ? "text-[#87DFFF]" : "text-white")}
                  style={{
                    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui",
                    fontWeight: active ? 700 : 400,
                    fontSize: 14,
                    lineHeight: "150%",
                  }}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom profile */}
      <div className="w-[202px]">
        <button
          type="button"
          className={cn(
            "w-[202px] h-[48px]",
            "flex items-center gap-2",
            "py-2 pr-4 pl-2",
            "rounded-full",
            "bg-white/[0.10]",
            "border border-white/20",
            "hover:bg-white/[0.12] transition"
          )}
        >
          <div className={cn("w-8 h-8 rounded-full overflow-hidden shrink-0", "border border-white/20")}>
            <img src="/icons/Ellipse 1.svg" alt="avatar" className="w-8 h-8 object-cover" draggable={false} />
          </div>

          <span
            className="text-white truncate"
            style={{
              fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "150%",
              letterSpacing: "0.5%",
            }}
          >
            William Dupont
          </span>

          <img src="/icons/Frame.svg" alt="" className="ml-auto w-4 h-4 opacity-90" draggable={false} />
        </button>
      </div>
    </aside>
  );
}
