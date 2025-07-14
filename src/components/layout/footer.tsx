import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-poetry">Osadolor Osayande</h3>
            <p className="text-sm text-muted-foreground">
              Celebrating Nigerian poetry and fostering literary excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                href="/books"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Books
              </Link>
              <Link
                href="/sande-prize"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Sande Prize
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>For inquiries about the Sande Prize</p>
              <p>or poetry collaborations</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Osadolor Osayande. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
