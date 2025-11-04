import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import { ThemeProvider } from "./components/themeProvider/themeProvider";
import Footer from "./components/Footer/page";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sergio Junqueira - Engenharia de Dados & Software",
  description:
    "Engenheiro de Dados e desenvolvedor de software focado em plataformas resilientes, produtos digitais e impacto no negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="flex w-full flex-1 justify-center">{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
