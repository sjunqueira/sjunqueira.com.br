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
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-5 pt-16 pb-24">
      {/* Cabeçalho */}
      <section className="space-y-6">
        <p className="font-mono text-sm text-[var(--accent)]">{t("eyebrow")}</p>
        <h1 className="text-4xl leading-snug font-extrabold">{t("title")}</h1>
        <p className="max-w-3xl text-base text-[var(--muted)]">{t("subtitle")}</p>
      </section>

      {/* Projetos em Destaque - Formato Editorial (Sem Cards) */}
      <section className="space-y-10 border-t border-[var(--border)] pt-12">
        <div className="space-y-2">
          <p className="font-mono text-sm text-[var(--accent)]">{t("featuredEyebrow")}</p>
          <h2 className="text-3xl font-bold">{t("featuredTitle")}</h2>
        </div>
        
        <div className="flex flex-col">
          {featured.map((project) => (
            <article
              key={project.title}
              className={`group flex flex-col gap-4 border-b border-[var(--border)] py-10 first:pt-4 last:border-0 md:flex-row md:gap-12 ${
                project.muted ? "opacity-60" : ""
              }`}
            >
              {/* Coluna Esquerda: Título e Status */}
              <div className="shrink-0 space-y-2 md:w-1/3">
                <h3 className="text-2xl font-bold text-[var(--foreground)]">{project.title}</h3>
                <p className="font-mono text-sm">
                  <span className={project.muted ? "text-[var(--muted)]" : "text-[var(--accent)]"}>
                    {project.status}
                  </span>
                  {" "}
                  <span className="text-[var(--muted)]">— {project.context}</span>
                </p>
              </div>

              {/* Coluna Direita: Descrição e Links */}
              <div className="flex flex-col justify-center space-y-4 md:w-2/3">
                <p className="text-base leading-relaxed text-[var(--muted)]">{project.description}</p>
                
                {project.note && (
                  <p className="font-mono text-xs text-[var(--muted)]">
                    &gt; {project.note}
                  </p>
                )}
                {project.title === "Sergio Junqueira - Data & Tech" && (
                  <div className="flex flex-wrap gap-6 pt-2 font-mono text-sm">
                    <Link
                      className="flex items-center gap-2 text-[var(--foreground)] transition hover:text-[var(--accent)]"
                      href="/projetos/youtube"
                    >
                      <span className="text-[var(--accent)]">↗</span> {t("demoLabel")}
                    </Link>
                    
                  </div>
                )}

                {project.title === "Dragenda" && (
                  <div className="flex flex-wrap gap-6 pt-2 font-mono text-sm">
                    <Link
                      className="flex items-center gap-2 text-[var(--foreground)] transition hover:text-[var(--accent)]"
                      href="https://drconsulta-one.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-[var(--accent)]">↗</span> {t("demoLabel")}
                    </Link>
                    <Link
                      className="flex items-center gap-2 text-[var(--foreground)] transition hover:text-[var(--accent)]"
                      href="https://github.com/sjunqueira/dragenda"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-[var(--accent)]">↗</span> {t("codeLabel")}
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Repositórios GitHub - Formato de Lista Limpa em Grid */}
      <section className="space-y-10 border-t border-[var(--border)] pt-12">
        <div>
          <p className="font-mono text-sm text-[var(--accent)]">{t("reposEyebrow")}</p>
          <h2 className="mt-2 text-3xl font-bold">{t("reposTitle")}</h2>
          <p className="mt-4 text-sm text-[var(--muted)]">{t("reposSubtitle")}</p>
        </div>
        
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

      {/* Contato */}
      <section className="space-y-4 border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-bold">{t("contactTitle")}</h2>
        <p className="max-w-3xl text-base text-[var(--muted)]">{t("contactText")}</p>
        <a
          className="inline-block border-b border-[var(--accent)] pb-1 font-mono text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
          href="mailto:sergiojunqueira.s@gmail.com"
        >
          sergiojunqueira.s@gmail.com
        </a>
      </section>
    </div>
  );
}
        