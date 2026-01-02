import { PromptInput } from "@/components/hero/PromptInput";
import { PromptSuggestions } from "@/components/hero/PromptSuggestions";

export function Hero() {
  return (
    <section className="pt-4">
      <div className="mx-auto w-full max-w-[1126px]">
        {/* Groupe (titre + input + suggestions) empilé */}
        <div className="mx-auto flex w-full flex-col items-center gap-10">
          {/* ===== Titre (698x42) ===== */}
          <div className="flex w-full max-w-[698px] items-center justify-center gap-3">
            <img src="/icons/Exclude.svg" alt="logo" className="h-9 w-9" />
            <h1
              className="
                text-center
                text-[38px] leading-[42px]
                font-extrabold
                text-[#BFEFFF]
                whitespace-nowrap
              "
              style={{ fontFamily: "Bricolage Grotesque, system-ui" }}
            >
              Bonjour, comment je peux t’aider ?
            </h1>
          </div>

          {/* ===== Input (682x120) ===== */}
          <div className="w-full flex justify-center">
            <PromptInput />
          </div>

          {/* ===== Suggestions (682x218) ===== */}
          <div className="w-full flex justify-center">
            <PromptSuggestions />
          </div>
        </div>
      </div>
    </section>
  );
}
