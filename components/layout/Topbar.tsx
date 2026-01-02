"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Option = { label: string; value: string };

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

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
    <div className="w-full">
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-[1206px] h-[64px]",
          "flex items-center justify-between",
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
          style={{ paddingLeft: 3, paddingRight: 2, paddingTop: 8, paddingBottom: 8 }}
        >
          <SearchIcon className="w-4 h-4 text-white/60 shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un client, une success story ou une battlecard…"
            className={cn(
              "w-[392px] h-[21px]",
              "bg-transparent outline-none",
              "text-[14px] leading-[150%]",
              "text-white/60 placeholder:text-white/60"
            )}
            style={{ fontFamily: "Bricolage Grotesque, system-ui", fontWeight: 400 }}
          />
        </div>

        {/* ===== FILTERS WRAPPER (501x40) ===== */}
        <div className="w-[501px] h-[40px] flex items-center gap-[8px]">
          {/* ---- Filter 1 : Range (177x40) ---- */}
          <div
            className={cn(
              "w-[177px] h-[40px]",
              "rounded-full",
              "p-[6px]",
              "flex items-center gap-[8px]",
              "bg-white/[0.05]",
              "border border-white/20"
            )}
          >
            <RangePill active={range === "7"} onClick={() => setRange("7")}>
              7 jours
            </RangePill>
            <RangePill active={range === "30"} onClick={() => setRange("30")}>
              30 jours
            </RangePill>
          </div>

          {/* ---- Filter 2 : Sector (166x40) ---- */}
          <div className="relative">
            <SelectBox
              width="w-[166px]"
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

          {/* ---- Filter 3 : Team (142x40) ---- */}
          <div className="relative">
            <SelectBox
              width="w-[142px]"
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
  );
}

/* ================= UI ================= */

function RangePill({
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
      className={cn(
        "h-[29px] min-h-[29px] min-w-[29px]",
        "px-[16px] py-[4px]",
        "rounded-full",
        "whitespace-nowrap",
        "flex items-center justify-center",
        "transition",
        active
          ? "bg-[#87DFFF] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      )}
    >
      <span
        className={cn(active ? "text-[#032134]" : "text-white")}
        style={{
          fontFamily: "Bricolage Grotesque, system-ui",
          fontWeight: active ? 700 : 400,
          fontSize: 14,
          lineHeight: "150%",
        }}
      >
        {children}
      </span>
    </button>
  );
}

function SelectBox({
  label,
  open,
  onClick,
  width,
}: {
  label: string;
  open?: boolean;
  onClick?: () => void;
  width: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        width,
        "h-[40px]",
        "rounded-full",
        "border border-white/20",
        "bg-white/[0.05]",
        "flex items-center justify-between",
        "gap-[8px]",
        "pl-[16px] pr-[12px] py-[8px]",
        open && "bg-white/[0.07]"
      )}
    >
      <span
        className="truncate text-white"
        style={{
          fontFamily: "Bricolage Grotesque, system-ui",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "150%",
        }}
      >
        {label}
      </span>
      <ChevronDownIcon className="w-4 h-4 text-white/70 shrink-0" />
    </button>
  );
}

function Menu({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "absolute right-0 mt-2 z-50 w-56 rounded-2xl",
        "bg-[#061f2e]/95",
        "border border-white/10",
        "backdrop-blur-md shadow-xl p-2"
      )}
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
      className={cn(
        "w-full text-left px-3 py-2 rounded-xl text-[13px] transition",
        active ? "bg-[#87DFFF]/15 text-[#87DFFF]" : "text-white/80 hover:bg-white/[0.06]"
      )}
      style={{ fontFamily: "Bricolage Grotesque, system-ui" }}
    >
      {children}
    </button>
  );
}

/* ================= ICONS ================= */

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

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
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
