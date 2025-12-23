export function BattleCards() {
  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="mb-8 text-xl font-semibold text-center">
        Battle cards
      </h2>

      <div className="flex justify-center gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-64 h-40 rounded-xl bg-slate-800 flex items-center justify-center"
          >
            Carte {i}
          </div>
        ))}
      </div>
    </section>
  )
}
