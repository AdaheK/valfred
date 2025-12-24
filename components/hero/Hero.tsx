import { PromptInput } from "@/components/hero/PromptInput";
import { PromptSuggestions } from "@/components/hero/PromptSuggestions";

export function Hero() {
  return (
    <section className="pt-4">
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <img src="/icons/image 5.png" alt="logo" className="h-8 w-8" />
          <h1 className="text-[34px] leading-[1.1] font-semibold text-white">
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
