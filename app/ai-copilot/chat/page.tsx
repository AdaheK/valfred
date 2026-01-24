"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CopilotInput } from "@/components/ai-copilot/CopilotInput";
import { CopilotChat, ChatMessage } from "@/components/ai-copilot/CopilotChat";

export default function AICopilotChatPage() {
  const params = useSearchParams();
  const router = useRouter();

  const initialUserMessage = useMemo(() => params.get("m") ?? "", [params]);

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (!initialUserMessage) return [];
    return [
      { id: "u-1", role: "user", text: initialUserMessage },
      {
        id: "a-1",
        role: "assistant",
        text:
          "Notre solution a permis à des enseignes similaires d’améliorer leur marge et d’augmenter leurs ventes de +32% en 8 semaines. On peut regarder ensemble comment obtenir le même résultat pour vous ?",
      },
    ];
  });

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // ✅ Auto-scroll en bas (comme un chat)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function handleSend(text: string) {
    const userMsg: ChatMessage = { id: `u-${Date.now()}`, role: "user", text };
    const assistantMsg: ChatMessage = {
      id: `a-${Date.now()}`,
      role: "assistant",
      text:
        "Notre solution a permis à des enseignes similaires d’améliorer leur marge et d’augmenter leurs ventes de +32% en 8 semaines. On peut regarder ensemble comment obtenir le même résultat pour vous ?",
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    router.replace("/ai-copilot/chat");
  }

  return (
    // ✅ aucun scroll global
    <div className="w-full h-[calc(100vh-64px)] overflow-hidden">
      {/* ✅ container centré */}
      <div className="mx-auto w-full max-w-[960px] px-6 h-full flex flex-col">
        {/* ✅ IMPORTANT: min-h-0 pour que l'overflow marche en flex */}
        <div className="flex-1 min-h-0 flex flex-col">
          {/* ====== ZONE CONVERSATION (SEULE PARTIE SCROLLABLE) ====== */}
          <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto pt-8 pb-6">
            <div className="w-full max-w-[780px] mx-auto">
              <CopilotChat messages={messages} />
            </div>
          </div>

          {/* ====== INPUT FIXE (NE SCROLL PAS) ====== */}
          <div className="pb-8">
            <div className="w-full max-w-[780px] mx-auto">
              <CopilotInput onSend={handleSend} />
              <div className="mt-3 text-white/40 text-[10px] text-center font-outfit">
                ChatGPT peut faire des erreurs. Vérifiez les informations importantes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
