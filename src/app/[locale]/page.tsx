import { getTranslations } from "next-intl/server";
import { Link } from "../../../i18n/navigation";

type Stat = { value: string; label: string };

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const stats = t.raw("stats") as Stat[];
  const focusAreas = t.raw("focusAreas") as string[];

  const actions = [
    { label: t("ctaProjects"), href: `/${locale}/projetos`, external: false },
    { label: "Blog", href: `/${locale}/blog`, external: false },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sergio-junqueira/", external: true },
  ];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-5 pt-16 pb-16">

      <section className="space-y-8">
        <div className="max-w-2xl space-y-6">
          <p className="font-mono text-sm text-[var(--accent)]">{t("eyebrow")}</p>
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
            {t("title")}
          </h1>
          <p className="max-w-xl text-base text-[var(--muted)]">{t("subtitle")}</p>
        </div>

        {/* COMMAND BAR — largura total, elemento de assinatura da página */}
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-[var(--surface)] shadow-sm">
          <div className="flex items-center gap-2 border-b border-[var(--border)] px-5 py-3">
            <span className="font-mono text-xs text-[var(--muted)]">⌘K</span>
            <span className="font-mono text-xs text-[var(--muted)]">ações rápidas</span>
          </div>
          <nav className="grid divide-y divide-[var(--border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {actions.map((action, i) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between px-5 py-4 font-mono text-sm text-[var(--foreground)] transition hover:bg-[var(--accent)]/5"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[var(--muted)]">{String(i + 1).padStart(2, "0")}</span>
                  {action.label}
                </span>
                <span className="text-[var(--accent)] opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-x-6 gap-y-1 border-t border-[var(--border)] px-5 py-3 font-mono text-xs text-[var(--muted)]">
            {stats.map((stat) => (
              <span key={stat.label}>
                <span className="text-[var(--accent)]">{stat.value}</span> {stat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6 border-t border-[var(--border)] pt-10">
        <div className="space-y-2">
          <p className="font-mono text-sm text-[var(--accent)]">{t("focusEyebrow")}</p>
          <h2 className="text-3xl font-bold">{t("focusTitle")}</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-[var(--border-strong)] px-4 py-2 font-mono text-sm text-[var(--foreground)]"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}