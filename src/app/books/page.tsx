import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";
import { BookCard } from "@/components/sections/book-card";
import { PoetryQuote } from "@/components/sections/poetry-quote";

const books = [
  {
    title: "Thirty Photographs of God",
    description:
      "A powerful exploration of spirituality, identity, and the human condition through the lens of contemporary Nigerian experience. This collection weaves together personal narrative with broader cultural commentary, examining how faith intersects with daily life in modern Nigeria. Each poem serves as a 'photograph' - a moment captured in time that reveals deeper truths about existence, love, and the search for meaning.",
    publishYear: "2015",
    themes: [
      "Spirituality",
      "Nigerian Identity",
      "Faith & Doubt",
      "Cultural Memory",
      "Personal Growth",
    ],
    purchaseLinks: [
      { text: "Amazon", url: "https://amazon.com" },
      { text: "Local Bookstore", url: "#" },
    ],
    reviews: [
      {
        text: "A masterful collection that bridges the sacred and secular with remarkable grace.",
        author: "The Guardian Literary Review",
      },
      {
        text: "Osayande's voice is both intimate and universal, speaking to the shared human experience.",
        author: "African Literature Today",
      },
    ],
  },
  {
    title: "My Accent is a Zebra",
    description:
      "A bold and innovative collection that examines language, identity, and belonging in an increasingly connected world. Through vivid imagery and linguistic playfulness, this work explores the complexities of cultural identity, the immigrant experience, and the ways in which our accents carry the stories of our origins. The poems celebrate the beauty of linguistic diversity while acknowledging the challenges of existing between cultures.",
    publishYear: "2020",
    themes: [
      "Language & Identity",
      "Immigration",
      "Cultural Fusion",
      "Belonging",
      "Linguistic Heritage",
    ],
    purchaseLinks: [
      { text: "Amazon", url: "https://amazon.com" },
      { text: "Barnes & Noble", url: "#" },
      { text: "Independent Bookstores", url: "#" },
    ],
    reviews: [
      {
        text: "A brilliant exploration of how language shapes identity and memory.",
        author: "Poetry International",
      },
      {
        text: "Osayande has created something truly unique - a love letter to the complexity of modern identity.",
        author: "World Literature Today",
      },
    ],
  },
];

export default function Books() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Published Works"
        subtitle="Collections that Capture the Nigerian Experience"
        description="Explore two groundbreaking poetry collections that examine identity, spirituality, and the complexities of contemporary African life."
        primaryAction={{
          text: "Read Sample Poems",
        }}
        secondaryAction={{
          text: "Purchase Books",
        }}
      />

      {/* Featured Quote */}
      <PoetryQuote
        quote="Each poem is a window into a world where language dances with meaning, where every accent tells a story worth preserving."
        author="Osadolor Osayande"
        className="bg-accent/5"
      />

      {/* Books Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Introduction */}
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-poetry">
                Two Journeys, One Voice
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From spiritual exploration to linguistic celebration, these
                collections represent different facets of the Nigerian
                experience. Each book offers a unique perspective on identity,
                belonging, and the power of poetry to bridge cultural divides.
              </p>
            </div>

            {/* Book 1: Thirty Photographs of God */}
            <div className="space-y-6">
              <BookCard
                title={books[0].title}
                description={books[0].description}
                publishYear={books[0].publishYear}
                themes={books[0].themes}
                purchaseLinks={books[0].purchaseLinks}
                reviews={books[0].reviews}
              />
            </div>

            {/* Book 2: My Accent is a Zebra */}
            <div className="space-y-6">
              <BookCard
                title={books[1].title}
                description={books[1].description}
                publishYear={books[1].publishYear}
                themes={books[1].themes}
                purchaseLinks={books[1].purchaseLinks}
                reviews={books[1].reviews}
              />
            </div>

            {/* Reading Experience */}
            <div className="bg-muted/30 rounded-lg p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold font-poetry">
                  Experience Nigerian Poetry
                </h3>
                <p className="text-lg text-muted-foreground">
                  These collections invite readers into the rich, complex world
                  of contemporary Nigerian literature. Whether you&apos;re
                  familiar with African poetry or discovering it for the first
                  time, Osayande&apos;s work offers both accessibility and
                  depth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Poems Across Both Collections
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">5+</div>
                    <div className="text-sm text-muted-foreground">
                      Years of Critical Acclaim
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">Global</div>
                    <div className="text-sm text-muted-foreground">
                      International Recognition
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Works */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-poetry">
                What&apos;s Next
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Osadolor Osayande continues to write and explore new themes in
                his upcoming works. Stay connected to learn about future
                publications and poetry events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
