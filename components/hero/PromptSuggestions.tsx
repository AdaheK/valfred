const suggestions = [
  "Hier j’ai analysé ton call avec tel prospect, voici mes feedbacks.",
  "J’ai vu que tu vas prospecter Décathlon, voici des insights à prendre en compte.",
  "Hier j’ai analysé ton call avec tel prospect, voici mes feedbacks",
];

export function PromptSuggestions() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <p className="text-left text-[10px] tracking-[0.18em] text-white/40 mb-4">
        SUGGESTIONS DE VALFRED
      </p>

      <div className="border-t border-white/10">
        {suggestions.map((s, i) => (
          <button
            key={i}
            type="button"
            className="
              w-full
              flex items-center gap-3
              py-4
              text-left
              border-b border-white/10
              hover:bg-white/[0.03]
              transition
            "
          >
            <img
              src="/icons/Exclude.svg"
              alt=""
              className="h-4 w-4 shrink-0 opacity-95"
            />

            <span className="flex-1 text-[13px] text-white/80 leading-relaxed">
              {s}
            </span>

            <img
              src="/icons/fleche_fine.svg"
              alt=""
              className="h-4 w-4 shrink-0 opacity-60"
            />
          </button>
        ))}
      </div>
    </div>
  );
}