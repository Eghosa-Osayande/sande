import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryAction,
  secondaryAction,
  className = "",
}: HeroProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poetry leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="text-lg text-muted-foreground max-w-lg">
                  {description}
                </p>
              )}
            </div>

            {/* Actions */}
            {(primaryAction || secondaryAction) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryAction && (
                  <Link href={primaryAction.href || "#"}>
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={primaryAction.onClick}
                    >
                      {primaryAction.text}
                    </Button>
                  </Link>
                )}
                {secondaryAction && (
                  <Link href={secondaryAction.href || "#"}>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={secondaryAction.onClick}
                    >
                      {secondaryAction.text}
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Image */}
          {imageSrc && (
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
                <Image
                  src={imageSrc}
                  alt={imageAlt || ""}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
