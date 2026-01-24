import Link from "next/link";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type NoteItem = {
  id: string;
  company: string;
  title: string;
  subtitle: string;
};

const notes: NoteItem[] = [
  {
    id: "decathlon-debrief",
    company: "Decathlon",
    title: "Debrief de call — ce qui a vraiment compté",
    subtitle: "Le besoin est clair, le frein est interne (validation N+1).",
  },
  {
    id: "leroymerlin-analyse",
    company: "Leroy Merlin",
    title: "Analyse avant prospection",
    subtitle: "Sensible aux preuves concrètes, peu au discours créatif.",
  },
  {
    id: "pmeindustrie-relance",
    company: "PME Industrie",
    title: "Pourquoi la relance bloque",
    subtitle: "Trop de propositions envoyées, manque de différenciation.",
  },
  {
    id: "startup-rdv",
    company: "Start-up SaaS",
    title: "Préparer le prochain RDV",
    subtitle: "Attente forte sur la vision long terme.",
  },
  {
    id: "grouperetail-opportunite",
    company: "Groupe Retail",
    title: "Opportunité cachée dans l’échange",
    subtitle: "Besoin latent en marque employeur.",
  },
  {
    id: "collectivite-objection",
    company: "Collectivité",
    title: "Analyse de l’objection prix",
    subtitle: "Le prix est un prétexte, manque de projection.",
  },
  {
    id: "prospectb2b-go",
    company: "Prospect B2B",
    title: "Doit-on vraiment y aller ?",
    subtitle: "Cycle long, faible engagement côté client.",
  },
];

export function ClientsNotes() {
  return (
    <section className="w-full min-w-0">
      {/* Title */}
      <h2
        className="text-white font-bold text-[20px] leading-[120%] tracking-[-0.02em]"
        style={{ fontFamily: "Outfit, system-ui" }}
      >
        Mes dernières notes
      </h2>

      {/* Search row (border bottom) */}
      <div className="mt-4 w-full border-b border-white/20">
        <div
          className={cn(
            "h-[64px]",
            "flex items-center justify-between",
            "py-3"
          )}
        >
          {/* Search input (443 x 40) */}
          <div
            className={cn(
              "h-[40px] w-[443px] min-w-0",
              "flex items-center gap-2",
              "py-2",
              "rounded-[8px]"
            )}
          >
            {/* icon search */}
            <img
              src="/icons/recherche.svg"
              alt=""
              className="w-4 h-4 opacity-90 shrink-0"
              draggable={false}
            />

            <input
              placeholder="Rechercher une note..."
              className={cn(
                "w-full bg-transparent outline-none",
                "text-[14px] text-white/80",
                "placeholder:text-white/60"
              )}
              style={{ fontFamily: "Outfit, system-ui" }}
            />
          </div>

          {/* Filter button (91 x 40) */}
          <button
            type="button"
            className={cn(
              "h-[40px] w-[91px]",
              "pl-4 pr-3",
              "rounded-full border border-white/20",
              "bg-white/[0.05]",
              "flex items-center justify-center gap-2",
              "hover:bg-white/[0.07] active:bg-white/[0.09] transition",
              "shrink-0"
            )}
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            <span className="text-white text-[14px] font-normal leading-[150%]">
              Filtrer
            </span>
            <img
              src="/icons/filtre.svg"
              alt=""
              className="w-4 h-4 opacity-90"
              draggable={false}
            />
          </button>
        </div>
      </div>

      {/* List */}
      <div className="w-full">
        {notes.map((n) => (
          <Link
            key={n.id}
            href={`/clients/${n.id}`}
            className={cn(
              "block w-full",
              "border-b border-white/20",
              "py-5",
              "hover:bg-white/[0.03] transition"
            )}
          >
            <div className="flex items-center justify-between gap-6">
              {/* Left text */}
              <div className="min-w-0">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="text-[#87DFFF] font-bold text-[16px] leading-[150%] shrink-0"
                    style={{ fontFamily: "Outfit, system-ui" }}
                  >
                    {n.company}
                  </span>

                  {/* white dot */}
                  <span className="w-[5px] h-[5px] rounded-full bg-white/90 shrink-0" />

                  <span
                    className="text-white font-bold text-[16px] leading-[150%] truncate"
                    style={{ fontFamily: "Outfit, system-ui" }}
                  >
                    {n.title}
                  </span>
                </div>

                <div
                  className="mt-2 text-white/60 text-[14px] leading-[150%] truncate"
                  style={{ fontFamily: "Outfit, system-ui" }}
                >
                  {n.subtitle}
                </div>
              </div>

              {/* Right arrow */}
              <img
                src="/icons/fleche_fine.svg"
                alt=""
                className="w-4 h-4 opacity-80 shrink-0"
                draggable={false}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
