import { PromptInput } from "@/components/hero/PromptInput"
import { PromptSuggestions } from "@/components/hero/PromptSuggestions"

export function Hero() {
  return (
    <section className="max-w-4xl mx-auto text-center space-y-8">
      <h1 className="text-3xl font-semibold">
        Bonjour, comment je peux t’aider ?
      </h1>

      <PromptInput />
      <PromptSuggestions />
    </section>
  )
}
