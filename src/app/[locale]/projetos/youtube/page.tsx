"use client";

import { useTranslations } from "next-intl";

export default function Youtube() {
  const t = useTranslations("turingLabs");
  
  const topics = t.raw("topics") as { title: string; description: string }[];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-5 pt-16 pb-24">
      
      <section className="space-y-8">
        <div className="space-y-4">
          <p className="font-mono text-sm text-[var(--accent)]">{t("eyebrow")}</p>
          <h1 className="text-4xl leading-snug font-extrabold md:text-5xl">{t("title")}</h1>
          
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-[var(--accent)]">
              {t("status")}
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
              {t("date")}
            </span>
          </div>
        </div>
        
        <p className="max-w-3xl text-xl leading-relaxed text-[var(--muted)]">
          {t("subtitle")}
        </p>
      </section>

      <section className="flex flex-col gap-8 border-t border-[var(--border)] pt-12 md:flex-row md:gap-12">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">{t("aboutTitle")}</h2>
        </div>
        <div className="space-y-6 md:w-2/3">
          <p className="text-base leading-relaxed text-[var(--muted)]">
            {t("aboutP1")}
          </p>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            {t("aboutP2")}
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-8 border-t border-[var(--border)] pt-12 md:flex-row md:gap-12">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">{t("topicsTitle")}</h2>
        </div>
        <div className="md:w-2/3">
          <ul className="flex flex-col gap-8">
            {topics.map((topic, index) => (
              <li key={index} className="space-y-2">
                <h3 className="font-mono text-lg font-bold text-[var(--foreground)]">

                  <span className="text-[var(--accent)] mr-2">../</span>
                  {topic.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)] pl-6 border-l border-[var(--border)] ml-1.5">
                  {topic.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-8 border-t border-[var(--border)] pt-12 md:flex-row md:gap-12">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">{t("ctaTitle")}</h2>
        </div>
        <div className="space-y-6 md:w-2/3">
          <p className="text-base leading-relaxed text-[var(--muted)]">
            {t("ctaText")}
          </p>
          <a
            className="group inline-flex items-center gap-2 font-mono text-sm font-semibold text-[var(--foreground)] transition hover:text-[var(--accent)]"
            href="mailto:sergiojunqueira.s@gmail.com?subject=Turing%20Labs"
          >
            <span className="text-[var(--accent)]">↗</span> {t("ctaLink")}
          </a>
        </div>
      </section>

    </div>
  );
}