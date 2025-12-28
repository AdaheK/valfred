"use client";

export function PromptInput() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div
        className="
          relative
          w-full
          rounded-2xl
          bg-white/[0.06]
          border border-white/10
          backdrop-blur-md
          shadow-[0_10px_30px_rgba(0,0,0,0.25)]
          overflow-hidden
        "
      >
        {/* Input (style textarea visuel, placeholder en haut) */}
        <textarea
          rows={3}
          placeholder="Demander à Valfred..."
          className="
            w-full resize-none bg-transparent
            px-5 pt-4 pb-16
            outline-none
            text-white/85 placeholder:text-white/35
            text-[13px] leading-relaxed
          "
        />

        {/* Actions (bottom-right) */}
        <div className="absolute right-4 bottom-4 flex items-center gap-2">
          {/* Bouton + */}
          <RoundIconButton ariaLabel="Ajouter">
            <img src="/icons/plus.svg" alt="" className="h-4 w-4" />
          </RoundIconButton>

          {/* Bouton micro */}
          <RoundIconButton ariaLabel="Micro">
            <img src="/icons/micro.svg" alt="" className="h-4 w-4" />
          </RoundIconButton>

          {/* Send */}
          <button
            type="button"
            className="
              h-9 px-4 rounded-full
              bg-[#87DFFF]
              text-[#041b2a]
              text-[12px] font-semibold
              hover:brightness-95 transition
              flex items-center gap-2
              shadow-[0_8px_18px_rgba(135,223,255,0.22)]
            "
          >
            Send
            <img src="/icons/fleche.svg" alt="" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function RoundIconButton({
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
      className="
        h-9 w-9 rounded-full
        bg-white/[0.06]
        border border-white/10
        hover:bg-white/[0.10]
        transition
        grid place-items-center
      "
    >
      {children}
    </button>
  );
}