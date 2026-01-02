const suggestions = [
  "Hier j’ai analysé ton call avec tel prospect, voici mes feedbacks.",
  "J’ai vu que tu vas prospecter Décathlon, voici des insights à prendre en compte.",
  "Hier j’ai analysé ton call avec tel prospect, voici mes feedbacks",
];

export function PromptSuggestions() {
  return (
    <div className="w-full max-w-[682px] flex flex-col gap-2">
      <p
        className="text-[12px] uppercase text-white/60 tracking-[0.1em]"
        style={{
          fontFamily: "Bricolage Grotesque, system-ui",
          fontWeight: 500,
        }}
      >
        SUGGESTIONS DE VALFRED
      </p>

      <div className="w-full">
        {suggestions.map((s, i) => (
          <button
            key={i}
            type="button"
            className="
              w-full h-[64px]
              flex items-center gap-6
              px-4
              text-left
              border-b border-white/10
              rounded-lg
              cursor-pointer
              hover:bg-white/[0.06]
              transition-colors duration-200
            "
          >
            <img
              src="/icons/Exclude.svg"
              alt=""
              className="w-4 h-4 shrink-0 opacity-95"
            />

            <span
              className="flex-1 text-[16px] leading-[150%] text-white"
              style={{
                fontFamily: "Bricolage Grotesque, system-ui",
                fontWeight: 400,
              }}
            >
              {s}
            </span>

            <img
              src="/icons/fleche_fine.svg"
              alt=""
              className="w-4 h-4 shrink-0 opacity-80"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
