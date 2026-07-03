import { getTranslations } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import SpotlightSection, { Spotlight } from "./_components/spotlightSection/page";
import { RevealGroup, RevealItem } from "./_components/motionReveal/page";
import PipelineDiagram from "./_components/pipelineDiagram/page";
import StackCategories from "./_components/stackCategories/page";
import GithubActivity from "./_components/githubActivity/page";
import TechIconCluster from "./_components/techIconCluster/page";


type Stat = { value: string; label: string };
type StackGroup = { title: string; description: string; tools: string[] };

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const stats = t.raw("stats") as Stat[];
  const spotlights = t.raw("spotlights") as Spotlight[];
  const stackGroups = t.raw("stack.groups") as StackGroup[];

  const badges = [
    { label: t("location"), variant: "default" as const },
    { label: t("company"), variant: "default" as const },
    { label: t("availability"), variant: "accent" as const },
  ];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-5 pt-16 pb-24">

      {/* HERO */}
      <section className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
        <RevealGroup className="max-w-xl space-y-6">
          <RevealItem>
            <p className="font-mono text-sm text-[var(--accent)]">{t("eyebrow")}</p>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={
                    badge.variant === "accent"
                      ? "inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-3 py-1.5 font-mono text-xs text-[var(--accent)]"
                      : "inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-3 py-1.5 font-mono text-xs text-[var(--muted)]"
                  }
                >
                  {badge.variant === "accent" && (
                    <span className="relative h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-50" />
                      <span className="absolute inset-0 rounded-full bg-[var(--accent)]" />
                    </span>
                  )}
                  {badge.label}
                </span>
              ))}
            </div>
          </RevealItem>

          <RevealItem>
            <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
              {t("title")}
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="text-base text-[var(--muted)]">{t("subtitle")}</p>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-wrap items-center gap-5">
              <a
              
                href="mailto:sergiojunqueira.s@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 font-mono text-sm font-semibold !text-white transition hover:bg-[var(--accent-strong)]"
              >
                {t("ctaEmail")} →
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 font-mono text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {t("ctaResume")} ↓
              </a>
              <Link
                href="/projetos"
                className="border-b border-[var(--border-strong)] pb-0.5 font-mono text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                ver projetos
              </Link>
              <Link
                href="https://www.linkedin.com/in/sergio-junqueira/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[var(--border-strong)] pb-0.5 font-mono text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                linkedin
              </Link>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-[var(--muted)]">
              {stats.map((stat) => (
                <span key={stat.label}>
                  <span className="text-[var(--accent)]">{stat.value}</span> {stat.label}
                </span>
              ))}
            </div>
          </RevealItem>
        </RevealGroup>

        <PipelineDiagram />
        
      </section>

      <section>
        {spotlights.map((spotlight) => (
          <SpotlightSection key={spotlight.title} spotlight={spotlight} />
        ))}
      </section>

      {/* STACK CATEGORIZADO */}
      <StackCategories eyebrow={t("stack.eyebrow")} title={t("stack.title")} groups={stackGroups} />

      {/* GITHUB ACTIVITY */}
      <section className="space-y-6 border-t border-[var(--border)] pt-12">
        <div className="space-y-2">
          <p className="font-mono text-sm text-[var(--accent)]">{t("githubEyebrow")}</p>
          <h2 className="text-3xl font-bold">{t("githubTitle")}</h2>
        </div>
        <GithubActivity username="sjunqueira" />
      </section>

    </div>
  );
}