import { Sidebar } from "@/components/layout/Sidebar"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-8 py-6 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
