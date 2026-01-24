"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CopilotInput } from "@/components/ai-copilot/CopilotInput";
import { CopilotSuggestions } from "@/components/ai-copilot/CopilotSuggestions";

export default function AICopilotPage() {
  const router = useRouter();

  const suggestions = [
    "Hier j’ai analysé ton call avec tel prospect, voici mes feedbacks.",
    "J’ai vu que tu vas prospecter Décathlon, voici des insights à prendre en compte.",
    "Hier j’ai analysé ton call avec tel prospect, voici mes feedbacks",
  ];

  return (
    // 🌌 fond full width
    <div className="w-full h-full pt-8">
      {/* 🎯 container CENTRAL resserré */}
      <div className="mx-auto w-full max-w-[960px] px-6 flex flex-col items-center">
        
        {/* ===== TITRE ===== */}
        <h1 className="font-outfit font-bold text-[42px] tracking-[-0.02em]">
        <span
            className="inline-block pb-[6px] bg-clip-text text-transparent leading-[100%]"
            style={{
            backgroundImage:
                "linear-gradient(90deg, #0281FF 0%, #DA98CC 50%, #FFFFFF 100%)",
            }}
        >
            Bonjour William
        </span>
        </h1>

        {/* ===== INPUT (RÉDUIT) ===== */}
        <div className="mt-5 w-full max-w-[780px]">
          <CopilotInput
            onSend={(message) =>
              router.push(`/ai-copilot/chat?m=${encodeURIComponent(message)}`)
            }
          />
        </div>

        {/* ===== SUGGESTIONS (MÊME LARGEUR QUE INPUT) ===== */}
        <div className="mt-8 w-full max-w-[780px]">
          <CopilotSuggestions
            items={suggestions}
            onPick={(text) =>
              router.push(`/ai-copilot/chat?m=${encodeURIComponent(text)}`)
            }
          />
        </div>
      </div>
    </div>
  );
}
