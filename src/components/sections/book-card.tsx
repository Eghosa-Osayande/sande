import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface BookCardProps {
  title: string;
  description: string;
  coverImage?: string;
  publishYear?: string;
  themes?: string[];
  purchaseLinks?: {
    text: string;
    url: string;
  }[];
  reviews?: {
    text: string;
    author: string;
  }[];
  className?: string;
}

export function BookCard({
  title,
  description,
  coverImage,
  publishYear,
  themes = [],
  purchaseLinks = [],
  reviews = [],
  className = "",
}: BookCardProps) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Book Cover */}
        {coverImage && (
          <div className="relative aspect-[3/4] md:aspect-[3/4] bg-muted">
            <Image
              src={coverImage}
              alt={`Cover of ${title}`}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div
          className={`${coverImage ? "md:col-span-2" : "md:col-span-3"} p-6`}
        >
          <CardHeader className="p-0 mb-4">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl font-poetry mb-2">
                  {title}
                </CardTitle>
                {publishYear && (
                  <CardDescription className="text-lg">
                    Published {publishYear}
                  </CardDescription>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0 space-y-6">
            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Themes */}
            {themes.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">
                  Themes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {themes.map((theme, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {theme}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            {reviews.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">
                  Reviews
                </h4>
                {reviews.map((review, index) => (
                  <blockquote
                    key={index}
                    className="border-l-4 border-accent pl-4"
                  >
                    <p className="text-sm italic text-muted-foreground mb-1">
                      &quot;{review.text}&quot;
                    </p>
                    <cite className="text-xs text-muted-foreground not-italic">
                      — {review.author}
                    </cite>
                  </blockquote>
                ))}
              </div>
            )}

            {/* Purchase Links */}
            {purchaseLinks.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">
                  Get the Book
                </h4>
                <div className="flex flex-wrap gap-3">
                  {purchaseLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-sm"
                      asChild
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {link.text}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
