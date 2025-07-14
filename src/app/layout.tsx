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
    "Celebrated Nigerian poet, author of 'Thirty Photographs of God' and 'My Accent is a Zebra'. Founder of the Sande Prize for Nigerian Poetry.",
  keywords: ["poetry", "Nigerian poetry", "Sande Prize", "Osadolor Osayande"],
  authors: [{ name: "Osadolor Osayande" }],
  openGraph: {
    title: "Osadolor Osayande - Poetry & The Sande Prize",
    description:
      "Celebrated Nigerian poet, author of 'Thirty Photographs of God' and 'My Accent is a Zebra'. Founder of the Sande Prize for Nigerian Poetry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}
