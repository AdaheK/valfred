import { PromptInput } from "@/components/hero/PromptInput";
import { PromptSuggestions } from "@/components/hero/PromptSuggestions";

export function Hero() {
  return (
    <section className="pt-4">
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
        <img src="/icons/Exclude.svg" alt="logo" className="h-9 w-9" />

          <h1
            className="
              w-[650px] max-w-full
              whitespace-nowrap
              text-[38px] leading-[1.35]
              font-extrabold
              tracking-[-0.02em]
              bg-gradient-to-r from-[#87DFFF] to-white
              bg-clip-text text-transparent
            "
            style={{ fontFamily: 'Bricolage Grotesque, ui-sans-serif, system-ui' }}
          >
            Bonjour, comment je peux t’aider ?
          </h1>
      </div>

        <PromptInput />
        <div className="pt-6">
          <PromptSuggestions />
        </div>
      </div>
    </section>
  );
}
