import { StoryCard } from "@/components/stories/StoryCard"

export function SuccessStories() {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="mb-8 text-xl font-semibold">
        Success stories
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    </section>
  )
}
