import type { ReactNode } from "react";
import {
  TbDatabase,
  TbBrandPython,
  TbBolt,
  TbArrowsShuffle,
  TbWind,
  TbBrandGoogle,
  TbCloud,
  TbBrandAzure,
  TbChartBar,
  TbBrandNodejs,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTypescript,
  TbServer,
} from "react-icons/tb";

const toolIconMap: Record<string, ReactNode> = {
  sql: <TbDatabase />,
  python: <TbBrandPython />,
  spark: <TbBolt />,
  dbt: <TbArrowsShuffle />,
  airflow: <TbWind />,
  bigquery: <TbBrandGoogle />,
  gcp: <TbCloud />,
  azure: <TbBrandAzure />,
  powerbi: <TbChartBar />,
  nodejs: <TbBrandNodejs />,
  nextjs: <TbBrandNextjs />,
  react: <TbBrandReact />,
  typescript: <TbBrandTypescript />,
  postgresql: <TbServer />,
};

type StackGroup = { title: string; description: string; tools: string[] };

export default function StackCategories({
  eyebrow,
  title,
  groups,
}: {
  eyebrow: string;
  title: string;
  groups: StackGroup[];
}) {
  return (
    <section className="space-y-6 border-t border-[var(--border)] pt-12">
      <div className="space-y-2">
        <p className="font-mono text-sm text-[var(--accent)]">{eyebrow}</p>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
          {groups.map((group, index) => (
            <div
              key={group.title}
              className={`py-5 ${
                index === 1
                  ? "sm:border-l sm:border-[var(--accent)] sm:pl-8"
                  : "sm:pr-8"
              }`}
            >
            <h3 className="text-base font-bold text-[var(--foreground)]">{group.title}</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">{group.description}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)]"
                  title={tool}
                >
                  {toolIconMap[tool]}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}