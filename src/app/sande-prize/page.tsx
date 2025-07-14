import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";
import { PrizeTimeline } from "@/components/sections/prize-timeline";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Award, Users, BookOpen, Mail, CheckCircle } from "lucide-react";

const timelineEvents = [
  {
    title: "Submissions Open",
    date: "January 1, 2025",
    description:
      "The submission period begins for the 2025 Sande Prize. Poets can submit their collections through our online portal.",
    status: "upcoming" as const,
  },
  {
    title: "Early Bird Deadline",
    date: "March 15, 2025",
    description:
      "Reduced submission fees for entries received by this date. All supporting materials must be included.",
    status: "upcoming" as const,
  },
  {
    title: "Final Submission Deadline",
    date: "May 31, 2025",
    description:
      "All submissions must be received by 11:59 PM WAT. Late submissions will not be considered.",
    status: "upcoming" as const,
  },
  {
    title: "Judging Period",
    date: "June - August 2025",
    description:
      "Our distinguished panel of judges reviews all submissions. Shortlist announced in late August.",
    status: "upcoming" as const,
  },
  {
    title: "Winner Announcement",
    date: "September 30, 2025",
    description:
      "The 2025 Sande Prize winner will be announced at a special ceremony in Lagos.",
    status: "upcoming" as const,
  },
];

const judgingCriteria = [
  {
    title: "Literary Excellence",
    description: "Exceptional use of language, imagery, and poetic technique",
    weight: "40%",
  },
  {
    title: "Cultural Relevance",
    description: "Connection to Nigerian experience and contemporary themes",
    weight: "25%",
  },
  {
    title: "Innovation",
    description: "Original voice and creative approach to form and content",
    weight: "20%",
  },
  {
    title: "Impact Potential",
    description: "Ability to contribute to Nigerian literary discourse",
    weight: "15%",
  },
];

const eligibilityRequirements = [
  "Must be a Nigerian citizen or of Nigerian descent",
  "Previously unpublished poetry collection (minimum 30 poems)",
  "Poems may have appeared in magazines, but not as a collection",
  "Age limit: 18-40 years (emerging poet focus)",
  "Submissions in English or Nigerian languages with English translations",
  "Original work only - no translations of existing poems",
];

const prizeIncludes = [
  "₦2,000,000 cash prize",
  "Publication support for winning collection",
  "Mentorship with established Nigerian poets",
  "Reading opportunities at major literary festivals",
  "Marketing and promotional support",
  "Literary agent introduction (if desired)",
];

export default function SandePrize() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="The Sande Prize"
        subtitle="For Nigerian Poetry"
        description="Celebrating and nurturing emerging Nigerian voices in poetry. The Sande Prize recognizes exceptional poetic talent and supports the next generation of Nigerian literary artists."
        primaryAction={{
          text: "Submit Your Work",
        }}
        secondaryAction={{
          text: "View Guidelines",
        }}
        className="bg-accent/5"
      />

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-poetry">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Sande Prize was established to discover, celebrate, and
              support emerging Nigerian poets who are shaping the future of
              African literature. We believe that poetry has the power to bridge
              cultures, preserve heritage, and give voice to the dreams and
              struggles of contemporary Nigeria.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Recognition</h3>
                <p className="text-muted-foreground">
                  Celebrating exceptional talent in Nigerian poetry
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Mentorship</h3>
                <p className="text-muted-foreground">
                  Connecting emerging poets with established voices
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Publication</h3>
                <p className="text-muted-foreground">
                  Supporting the publication of outstanding collections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* 2025 Competition Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Badge className="bg-accent text-accent-foreground">
                2025 Competition
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-poetry">
                Now Accepting Submissions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Prize Package */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-poetry">
                    Prize Package
                  </CardTitle>
                  <CardDescription>
                    Comprehensive support for the winning poet
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {prizeIncludes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Eligibility */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-poetry">
                    Eligibility Requirements
                  </CardTitle>
                  <CardDescription>
                    Please ensure you meet all criteria before submitting
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {eligibilityRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {requirement}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <PrizeTimeline events={timelineEvents} />
          </div>
        </div>
      </section>

      <Separator />

      {/* Judging Criteria */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-poetry">
                Judging Criteria
              </h2>
              <p className="text-lg text-muted-foreground">
                Our distinguished panel evaluates submissions based on these key
                areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {judgingCriteria.map((criteria, index) => (
                <Card key={index} className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">
                        {criteria.title}
                      </h3>
                      <Badge variant="outline">{criteria.weight}</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {criteria.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Submission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-poetry">
                How to Submit
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple steps to enter your poetry collection
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Prepare Your Collection",
                  description:
                    "Compile 30-50 poems in a single document. Include a brief author bio and collection statement.",
                },
                {
                  step: "2",
                  title: "Complete Application",
                  description:
                    "Fill out our online submission form with your personal details and collection information.",
                },
                {
                  step: "3",
                  title: "Submit & Pay Fee",
                  description:
                    "Upload your collection and pay the submission fee (₦5,000 regular / ₦3,000 early bird).",
                },
                {
                  step: "4",
                  title: "Await Results",
                  description:
                    "Track your submission status and await our announcement in September 2025.",
                },
              ].map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Submit CTA */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-poetry">
              Ready to Submit?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join the ranks of celebrated Nigerian poets. Your voice matters,
              and your stories deserve to be heard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Mail className="mr-2 h-5 w-5" />
                Submit Your Collection
              </Button>
              <Button variant="outline" size="lg">
                Download Guidelines
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Questions? Contact us at sande.prize@osayande.com
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
