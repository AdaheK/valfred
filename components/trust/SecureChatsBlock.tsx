"use client";

import React from "react";

/* ================= TYPES ================= */

type SecureChatRow = {
  id: string;

  // LEFT – images
  topAvatarImgSrc: string;
  topName: string;
  topSubtitle: string;

  middleConnectorImgSrc: string;

  bottomAvatarImgSrc: string;
  bottomName: string;
  bottomSubtitle: string;

  // RIGHT
  title: string;
  statusLabel: string;
  statusTone: "pending" | "positive" | "negative";
  timeText: string;

  actionIconSrc: string;
  actionText: string;
};

/* ================= STATUS ================= */

function StatusText({
  tone,
  label,
}: {
  tone: SecureChatRow["statusTone"];
  label: string;
}) {
  const color =
    tone === "positive"
      ? "text-emerald-400"
      : tone === "negative"
      ? "text-rose-400"
      : "text-amber-400";

  return (
    <span
      className={`font-['Bricolage_Grotesque'] text-[14px] leading-[150%] ${color}`}
    >
      {label}
    </span>
  );
}

/* ================= LEFT BLOCK (3 IMAGES COLLÉES) ================= */

function PeopleCompact({
  topAvatarImgSrc,
  topName,
  topSubtitle,
  middleConnectorImgSrc,
  bottomAvatarImgSrc,
  bottomName,
  bottomSubtitle,
}: {
  topAvatarImgSrc: string;
  topName: string;
  topSubtitle: string;
  middleConnectorImgSrc: string;
  bottomAvatarImgSrc: string;
  bottomName: string;
  bottomSubtitle: string;
}) {
  return (
    <div className="flex items-start gap-3">
      {/* Images column */}
      <div className="flex flex-col items-center">
        <img
          src={topAvatarImgSrc}
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover z-10"
        />

        <img
          src={middleConnectorImgSrc}
          alt=""
          className="w-[28px] h-[28px] object-contain -mt-[6px] z-20"
        />

        <img
          src={bottomAvatarImgSrc}
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover -mt-[6px] z-10"
        />
      </div>

      {/* Text column */}
      <div className="flex flex-col">
        <div>
          <div className="font-['Bricolage_Grotesque'] text-[16px] font-semibold text-white leading-[120%]">
            {topName}
          </div>
          <div className="font-['Bricolage_Grotesque'] text-[14px] text-white/60 leading-[150%]">
            {topSubtitle}
          </div>
        </div>

        <div className="mt-[10px]">
          <div className="font-['Bricolage_Grotesque'] text-[16px] font-semibold text-white leading-[120%]">
            {bottomName}
          </div>
          <div className="font-['Bricolage_Grotesque'] text-[14px] text-white/60 leading-[150%]">
            {bottomSubtitle}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= CARD ================= */

function SecureChatCard({ row }: { row: SecureChatRow }) {
  return (
    <div
      className="
        w-full
        rounded-[16px]
        bg-[rgba(255,255,255,0.06)]
        border border-[rgba(255,255,255,0.10)]
        shadow-[0px_20px_60px_rgba(0,0,0,0.25)]
        backdrop-blur-[16px]
        px-5 py-4
      "
    >
      <div className="flex items-start gap-4">
        {/* LEFT */}
        <div className="shrink-0 w-[360px]">
          <PeopleCompact {...row} />
        </div>

        {/* RIGHT */}
        <div className="flex-1 min-w-0 pt-[2px]">
          <div className="font-['Bricolage_Grotesque'] text-[18px] font-semibold text-white leading-[120%] truncate">
            {row.title}
          </div>

          <div className="mt-1 flex items-center gap-2 font-['Bricolage_Grotesque'] text-[14px] leading-[150%]">
            <StatusText tone={row.statusTone} label={row.statusLabel} />
            <span className="text-white/30">•</span>
            <span className="text-white/60">{row.timeText}</span>
          </div>

          <div className="mt-3 flex items-center gap-2 font-['Bricolage_Grotesque'] text-[14px] leading-[150%] text-white/70">
            <img
              src={row.actionIconSrc}
              alt=""
              className="w-[16px] h-[16px] opacity-80"
            />
            <span className="truncate">{row.actionText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= BLOCK ================= */

export function SecureChatsBlock() {
  const rows: SecureChatRow[] = [
    {
      id: "1",
      topAvatarImgSrc: "/icons/TL.svg",
      topName: "Thomas L.",
      topSubtitle: "Prospect SaaS",
      middleConnectorImgSrc: "/icons/echange.svg",
      bottomAvatarImgSrc: "/icons/ambassadeur.svg",
      bottomName: "Julie D",
      bottomSubtitle: "Ambassadrice logistique",
      title: "Validation de besoin",
      statusLabel: "En attente de réponse",
      statusTone: "pending",
      timeText: "depuis 18h",
      actionIconSrc: "/icons/logo_gris.svg",
      actionText: "Relancer l’ambassadeur si aucune réponse dans 6h.",
    },
    {
      id: "2",
      topAvatarImgSrc: "/icons/MK.svg",
      topName: "Marie K.",
      topSubtitle: "Retail",
      middleConnectorImgSrc: "/icons/echange.svg",
      bottomAvatarImgSrc: "/icons/ambassadeur.svg",
      bottomName: "Nicolas P.",
      bottomSubtitle: "Ambassadeur Retail",
      title: "Mise en avant des bénéfices ROI",
      statusLabel: "Conversation positive",
      statusTone: "positive",
      timeText: "il y a 3h",
      actionIconSrc: "/icons/logo_gris.svg",
      actionText: "Associer la Success Story #01.",
    },
    {
      id: "3",
      topAvatarImgSrc: "/icons/ST.svg",
      topName: "Sofiane T.",
      topSubtitle: "Retail",
      middleConnectorImgSrc: "/icons/echange.svg",
      bottomAvatarImgSrc: "/icons/ambassadeur.svg",
      bottomName: "Claire R.",
      bottomSubtitle: "Ambassadrice SaaS",
      title: "Comparaison concurrentielle",
      statusLabel: "Refus",
      statusTone: "negative",
      timeText: "il y a 2 jours",
      actionIconSrc: "/icons/logo_gris.svg",
      actionText: "Utiliser la battlecard pricing.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <img src="/icons/image 13.svg" alt="" className="w-6 h-6" />
        <h2 className="font-['Bricolage_Grotesque'] font-bold text-[20px] leading-[120%] tracking-[-0.02em] text-white">
          Vos chats sécurisés
        </h2>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {rows.map((row) => (
          <SecureChatCard key={row.id} row={row} />
        ))}
      </div>

      {/* Bottom button */}
      <div className="mt-6 flex justify-center">
        <button
          className="
            flex items-center gap-[8px]
            w-[260px] h-[40px]
            px-[16px] py-[8px]
            rounded-full
            bg-[rgba(255,255,255,0.08)]
            backdrop-blur-[24px]
            shadow-[0px_2px_40px_rgba(0,0,0,0.10)]
            font-['Bricolage_Grotesque']
            text-[14px]
            font-medium
            text-white
            hover:bg-[rgba(255,255,255,0.12)]
            transition
          "
        >
          Voir toutes les conversations <span className="text-[16px]">→</span>
        </button>
      </div>
    </section>
  );
}
