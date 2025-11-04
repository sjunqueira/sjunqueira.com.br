import Link from "next/link";

const timeline = [
  {
    company: "Grupo Boticário",
    role: "Líder Técnico — Engenharia de Dados",
    period: "2024 • atual",
    text: "Coordenei uma squad multidisciplinar, evoluindo plataformas de dados e conectando discovery, arquitetura e operação. Recentemente migrei para o time de Product Analytics para apoiar squads em decisões técnicas de dados",
    highlights: [
      "Desenho de domínios orientados a produtos",
      "Observabilidade e SLAs claros para pipelines críticos",
    ],
  },
  {
    company: "PagoNxt Merchant Solutions (Santander Group)",
    role: "Analytics Engineer",
    period: "2023 • 2024",
    text: "Atuei na construção de pipelines e sistemas analíticos para produtos de pagamentos em ambiente bancário. Fui responsável por implementar fluxos de qualidade de dados e integrações analíticas com produtos de fraude e compliance, garantindo confiabilidade e escalabilidade nas análises.",
    highlights: [
      "Criação de MVP para sistema de qualidade de dados de produto financeiro",
      "Pipelines de ingestão, transformação e APIs analíticas com Databricks, Python e SQL",
      "Integração com sistemas de fraude e compliance em ambiente produtivo",
    ],
  },
  {
    company: "Startups & consultorias",
    role: "Engenheiro de Dados & Desenvolvedor",
    period: "2016 • 2023",
    text: "Atuei em ambientes de alto crescimento, como Alura, Anymarket, aiqfome e outros, com pipelines, integrações e produtos digitais para times de marketing, vendas e operações.",
    highlights: [
      "Pipelines batch e streaming em produção",
      "APIs e frontends conectando dados a áreas de negócio",
    ],
  },
  {
    company: "Comunidade & mentoria",
    role: "Mentor e produtor de conteúdo",
    period: "Contínuo",
    text: "Ajudo profissionais a migrarem para engenharia, compartilhando aprendizados sem mistério.",
    highlights: [
      "Mentoria individual com plano de crescimento",
      "Workshops sobre arquitetura pragmática e qualidade",
    ],
  },
];

const principles = [
  {
    title: "Dados como produto",
    text: "Dados têm dono, contrato e propósito. Cada domínio deve entregar valor de forma confiável e versionada. Governança é consequência de boas práticas, não de burocracia.",
  },
  {
    title: "Software que resolve",
    text: "Código limpo é meio, não fim. O objetivo é entregar soluções úteis, medíveis e sustentáveis, que evoluam junto com o negócio.",
  },
  {
    title: "Times que aprendem",
    text: "Ambientes saudáveis priorizam clareza, autonomia e aprendizado contínuo. Resultados duradouros vêm de equipes que entendem o 'porquê' do que fazem.",
  },
];

const learning = [
  "Product Analytics e decisão data-informed em escala",
  "Arquiteturas distribuídas e integração entre domínios de dados",
  "Desenvolvimento de times que unem engenharia, produto e negócio",
];

export default function Sobre() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-5 pt-16 pb-24">
      <section className="space-y-6">
        <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
          Sobre mim
        </p>
        <h1 className="text-4xl leading-snug font-semibold">
          Construo pontes entre dados, software e pessoas. Quero que cada
          entrega faça sentido para o negócio e para o time que mantém a
          operação.
        </h1>
        <p className="max-w-3xl text-base text-[var(--muted)]">
          Minha trajetória começou em dados, passou por desenvolvimento e hoje
          inclui liderança técnica. Já trabalhei em consultorias, startups e
          grandes empresas. Aprendi que processos importam quando são simples e
          que clareza reduz atrito entre tecnologia e negócio.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
          <span>Baseado em Florianópolis • SC</span>/
          <span>Mentor, engenheiro de soluções e líder técnico</span>
        </div>
      </section>

      <section className="space-y-8 border-t border-[var(--border)] pt-12">
        <div className="space-y-2">
          <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
            Trajetória
          </p>
          <h2 className="text-3xl font-semibold">De pipelines a produtos</h2>
        </div>
        <div className="space-y-10">
          {timeline.map((item) => (
            <article key={item.company} className="space-y-3">
              <div>
                <p className="text-xs tracking-[0.25em] text-[var(--muted)] uppercase">
                  {item.period}
                </p>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {item.company}
                </h3>
                <p className="text-sm text-[var(--muted)]">{item.role}</p>
              </div>
              <p className="text-base text-[var(--foreground)]">{item.text}</p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-2 block h-1 w-1 rounded-full bg-[var(--accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-12 border-t border-[var(--border)] pt-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
            Como enxergo o trabalho
          </p>
          <h2 className="text-3xl font-semibold">Princípios</h2>
          <ul className="space-y-6">
            {principles.map((principle) => (
              <li key={principle.title} className="space-y-1">
                <p className="text-sm font-semibold tracking-[0.25em] text-[var(--foreground)] uppercase">
                  {principle.title}
                </p>
                <p className="text-sm text-[var(--muted)]">{principle.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
            Aprendizados atuais
          </p>
          <p className="text-sm text-[var(--muted)]">
            Continuo expandindo o repertório em produto e software para
            complementar a bagagem em dados.
          </p>
          <ul className="space-y-2 text-sm text-[var(--foreground)]">
            {learning.map((topic) => (
              <li key={topic} className="flex items-start gap-2">
                <span className="mt-2 block h-1 w-1 rounded-full bg-[var(--accent)]" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4 border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-semibold">Quer trocar uma ideia?</h2>
        <p className="max-w-2xl text-base text-[var(--muted)]">
          Estou aberto para conversar sobre amadurecimento de dados, liderança
          técnica ou a construção de um produto digital. Me manda uma mensagem e
          marcamos um café remoto.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <a
            className="border-b border-[var(--border)] pb-1 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            href="mailto:sergiojunqueira.s@gmail.com"
          >
            sergiojunqueira.s@gmail.com
          </a>
          <Link
            className="border-b border-[var(--border)] pb-1 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
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
