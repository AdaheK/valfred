// components/layout/ClientsTopbar.tsx
"use client";

import React, { useState } from "react";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Topbar2() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full border-b border-white/20">
      <div className="mx-auto w-full max-w-[1206px] px-4 md:px-6">
        <div className="grid h-[64px] grid-cols-[70.73%_29.27%] items-center">
          {/* LEFT: search */}
          <div className="min-w-0 pr-6">
            <div
              className={cn(
                "w-full max-w-[443px] h-[40px] min-h-[36px]",
                "flex items-center gap-2",
                "rounded-[8px]"
              )}
              style={{ paddingLeft: 3, paddingRight: 2, paddingTop: 8, paddingBottom: 8 }}
            >
              <SearchIcon className="w-4 h-4 text-white/60 shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un client, une success story ou une battlecard..."
                className={cn(
                  "min-w-0 flex-1",
                  "bg-transparent outline-none",
                  "text-[14px] leading-[150%]",
                  "text-white/80 placeholder:text-white/60"
                )}
                style={{ fontFamily: "Bricolage Grotesque, system-ui", fontWeight: 400 }}
              />
            </div>
          </div>

          {/* RIGHT: copilot header in topbar */}
          <div className="min-w-0 border-l border-white/20 pl-6 flex items-center justify-between">
            <div className="min-w-0">
              <div
                className="font-bold text-[20px] leading-[120%] tracking-[-0.02em]"
                style={{
                  fontFamily: "Outfit, system-ui",
                  background: "linear-gradient(90deg, #87DFFF 0%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Valfred Copilot
              </div>
              <div
                className="text-white/80 text-[12px] leading-[140%] truncate whitespace-nowrap"
                style={{ fontFamily: "Outfit, system-ui", fontWeight: 400 }}
              >
                L’IA qui booste vos appels commerciaux
              </div>

            </div>

            <button type="button" className="shrink-0 ml-4 hover:opacity-90 transition">
              {/* mets ton icône */}
              <img src="/icons/copilotfleche.svg" alt="" className="w-6 h-6 opacity-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* icons */
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
