import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <Layout>
      {/* Section 1: Landing Page Image & Forked Accents */}
      <Hero
        title="Forked Accents"
        description="A bold and innovative collection that examines language, identity, and belonging in an increasingly connected world. Through vivid imagery and linguistic playfulness, this work explores the complexities of cultural identity, the immigrant experience, and the ways in which our accents carry the stories of our origins. The poems celebrate the beauty of linguistic diversity while acknowledging the challenges of existing between cultures."
        imageSrc="/images/landing.webp"
        imageAlt="Forked Accents - Book Cover"
        primaryAction={{
          text: "Buy on Amazon",
          href: "https://a.co/d/5UcqcYy",
        }}
      />

      {/* Section 2: Author Information */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-poetry">
              Osadolor Osayande
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Author of &apos;Forked Accents&apos; and &apos;Thirty Photographs
              of God&apos;. Founder of the Sande Prize for Nigerian Poetry,
              celebrating and nurturing the rich tradition of African poetry.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
