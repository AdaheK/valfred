export function StoryCard() {
  return (
    <div className="rounded-xl bg-slate-800/60 p-4">
      <div className="h-32 rounded-lg bg-slate-700 mb-4" />
      <h3 className="font-semibold">Retail</h3>
      <p className="text-sm text-slate-300 mt-2">
        +12% de ventes en 3 semaines
      </p>
      <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-sm">
        Voir le cas client
      </button>
    </div>
  )
}
