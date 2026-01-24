"use client";

import React, { useState } from "react";
import Image from "next/image";
function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function CopilotInput({
  placeholder = "Demander à Valfred...",
  onSend,
  className,
}: {
  placeholder?: string;
  onSend: (message: string) => void;
  className?: string;
}) {
  const [value, setValue] = useState("");

  function submit() {
    const msg = value.trim();
    if (!msg) return;
    onSend(msg);
    setValue("");
  }

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "relative w-full h-[120px]",
          "rounded-[24px]",
          "bg-white/[0.10] border border-white/20",
          "p-4"
        )}
      >
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full h-full resize-none",
            "bg-transparent outline-none",
            "text-[16px] leading-[150%]",
            "text-white/60 placeholder:text-white/60",
            "font-bricolage",
            "pr-[220px]",
            "whitespace-pre-wrap break-words",
            "overflow-y-auto scrollbar-hidden"
          )}
          style={{
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
        />

        {/* Actions */}
        <div className="absolute right-4 bottom-4 flex items-center gap-2">
          <IconCircleButton ariaLabel="Ajouter">
            <Image src="/icons/plus.svg" alt="" width={16} height={16} />
          </IconCircleButton>

          <IconCircleButton ariaLabel="Micro">
            <Image src="/icons/micro.svg" alt="" width={16} height={16} />
          </IconCircleButton>

          <button
            type="button"
            onClick={submit}
            className={cn(
              "w-[92px] h-[40px]",
              "rounded-full bg-[#87DFFF]",
              "flex items-center justify-center gap-2",
              "text-[14px] font-semibold text-[#032134]",
              "shadow-[0px_1px_3px_rgba(0,0,0,0.2)]",
              "font-bricolage"
            )}
          >
            Send
            <Image src="/icons/fleche.svg" alt="" width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function IconCircleButton({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={cn(
        "w-[40px] h-[40px]",
        "rounded-full",
        "bg-white/[0.06]",
        "border border-white/10",
        "grid place-items-center",
        "hover:bg-white/[0.10] transition"
      )}
    >
      {children}
    </button>
  );
}
