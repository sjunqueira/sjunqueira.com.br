import Image from "next/image";
import Link from "next/link";
import TechStack from "./components/stackPage/page";

const focusAreas = [
  {
    title: "Plataformas de dados que sustentam decisões",
    description:
      "Arquitetura, ingestão e governança para garantir dados confiáveis e úteis. Domínios claros, pipelines com observabilidade e custos sob controle.",
  },
  {
    title: "Software que chega em produção",
    description:
      "Do backend ao front, desenho e entrego experiências completas. APIs estáveis, interfaces responsivas e monitoramento real do que importa.",
  },
  {
    title: "Liderança técnica próxima do time",
    description:
      "Rituais leves, padrões bem documentados e mentoria direta. Ajudo o time a ganhar autonomia sem perder qualidade.",
  },
];

const recentWork = [
  {
    label: "Grupo Boticário",
    text: "Atuo no time de Product Analytics, conectando engenharia de dados e produto para apoiar decisões estratégicas baseadas em métricas e modelagem analítica. Antes, liderei iniciativas de arquitetura e observabilidade na plataforma de dados corporativa.",
  },
  {
    label: "Projetos autorais",
    text: "Desenvolvo produtos SaaS que integram engenharia, dados e experiência digital explorando arquiteturas modernas, APIs escaláveis e automações inteligentes.",
  },
  {
    label: "Comunidade",
    text: "Produzo conteúdo técnico e ofereço mentorias sobre carreira, engenharia de dados, software e liderança, ajudando profissionais a evoluírem com base em prática e propósito.",
  },
];

export default function Home() {
  return (
    <div className="flex w-full max-w-5xl flex-col gap-16 px-5 pt-16 pb-24">
      <section className="grid gap-10 md:grid-cols-[2.2fr_1fr]">
        <div className="space-y-6">
          <p className="text-sm tracking-[0.25em] text-[var(--muted)] uppercase">
            Sergio Junqueira
          </p>
          <h1 className="text-4xl leading-snug font-semibold md:text-5xl">
            Engenharia de dados e software trabalhadas com calma, propósito e
            entrega contínua.
          </h1>
          <p className="max-w-xl text-base text-[var(--muted)]">
            Sou engenheiro de dados e desenvolvedor. Atuo hoje como líder
            técnico no Grupo Boticário, conectando estratégia de produto com
            arquitetura e operação. Meu objetivo é fazer dados, código e pessoas
            trabalharem juntos sem drama.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
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
            <Link
              className="border-b border-[var(--border)] pb-1 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              href="https://github.com/sjunqueira"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
        <div className="md:justify-self-end">
          <figure className="relative mx-auto w-[220px] sm:w-[240px] md:w-[300px]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[calc(var(--radius-lg)*1.3)] rounded-b-none bg-[var(--background)]">
              <Image
                src="/sergio-perfil.jpg"
                alt="Retrato de Sergio Junqueira"
                fill
                priority
                sizes="(min-width: 768px) 560px, (min-width: 640px) 480px, 420px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/70 to-transparent" />
            </div>
            <figcaption className="mt-3 text-center text-xs tracking-[0.3em] text-[var(--muted)] uppercase">
              Florianópolis • SC
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="space-y-8 border-t border-[var(--border)] pt-12">
        <div className="space-y-2">
          <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
            Como posso ajudar
          </p>
          <h2 className="text-3xl font-semibold">
            Da estratégia ao deploy, com pés no chão
          </h2>
        </div>
        <div className="space-y-8">
          {focusAreas.map((area) => (
            <article key={area.title} className="space-y-2">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                {area.title}
              </h3>
              <p className="text-base text-[var(--muted)]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 border-t border-[var(--border)] pt-12">
        <div className="space-y-2">
          <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
            Hoje em dia
          </p>
          <h2 className="text-3xl font-semibold">Trabalho recente</h2>
        </div>
        <ul className="space-y-6">
          {recentWork.map((item) => (
            <li key={item.label} className="space-y-1">
              <p className="text-sm tracking-[0.25em] text-[var(--muted)] uppercase">
                {item.label}
              </p>
              <p className="text-base text-[var(--foreground)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <TechStack />

      <section className="space-y-6 border-t border-[var(--border)] pt-12">
        <div className="space-y-2">
          <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
            Projetos
          </p>
          <h2 className="text-3xl font-semibold">
            Dados e software em movimento
          </h2>
        </div>
        <p className="max-w-3xl text-base text-[var(--muted)]">
          Casos corporativos nem sempre podem ser publicados, mas compartilho
          contextos e aprendizados no meu portfólio. Se quiser saber mais sobre
          liderança de dados, produtos autorais ou protótipos full stack, a
          página de projetos está sempre atualizada de acordo com meus
          repositórios publicos.
        </p>
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
          href="/projetos"
        >
          Ver projetos recentes →
        </Link>
      </section>

      <section className="space-y-4 border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-semibold">Vamos conversar?</h2>
        <p className="max-w-2xl text-base text-[var(--muted)]">
          Posso ajudar a estruturar plataformas de dados, conduzir times de
          engenharia ou colocar um produto web para rodar. Se fizer sentido
          trocar uma ideia, me chama por e-mail.
        </p>
        <a
          className="border-b border-[var(--border)] pb-1 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          href="mailto:sergiojunqueira.s@gmail.com"
        >
          Abrir e-mail
        </a>
      </section>
    </div>
  );
}
