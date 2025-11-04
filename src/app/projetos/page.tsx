"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Repo = {
  name: string;
  description: string;
  html_url: string;
  private?: boolean;
  stargazers_count?: number;
  pushed_at?: string;
  language?: string;
};

const featuredProjects = [
  {
    title: "Grupo Boticário ",
    context: "Liderança técnica e decisões orientadas a dados - Em andamento",
    description:
      "Atuei como líder técnico no time de Dados, responsável por estruturar pipelines, padrões de observabilidade e boas práticas de engenharia. Recentemente migrei para o time de Product Analytics, onde apoio squads de produto na definição de métricas, modelagem analítica e tomada de decisão baseada em dados.",
    note: "Projeto interno.",
  },
  {
    title: "Edyo",
    context: "Projeto autoral • em desenvolvimento",
    description:
      "Plataforma de gestão educacional completa que cuida de matrículas, calendário acadêmico, financeiro e indicadores pedagógicos e IA. Estou desenhando arquitetura, UX e código sozinho, com foco em escolas de pequeno e médio porte.",
    note: "MVP em desenvolvimento ativo, aberto a conversas com escolas parceiras para testes.",
  },
  {
    title: "Dragenda ",
    context: "Projeto autoral • desenvolvimento pausado",
    description:
      "Aplicação full stack de gestão de clinicas de saúde. Criada para estudos de react e Next. Apresenta alguns bugs, sem previsão de correção no momento.",
    links: [
      { href: "https://drconsulta-one.vercel.app/", label: "Ver demo" },
      { href: "https://github.com/sjunqueira/dragenda", label: "Código" },
    ],
  },
  {
    title: "Turing Labs",
    context: "Conteúdo educacional • em produção",
    description:
      "Série de cursos que estou gravando para acelerar quem quer migrar para engenharia de dados. A proposta mistura arquiteturas reais, exercícios com dados abertos e guia de carreira.",
    note: "Lançamento dos primeiros módulos previsto para Q1/2026.",
  },
];

export default function Projetos() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/sjunqueira/repos",
        );
        const data = (await res.json()) as Repo[];
        const filtered = data
          .filter((repo) => !repo.private)
          .sort((a, b) => {
            const starsA = a.stargazers_count ?? 0;
            const starsB = b.stargazers_count ?? 0;

            if (starsA === starsB) {
              return (
                new Date(b.pushed_at ?? 0).getTime() -
                new Date(a.pushed_at ?? 0).getTime()
              );
            }

            return starsB - starsA;
          })
          .slice(0, 10);

        setRepos(filtered);
      } catch (error) {
        console.error("Erro ao buscar repositórios", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-5 pt-16 pb-24">
      <section className="space-y-6">
        <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
          Portfólio vivo
        </p>
        <h1 className="text-4xl leading-snug font-semibold">
          Projetos que misturam engenharia de dados, software e visão de
          produto.
        </h1>
        <p className="max-w-3xl text-base text-[var(--muted)]">
          Nem todos os cases corporativos podem ser compartilhados publicamente,
          mas aqui está um recorte do que tenho construído e como posso ajudar
          sua equipe.
        </p>
      </section>

      <section className="space-y-8 border-t border-[var(--border)] pt-12">
        <div className="space-y-2">
          <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
            Em destaque
          </p>
          <h2 className="text-3xl font-semibold">Cases recentes</h2>
        </div>
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <article key={project.title} className="space-y-3">
              <p className="text-xs tracking-[0.25em] text-[var(--muted)] uppercase">
                {project.context}
              </p>
              <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                {project.title}
              </h3>
              <p className="text-base text-[var(--muted)]">
                {project.description}
              </p>
              {project.note && (
                <p className="text-xs text-[var(--muted)]">{project.note}</p>
              )}
              {project.links && (
                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      className="border-b border-[var(--border)] pb-1 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 border-t border-[var(--border)] pt-12">
        <div className="space-y-2">
          <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
            Laboratório aberto
          </p>
          <h2 className="text-3xl font-semibold">Repositórios públicos</h2>
        </div>
        <p className="text-sm text-[var(--muted)]">
          Provas de conceito, refatorações e ferramentas que mantenho abertas.
          Os repositórios abaixo são atualizados com frequência diferente, mas
          mostram minha linha de raciocínio.
        </p>
        <ul className="space-y-6">
          {repos.map((repo) => (
            <li
              key={repo.name}
              className="space-y-2 border-t border-[var(--border)] pt-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {repo.name}
                </h3>
                <span className="text-xs tracking-[0.2em] text-[var(--muted)] uppercase">
                  {repo.language ?? "Stack mista"}
                </span>
              </div>
              <p className="text-sm text-[var(--muted)]">
                {repo.description || "Projeto em evolução."}
              </p>
              {repo.stargazers_count !== undefined &&
                repo.stargazers_count > 0 && (
                  <p className="text-xs text-[var(--muted)]">
                    {repo.stargazers_count} stars
                  </p>
                )}
              <Link
                className="inline-flex items-center text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no GitHub →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-semibold">Vamos pensar algo juntos?</h2>
        <p className="max-w-3xl text-base text-[var(--muted)]">
          Curto desafios que exigem olhar sistêmico: dados consistentes,
          software confiável e pessoas alinhadas. Escreve para mim e contamos
          mais histórias na call.
        </p>
        <Link
          className="border-b border-[var(--border)] pb-1 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          href="mailto:sergiojunqueira.s@gmail.com"
        >
          sergiojunqueira.s@gmail.com
        </Link>
      </section>
    </div>
  );
}
