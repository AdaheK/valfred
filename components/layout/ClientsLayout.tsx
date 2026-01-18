"use client";

import React from "react";

export function ClientsLayout({
  children,
  copilot,
}: {
  children: React.ReactNode;
  copilot: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      {/* Colonne gauche : Clients */}
      <div className="w-[750px] pl-6 pr-6">
        {children}
      </div>

      {/* 👉 Bordure ici */}
      <div className="w-px bg-white/20" />

      {/* Colonne droite : Copilot */}
      <div className="w-[353px]">
        {copilot}
      </div>
    </div>
  );
}
