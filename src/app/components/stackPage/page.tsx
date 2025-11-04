"use client";

import { Icon } from "@iconify/react";

const stackGroups = [
  {
    title: "Plataforma & dados",
    description:
      "Governança, automação e observabilidade para que os dados cheguem limpos e no tempo certo.",
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
    title: "Software & produto",
    description:
      "APIs, serviços e interfaces web construídos com foco em performance, manutenção simples e entregas frequentes.",
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

const principles = [
  {
    title: "Qualidade como fundação",
    text: "Testes, validações e dados confiáveis desde o início. Sem qualidade, escala vira ilusão.",
  },
  {
    title: "Arquitetura pragmática",
    text: "Soluções simples, sustentáveis e evolutivas. Complexidade só quando agrega clareza ou impacto.",
  },
  {
    title: "Ritmos sustentáveis",
    text: "Ciclos curtos, alinhamento constante e foco em eliminar atrito entre engenharia, produto e negócio.",
  },
];

export default function TechStack() {
  return (
    <section className="space-y-10 border-t border-[var(--border)] pt-12">
      <div className="space-y-2">
        <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
          Ferramentas & princípios
        </p>
        <h2 className="text-3xl font-semibold">Stack de trabalho</h2>
        <p className="max-w-2xl text-base text-[var(--muted)]">
          Prefiro ferramentas maduras, com boa comunidade e que resolvam o
          problema de maneira simples. A lista muda ao longo do tempo, mas o
          critério continua o mesmo.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {stackGroups.map((group) => (
          <div key={group.title} className="space-y-3">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              {group.title}
            </h3>
            <p className="text-sm text-[var(--muted)]">{group.description}</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[var(--foreground)]">
              {group.items.map((item) => (
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
        <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
          Jeito de trabalhar
        </p>
        <p className="text-lg font-semibold text-[var(--foreground)]">
          Princípios aplicados no dia a dia
        </p>
        <ul className="space-y-3">
          {principles.map((principle) => (
            <li key={principle.title}>
              <p className="text-sm font-semibold tracking-[0.2em] text-[var(--foreground)] uppercase">
                {principle.title}
              </p>
              <p className="text-sm text-[var(--muted)]">{principle.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
