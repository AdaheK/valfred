export function PromptInput() {
  return (
    <div className="relative">
      <input
        placeholder="Décrivez votre besoin..."
        className="w-full rounded-xl bg-slate-800 px-5 py-4 pr-14 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-blue-600 px-3 py-2 text-sm">
        Envoyer
      </button>
    </div>
  )
}
