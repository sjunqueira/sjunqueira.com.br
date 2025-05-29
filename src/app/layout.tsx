import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "./components/themeProvider/themeProvider";
import Footer from "./components/Footer/page";

const getInter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sergio Junqueira",
  description: "Engenheiro de Dados e desenvolvedor Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={`${getInter} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
