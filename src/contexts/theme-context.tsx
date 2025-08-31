"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      themes={["light", "dark", "system"]}
      enableSystem={true}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}

// Export a hook for backward compatibility
export const useTheme = () => {
  // This will be replaced by next-themes' useTheme hook
  // For now, we'll keep the interface but it won't work until we update components
  throw new Error(
    "useTheme hook needs to be updated to use next-themes. Please use the useTheme hook from 'next-themes' instead."
  );
};
