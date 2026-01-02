"use client";

type BackCardProps = {
  className?: string;
  wClass: string;
  hClass: string;
  innerWClass: string;
  innerHClass: string;
  bgClass: string;
  imgSrc: string;
  imgAlt?: string;
  imgClassName?: string;
};

function BackCard({
  className = "",
  wClass,
  hClass,
  innerWClass,
  innerHClass,
  bgClass,
  imgSrc,
  imgAlt = "",
  imgClassName = "",
}: BackCardProps) {
  return (
    <div
      className={[
        "absolute top-[58px]",
        "rounded-[24px]",
        "border border-[rgba(3,33,52,1)]",
        "overflow-hidden",
        "pointer-events-none select-none",
        wClass,
        hClass,
        className,
      ].join(" ")}
    >
      <div className={["absolute inset-0 rounded-[24px]", bgClass].join(" ")} />

      <div
        className={[
          "absolute",
          "top-[17px] left-[17px]",
          "rounded-[16px]",
          "border border-[rgba(3,33,52,1)]",
          innerWClass,
          innerHClass,
        ].join(" ")}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={imgSrc}
          alt={imgAlt}
          className={[
            "object-contain",
            "drop-shadow-[0px_8px_20px_rgba(0,0,0,0.08)]",
            imgClassName,
          ].join(" ")}
        />
      </div>
    </div>
  );
}

export function BattleCards() {
  return (
    <section className="mx-auto w-full max-w-6xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <img src="/icons/image 9.svg" alt="" className="w-6 h-6 opacity-100" />
        <h2
          className="
            font-['Bricolage_Grotesque']
            font-bold
            text-[20px]
            leading-[120%]
            tracking-[-0.02em]
            text-white
          "
        >
          Battlecards
        </h2>
      </div>

      {/* Stage */}
      <div className="relative w-full min-h-[480px]">
        {/* Back cards - LEFT */}
        <div className="hidden md:block">
          <BackCard
            className="left-[0%] -rotate-6 z-0"
            wClass="w-[400px]"
            hClass="h-[320px]"
            innerWClass="w-[372px]"
            innerHClass="h-[286px]"
            bgClass="bg-[linear-gradient(120.77deg,#FBE2CE_0%,#FDF1E7_104.7%)]"
            imgSrc="/icons/trophy.svg"
            imgClassName="w-[220px] h-[220px] translate-x-[-10px]"
          />

          <BackCard
            className="left-[150px] -rotate-3 z-10"
            wClass="w-[439px]"
            hClass="h-[320px]"
            innerWClass="w-[402px]"
            innerHClass="h-[286px]"
            bgClass="bg-[linear-gradient(118.98deg,#B0A0FD_0%,#D5CDFE_100%)]"
            imgSrc="/icons/lock.svg"
            imgClassName="w-[220px] h-[220px] translate-x-[-6px]"
          />
        </div>

        {/* Back cards - RIGHT */}
        <div className="hidden md:block">
          <BackCard
            className="right-[150px] rotate-3 z-10"
            wClass="w-[430px]"
            hClass="h-[320px]"
            innerWClass="w-[402px]"
            innerHClass="h-[286px]"
            bgClass="bg-[linear-gradient(118.98deg,#B0A0FD_0%,#D5CDFE_100%)]"
            imgSrc="/icons/lock-check.svg"
            imgClassName="w-[240px] h-[240px] translate-x-[6px]"
          />

          <BackCard
            className="right-[0%] rotate-6 z-0"
            wClass="w-[400px]"
            hClass="h-[320px]"
            innerWClass="w-[372px]"
            innerHClass="h-[286px]"
            bgClass="bg-[linear-gradient(120.77deg,#FBE2CE_0%,#FDF1E7_104.7%)]"
            imgSrc="/icons/trophy.svg"
            imgClassName="w-[220px] h-[220px] translate-x-[10px]"
          />
        </div>

        {/* Carte principale */}
        <div
          className="
            relative z-20
            mx-auto
            mt-[28px]
            w-[520px] h-[360px]
            rounded-[24px]
            p-4
            bg-[rgba(135,223,255,1)]
            shadow-[0px_2px_40px_rgba(0,0,0,0.12)]
          "
        >
          {/* Border gradient */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              rounded-[24px]
              border
              border-transparent
              [border-image:linear-gradient(143.13deg,rgba(255,255,255,0.2)_14.43%,rgba(255,255,255,0.02)_49.78%,rgba(255,255,255,0.2)_85.12%)_1]
            "
          />

          {/* Rectangle intérieur */}
          <div
            className="
              relative
              w-full h-full
              rounded-[16px]
              border
              border-[rgba(3,33,52,1)]
              p-8
              flex
              justify-between
              overflow-hidden
            "
          >
            {/* Colonne gauche */}
            <div className="flex flex-col justify-between max-w-[320px]">
              <h3
                className="
                  font-['Bricolage_Grotesque']
                  font-extrabold
                  text-[32px]
                  leading-[100%]
                  tracking-[-0.02em]
                  uppercase
                  text-[rgba(3,33,52,1)]
                "
              >
                OBJECTION : PRIX <br />
                TROP ÉLEVÉ
              </h3>

              <div className="mt-8 flex flex-col gap-5 w-[220px]">
                <p
                  className="
                    font-['Bricolage_Grotesque']
                    text-[16px]
                    leading-[150%]
                    text-[rgba(3,33,52,1)]
                  "
                >
                  ROI moyen atteint en 11 semaines
                </p>

                {/* ✅ BOUTON "Voir le détail" SANS RECTANGLE */}
                <button
                  className="
                    inline-flex
                    items-center
                    justify-center
                    h-[48px]
                    w-[150px]
                    px-6
                    whitespace-nowrap
                    rounded-full
                    bg-[rgba(255,255,255,0.92)]
                    shadow-[0px_2px_24px_rgba(0,0,0,0.10)]
                    font-['Bricolage_Grotesque']
                    text-[14px]
                    font-semibold
                    text-[rgba(3,33,52,1)]
                    hover:brightness-95
                    transition
                    outline-none
                  "
                >
                  Voir le détail
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="absolute right-6 bottom-6 pointer-events-none">
              <img
                src="/icons/cards.svg"
                alt=""
                className="w-[260px] h-[260px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* ✅ CTA bottom "Voir toutes les battlecards" sans couleur */}
        <div className="absolute left-0 right-0 bottom-[16px] flex justify-center">
          <button
            className="
              flex items-center gap-[8px]
              w-[232px] h-[40px]
              px-[16px] py-[8px]
              rounded-full
              bg-transparent
              text-white
              font-['Bricolage_Grotesque']
              text-[14px]
              font-medium
              hover:opacity-90
              transition
            "
          >
            Voir toutes les battlecards
            <span className="text-[16px] leading-none">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
