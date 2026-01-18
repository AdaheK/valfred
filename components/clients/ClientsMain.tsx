// components/clients/ClientsMain.tsx
"use client";

import React from "react";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center",
        "bg-white/[0.05] border border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
}

/** icon button a bit smaller so everything fits */
function IconBtn({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <button
      type="button"
      className={cn(
        "w-[28px] h-[28px] rounded-full",
        "grid place-items-center shrink-0",
        "hover:bg-white/[0.06] active:bg-white/[0.10] transition"
      )}
    >
      <img src={src} alt={alt} className="w-[14px] h-[14px] opacity-90" draggable={false} />
    </button>
  );
}

function ChevronBtn({ src }: { src: string }) {
  return (
    <button
      type="button"
      className={cn(
        "w-[22px] h-[28px] rounded-full",
        "grid place-items-center shrink-0",
        "hover:bg-white/[0.06] active:bg-white/[0.10] transition"
      )}
    >
      <img src={src} alt="" className="w-[14px] h-[14px] opacity-90" draggable={false} />
    </button>
  );
}

function VSep() {
  return <div className="w-px h-[28px] bg-white/15 shrink-0" />;
}

export function ClientsMain() {
  return (
    <section className="w-full">
      <div className="w-full max-w-[733px]">
        <h1
          className="text-[#87DFFF] font-bold text-[42px] leading-[100%] tracking-[-0.02em]"
          style={{ fontFamily: "Outfit, system-ui" }}
        >
          Clients
        </h1>

        <div className="mt-4 flex flex-col gap-2">
          {/* controls row */}
          <div className="w-full flex items-center gap-2 min-w-0">
            {/* select client */}
            <Pill className="h-[40px] w-[190px] px-4 pr-3 gap-2 shrink-0">
              <span
                className="text-white font-bold text-[13px] leading-[150%] truncate min-w-0"
                style={{ fontFamily: "Outfit, system-ui" }}
              >
                Sélectionner un client
              </span>
              <img
                src="/icons/chevron.svg"
                alt=""
                className="w-4 h-4 opacity-90 shrink-0"
                draggable={false}
              />
            </Pill>

            {/* toolbar (flexible, no overflow) */}
            <Pill className="h-[40px] flex-1 min-w-0 max-w-[460px] px-2 py-1">
              <div className="flex items-center w-full min-w-0 overflow-hidden">
                {/* group 1 */}
                <div className="flex items-center gap-[2px] pr-2 shrink-0">
                  <IconBtn src="/icons/Frame (2).svg" alt="Annuler" />
                  <IconBtn src="/icons/Frame (3).svg" alt="Rétablir" />
                </div>

                <VSep />

                {/* group 2 */}
                <div className="flex items-center gap-[2px] px-2 shrink-0">
                  <IconBtn src="/icons/Frame (4).svg" alt="Texte" />
                  <ChevronBtn src="/icons/chevron.svg" />
                </div>

                <VSep />

                {/* group 3 */}
                <div className="flex items-center gap-[2px] px-2 shrink-0">
                  <IconBtn src="/icons/Frame (5).svg" alt="Typo" />
                  <ChevronBtn src="/icons/chevron.svg" />
                </div>

                <VSep />

                {/* group 4 */}
                <div className="flex items-center gap-[2px] px-2 shrink-0">
                  <IconBtn src="/icons/Frame (6).svg" alt="Gras" />
                  <IconBtn src="/icons/Frame (7).svg" alt="Italique" />
                  <IconBtn src="/icons/Frame (8).svg" alt="Souligné" />
                </div>

                <VSep />

                {/* group 5 */}
                <div className="flex items-center gap-[2px] pl-2 shrink-0">
                  <IconBtn src="/icons/Frame (9).svg" alt="Align" />
                  <ChevronBtn src="/icons/chevron.svg" />
                  <IconBtn src="/icons/liste.svg" alt="Liste" />
                  <IconBtn src="/icons/Frame (10).svg" alt="Liste numérotée" />
                </div>
              </div>
            </Pill>
          </div>

          {/* note block */}
          <div
              className={cn(
                "w-full max-w-[733px] h-[200px] rounded-[24px]",
                "bg-white/[0.10] border border-white/20",
                "p-4",
                "flex justify-between items-start gap-6",
                "relative"
              )}
            >
              {/* Text en haut */}
              <div className="min-w-0">
                <div className="p-2">
                  <div
                    className="text-white/60 font-bold text-[20px] leading-[120%] tracking-[-0.02em]"
                    style={{ fontFamily: "Outfit, system-ui" }}
                  >
                    Titre
                  </div>
                  <div
                    className="mt-2 text-white/60 font-normal text-[16px] leading-[150%]"
                    style={{ fontFamily: "Outfit, system-ui" }}
                  >
                    Créer une note...
                  </div>
                </div>
              </div>

              {/* CTA collé en bas à droite */}
              <button
                type="button"
                className={cn(
                  "absolute right-6 bottom-6",
                  "h-[48px] px-6 rounded-full",
                  "bg-[#87DFFF] border border-white/20",
                  "text-[#001827] font-bold text-[14px] leading-[150%]",
                  "shadow-[0px_2px_24px_rgba(0,0,0,0.12)]",
                  "hover:brightness-95 active:brightness-90 transition",
                  "whitespace-nowrap"
                )}
                style={{ fontFamily: "Outfit, system-ui" }}
              >
                Nouvelle note
              </button>
            </div>

        </div>
      </div>
    </section>
  );
}
