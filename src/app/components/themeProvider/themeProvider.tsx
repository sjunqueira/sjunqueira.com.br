import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export async function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
