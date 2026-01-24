import { Suspense } from "react";
import ChatClient from "@/app/ai-copilot/chat/chatClient";

export const dynamic = "force-dynamic"; // empêche le prerender statique

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6 text-white/60">Chargement…</div>}>
      <ChatClient />
    </Suspense>
  );
}
