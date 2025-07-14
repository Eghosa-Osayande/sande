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
    title: "Nigeria Prize for Literature",
    organization: "Nigeria LNG Limited",
    year: "2020",
    description:
      "Recognition for outstanding contribution to Nigerian literature through poetry.",
  },
  {
    title: "Sande Prize Founder",
    organization: "Self-Founded",
    year: "2024",
    description:
      "Established the prestigious Sande Prize to support emerging Nigerian poets.",
  },
  {
    title: "Commonwealth Writers&apos; Prize",
    organization: "Commonwealth Foundation",
    year: "2019",
    description:
      "Shortlisted for exceptional literary work celebrating African identity.",
  },
];

const timeline = [
  {
    year: "1985",
    event: "Born in Lagos, Nigeria",
    description: "Early exposure to diverse Nigerian cultures and languages.",
  },
  {
    year: "2008",
    event: "First Poetry Collection",
    description:
      "Published debut collection exploring themes of identity and belonging.",
  },
  {
    year: "2015",
    event: '"Thirty Photographs of God" Released',
    description:
      "Critically acclaimed collection examining spirituality and Nigerian life.",
  },
  {
    year: "2020",
    event: '"My Accent is a Zebra" Published',
    description:
      "Bold exploration of language, culture, and the immigrant experience.",
  },
  {
    year: "2024",
    event: "Sande Prize Launched",
    description:
      "Founded literary prize to nurture emerging Nigerian poetic voices.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="About the Poet"
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
              <h2 className="text-3xl font-bold font-poetry">
                Literary Journey
              </h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Osadolor Osayande stands as one of Nigeria&apos;s most
                  compelling contemporary voices, weaving together the rich
                  tapestry of African experience with universal themes of love,
                  loss, identity, and hope. Born in Lagos and shaped by the
                  vibrant cultural landscape of Nigeria, his poetry captures
                  both the intimate personal moments and the sweeping historical
                  narratives that define modern African literature.
                </p>
                <p>
                  His work is characterized by its unflinching honesty, lyrical
                  beauty, and deep commitment to exploring what it means to be
                  Nigerian in a globalized world. Through his poetry, Osayande
                  examines the complexities of cultural identity, the immigrant
                  experience, and the enduring power of language to preserve and
                  transmit cultural memory.
                </p>
                <p>
                  Beyond his role as a poet, Osayande has emerged as a crucial
                  advocate for emerging literary voices. The establishment of
                  the Sande Prize for Nigerian Poetry represents his commitment
                  to fostering the next generation of Nigerian poets, ensuring
                  that the rich tradition of Nigerian verse continues to evolve
                  and flourish.
                </p>
              </div>
            </div>

            <Separator />

            {/* Awards & Recognition */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-poetry">
                Awards & Recognition
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
                    &quot;Poetry is not just about beautiful words arranged in
                    pleasing patterns. It is about truth-telling, about bearing
                    witness to the human experience in all its complexity. For
                    me, poetry is a way of preserving the stories that might
                    otherwise be lost, of giving voice to the voiceless, and of
                    celebrating the resilience of the human spirit.&quot;
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
