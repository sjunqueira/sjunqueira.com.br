import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";

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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const locale = params.locale ?? "pt";

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${manrope.variable} ${jetBrainsMono.variable}`}
    >
      <body className={`${manrope.className} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
