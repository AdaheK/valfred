// app/ai-copilot/layout.tsx
import React from "react";
import { AppLayout2 } from "@/components/layout/AppLayout2";
import Topbar3 from "@/components/layout/Topbar3";

export default function AICopilotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppLayout2>
      <Topbar3 />
      {children}
    </AppLayout2>
  );
}
