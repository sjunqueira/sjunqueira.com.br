import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";
import Header from "./_components/Header/page";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./_components/themeProvider/themeProvider";
import Footer from "./_components/Footer/page";
import { routing } from "../../../i18n/routing";
import SiteCanvas from "./_components/siteCanvas/page";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergio Junqueira - Engenharia de Dados & Software",
  description:
    "Engenheiro de Dados e desenvolvedor de software focado em plataformas resilientes, produtos digitais e impacto no negócio.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider>
        <SiteCanvas>

        <Header />
        <main className="flex w-full flex-1 justify-center">{children}</main>
        <Footer />
        </SiteCanvas>
      </ThemeProvider>
      <SpeedInsights />
      <Analytics />
    </NextIntlClientProvider>
  );
}