"use client";
import {
  MoonStarsIcon,
  SunDimIcon,
  ListPlusIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="sr-only">Ir para a página inicial</span>
          <Image
            src="/logo.svg"
            alt="<sjunqueira/>"
            height={18}
            width={130}
            className={theme === "dark" ? "" : "invert"}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link className="transition hover:text-[var(--accent)]" href="/">
            Início
          </Link>
          <Link
            className="transition hover:text-[var(--accent)]"
            href="/projetos"
          >
            Projetos
          </Link>
          {/* <Link className="transition hover:text-[var(--accent)]" href="/blog">
            Blog
          </Link> */}
          <Link className="transition hover:text-[var(--accent)]" href="/sobre">
            Sobre
          </Link>
          {/* <a
            className="transition hover:text-[var(--accent)]"
            href="mailto:sergiojunqueira.s@gmail.com"
          >
            Contato
          </a> */}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-[var(--accent)]"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            type="button"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <MoonStarsIcon size={16} />
            ) : (
              <SunDimIcon size={16} />
            )}
          </button>

          <button
            className="flex h-9 w-9 items-center justify-center rounded border border-[var(--border)] md:hidden"
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar navegação" : "Abrir navegação"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <XIcon size={18} /> : <ListPlusIcon size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--border)]">
          <div
            ref={panelRef}
            className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-5 py-4 text-sm"
          >
            <Link href="/" onClick={() => setMobileOpen(false)}>
              Início
            </Link>
            <Link href="/projetos" onClick={() => setMobileOpen(false)}>
              Projetos
            </Link>
            {/* <Link href="/blog" onClick={() => setMobileOpen(false)}>
              Blog
            </Link> */}
            <Link href="/sobre" onClick={() => setMobileOpen(false)}>
              Sobre
            </Link>
            {/* <a
              href="mailto:sergiojunqueira.s@gmail.com"
              onClick={() => setMobileOpen(false)}
            >
              Contato
            </a> */}
          </div>
        </div>
      )}
    </header>
  );
}
