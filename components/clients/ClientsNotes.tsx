"use client";

import React from "react";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type NoteItem = {
  company: string;
  title: string;
  subtitle: string;
};

const NOTES: NoteItem[] = [
  {
    company: "Decathlon",
    title: "Debrief de call – ce qui a vraiment compté",
    subtitle: "Le besoin est clair, le frein est interne (validation N+1).",
  },
  {
    company: "Leroy Merlin",
    title: "Analyse avant prospection",
    subtitle: "Sensible aux preuves concrètes, peu au discours créatif.",
  },
  {
    company: "PME Industrie",
    title: "Pourquoi la relance bloque",
    subtitle: "Trop de propositions envoyées, manque de différenciation.",
  },
  {
    company: "Start-up SaaS",
    title: "Préparer le prochain RDV",
    subtitle: "Attente forte sur la vision long terme.",
  },
  {
    company: "Groupe Retail",
    title: "Opportunité cachée dans l’échange",
    subtitle: "Besoin latent en marque employeur.",
  },
];

export function ClientsNotes() {
  return (
    <section className="w-full">
      {/* Title */}
      <h2
        className="text-white font-bold text-[20px] leading-[120%] tracking-[-0.02em]"
        style={{ fontFamily: "Outfit, system-ui" }}
      >
        Mes dernières notes
      </h2>

      {/* Search row (733 x 64 in figma, but responsive) */}
      <div
        className={cn(
          "mt-4 w-full",
          "h-[64px]",
          "flex items-center justify-between gap-4",
          "border-b border-white/20"
        )}
      >
        {/* Search (flex-1 so it fits inside container) */}
        <div
          className={cn(
            "flex items-center gap-2",
            "h-[40px] min-h-[36px]",
            "rounded-lg",
            "flex-1 min-w-0"
          )}
          style={{ paddingTop: 8, paddingBottom: 8 }}
        >
          {/* replace by your icon */}
          <img
            src="/icons/recherche.svg"
            alt=""
            className="w-4 h-4 opacity-80 shrink-0"
            draggable={false}
          />

          <input
            placeholder="Rechercher une note..."
            className={cn(
              "bg-transparent outline-none",
              "text-[14px] leading-[150%]",
              "text-white/80 placeholder:text-white/60",
              "w-full min-w-0"
            )}
            style={{ fontFamily: "Outfit, system-ui", fontWeight: 400 }}
          />
        </div>

        {/* Filter button */}
        <button
          type="button"
          className={cn(
            "h-[40px] shrink-0",
            "px-4 pr-3",
            "rounded-full",
            "bg-white/[0.05] border border-white/20",
            "flex items-center gap-2",
            "hover:bg-white/[0.07] active:bg-white/[0.10] transition"
          )}
        >
          <span
            className="text-white text-[14px] leading-[150%]"
            style={{ fontFamily: "Outfit, system-ui", fontWeight: 400 }}
          >
            Filtrer
          </span>
          {/* replace by your icon */}
          <img
            src="/icons/filtre.svg"
            alt=""
            className="w-4 h-4 opacity-90"
            draggable={false}
          />
        </button>
      </div>

      {/* List */}
      <div className="w-full">
        {NOTES.map((n, idx) => (
          <button
            key={idx}
            type="button"
            className={cn(
              "w-full",
              "py-5",
              "border-b border-white/10",
              "flex items-center justify-between gap-6",
              "text-left",
              "hover:bg-white/[0.03] transition",
              "min-w-0"
            )}
          >
            {/* Left text */}
            <div className="min-w-0">
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="text-[#87DFFF] font-bold text-[16px] leading-[150%] truncate"
                  style={{ fontFamily: "Outfit, system-ui" }}
                >
                  {n.company}
                </span>

                {/* white dot */}
                <span className="w-[4px] h-[4px] rounded-full bg-white/80 shrink-0" />

                <span
                  className="text-white font-bold text-[16px] leading-[150%] truncate"
                  style={{ fontFamily: "Outfit, system-ui" }}
                >
                  {n.title}
                </span>
              </div>

              <div
                className="mt-1 text-white/60 text-[14px] leading-[150%] truncate"
                style={{ fontFamily: "Outfit, system-ui", fontWeight: 400 }}
              >
                {n.subtitle}
              </div>
            </div>

            {/* Arrow right (replace by your icon) */}
            <img
              src="/icons/fleche_fine.svg"
              alt=""
              className="w-4 h-4 opacity-80 shrink-0"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
