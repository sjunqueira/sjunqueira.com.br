"use client";

const Footer = () => {
  return (
    <footer className="mx-auto mt-20 w-full max-w-5xl px-5 pb-12 text-sm text-[var(--muted)]">
      <div className="border-t border-[var(--border)] pt-8">
        <p className="text-base font-medium text-[var(--foreground)]">
          Sergio Junqueira — Engenharia de Dados & Software
        </p>
        <p className="mt-1">
          Baseado em Florianópolis. Disponível para projetos, mentorias e
          colaborações.
        </p>
        <div className="mt-4 flex gap-4 text-sm">
          <a
            className="transition hover:text-[var(--accent)]"
            href="mailto:sergiojunqueira.s@gmail.com"
          >
            Email
          </a>
          <a
            className="transition hover:text-[var(--accent)]"
            href="https://www.linkedin.com/in/sergio-junqueira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            className="transition hover:text-[var(--accent)]"
            href="https://github.com/sjunqueira"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} sjunqueira. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
