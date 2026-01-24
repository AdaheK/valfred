"use client";

import React from "react";
import { useRouter } from "next/navigation";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-full flex items-center bg-white/[0.05] border border-white/20", className)}>
      {children}
    </div>
  );
}

function IconBtn({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <button
      type="button"
      className={cn(
        "w-[32px] h-[32px] rounded-full grid place-items-center shrink-0",
        "hover:bg-white/[0.06] active:bg-white/[0.10] transition"
      )}
    >
      <img src={src} alt={alt} className="w-4 h-4 opacity-90" draggable={false} />
    </button>
  );
}

function ChevronBtn({ src }: { src: string }) {
  return (
    <button
      type="button"
      className={cn(
        "w-[24px] h-[32px] rounded-full grid place-items-center shrink-0",
        "hover:bg-white/[0.06] active:bg-white/[0.10] transition"
      )}
    >
      <img src={src} alt="" className="w-4 h-4 opacity-90" draggable={false} />
    </button>
  );
}

function VSep() {
  return <div className="w-px h-[32px] bg-white/15 shrink-0" />;
}

export function NoteHeaderEditor() {
  const router = useRouter();

  return (
    <section className="space-y-4">
      {/* back button */}
      <button
        type="button"
        onClick={() => router.push("/clients")}
        className={cn(
          "w-10 h-10 rounded-full",
          "bg-white/[0.05] border border-white/20",
          "grid place-items-center",
          "hover:bg-white/[0.07] transition"
        )}
      >
        <img src="/icons/fleche_gauche.svg" alt="Retour" className="w-4 h-4" draggable={false} />
      </button>

      {/* title */}
      <div>
        <h1
          className="text-[42px] leading-[100%] tracking-[-0.02em] font-bold"
          style={{ fontFamily: "Outfit, system-ui", color: "rgba(135,223,255,1)" }}
        >
          Titre de la note
        </h1>

        <div className="mt-2 text-[14px] leading-[150%]" style={{ fontFamily: "Outfit, system-ui" }}>
          <span className="text-white font-bold">Decathlon</span>

          {/* bigger white dot */}
          <span className="inline-block align-middle mx-2 w-[6px] h-[6px] rounded-full bg-white" />

          <span className="text-white/60">Mise à jour il y a 1 min</span>
        </div>
      </div>

      {/* Toolbar row */}
      <div className="mt-4 flex items-center gap-2 w-full">
        <Pill className="h-[40px] px-2 py-1 gap-2">
          <div className="flex items-center gap-1">
            <IconBtn src="/icons/Frame (2).svg" alt="Annuler" />
            <IconBtn src="/icons/Frame (3).svg" alt="Rétablir" />
          </div>

          <VSep />

          <div className="flex items-center gap-1">
            <IconBtn src="/icons/Frame (4).svg" alt="Texte" />
            <img src="/icons/chevron.svg" alt="" className="w-4 h-4 opacity-90" draggable={false} />
          </div>

          <VSep />

          <div className="flex items-center gap-1">
            <IconBtn src="/icons/Frame (5).svg" alt="Typo" />
            <img src="/icons/chevron.svg" alt="" className="w-4 h-4 opacity-90" draggable={false} />
          </div>

          <VSep />

          <div className="flex items-center gap-1">
            <IconBtn src="/icons/Frame (6).svg" alt="Gras" />
            <IconBtn src="/icons/Frame (7).svg" alt="Italique" />
            <IconBtn src="/icons/Frame (8).svg" alt="Souligné" />
          </div>

          <VSep />

          <div className="flex items-center gap-1">
            <IconBtn src="/icons/Frame (9).svg" alt="Align" />
            <img src="/icons/chevron.svg" alt="" className="w-4 h-4 opacity-90" draggable={false} />
            <IconBtn src="/icons/liste.svg" alt="Liste" />
            <IconBtn src="/icons/Frame (10).svg" alt="Liste numérotée" />
          </div>
        </Pill>
      </div>

      {/* editor block (200px) */}
      <div
        className={cn(
          "w-full h-[200px] rounded-[24px]",
          "bg-white/[0.10]",
          "p-4",
          "flex items-start justify-between gap-6"
        )}
      >
        {/* top-left placeholder */}
        <div className="pt-2 pl-2">
          <div className="text-white/60 text-[14px]" style={{ fontFamily: "Outfit, system-ui" }}>
            Modifier une note...
          </div>
        </div>

        {/* save button */}
        <div className="flex items-end">
          <button
            type="button"
            className={cn(
              "h-[48px] px-6 rounded-full",
              "bg-[#87DFFF] border border-white/20",
              "text-[#001827] font-bold text-[14px] leading-[150%]",
              "shadow-[0px_2px_24px_rgba(0,0,0,0.12)]",
              "hover:brightness-95 active:brightness-90 transition",
              "whitespace-nowrap"
            )}
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </section>
  );
}
