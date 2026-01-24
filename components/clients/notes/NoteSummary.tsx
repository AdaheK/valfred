"use client";

import React from "react";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function NoteSummary() {
  return (
    <section className={cn("w-full rounded-[24px]", "bg-white/[0.06]", "p-6")}>
      <div className="flex items-center gap-2">
        <img src="/icons/resume_valfred.svg" alt="" className="w-5 h-5" draggable={false} />
        <div
          className="text-[20px] font-bold leading-[120%] tracking-[-0.02em]"
          style={{
            fontFamily: "Outfit, system-ui",
            background: "linear-gradient(90deg, #87DFFF 0%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Résumé par Valfred
        </div>
      </div>

      <div className="mt-5 space-y-5">
        {[
          { t: "Objectifs", p: "Qualifier le besoin et évaluer la capacité du client à engager un projet à court terme." },
          {
            t: "Contexte",
            p: "Le client cherche à améliorer l’efficacité de ses équipes commerciales et à structurer davantage le suivi des opportunités.",
          },
          {
            t: "Frein principal identifié",
            p: "La décision finale dépend d’une validation interne (niveau N+1), encore non impliquée à ce stade.",
          },
          {
            t: "Signaux positifs détectés",
            p: "• Intérêt marqué pour une solution structurante\n• Problématiques clairement formulées\n• Ouverture à une phase de test ou de cadrage",
          },
          {
            t: "Recommandation Valfred",
            p: "Impliquer rapidement le décideur final et appuyer la proposition avec un cas client concret (ROI).",
          },
        ].map((b) => (
          <div key={b.t}>
            <div
              className="text-white font-bold text-[18px] leading-[120%] tracking-[-0.02em]"
              style={{ fontFamily: "Outfit, system-ui" }}
            >
              {b.t}
            </div>
            <div
              className="mt-1 whitespace-pre-line text-white/80 text-[16px] leading-[150%]"
              style={{ fontFamily: "Outfit, system-ui" }}
            >
              {b.p}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
