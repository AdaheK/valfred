"use client";

import React from "react";
import { useRouter } from "next/navigation";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type NoteRow = {
  company: string;
  title: string;
  detail: string;
  href: string;
};

export function NoteRelated() {
  const router = useRouter();

  const rows: NoteRow[] = [
    {
      company: "Decathlon",
      title: "Debrief de call – ce qui a vraiment compté",
      detail: "Le besoin est clair, le frein est interne (validation N+1).",
      href: "/clients/1",
    },
    {
      company: "Decathlon",
      title: "Analyse avant prospection",
      detail: "Sensible aux preuves concrètes, peu au discours créatif.",
      href: "/clients/2",
    },
    {
      company: "Decathlon",
      title: "Pourquoi la relance bloque",
      detail: "Trop de propositions envoyées, manque de différenciation.",
      href: "/clients/3",
    },
  ];

  return (
    <section className="w-full">
      <div className="flex items-center justify-between">
        <div
          className="text-white font-bold text-[20px] leading-[120%] tracking-[-0.02em]"
          style={{ fontFamily: "Outfit, system-ui" }}
        >
          Mes notes associées
        </div>

        <button
          type="button"
          className={cn(
            "h-[40px] px-4 rounded-full",
            "bg-white/[0.05] border border-white/20",
            "flex items-center gap-2",
            "hover:bg-white/[0.07] transition"
          )}
          style={{ fontFamily: "Outfit, system-ui" }}
        >
          <span className="text-white text-[14px] leading-[150%] font-normal">Filtrer</span>
          <img src="/icons/filtre.svg" alt="" className="w-4 h-4 opacity-90" />
        </button>
      </div>

      <div className="mt-4">
        <div className="h-px bg-white/10" />

        {rows.map((n) => (
          <button
            key={n.href}
            type="button"
            onClick={() => router.push(n.href)}
            className={cn(
              "w-full text-left",
              "py-5",
              "border-b border-white/10",
              "flex items-start justify-between gap-6",
              "hover:bg-white/[0.03] transition"
            )}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="text-[16px] font-bold leading-[150%]"
                  style={{ fontFamily: "Outfit, system-ui", color: "rgba(135,223,255,1)" }}
                >
                  {n.company}
                </span>
                <span className="inline-block w-[4px] h-[4px] rounded-full bg-white" />
                <span
                  className="text-white text-[16px] font-bold leading-[150%] truncate"
                  style={{ fontFamily: "Outfit, system-ui" }}
                >
                  {n.title}
                </span>
              </div>

              <div
                className="mt-2 text-white/60 text-[14px] leading-[150%]"
                style={{ fontFamily: "Outfit, system-ui" }}
              >
                {n.detail}
              </div>
            </div>

            <img src="/icons/fleche_fine.svg" alt="" className="w-4 h-4 opacity-90 mt-2 shrink-0" />
          </button>
        ))}
      </div>
    </section>
  );
}
