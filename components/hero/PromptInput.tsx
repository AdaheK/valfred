"use client";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function PromptInput() {
  return (
    <div className="w-full max-w-[682px]">
      {/* Container : 682 x 120, radius 24, padding 16, bg background-10 */}
      <div
        className={cn(
          "relative",
          "w-full h-[120px]",
          "rounded-[24px]",
          "bg-white/[0.10]",
          "border border-white/20",
          "p-4"
        )}
      >
        {/* Placeholder line : 16px, white/60 */}
        {/* On utilise un input/textarea 1 ligne sans scroll */}
        <input
          type="text"
          placeholder="Demander à Valfred..."
          className={cn(
            "w-full",
            "bg-transparent outline-none",
            "text-[16px] leading-[150%]",
            "text-white/60 placeholder:text-white/60",
            // évite tout débordement visuel
            "pr-[220px]" // laisse la place à droite pour les actions
          )}
          style={{ fontFamily: "Bricolage Grotesque, system-ui" }}
        />

        {/* Actions : alignées à droite, en bas, comme Figma */}
        <div className="absolute right-4 bottom-4 flex items-center gap-2">
          {/* + */}
          <IconCircleButton ariaLabel="Ajouter">
            <img src="/icons/plus.svg" alt="" className="w-4 h-4" />
          </IconCircleButton>

          {/* micro */}
          <IconCircleButton ariaLabel="Micro">
            <img src="/icons/micro.svg" alt="" className="w-4 h-4" />
          </IconCircleButton>

          {/* send : 92x40 */}
          <button
            type="button"
            className={cn(
              "w-[92px] h-[40px]",
              "rounded-full",
              "bg-[#87DFFF]",
              "px-4 py-[10px]",
              "flex items-center justify-center gap-2",
              "text-[14px] font-semibold",
              "text-[#032134]",
              "shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]"
            )}
            style={{ fontFamily: "Bricolage Grotesque, system-ui" }}
          >
            Send
            <img src="/icons/fleche.svg" alt="" className="w-4 h-4" />
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
        // rendu “glass” léger comme Figma
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
