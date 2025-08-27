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
    date: "August 31, 2025",
    description:
      "The submission period begins for the 2025 Sande Prize. Poets can submit exactly two poems through our online portal.",
    status: "upcoming" as const,
  },
  {
    title: "Submission Deadline",
    date: "September 30, 2025",
    description:
      "All submissions must be received by 11:59 PM WAT. Late submissions will not be considered.",
    status: "upcoming" as const,
  },
  {
    title: "Judging Period",
    date: "October - November 2025",
    description:
      "Our distinguished panel of judges reviews all submissions. Shortlist announced in late November.",
    status: "upcoming" as const,
  },
  {
    title: "Winner Announcement",
    date: "December 2025",
    description:
      "The 2025 Sande Prize winner will be announced at a special ceremony.",
    status: "upcoming" as const,
  },
];

const eligibilityRequirements = [
  "Must be a Nigerian writer (born in Nigeria, national/resident of Nigeria, or have at least one Nigerian parent)",
  "Submit exactly two poems, no more, no less",
  "Each poem must be no longer than 40 lines",
  "Poems must be original and unpublished",
  "Only poems written in English are eligible (translated poems welcome)",
  "Submissions must be in Word or PDF format with proper formatting",
];

const submissionFormat = [
  "Cover page with author's full name, biography, date of birth, contact email and phone number, brief publication history",
  "Times New Roman or Arial, 12-point font",
  "Single-spaced",
  "One poem per page",
  "Black text only",
  "Email submissions to: sandepoetryprize@sande.com",
];

const judgingPanel = [
  {
    name: "Osadolor Osayande",
    role: "Chair",
    description:
      "Founder of the Sande Prize, author of 'Forked Accents' and 'Thirty Photographs of God'",
  },
  {
    name: "Ngozi Nzokurum",
    role: "Judge",
    description: "Distinguished Nigerian poet and literary critic",
  },
  {
    name: "Jideofor Azonuche",
    role: "Judge",
    description: "Renowned poet and educator",
  },
];

export default function SandePrize() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="The Sande Prize"
        subtitle="For Nigerian Poetry"
        description="An annual literary award of ₦500,000, presented to two outstanding poems written by a Nigerian poet. Celebrating excellence in contemporary Nigerian poetry and providing both financial and creative support to poets working within and beyond the country's borders."
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
              The Sande Prize seeks to celebrate excellence in contemporary
              Nigerian poetry and provide both financial and creative support to
              poets working within and beyond the country&apos;s borders. It
              recognizes Nigeria as home to some of the most gifted literary
              voices in Africa—voices that often lack platforms for exposure and
              meaningful funding opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground">
                  Celebrating exceptional talent in Nigerian poetry
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Support</h3>
                <p className="text-muted-foreground">
                  Providing financial and creative support to emerging voices
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Platform</h3>
                <p className="text-muted-foreground">
                  Creating opportunities for exposure and recognition
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
                    ₦500,000 cash prize for outstanding poetry
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      ₦500,000 cash prize
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Publication on official website
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Literary recognition and exposure
                    </span>
                  </div>
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

      {/* Judging Panel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-poetry">
                Judging Panel
              </h2>
              <p className="text-lg text-muted-foreground">
                Our distinguished panel of judges for the 2025 competition
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {judgingPanel.map((judge, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">{judge.name}</h3>
                    <Badge variant="outline">{judge.role}</Badge>
                    <p className="text-muted-foreground text-sm">
                      {judge.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Submission Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-poetry">
                Submission Guidelines
              </h2>
              <p className="text-lg text-muted-foreground">
                Detailed requirements for submitting your work
              </p>
            </div>

            <div className="space-y-6">
              {submissionFormat.map((requirement, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">{requirement}</p>
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
                Submit Your Poems
              </Button>
              <Button variant="outline" size="lg">
                Download Guidelines
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Questions? Contact us at inquiries@sande.com
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
