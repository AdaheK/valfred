const suggestions = [
  "Aidez-moi à rédiger un email",
  "Je veux analyser un document",
  "Je veux créer une landing page",
]

export function PromptSuggestions() {
  return (
    <div className="flex flex-wrap justify-center gap-3 text-sm">
      {suggestions.map((s) => (
        <button
          key={s}
          className="rounded-full bg-slate-800 px-4 py-2 hover:bg-slate-700"
        >
          {s}
        </button>
      ))}
    </div>
  )
}
