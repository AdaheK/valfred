import Topbar2 from "@/components/layout/Topbar2";
import { AppLayout2 } from "@/components/layout/AppLayout2";
import { NoteHeaderEditor } from "@/components/clients/notes/NoteHeaderEditor";
import { NoteSummary } from "@/components/clients/notes/NoteSummary";
import { NoteTranscript } from "@/components/clients/notes/NoteTranscript";
import { NoteRelated } from "@/components/clients/notes/NoteRelated";
import { NoteCopilotPanel } from "@/components/clients/notes/NoteCopilotPanel";

export default function ClientNotePage() {
  return (
    <AppLayout2>
      <Topbar2 />

      {/* ✅ IMPORTANT: zone sous topbar = hauteur viewport - topbar */}
      <div className="mx-auto w-full max-w-[1206px] px-4 md:px-6 h-[calc(100vh-64px)]">
        {/* ✅ grid prend toute la hauteur disponible */}
        <div className="grid grid-cols-[70.73%_29.27%] h-full items-stretch">
          {/* ✅ LEFT: scroll uniquement ici */}
          <main className="min-w-0 pr-6 pt-10 pb-16 space-y-10 overflow-y-auto scrollbar-hidden">
            <NoteHeaderEditor />
            <NoteSummary />
            <NoteTranscript />
            <NoteRelated />
          </main>

          {/* ✅ RIGHT: sticky + full height */}
          <aside className="border-l border-white/20 h-full">
            <div className="sticky top-0 h-full">
              {/* ✅ le panel a maintenant un parent avec une hauteur réelle */}
              <NoteCopilotPanel />
            </div>
          </aside>
        </div>
      </div>
    </AppLayout2>
  );
}
