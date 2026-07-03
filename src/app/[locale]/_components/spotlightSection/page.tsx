import type { ReactNode } from "react";
import Image from "next/image";
// Importe o Link do seu arquivo de configuração do i18n
// Verifique se o número de '../' está correto para a pasta atual deste componente!

import { SiPython, SiTypescript, SiReact, SiNextdotjs, SiJavascript, SiGithub } from "react-icons/si";
import {
  TbDatabase,
  TbCloud,
  TbChartBar,
  TbGitBranch,
  TbBuildingSkyscraper,
  TbSchool,
  TbBrandGoogle,
} from "react-icons/tb";
import { Link } from "../../../../../i18n/navigation";

const iconMap: Record<string, ReactNode> = {
  python: <SiPython />,
  typescript: <SiTypescript />,
  react: <SiReact />,
  nextjs: <SiNextdotjs />,
  javascript: <SiJavascript />,
  github: <SiGithub />,
  database: <TbDatabase />,
  sql: <TbDatabase />,
  cloud: <TbCloud />,
  bigquery: <TbBrandGoogle />,
  powerbi: <TbChartBar />,
  chart: <TbChartBar />,
  git: <TbGitBranch />,
  building: <TbBuildingSkyscraper />,
  school: <TbSchool />,
};

export type Spotlight = {
  eyebrow: string;
  icon: string;
  logo?: string;
  accent: "muted" | "accent";
  title: string;
  meta: string;
  description: string;
  tags: string[];
  link?: { label: string; href: string; external?: boolean };
};

export default function SpotlightSection({ spotlight }: { spotlight: Spotlight }) {
  const { eyebrow, icon, logo, accent, title, meta, description, tags, link } = spotlight;

  return (
    <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
      <p className="font-mono text-xs text-[var(--accent)]">{eyebrow}</p>
      <div className="mt-4 flex items-start gap-5">
        
        <div
          className={
            accent === "accent"
              ? "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[var(--accent)] text-xl text-white"
              : "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] text-xl text-[var(--accent)]"
          }
        >
          {logo ? (
            <Image
              src={logo}
              alt={`Logo da empresa ${title}`}
              width={150}
              height={150}
              className="h-full w-full object-cover"
              
              
            />
          ) : (
            iconMap[icon]
          )}
        </div>

        <div className="flex-1 space-y-3">
          <div>
            <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">{title}</h2>
            <p className="mt-1 font-mono text-xs text-[var(--muted)]">{meta}</p>
          </div>
          <p className="max-w-xl text-sm text-[var(--muted)]">{description}</p>
          <div className="flex flex-wrap items-center gap-4">
            {tags.map((tag) => (
              <span key={tag} className="text-lg text-[var(--muted)]" title={tag}>
                {iconMap[tag]}
              </span>
            ))}
          </div>
          
          {/* Nova lógica de links */}
          {link && (
            link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-mono text-sm text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
              >
                {link.label} →
              </a>
            ) : (
              <Link
                href={link.href}
                className="inline-flex font-mono text-sm text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
              >
                {link.label} →
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}