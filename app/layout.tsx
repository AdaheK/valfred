import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#032134] text-white">
        <div className="mx-auto w-full max-w-[1440px] min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
