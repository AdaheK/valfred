"use client";

import React from "react";
import Image from "next/image";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function NoteCopilotPanel() {
  return (
    // ✅ IMPORTANT: le parent DOIT avoir une vraie hauteur (ex: h-full avec un wrapper h-[calc(100vh-64px)])
    <div className="h-full flex flex-col px-6 py-6">
      {/* ===== CONTENU HAUT ===== */}
      <div className="max-w-[280px] w-full min-h-0">
        <div className="space-y-6">
          <Suggestion
            active={false}
            title="💡Suggestion #1"
            text="Sensible aux preuves concrètes, peu au discours créatif."
          />
          <Suggestion
            active={false}
            title="💡Suggestion #2"
            text="Frein interne évoqué : qui valide côté N+1 ?"
          />
          <Suggestion
            active
            title="💡Suggestion #3"
            text="Besoin clair : proposez un cas client + ROI."
          />

          {/* Boutons actions */}
          <div className="pt-1 flex flex-col gap-3">
            <button
              type="button"
              className={cn(
                "h-[40px] w-fit",
                "px-4 rounded-full",
                "border border-white/20 bg-white/[0.05]",
                "flex items-center gap-2",
                "hover:bg-white/[0.07] active:bg-white/[0.09] transition",
                "font-outfit"
              )}
            >
              <Image
                src="/icons/note.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
                draggable={false}
              />
              <span className="text-white font-bold text-[14px] leading-[150%]">
                Ajouter à la note
              </span>
            </button>

            <button
              type="button"
              className={cn(
                "h-[40px] w-fit",
                "px-4 rounded-full",
                "border border-white/20 bg-white/[0.05]",
                "flex items-center gap-2",
                "hover:bg-white/[0.07] active:bg-white/[0.09] transition",
                "font-outfit"
              )}
            >
              <Image
                src="/icons/plus.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
                draggable={false}
              />
              <span className="text-white font-bold text-[14px] leading-[150%]">
                Créer une action
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== INPUT COLLÉ EN BAS ===== */}
      <div className="mt-auto pt-6">
        <div className="w-full rounded-[16px] bg-white/[0.08] border border-white/10 px-4 pt-4 pb-3">
          <div className="text-white/60 text-[14px] font-outfit">
            Demander à Valfred...
          </div>

          <div className="mt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-white/[0.12] grid place-items-center"
            >
              <Image
                src="/icons/smiley.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
                draggable={false}
              />
            </button>

            <button
              type="button"
              className="w-10 h-10 rounded-full bg-white/[0.12] grid place-items-center"
            >
              <Image
                src="/icons/micro.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
                draggable={false}
              />
            </button>

            <button
              type="button"
              className="w-10 h-10 rounded-full bg-[#87DFFF] grid place-items-center"
            >
              <Image
                src="/icons/envoyer.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
                draggable={false}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Suggestion({
  active,
  title,
  text,
}: {
  active?: boolean;
  title: string;
  text: string;
}) {
  return (
    <div className={cn(!active && "opacity-40")}>
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-[14px] leading-[150%] font-outfit">
          {title}
        </span>
      </div>

      <p
        className={cn(
          "mt-2",
          active ? "text-white" : "text-white/90",
          "text-[16px] leading-[150%] font-outfit"
        )}
      >
        {text}
      </p>
    </div>
  );
}
