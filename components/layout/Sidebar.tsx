"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type LinkItem = { name: string; icon: string; href: string };

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Sidebar() {
  const pathname = usePathname();

  const links: LinkItem[] = useMemo(
    () => [
      { name: "Dashboard", icon: "/icons/Sidebar/DashboardLogo.svg", href: "/" },
      { name: "Clients", icon: "/icons/Sidebar/ClientsLogo.svg", href: "/clients" },
      { name: "Success stories", icon: "/icons/Sidebar/SuccessStoriesLogo.svg", href: "/success-stories" },
      { name: "Battlecards", icon: "/icons/Sidebar/BattleCardsLogo.svg", href: "/battlecards" },
      { name: "Analytics", icon: "/icons/Sidebar/AnalyticsLogo.svg", href: "/analytics" },
      { name: "Proof page", icon: "/icons/Sidebar/ProofPageLogo.svg", href: "/proof-page" },
      { name: "AI Copilot", icon: "/icons/Sidebar/CopilotLogo.svg", href: "/ai-copilot" },
      { name: "Chats sécurisés", icon: "/icons/Sidebar/SecureChatLogo.svg", href: "/secure-chats" },
    ],
    []
  );

  return (
    <aside
      className={cn(
        "w-[234px] h-[2400px]",
        "flex flex-col justify-between",
        "px-4 py-6",
        "bg-white/[0.05]",
        "border-r border-white/20",
        "rounded-tr-[24px]"
      )}
    >
      {/* ===== Bloc haut ===== */}
      <div className="w-full flex flex-col gap-8">
        {/* ✅ LOGO centré + plus grand */}
        <div className="w-full flex justify-center pt-2 pb-2">
          <img
            src="/icons/Logo-Valfred 4.svg"
            alt="Valfred"
            className="w-[110px] h-auto -translate-x-8"
          />
        </div>

        {/* Tabs */}
        <nav className="w-[202px] mx-auto flex flex-col gap-[2px]">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "w-[202px] h-[48px]",
                  "flex items-center gap-2",
                  "px-6 py-2",
                  "select-none",
                  isActive
                    ? cn("rounded-full", "bg-white/[0.05]", "border border-white/20")
                    : cn("rounded-lg", "hover:bg-white/[0.04] transition")
                )}
              >
                <img
                  src={link.icon}
                  alt=""
                  className={cn("w-4 h-4", isActive ? "opacity-100" : "opacity-90")}
                />

                <span
                  className={cn(isActive ? "text-[#87DFFF]" : "text-white")}
                  style={{
                    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui",
                    fontWeight: isActive ? 700 : 400,
                    fontSize: 14,
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ===== Profil ===== */}
      <div className="w-[202px] mx-auto">
        <button
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
          <div
            className={cn(
              "w-8 h-8 rounded-full overflow-hidden shrink-0",
              "border border-white/20"
            )}
          >
            <img
              src="/icons/Ellipse 1.svg"
              alt="avatar"
              className="w-8 h-8 object-cover"
            />
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

          <img
            src="/icons/Frame.svg"
            alt=""
            className="ml-auto w-4 h-4 opacity-90"
          />
        </button>
      </div>
    </aside>
  );
}
