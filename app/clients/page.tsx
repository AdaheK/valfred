// app/clients/page.tsx
import { AppLayout2 } from "@/components/layout/AppLayout2";
import Topbar2 from "@/components/layout/Topbar2";
import { ClientsMain } from "@/components/clients/ClientsMain";
import { ClientsNotes } from "@/components/clients/ClientsNotes";
import { CopilotPanel } from "@/components/clients/CopilotPanel";

export default function ClientsPage() {
  return (
    <AppLayout2>
      <Topbar2 />

      <div className="mx-auto w-full max-w-[1206px] px-4 md:px-6 ">
        <div className="grid grid-cols-[70.73%_29.27%] ">
          {/* LEFT */}
          <main className="min-w-0 pr-6 pt-10 pb-16 space-y-12 w-full">
            <ClientsMain />
            <ClientsNotes />
          </main>

          {/* RIGHT */}
          <aside className="w-[353px] shrink-0 border-l border-white/20">
            <div className="sticky top-0 h-screen overflow-hidden pr-2">
              <CopilotPanel />
            </div>
          </aside>

        </div>
      </div>
    </AppLayout2>
  );
}
