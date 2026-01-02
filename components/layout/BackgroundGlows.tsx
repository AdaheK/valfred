export function BackgroundGlows() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Ellipse 1 — haut gauche (sidebar / dashboard) */}
      <div
        className="absolute w-[448px] h-[448px] rounded-full blur-[300px]"
        style={{
          background: "rgba(1, 69, 138, 1)",
          top: "-120px",
          left: "-140px",
        }}
      />

      {/* Ellipse 2 — haut droite (zone recherche / filtres) */}
      <div
        className="absolute w-[448px] h-[448px] rounded-full blur-[300px]"
        style={{
          background: "rgba(43, 25, 132, 1)",
          top: "-80px",
          right: "-160px",
        }}
      />

      {/* Ellipse 3 — centre (zone Hero / prompt) */}
      <div
        className="absolute w-[448px] h-[448px] rounded-full blur-[300px]"
        style={{
          background: "rgba(1, 69, 138, 1)",
          top: "320px",
          left: "35%",
          transform: "translateX(-50%)",
        }}
      />

      {/* Ellipse 4 — milieu bas (Battlecards / Success stories) */}
      <div
        className="absolute w-[448px] h-[448px] rounded-full blur-[300px]"
        style={{
          background: "rgba(0, 91, 149, 1)",
          top: "900px",
          right: "-120px",
        }}
      />

      {/* Ellipse 5 — bas (Secure chats / footer) */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[300px]"
        style={{
          background: "rgba(126, 246, 255, 0.05)",
          bottom: "-220px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}
