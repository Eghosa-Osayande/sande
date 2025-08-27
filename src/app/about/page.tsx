import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";
import { AwardBadge } from "@/components/sections/award-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const awards = [
  {
    title: "Brigette Poirson Poetry Prize",
    organization: "Recipient",
    year: "2020",
    description: "Recognition for outstanding contribution to poetry.",
  },
  {
    title: "Albert Junger's Poetry Prize",
    organization: "Shortlist",
    year: "2020",
    description: "Shortlisted for exceptional literary work.",
  },
  {
    title: "Babishai Niwe Poetry Prize",
    organization: "Longlist",
    year: "2017",
    description: "Longlisted for examinations of African Post-colonial trauma.",
  },
  {
    title: "Sande Poetry Prize",
    organization: "Founder",
    year: "2025",
    description:
      "Established literary prize to nurture emerging Nigerian poetic voices.",
  },
];

const timeline = [
  {
    year: "2017",
    event: "Babishai Niwe Poetry Prize (Longlisted)",
    description: "Examinations of African Post-colonial trauma",
  },
  {
    year: "2020",
    event: "Brigitte Poirson Poetry Prize (Recipient)",
    description: "Awarded for exceptional poetic achievement",
  },
  {
    year: "2020",
    event: "Albert Junger's Poetry Prize (Runner Up)",
    description: "Shortlisted for outstanding literary work",
  },
  {
    year: "2024",
    event: '"Thirty Photographs of God" (Published)',
    description:
      "Critically acclaimed collection examining spirituality, suffering and cancer.",
  },
  {
    year: "2025",
    event: '"Forked Accents" (Published)',
    description:
      "Bold exploration of language, culture, and the immigrant experience.",
  },
  {
    year: "2025",
    event: "Sande Prize for Poetry (Launched)",
    description:
      "Founded literary prize to nurture emerging Nigerian poetic voices.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="About the Author"
        subtitle="Osadolor Osayande"
        description="A voice that bridges continents, cultures, and generations through the power of verse."
        imageSrc="/images/poet-about.png"
        imageAlt="Osadolor Osayande - About Portrait"
        className="bg-muted/30"
      />

      {/* Biography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Main Biography */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-poetry">Biography</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Osadolor Osayande is a Nigerian poet and storyteller whose
                  work thoughtfully explores the intersections of faith,
                  cultural preservation, family and intimacy. His debut
                  chapbook, Thirty Photographs of God, is a poignant meditation
                  on the coexistence of God and the concept of human suffering,
                  framed through the lens of cancer. Praised for its haunting
                  metaphors and emotional unpredictability, the collection
                  resonated with readers and established Osadolor as a
                  compelling new voice in contemporary African poetry.
                </p>
                <p>
                  His current collection, Forked Accents, examines the power of
                  language and pronunciation in shaping identity and experience.
                  Richly African yet empathetically global, the work celebrates
                  the accent as both a deeply personal and cultural signature,
                  blending metaphorical lushness with thoughtful observation.
                </p>
                <p>
                  Osadolor&apos;s literary impacts have garnered recognition
                  across esteemed platforms. He was longlisted for the Babishai
                  Niwe Poetry Prize, awarded the Brigitte Poirson Poetry Prize,
                  and shortlisted for the Albert Jungers Poetry Prize.
                </p>
                <p>
                  Beyond the written word, Osadolor finds equal fulfilment in
                  geology, supply chain management, and music. Now based in the
                  United Kingdom, Osadolor continues to write with insight,
                  weaving themes of intimacy, resilience, seeking to elevate
                  human consciousness and foster cultural confidence.
                </p>
              </div>
            </div>

            <Separator />

            {/* Awards & Recognition */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-poetry">
                Awards and Recognition
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <Card key={index} className="p-6">
                    <AwardBadge
                      title={award.title}
                      organization={award.organization}
                      year={award.year}
                      description={award.description}
                    />
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            {/* Timeline */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-poetry">
                Literary Timeline
              </h2>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline Line */}
                    {index < timeline.length - 1 && (
                      <div className="absolute left-[6.95rem] top-2 w-0.5 h-12 bg-border" />
                    )}

                    {/* Year */}
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-lg font-bold text-accent">
                        {item.year}
                      </span>
                    </div>

                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full mt-1.5 relative z-10" />

                    {/* Content */}
                    <div className="flex-1 pt-0">
                      <h3 className="text-lg font-semibold mb-1">
                        {item.event}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Philosophy */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-poetry">
                Poetic Philosophy
              </h2>
              <Card className="p-8 bg-accent/5">
                <blockquote className="space-y-4">
                  <p className="font-poetry text-poetry-lg italic leading-relaxed">
                    &quot;Throughout history, we have seen poetry play a crucial
                    role in shaping life. From God&apos;s first usage of
                    personification—calling the word God, and God the word—to
                    Shakespeare&apos;s imageries of love that challenge us to
                    aspire towards collective sweetness, poetry has always
                    helped us see the easily eluded. And now, more than ever,
                    the world needs the voice of poetry to help us notice the
                    beauties we would be forever too busy to notice.&quot;
                  </p>
                  <footer className="text-muted-foreground">
                    <cite className="not-italic">— Osadolor Osayande</cite>
                  </footer>
                </blockquote>
              </Card>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-poetry">Connect</h2>
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle>Literary Collaborations & Inquiries</CardTitle>
                  <CardDescription>
                    For reading requests, literary collaborations, or Sande
                    Prize inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">
                    Osadolor Osayande welcomes opportunities for literary
                    collaboration, poetry readings, and discussions about
                    contemporary Nigerian literature. For inquiries about the
                    Sande Prize, please visit the dedicated prize page.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
