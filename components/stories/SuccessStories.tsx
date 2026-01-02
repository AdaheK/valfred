"use client";

import React from "react";

type SuccessStory = {
  id: string;
  imageSrc: string;
  brandLogoSrc: string;
  title: string;
  consultations: string;
  deltaPercent: string;
  deltaRest: string;
  deltaTone: "up" | "down";
  ctaLabel?: string;
};

function SuccessStoryCard({ item }: { item: SuccessStory }) {
  const isUp = item.deltaTone === "up";

  return (
    <div
      className="
        w-full
        rounded-[24px]
        bg-[rgba(255,255,255,0.06)]
        border border-[rgba(255,255,255,0.10)]
        shadow-[0px_20px_60px_rgba(0,0,0,0.25)]
        backdrop-blur-[16px]
        p-4
      "
    >
      {/* Image */}
      <div className="relative w-full h-[150px] rounded-[16px] overflow-hidden">
        <img
          src={item.imageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.40)_100%)]" />

        <img
          src={item.brandLogoSrc}
          alt=""
          className="absolute left-3 bottom-3 h-auto w-auto opacity-95"
        />
      </div>

      {/* Text block */}
      <div className="mt-4">
        <h3
          className="
            font-['Bricolage_Grotesque']
            font-bold
            text-[18px]
            leading-[120%]
            tracking-[-0.02em]
            text-white
          "
        >
          {item.title}
        </h3>

        <div
          className="
            mt-3
            font-['Bricolage_Grotesque']
            font-normal
            text-[14px]
            leading-[150%]
            text-white/70
          "
        >
          {item.consultations}
        </div>

        <div className="mt-2 flex items-center gap-2">
          <img
            src={isUp ? "/icons/up.svg" : "/icons/down.svg"}
            alt=""
            className="w-[16px] h-[16px] opacity-100"
          />

          <div
            className="
              font-['Bricolage_Grotesque']
              font-normal
              text-[14px]
              leading-[150%]
              text-white
              whitespace-nowrap
            "
          >
            <span className={isUp ? "text-emerald-400" : "text-rose-400"}>
              {item.deltaPercent}
            </span>{" "}
            <span className="text-white">{item.deltaRest}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          className="
            mt-4
            w-full
            h-[44px]
            rounded-full
            bg-[rgba(255,255,255,0.9)]
            text-[rgba(3,33,52,1)]
            text-[13px]
            font-semibold
            shadow-[0px_2px_40px_rgba(0,0,0,0.10)]
            hover:brightness-95
            transition
          "
        >
          {item.ctaLabel ?? "Voir la success story"}
        </button>
      </div>
    </div>
  );
}

export function SuccessStories() {
  const items: SuccessStory[] = [
    {
      id: "decathlon",
      brandLogoSrc: "/icons/Calque_Deca.svg",
      imageSrc: "/icons/Deca.svg",
      title: "Retail : +32% de ventes en 8 semaines",
      consultations: "46 consultations",
      deltaPercent: "+6%",
      deltaRest: "ces 7 derniers jours",
      deltaTone: "up",
    },
    {
      id: "qonto",
      brandLogoSrc: "/icons/Calque_Qonto.svg",
      imageSrc: "/icons/Qonto.svg",
      title: "Réduction du churn de 18% chez un éditeur SaaS",
      consultations: "214 consultations",
      deltaPercent: "-3%",
      deltaRest: "ces 7 derniers jours",
      deltaTone: "down",
    },
    {
      id: "ca",
      brandLogoSrc: "/icons/Calque_CA.svg",
      imageSrc: "/icons/CA.svg",
      title: "Supply chain : -21 jours sur les délais",
      consultations: "422 consultations",
      deltaPercent: "-5%",
      deltaRest: "ces 7 derniers jours",
      deltaTone: "down",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <img
          src="/icons/image 8.svg"
          alt=""
          className="w-[24px] h-[24px] opacity-100"
        />
        <h2
          className="
            font-['Bricolage_Grotesque']
            font-bold
            text-[20px]
            leading-[120%]
            tracking-[-0.02em]
            text-white
          "
        >
          Success Stories
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <SuccessStoryCard key={item.id} item={item} />
        ))}
      </div>

      {/* ✅ Bottom button transparent (comme battlecards) */}
      <div className="mt-8 flex justify-center">
        <button
          className="
            flex items-center gap-[8px]
            w-[260px] h-[40px]
            px-[16px] py-[8px]
            rounded-full
            bg-transparent
            font-['Bricolage_Grotesque']
            text-[14px]
            font-medium
            text-white
            hover:opacity-90
            transition
          "
        >
          Voir toutes les success stories <span className="text-[16px]">→</span>
        </button>
      </div>
    </section>
  );
}
