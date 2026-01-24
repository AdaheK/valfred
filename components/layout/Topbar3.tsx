"use client";

import { useState } from "react";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Topbar() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full">
      <div
        className={cn(
          "mx-auto w-full max-w-[1206px] h-[64px]",
          "flex items-center",
          "px-[32px] py-[12px]",
          "border-b border-white/20"
        )}
      >
        {/* ===== SEARCH (443x40) ===== */}
        <div
          className={cn(
            "w-[443px] h-[40px] min-h-[36px]",
            "flex items-center",
            "gap-[8px]",
            "rounded-lg"
          )}
          style={{
            paddingLeft: 3,
            paddingRight: 2,
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <SearchIcon className="w-4 h-4 text-white/60 shrink-0" />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un client, une success story ou une battlecard…"
            className={cn(
              "w-full",
              "bg-transparent outline-none",
              "text-[14px] leading-[150%]",
              "text-white/60 placeholder:text-white/60"
            )}
            style={{
              fontFamily: "Bricolage Grotesque, system-ui",
              fontWeight: 400,
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ================= ICON ================= */

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
