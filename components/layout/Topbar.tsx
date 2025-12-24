"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Option = { label: string; value: string };

export default function Topbar() {
  const [query, setQuery] = useState("");
  const [range, setRange] = useState<"7" | "30">("7");

  const sectorOptions: Option[] = useMemo(
    () => [
      { label: "Tous les secteurs", value: "all" },
      { label: "Retail", value: "retail" },
      { label: "Banque", value: "bank" },
      { label: "Assurance", value: "insurance" },
    ],
    []
  );

  const teamOptions: Option[] = useMemo(
    () => [
      { label: "Toute l’équipe", value: "all" },
      { label: "Sales", value: "sales" },
      { label: "Marketing", value: "marketing" },
    ],
    []
  );

  const [sector, setSector] = useState<Option>(sectorOptions[0]);
  const [team, setTeam] = useState<Option>(teamOptions[0]);
  const [openMenu, setOpenMenu] = useState<null | "sector" | "team">(null);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpenMenu(null);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Optionnel : un fond derrière la barre quand tu scroll */}
      <div className="w-full bg-transparent">
        {/* BARRE full-width, collée (pas de marge externe) */}
        <div
          ref={ref}
          className="
            w-full h-14
            flex items-center gap-4
            px-5
            bg-white/[0.04]
            border-b border-white/10
            backdrop-blur-md
          "
        >
          {/* Search */}
          <div className="flex-1 min-w-0 flex items-center gap-3">
            <SearchIcon />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un client, une success story ou une battlecard…"
              className="
                w-full bg-transparent outline-none
                text-white/85 placeholder:text-white/35
                text-[13px]
              "
            />
          </div>

          {/* Separator */}
          <div className="hidden md:block h-7 w-px bg-white/10" />

          {/* Filters */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center rounded-full bg-white/[0.03] border border-white/10 p-1">
              <Pill active={range === "7"} onClick={() => setRange("7")}>
                7 jours
              </Pill>
              <Pill active={range === "30"} onClick={() => setRange("30")}>
                30 jours
              </Pill>
            </div>

            <div className="relative">
              <SelectPill
                label={sector.label}
                open={openMenu === "sector"}
                onClick={() => setOpenMenu(openMenu === "sector" ? null : "sector")}
              />
              {openMenu === "sector" && (
                <Menu>
                  {sectorOptions.map((opt) => (
                    <MenuItem
                      key={opt.value}
                      active={opt.value === sector.value}
                      onClick={() => {
                        setSector(opt);
                        setOpenMenu(null);
                      }}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>

            <div className="relative">
              <SelectPill
                label={team.label}
                open={openMenu === "team"}
                onClick={() => setOpenMenu(openMenu === "team" ? null : "team")}
              />
              {openMenu === "team" && (
                <Menu>
                  {teamOptions.map((opt) => (
                    <MenuItem
                      key={opt.value}
                      active={opt.value === team.value}
                      onClick={() => {
                        setTeam(opt);
                        setOpenMenu(null);
                      }}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- UI --- */

function Pill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "h-8 px-3 rounded-full text-[12px] font-medium transition",
        active
          ? "bg-[#87DFFF]/20 text-[#87DFFF] border border-white/10"
          : "text-white/70 hover:text-white/90 hover:bg-white/[0.04]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function SelectPill({
  label,
  open,
  onClick,
}: {
  label: string;
  open?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "h-8 px-3 rounded-full",
        "bg-white/[0.03] border border-white/10",
        "text-[12px] font-medium",
        "transition flex items-center gap-2",
        open
          ? "text-white/95 bg-white/[0.06]"
          : "text-white/75 hover:bg-white/[0.05] hover:text-white/90",
      ].join(" ")}
    >
      <span className="max-w-[160px] truncate">{label}</span>
      <ChevronDownIcon className={open ? "text-white/70" : "text-white/45"} />
    </button>
  );
}

function Menu({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        absolute right-0 mt-2 z-50
        w-56 rounded-2xl
        bg-[#061f2e]/95
        border border-white/10
        shadow-xl
        backdrop-blur-md
        p-2
      "
    >
      {children}
    </div>
  );
}

function MenuItem({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full text-left px-3 py-2 rounded-xl text-[12.5px] transition",
        active
          ? "bg-[#87DFFF]/15 text-[#87DFFF]"
          : "text-white/80 hover:bg-white/[0.06] hover:text-white/95",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/45">
      <path
        d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
