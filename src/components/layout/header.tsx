"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/books" },
  { name: "Sande Prize", href: "/sande-prize" },
];

const contactLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/osadolorosayande21/",
    icon: FaInstagram,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:contact@osadolor.com",
    icon: Mail,
    external: false,
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold font-poetry"
          >
            <span>Osadolor Osayande</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === item.href
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Icons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Contact Icons */}
            <div className="flex items-center space-x-3">
              {contactLinks.map((link) => {
                const IconComponent = link.icon;
                if (link.external) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-md hover:bg-muted/50"
                      title={link.name}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                }
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-md hover:bg-muted/50"
                    title={link.name}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Contact Icons for Mobile */}
            <div className="flex items-center space-x-2">
              {contactLinks.map((link) => {
                const IconComponent = link.icon;
                if (link.external) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-md hover:bg-muted/50"
                      title={link.name}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                }
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-md hover:bg-muted/50"
                    title={link.name}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            {/* <ThemeToggle /> */}
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 px-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 py-2 text-base font-medium transition-colors hover:text-accent ${
                    pathname === item.href
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
