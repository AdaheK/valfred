import { PromptInput } from "@/components/hero/PromptInput";
import { PromptSuggestions } from "@/components/hero/PromptSuggestions";

export function Hero() {
  return (
    <section className="pt-4">
      <div className="mx-auto w-full max-w-[1126px]">
        {/* Groupe (titre + input + suggestions) */}
        <div className="mx-auto flex w-full flex-col items-center gap-10">
          {/* ===== Titre ===== */}
          <div className="flex w-full max-w-[698px] items-center justify-center">
            <h1
              className="
                text-center
                text-[42px]
                leading-[100%]
                font-bold
                tracking-[-0.02em]
                bg-clip-text text-transparent
                pb-[6px]
              "
              style={{
                fontFamily: "Outfit, system-ui",
                backgroundImage:
                  "linear-gradient(90deg, #0281FF 0%, #DA98CC 50%, #FFFFFF 100%)",
              }}
            >
              Bonjour, comment je peux t’aider ?
            </h1>
          </div>

          {/* ===== Input ===== */}
          <div className="w-full flex justify-center">
            <PromptInput />
          </div>

          {/* ===== Suggestions ===== */}
          <div className="w-full flex justify-center">
            <PromptSuggestions />
          </div>
        </div>
      </div>
    </section>
  );
}
