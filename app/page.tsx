import { AppLayout } from "@/components/layout/AppLayout"
import { Hero } from "@/components/hero/Hero"
import { BattleCards } from "@/components/battle/BattleCards"
import { SuccessStories } from "@/components/stories/SuccessStories"
import { TrustSection } from "@/components/trust/TrustStories"

export default function HomePage() {
  return (
    <AppLayout>
      <div className="space-y-20">
        <Hero />
        <BattleCards />
        <SuccessStories />
        <TrustSection />
      </div>
    </AppLayout>
  )
}
