"use client";

import React from "react";
import Image from "next/image";
function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function CopilotSuggestions({
  items,
  title = "SUGGESTIONS DE VALFRED",
  onPick,
  className,
  arrowSrc = "/icons/fleche_fine.svg", // tu remplaceras par ta flèche finale
}: {
  items: string[];
  title?: string;
  onPick: (text: string) => void;
  className?: string;
  arrowSrc?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <div
        className="font-['Bricolage_Grotesque'] font-medium text-[12px] leading-[150%] uppercase"
        style={{
          letterSpacing: "0.10em",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        {title}
      </div>

      <div className="mt-5">
        {items.map((s, i) => (
          <button
            key={`${i}-${s}`}
            type="button"
            onClick={() => onPick(s)}
            className={cn(
              "w-full flex items-center justify-between gap-4",
              "py-5",
              "border-b border-white/10",
              "text-left",
              "hover:bg-white/[0.03] transition"
            )}
          >
            <span className="font-outfit font-normal text-[16px] leading-[150%] text-white/80">
              {s}
            </span>

            <Image
              src={arrowSrc}
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 opacity-100 shrink-0"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
