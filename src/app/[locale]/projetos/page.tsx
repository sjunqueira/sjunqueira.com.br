"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "../../../../i18n/navigation";

type Repo = {
  name: string;
  description: string;
  html_url: string;
  private?: boolean;
  pushed_at?: string;
  language?: string;
};

type FeaturedProject = {
  title: string;
  status: string;
  context: string;
  description: string;
  note: string;
  muted: boolean;
};

const FEATURED_REPO_ORDER = ["sjunqueira.com.br", "fintrack", "dragenda", "taskify"];

export default function Projetos() {
  const t = useTranslations("projetos");
  const featured = t.raw("featured") as FeaturedProject[];
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/sjunqueira/repos");
        const data = (await res.json()) as Repo[];
        const publicRepos = data.filter((repo) => !repo.private);

        const ordered = [...publicRepos].sort((a, b) => {
          const rankA = FEATURED_REPO_ORDER.indexOf(a.name);
          const rankB = FEATURED_REPO_ORDER.indexOf(b.name);
          if (rankA !== -1 || rankB !== -1) {
            return (rankA === -1 ? 99 : rankA) - (rankB === -1 ? 99 : rankB);
          }
          return new Date(b.pushed_at ?? 0).getTime() - new Date(a.pushed_at ?? 0).getTime();
        });

        setRepos(ordered.slice(0, 8));
      } catch (error) {
        console.error("Erro ao buscar repositórios", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-5 pt-16 pb-24">
      <section className="space-y-6">
        <p className="font-mono text-sm text-[var(--accent)]">{t("eyebrow")}</p>
        <h1 className="text-4xl leading-snug font-extrabold">{t("title")}</h1>
        <p className="max-w-3xl text-base text-[var(--muted)]">{t("subtitle")}</p>
      </section>

      <section className="space-y-8 border-t border-[var(--border)] pt-12">
        <div className="space-y-2">
          <p className="font-mono text-sm text-[var(--accent)]">{t("featuredEyebrow")}</p>
          <h2 className="text-3xl font-bold">{t("featuredTitle")}</h2>
        </div>
        <div className="space-y-4">
          {featured.map((project) => (
            <article
              key={project.title}
              className={`space-y-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 ${
                project.muted ? "opacity-75" : ""
              }`}
            >
              <p className="font-mono text-xs">
                <span className={project.muted ? "text-[var(--muted)]" : "text-[var(--accent)]"}>
                  {project.status}
                </span>{" "}
                <span className="text-[var(--muted)]">{project.context}</span>
              </p>
              <h3 className="text-2xl font-bold text-[var(--foreground)]">{project.title}</h3>
              <p className="text-base text-[var(--muted)]">{project.description}</p>
              {project.note && <p className="text-xs text-[var(--muted)]">{project.note}</p>}
              {project.title === "Dragenda" && (
                <div className="flex flex-wrap gap-4 font-mono text-sm">
                  <Link
                    className="border-b border-[var(--accent)] pb-1 text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
                    href="https://drconsulta-one.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("demoLabel")}
                  </Link>
                  <Link
                    className="border-b border-[var(--accent)] pb-1 text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
                    href="https://github.com/sjunqueira/dragenda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("codeLabel")}
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 border-t border-[var(--border)] pt-12">
        <div className="space-y-2">
          <p className="font-mono text-sm text-[var(--accent)]">{t("reposEyebrow")}</p>
          <h2 className="text-3xl font-bold">{t("reposTitle")}</h2>
        </div>
        <p className="text-sm text-[var(--muted)]">{t("reposSubtitle")}</p>
        <ul className="space-y-6">
          {repos.map((repo) => (
            <li key={repo.name} className="space-y-2 border-t border-[var(--border)] pt-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-[var(--foreground)]">{repo.name}</h3>
                <span className="font-mono text-xs text-[var(--muted)]">
                  {repo.language ?? t("reposStackMista")}
                </span>
              </div>
              <p className="text-sm text-[var(--muted)]">{repo.description || t("reposFallback")}</p>
              <Link
                className="inline-flex items-center font-mono text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("reposLink")}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-bold">{t("contactTitle")}</h2>
        <p className="max-w-3xl text-base text-[var(--muted)]">{t("contactText")}</p>
        <a
          className="border-b border-[var(--accent)] pb-1 font-mono text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
          href="mailto:sergiojunqueira.s@gmail.com"
        >
          sergiojunqueira.s@gmail.com
        </a>
      </section>
    </div>
  );
}