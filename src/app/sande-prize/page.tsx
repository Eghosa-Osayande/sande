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
import { Mail, Calendar, Users, Info } from "lucide-react";

const timelineEvents = [
  {
    title: "Submission Window Opens",
    date: "August 31, 2025",
    description: "The submission portal opens for all eligible Nigerian poets.",
    status: "upcoming" as const,
  },
  {
    title: "Submission Window Closes",
    date: "September 30, 2025",
    description:
      "Final day for all submissions. No entries will be accepted after this date.",
    status: "upcoming" as const,
  },
  {
    title: "Shortlist Announcement",
    date: "October 2025",
    description:
      "The judging panel will announce the shortlist for the 2025 prize.",
    status: "upcoming" as const,
  },
  {
    title: "Winners Declared",
    date: "December 2025",
    description:
      "The winners of the 2025 Sande Prize for Nigerian Poetry will be declared.",
    status: "upcoming" as const,
  },
];

const eligibilityCriteria = [
  "Was born in Nigeria,",
  "Is a national or legal resident of Nigeria, or",
  "Has at least one Nigerian parent.",
];

const judgingPanel = [
  {
    name: "Osadolor Osayande",
    role: "Chair",
  },
  {
    name: "Ngozi Nzokurum",
    role: "Judge",
  },
  {
    name: "Jideofor Azonuche",
    role: "Judge",
  },
];

export default function SandePrize() {
  const submissionsOpen = process.env.NEXT_PUBLIC_SUBMISSIONS_OPEN === "true";
  const prizeMoney = process.env.NEXT_PUBLIC_PRIZE_MONEY || "₦1,000,000";

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="The Sande Prize for Nigerian Poetry"
        // subtitle={`An annual literary award of ${prizeMoney}`}
        description={`An annual literary award of ${prizeMoney}, presented to two outstanding poems written by a Nigerian poet, the prize celebrates excellence in contemporary Nigerian poetry and provides financial and creative support to poets at home and abroad.`}
        primaryAction={{
          text: submissionsOpen ? "Submit Your Poems" : "Submissions Closed",
          href: submissionsOpen ? "mailto:sandepoetryprize@sande.com" : "#",
          disabled: true,
        }}
        secondaryAction={{
          text: "View Submission Guidelines",
          href: "#submission-guidelines",
        }}
        // className="bg-accent/5"
      />

      {/* About the Prize */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-poetry">
                About the Prize
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                The Sande Prize for Nigerian Poetry is an annual literary award
                of {prizeMoney}, presented to two outstanding poems written by a
                Nigerian poet.
              </p>
              <p>
                Launched in 2025, the Prize is founded by Osadolor Osayande,
                Itohan Osayande (co-founder), Eseosa Osayande (co-founder),
                Ameze Osayande (co-founder), and Eghosa Osayande
                (co-founder)—siblings from a family deeply rooted in Nigeria’s
                literary storytelling traditions. The name Sande is a shortened
                form of their shared surname, Osayande, and symbolises their
                collective vision for elevating Nigerian poetry.
              </p>
              <p>
                The Sande Prize seeks to celebrate excellence in contemporary
                Nigerian poetry and provide both financial and creative support
                to poets working within and beyond the country’s borders. It
                recognizes Nigeria as home to some of the most gifted literary
                voices in Africa—voices that often lack platforms for exposure
                and meaningful funding opportunities.
              </p>
              <p>
                Osadolor Osayande, the founder, is a Nigerian poet and
                storyteller and the author of two poetry collections. He has
                been longlisted for the Babishai Niwe Poetry Prize, awarded the
                Brigitte Poirson Poetry Prize, and shortlisted for the Albert
                Jungers Poetry Prize. His work explores themes of faith, family,
                intimacy, and cultural identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Prize Submissions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {submissionsOpen ? (
              <>
                <div className="text-center space-y-4">
                  <Badge className="bg-accent text-accent-foreground">
                    Prize Submissions: 2025
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold font-poetry">
                    Submission Window & Eligibility
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <Card className="p-6">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl font-poetry flex items-center gap-2">
                        <Calendar className="h-6 w-6 text-accent" />
                        Submission Window
                      </CardTitle>
                      <CardDescription>
                        August 31, 2025 – September 30, 2025
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <PrizeTimeline events={timelineEvents} />
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl font-poetry flex items-center gap-2">
                        <Users className="h-6 w-6 text-accent" />
                        Eligibility
                      </CardTitle>
                      <CardDescription>
                        The Prize is open to Nigerian writers, defined as
                        someone who:
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3">
                      {eligibilityCriteria.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </>
            ) : (
              <div className="text-center">
                <Card className="max-w-2xl mx-auto p-8 border-accent/20 bg-accent/5">
                  <CardHeader className="p-0 mb-4">
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Info className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-3xl font-poetry text-accent">
                      Submissions Closed
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-lg text-muted-foreground">
                      Submissions to the Sande Prize are now closed. Please
                      check back later for information about the next submission
                      window.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      <Separator />

      {/* Submission Guidelines */}
      <section id="submission-guidelines" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-poetry">
                Submission Guidelines
              </h2>
            </div>
            <Card className="p-6">
              <CardContent className="p-0 prose max-w-none text-muted-foreground prose-li:my-1 prose-ul:my-2">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Submit exactly two poems, no more, no less.</li>
                  <li>Each poem must be no longer than 40 lines.</li>
                  <li>Poems must be original and unpublished.</li>
                  <li>
                    Submissions must be in a single Word or PDF document with:
                    <ul className="list-[circle] ml-5 mt-2 space-y-2">
                      <li>
                        A cover page including:
                        <ul className="list-[square] ml-5 mt-2 space-y-2">
                          <li>Author’s full name and biography</li>
                          <li>Date of birth</li>
                          <li>Contact email and phone number</li>
                          <li>Brief publication history</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Formatting:
                    <ul className="list-[circle] ml-5 mt-2 space-y-2">
                      <li>Times New Roman or Arial, 12-point font</li>
                      <li>Single-spaced</li>
                      <li>One poem per page</li>
                      <li>Black text only</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-4">
                  Email all submissions to:{" "}
                  <a
                    href="mailto:sandepoetryprize@sande.com"
                    className="text-accent hover:underline"
                  >
                    sandepoetryprize@sande.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Judging and Awards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-poetry">
                Judging and Awards
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>
                Each year, the Sande Prize will appoint a distinguished panel of
                judges. The 2025 panel includes:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {judgingPanel.map((judge, index) => (
                <Card key={index} className="p-6 text-center">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-xl">{judge.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Badge variant="outline">{judge.role}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                The panel reserves the right not to award the Prize or to split
                the award between more than two recipients if deemed necessary.
                A shortlist will be announced in October, and winners will be
                declared in December 2025.
              </p>
              <p>
                All shortlisted and winning poets agree to allow the Sande Prize
                to publish their submitted poems on the official website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Submit CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-poetry">
              Ready to Submit?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {submissionsOpen ? (
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  // asChild
                >
                  <a href="mailto:sandepoetryprize@sande.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Your Submission
                  </a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={true}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Submissions Closed
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              For inquiries, please contact:{" "}
              <a
                href="mailto:inquiries@sande.com"
                className="text-accent hover:underline"
              >
                inquiries@sande.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
