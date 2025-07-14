import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";
import { PoetryQuote } from "@/components/sections/poetry-quote";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Osadolor Osayande"
        subtitle="Celebrated Nigerian Poet"
        description="Author of 'Thirty Photographs of God' and 'My Accent is a Zebra'. Founder of the Sande Prize for Nigerian Poetry, celebrating and nurturing the rich tradition of Nigerian verse."
        imageSrc="/images/poet-hero.png"
        imageAlt="Osadolor Osayande - Portrait"
        primaryAction={{
          text: "Explore Books",
        }}
        secondaryAction={{
          text: "About the Poet",
        }}
      />

      {/* Featured Quote */}
      <PoetryQuote
        quote="In every word lies the heartbeat of a nation, in every verse the dreams of a people waiting to be born."
        author="Osadolor Osayande"
        source="From 'Thirty Photographs of God'"
        className="bg-muted/50"
      />

      {/* Navigation Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-poetry mb-4">
                Explore the World of Nigerian Poetry
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover published works, learn about the poet&apos;s journey,
                and explore opportunities for emerging Nigerian voices through
                the Sande Prize.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Card */}
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-poetry">About the Poet</CardTitle>
                  <CardDescription>
                    Discover the journey, inspirations, and literary
                    achievements of Osadolor Osayande.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    variant="ghost"
                    className="text-accent hover:text-accent/80"
                    asChild
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Books Card */}
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-accent/20">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-poetry">Published Works</CardTitle>
                  <CardDescription>
                    Explore &quot;Thirty Photographs of God&quot; and &quot;My
                    Accent is a Zebra&quot; - collections that capture the
                    Nigerian experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    asChild
                  >
                    <Link href="/books">View Books</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Sande Prize Card */}
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-poetry">The Sande Prize</CardTitle>
                  <CardDescription>
                    Supporting emerging Nigerian poets through recognition,
                    mentorship, and literary awards.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    variant="ghost"
                    className="text-accent hover:text-accent/80"
                    asChild
                  >
                    <Link href="/sande-prize">Learn About the Prize</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-poetry">
              Join the Literary Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you&apos;re a reader seeking powerful Nigerian poetry or
              an emerging poet looking for recognition, there&apos;s a place for
              you in this literary community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link href="/books">Read the Poetry</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/sande-prize">Submit to Sande Prize</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
