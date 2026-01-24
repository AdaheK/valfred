"use client";

import React from "react";
function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

export function CopilotChat({
  messages,
  className,
}: {
  messages: ChatMessage[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col h-full", className)}>
      {/* === Conversation (scroll uniquement ici, fond transparent) === */}
      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="mx-auto max-w-[860px] px-6 py-10 space-y-8">
          {messages.map((m) => {
            const isUser = m.role === "user";

            return (
              <div
                key={m.id}
                className={cn(
                  "flex w-full",
                  isUser ? "justify-end" : "justify-start"
                )}
              >
                {isUser ? (
                  <div
                    className="max-w-[520px] rounded-[14px] px-4 py-3"
                    style={{
                      background:
                        "linear-gradient(98.46deg, #87DFFF 0%, #DAF5FF 100%)",
                    }}
                  >
                    <p
                      className="text-[14px] leading-[150%] whitespace-pre-wrap break-words"
                      style={{
                        fontFamily: "Bricolage Grotesque, system-ui",
                        fontWeight: 400,
                        color: "rgba(6, 39, 60, 1)",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {m.text}
                    </p>
                  </div>
                ) : (
                  <div className="max-w-[720px]">
                    <p
                      className="text-[14px] leading-[150%] whitespace-pre-wrap break-words"
                      style={{
                        fontFamily: "Bricolage Grotesque, system-ui",
                        fontWeight: 400,
                        color: "rgba(255,255,255,1)",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {m.text}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
