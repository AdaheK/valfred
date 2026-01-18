"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type LinkItem = { name: string; icon: string; href: string };

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Sidebar2() {
  const pathname = usePathname();

  const links: LinkItem[] = useMemo(
    () => [
      { name: "Dashboard", icon: "/icons/image 6.svg", href: "/" },
      { name: "Clients", icon: "/icons/image 7.svg", href: "/clients" },
      { name: "Success stories", icon: "/icons/image 8.svg", href: "/success-stories" },
      { name: "Battlecards", icon: "/icons/image 9.svg", href: "/battlecards" },
      { name: "Analytics", icon: "/icons/image 10.svg", href: "/analytics" },
      { name: "Proof page", icon: "/icons/image 11.svg", href: "/proof" },
      { name: "AI Copilot", icon: "/icons/image 12.svg", href: "/copilot" },
      { name: "Chats sécurisés", icon: "/icons/image 13.svg", href: "/secure-chats" },
    ],
    []
  );

  return (
    <aside
      className={cn(
        "w-[234px]",
        "h-screen",               // ✅ fixe (hauteur écran)
        "sticky top-0",           // ✅ ne bouge pas au scroll de la page
        "flex flex-col justify-between",
        "px-4 py-6",
        "bg-white/[0.05]",
        "border-r border-white/20"
      )}
    >
      {/* Bloc haut */}
      <div className="w-[202px] flex flex-col gap-6">
        <div className="w-[137px] h-[32px] flex items-center gap-[13px]">
          <img src="/icons/Exclude.svg" alt="logo" className="w-[31px] h-[31px]" />
          <span
            className="text-[#87DFFF] font-semibold"
            style={{
              fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui",
              fontSize: 28,
              lineHeight: "32px",
            }}
          >
            valfred
          </span>
        </div>

        <nav className="w-[202px] flex flex-col gap-[2px]">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "w-[202px] h-[48px]",
                  "flex items-center gap-2",
                  "px-6 py-2",
                  isActive
                    ? "rounded-full bg-white/[0.05] border border-white/20"
                    : "rounded-lg hover:bg-white/[0.04] transition"
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
                  }}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bloc bas profil */}
      <div className="w-[202px]">
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
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-white/20">
            <img src="/icons/Ellipse 1.svg" alt="avatar" className="w-8 h-8 object-cover" />
          </div>

          <span
            className="text-white truncate"
            style={{
              fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "150%",
            }}
          >
            William Dupont
          </span>

          <img src="/icons/Frame.svg" alt="" className="ml-auto w-4 h-4 opacity-90" />
        </button>
      </div>
    </aside>
  );
}
