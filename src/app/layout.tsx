import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Osadolor Osayande - Poetry & The Sande Prize",
  description:
    "Celebrated Nigerian poet, author of 'Thirty Photographs of God' and 'Forked Accents'. Founder of the Sande Prize for Nigerian Poetry.",
  keywords: [
    "poetry",
    "Nigerian poetry",
    "Sande Prize",
    "Osadolor Osayande",
    "African literature",
    "contemporary poetry",
  ],
  authors: [{ name: "Osadolor Osayande" }],
  creator: "Osadolor Osayande",
  publisher: "Osadolor Osayande",
  metadataBase: new URL("https://osadolor.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Osadolor Osayande - Poetry & The Sande Prize",
    description:
      "Celebrated Nigerian poet, author of 'Thirty Photographs of God' and 'Forked Accents'. Founder of the Sande Prize for Nigerian Poetry.",
    url: "https://osadolor.com",
    siteName: "Osadolor Osayande",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/favicon_io/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Osadolor Osayande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Osadolor Osayande - Poetry & The Sande Prize",
    description:
      "Celebrated Nigerian poet, author of 'Thirty Photographs of God' and 'Forked Accents'. Founder of the Sande Prize for Nigerian Poetry.",
    images: ["/images/favicon_io/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d4af37" />
        <meta name="msapplication-TileColor" content="#d4af37" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Osadolor Osayande" />

        {/* Favicon */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/favicon_io/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon_io/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon_io/apple-touch-icon.png"
        />
        <link rel="manifest" href="/images/favicon_io/site.webmanifest" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
