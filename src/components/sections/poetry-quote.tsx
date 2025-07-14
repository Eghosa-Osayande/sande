interface PoetryQuoteProps {
  quote: string;
  author?: string;
  source?: string;
  className?: string;
}

export function PoetryQuote({
  quote,
  author,
  source,
  className = "",
}: PoetryQuoteProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="space-y-6">
            <p className="font-poetry text-poetry-lg md:text-poetry-xl lg:text-poetry-2xl italic leading-relaxed text-foreground">
              &quot;{quote}&quot;
            </p>
            {(author || source) && (
              <footer className="text-muted-foreground">
                {author && (
                  <cite className="text-base font-medium not-italic">
                    — {author}
                  </cite>
                )}
                {source && <p className="text-sm mt-1">{source}</p>}
              </footer>
            )}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
