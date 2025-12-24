const suggestions = [
  "Hier j’ai analysé ton call avec tel prospect, voici mes feedbacks.",
  "J’ai vu que tu vas prospecter Décathlon, voici des insights à prendre en compte.",
  "Hier j’ai analysé ton call avec tel prospect, voici mes feedbacks",
];

export function PromptSuggestions() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <p className="text-[10px] tracking-[0.18em] text-white/40 mb-3">
        SUGGESTIONS DE VALFRED
      </p>

      <div className="divide-y divide-white/10">
        {suggestions.map((s, i) => (
          <button
            key={i}
            type="button"
            className="
              w-full flex items-center gap-3
              py-4
              text-left
              hover:bg-white/[0.03]
              transition
              rounded-xl
              px-2
            "
          >
            <SparkIcon />
            <span className="flex-1 text-[13px] text-white/80">{s}</span>
            <RightArrow />
          </button>
        ))}
      </div>
    </div>
  );
}

function SparkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#87DFFF]">
      <path
        d="M12 2l1.6 6.1L20 10l-6.4 1.9L12 18l-1.6-6.1L4 10l6.4-1.9L12 2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RightArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/35">
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
