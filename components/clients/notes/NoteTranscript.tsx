"use client";

import React from "react";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function NoteTranscript() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-2">
        <img src="/icons/Frame (9).svg" alt="" className="w-5 h-5" draggable={false} />
        <div
          className="text-white font-bold text-[20px] leading-[120%] tracking-[-0.02em]"
          style={{ fontFamily: "Outfit, system-ui" }}
        >
          Retranscription de l’appel
        </div>
      </div>

      <div className="mt-6 space-y-8">
        {[
          {
            role: "Sales",
            text: "Bonjour, merci pour votre temps aujourd’hui. Pour commencer, pouvez-vous me dire quels sont vos enjeux prioritaires en ce moment sur la partie commerciale ?",
          },
          {
            role: "Client",
            text: "Aujourd’hui, notre principal enjeu, c’est vraiment l’efficacité des équipes terrain. On a beaucoup d’échanges, mais on a du mal à capitaliser correctement sur les informations remontées.",
          },
          {
            role: "Sales",
            text: "D’accord. Et quand vous parlez de capitalisation, est-ce que c’est plutôt sur le suivi des opportunités, la transmission des informations ou la prise de décision ?",
          },
          {
            role: "Client",
            text: "Un peu tout à la fois. On perd parfois des éléments clés entre les appels, et ça complique les arbitrages derrière.",
          },
        ].map((m, idx) => (
          <div key={idx} className="grid grid-cols-[8px_minmax(0,1fr)] gap-4">
            <div className="w-[2px] bg-white/10 rounded-full mt-1" />
            <div>
              <div
                className="text-white font-bold text-[18px] leading-[120%] tracking-[-0.02em]"
                style={{ fontFamily: "Outfit, system-ui" }}
              >
                {m.role}
              </div>
              <div
                className="mt-2 text-white/80 text-[16px] leading-[150%]"
                style={{ fontFamily: "Outfit, system-ui" }}
              >
                {m.text}
              </div>
            </div>
          </div>
        ))}

        {/* partial line visible before button */}
        <div className="grid grid-cols-[8px_minmax(0,1fr)] gap-4 opacity-30">
          <div className="w-[2px] bg-white/10 rounded-full mt-1" />
          <div>
            <div
              className="text-white font-bold text-[18px] leading-[120%] tracking-[-0.02em]"
              style={{ fontFamily: "Outfit, system-ui" }}
            >
              Sales
            </div>
            <div
              className="mt-2 text-white/80 text-[16px] leading-[150%]"
              style={{ fontFamily: "Outfit, system-ui" }}
            >
              Je vois. Et aujourd’hui, qui intervient dans la validation finale quand un projet de ce type est envisagé ?
            </div>
          </div>
        </div>

        <button
          type="button"
          className={cn(
            "w-full h-[56px] rounded-full",
            "bg-white/[0.05] border border-white/20",
            "flex items-center justify-center gap-2",
            "hover:bg-white/[0.07] transition"
          )}
          style={{ fontFamily: "Outfit, system-ui" }}
        >
          <span className="text-white text-[14px]">Afficher plus</span>
          <img src="/icons/chevron.svg" alt="" className="w-4 h-4 opacity-90 rotate-180" />
        </button>
      </div>
    </section>
  );
}
