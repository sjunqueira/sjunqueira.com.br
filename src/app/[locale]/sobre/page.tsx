import { getTranslations } from "next-intl/server";
import { Link } from "../../../../i18n/navigation";
import Image from "next/image";

type TimelineItem = { period: string; company: string; role: string; text: string; highlights: string[] };
type Principle = { title: string; text: string };

const stackData = ["SQL", "Python", "Spark", "dbt", "Airflow", "BigQuery", "GCP", "Azure", "Power BI"];
const stackSoftware = ["Node.js", "Next.js", "React", "TypeScript", "Drizzle ORM", "PostgreSQL"];

export default async function Sobre({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sobre" });
  const timeline = t.raw("timeline") as TimelineItem[];
  const principles = t.raw("principles") as Principle[];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-5 pt-16 pb-24">
      
      {/* HEADER ATUALIZADO COM IMAGEM */}
      <section className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-6 md:max-w-2xl">
          <p className="font-mono text-sm text-[var(--accent)]">{t("eyebrow")}</p>
          <h1 className="text-4xl leading-snug font-extrabold">{t("title")}</h1>
          <p className="max-w-xl text-base text-[var(--muted)]">{t("subtitle")}</p>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <span>{t("location")}</span>
            <span>/</span>
            <span>{t("roleLine")}</span>
          </div>
        </div>
        
        {/* Placeholder da Foto */}
        <div className="shrink-0">
          <div className="relative h-48 w-48 overflow-hidden rounded-3xl border border-[var(--border)] shadow-sm md:h-64 md:w-64 lg:h-72 lg:w-72">
            <Image
              src="/sergio.jpg" // Substitua pelo caminho real da sua foto
              alt="Sergio Junqueira de óculos redondos pretos e barba com corte quadrado"
              fill
              priority
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
            />
          </div>
        </div>
      </section>

      {/* TIMELINE / CV */}
      <section className="space-y-8 border-t border-[var(--border)] pt-12">
        <div className="space-y-2">
          <p className="font-mono text-sm text-[var(--accent)]">{t("timelineEyebrow")}</p>
          <h2 className="text-3xl font-bold">{t("timelineTitle")}</h2>
        </div>
        <div className="space-y-10">
          {timeline.map((item) => (
            <article key={`${item.company}-${item.period}`} className="space-y-3">
              <div>
                <p className="font-mono text-xs text-[var(--accent)]">{item.period}</p>
                <h3 className="text-xl font-bold text-[var(--foreground)]">{item.company}</h3>
                <p className="text-sm text-[var(--muted)]">{item.role}</p>
              </div>
              <p className="text-base text-[var(--foreground)]">{item.text}</p>
              {item.highlights.length > 0 && (
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="font-mono text-[var(--accent)]">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
        <p className="border-l-2 border-[var(--border-strong)] pl-3 font-mono text-xs text-[var(--muted)]">
          {t("freelanceNote")}
        </p>
      </section>

      {/* PRINCÍPIOS E STACK */}
      <section className="grid gap-12 border-t border-[var(--border)] pt-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <p className="font-mono text-sm text-[var(--accent)]">{t("principlesEyebrow")}</p>
          <h2 className="text-3xl font-bold">{t("principlesTitle")}</h2>
          <ul className="space-y-6">
            {principles.map((principle) => (
              <li key={principle.title} className="space-y-1">
                <p className="text-sm font-bold text-[var(--foreground)]">{principle.title}</p>
                <p className="text-sm text-[var(--muted)]">{principle.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div>
            <p className="mb-2 font-mono text-sm text-[var(--accent)]">{t("stackDataLabel")}</p>
            <div className="flex flex-wrap gap-2">
              {stackData.map((item) => (
                <span key={item} className="rounded-md border border-[var(--border-strong)] px-2.5 py-1 font-mono text-xs text-[var(--muted)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 font-mono text-sm text-[var(--accent)]">{t("stackSoftwareLabel")}</p>
            <div className="flex flex-wrap gap-2">
              {stackSoftware.map((item) => (
                <span key={item} className="rounded-md border border-[var(--border-strong)] px-2.5 py-1 font-mono text-xs text-[var(--muted)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="space-y-4 border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-bold">{t("contactTitle")}</h2>
        <p className="max-w-2xl text-base text-[var(--muted)]">{t("contactText")}</p>
        <div className="flex flex-wrap gap-4 font-mono text-sm">
          <a
            className="border-b border-[var(--accent)] pb-1 text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
            href="mailto:sergiojunqueira.s@gmail.com"
          >
            sergiojunqueira.s@gmail.com
          </a>
          <Link
            className="border-b border-[var(--accent)] pb-1 text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
            href="https://www.linkedin.com/in/sergio-junqueira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </div>
      </section>
    </div>
  );
}