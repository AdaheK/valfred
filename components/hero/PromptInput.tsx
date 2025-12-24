"use client";

export function PromptInput() {
  return (
    <div
      className="
        mx-auto
        w-full max-w-2xl
        rounded-2xl
        bg-white/[0.06]
        border border-white/10
        backdrop-blur-md
        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
      "
    >
      <div className="flex items-center gap-3 px-5 py-4">
        <input
          placeholder="Demander à Valfred..."
          className="
            flex-1 bg-transparent outline-none
            text-white/85 placeholder:text-white/35
            text-[13px]
          "
        />

        {/* actions */}
        <div className="flex items-center gap-2">
          <IconButton ariaLabel="Ajouter">+</IconButton>
          <IconButton ariaLabel="Micro">
            <MicIcon />
          </IconButton>

          <button
            className="
              h-9 px-4 rounded-full
              bg-[#87DFFF]
              text-[#041b2a]
              text-[12px] font-semibold
              hover:brightness-95 transition
              flex items-center gap-2
            "
          >
            Send <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

function IconButton({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className="
        h-9 w-9 rounded-full
        bg-white/[0.06]
        border border-white/10
        text-white/75
        hover:bg-white/[0.10] hover:text-white/90
        transition
        grid place-items-center
      "
      type="button"
    >
      {children}
    </button>
  );
}

function MicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19 11a7 7 0 0 1-14 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 18v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 21h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}