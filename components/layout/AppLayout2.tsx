import { Sidebar2 } from "@/components/layout/Sidebar2";

export function AppLayout2({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-full overflow-x-hidden app-shell-bg">
      {/* ✅ Sidebar fixe (ne scrolle pas) */}
      <Sidebar2 />

      {/* ✅ Seul le contenu scrolle en vertical */}
      <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
