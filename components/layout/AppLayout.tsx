import { Sidebar } from "@/components/layout/Sidebar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden app-shell-bg">
      <Sidebar />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
