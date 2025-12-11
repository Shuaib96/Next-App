"use client";

import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
      <div>
        {children}
      </div>
    </ThemeProvider>
  );
}
