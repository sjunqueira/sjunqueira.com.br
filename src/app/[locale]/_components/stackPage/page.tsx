"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const stackItems = [
  {
    items: [
      { icon: "simple-icons:googlecloud", label: "GCP" },
      { icon: "simple-icons:amazonwebservices", label: "AWS" },
      { icon: "simple-icons:googlebigquery", label: "BigQuery" },
      { icon: "simple-icons:postgresql", label: "PostgreSQL" },
      { icon: "simple-icons:mysql", label: "MySQL" },
      { icon: "simple-icons:python", label: "Python" },
      { icon: "simple-icons:apachespark", label: "Spark" },
      { icon: "simple-icons:prisma", label: "Prisma" },
      { icon: "simple-icons:dbt", label: "dbt" },
      { icon: "simple-icons:snowflake", label: "Snowflake" },
      { icon: "simple-icons:grafana", label: "Grafana" },
      { icon: "simple-icons:databricks", label: "Databricks" },
      { icon: "simple-icons:apacheairflow", label: "Airflow" },
    ],
  },
  {
    items: [
      { icon: "simple-icons:nodedotjs", label: "Node.js" },
      { icon: "simple-icons:nestjs", label: "NestJS" },
      { icon: "simple-icons:typescript", label: "TypeScript" },
      { icon: "simple-icons:react", label: "React" },
      { icon: "simple-icons:nextdotjs", label: "Next.js" },
      { icon: "simple-icons:express", label: "Express" },
      { icon: "simple-icons:docker", label: "Docker" },
      { icon: "simple-icons:kubernetes", label: "Kubernetes" },
      { icon: "simple-icons:github", label: "GitHub" },
      { icon: "simple-icons:fastify", label: "Fastify" },
      { icon: "simple-icons:jest", label: "Jest" },
      { icon: "simple-icons:n8n", label: "n8n" },
    ],
  },
];

type Group = { title: string; description: string };
type Principle = { title: string; text: string };

export default function TechStack() {
  const t = useTranslations("home.stack");
  const groups = t.raw("groups") as Group[];
  const principles = t.raw("principles") as Principle[];

  return (
    <section className="space-y-10 border-t border-[var(--border)] pt-12">
      <div className="space-y-2">
        <p className="font-mono text-sm text-[var(--accent)]">{t("eyebrow")}</p>
        <h2 className="text-3xl font-bold">{t("title")}</h2>
        <p className="max-w-2xl text-base text-[var(--muted)]">{t("description")}</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {groups.map((group, groupIndex) => (
          <div key={group.title} className="space-y-3">
            <h3 className="text-lg font-bold text-[var(--foreground)]">{group.title}</h3>
            <p className="text-sm text-[var(--muted)]">{group.description}</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[var(--foreground)]">
              {stackItems[groupIndex].items.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <Icon icon={item.icon} width="16" height="16" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <p className="font-mono text-sm text-[var(--accent)]">{t("principlesEyebrow")}</p>
        <p className="text-lg font-bold text-[var(--foreground)]">{t("principlesTitle")}</p>
        <ul className="space-y-3">
          {principles.map((principle) => (
            <li key={principle.title}>
              <p className="text-sm font-bold text-[var(--foreground)]">{principle.title}</p>
              <p className="text-sm text-[var(--muted)]">{principle.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}