import { AppLayout } from "@/components/layout/AppLayout"
import TopBar  from "@/components/layout/Topbar"
import { Hero } from "@/components/hero/Hero"
import { BattleCards } from "@/components/battle/BattleCards"
import { SuccessStories } from "@/components/stories/SuccessStories"
import { SecureChatsBlock } from "@/components/trust/SecureChatsBlock"

export default function HomePage() {
  return (
    <AppLayout>
      <TopBar />

      {/* padding seulement pour le contenu sous la topbar */}
      <div className="px-6 pt-6 space-y-20">
        <Hero />
        <BattleCards />
        <SuccessStories />
        <SecureChatsBlock />
      </div>
    </AppLayout>
  );
}
