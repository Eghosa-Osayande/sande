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
    disabled?: boolean;
  };
  secondaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
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
                {primaryAction &&
                  (primaryAction.disabled ? (
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      disabled={true}
                    >
                      {primaryAction.text}
                    </Button>
                  ) : primaryAction.href ? (
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      asChild
                    >
                      <Link href={primaryAction.href}>
                        {primaryAction.text}
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={primaryAction.onClick}
                    >
                      {primaryAction.text}
                    </Button>
                  ))}
                {secondaryAction &&
                  (secondaryAction.disabled ? (
                    <Button variant="outline" size="lg" disabled={true}>
                      {secondaryAction.text}
                    </Button>
                  ) : secondaryAction.href ? (
                    <Button variant="outline" size="lg" asChild>
                      <Link href={secondaryAction.href}>
                        {secondaryAction.text}
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={secondaryAction.onClick}
                    >
                      {secondaryAction.text}
                    </Button>
                  ))}
              </div>
            )}
          </div>

          {/* Image */}
          {imageSrc && (
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt || "Hero image"}
                  fill
                  className="object-cover"
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
