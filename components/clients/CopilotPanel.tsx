"use client";

import React from "react";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function CopilotPanel() {
  return (
    // ✅ prend toute la hauteur du conteneur sticky (h-screen) sans provoquer de scroll
    <div className="h-full w-full flex flex-col overflow-hidden">
      <div
        className={cn(
          "pt-20", // padding 24
          "pr-6",
          "flex flex-col items-center",
          "gap-6",
          "h-full",
          "shrink-0"
        )}
      >
        {/* Texts */}
        <div className="flex flex-col items-center gap-3 pt-6">
          <div
            className="text-white text-center font-bold text-[18px] leading-[120%] tracking-[-0.02em]"
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            Recommandations intelligentes
            <br />
            en temps réel
          </div>

          <div
            className="text-white/80 text-center font-normal text-[16px] leading-[150%] max-w-[290px]"
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            Valfred écoute, analyse et vous suggère les bonnes actions au bon moment.
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-2 flex flex-col items-center gap-4 w-full">
          <button
            type="button"
            className={cn(
              "w-[237px] h-[48px]",
              "px-6",
              "rounded-full border border-white/20",
              "bg-[#87DFFF]",
              "flex items-center justify-center gap-2",
              "shadow-[0px_10px_30px_rgba(0,0,0,0.20)]",
              "hover:brightness-95 active:brightness-90 transition",
              "whitespace-nowrap"
            )}
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            <img src="/icons/carre-cercle.svg" alt="" className="w-4 h-4" draggable={false} />
            <span className="text-[#001827] font-bold text-[14px] leading-[150%]">
              Activer Valfred en direct
            </span>
          </button>

          <button
            type="button"
            className={cn(
              "w-[223px] h-[48px]",
              "pl-5 pr-6",
              "rounded-full border border-white/20",
              "bg-white/[0.05]",
              "flex items-center justify-center gap-2",
              "hover:bg-white/[0.07] active:bg-white/[0.09] transition",
              "whitespace-nowrap"
            )}
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            <img src="/icons/profil.svg" alt="" className="w-4 h-4 opacity-90" draggable={false} />
            <span className="text-white font-bold text-[14px] leading-[150%]">
              Préqualifier un prospect
            </span>
          </button>

          <button
            type="button"
            className={cn(
              "w-[168px] h-[48px]",
              "pl-5 pr-6",
              "rounded-full border border-white/20",
              "bg-white/[0.05]",
              "flex items-center justify-center gap-2",
              "hover:bg-white/[0.07] active:bg-white/[0.09] transition",
              "whitespace-nowrap"
            )}
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            <img src="/icons/Frame (9).svg" alt="" className="w-4 h-4 opacity-90" draggable={false} />
            <span className="text-white font-bold text-[14px] leading-[150%]">
              Résumer un call
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
