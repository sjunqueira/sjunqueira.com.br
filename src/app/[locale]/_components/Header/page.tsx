"use client";
import { MoonStarsIcon, SunDimIcon, ListPlusIcon, XIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { usePathname, Link, useRouter } from "../../../../../i18n/navigation";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function switchLocale(next: "pt" | "en") {
    const segments = pathname.split("/").filter(Boolean);
    const hasLocalePrefix = segments[0] === "pt" || segments[0] === "en";
    if (hasLocalePrefix) {
      segments.shift();
    }

    const normalizedPath = `/${segments.join("/")}`.replace(/\/\/$/, "/");
    const targetPath = normalizedPath === "" ? "/" : normalizedPath;
    router.replace(targetPath, { locale: next });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="logo mono">
            <span className="brk">&lt;</span> sjunqueira <span className="brk">/&gt;</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link className="transition hover:text-[var(--accent)]" href="/">{t("home")}</Link>
          <Link className="transition hover:text-[var(--accent)]" href="/projetos">{t("projetos")}</Link>
          <Link className="transition hover:text-[var(--accent)]" href="/sobre">{t("sobre")}</Link>
          <Link className="transition hover:text-[var(--accent)]" href="/blog">{t("blog")}</Link>

          
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center rounded-full border border-[var(--border)] p-0.5 font-mono text-xs">
            <button
              type="button"
              onClick={() => switchLocale("pt")}
              className={`rounded-full px-2.5 py-1 transition ${
                locale === "pt" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className={`rounded-full px-2.5 py-1 transition ${
                locale === "en" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              EN
            </button>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-[var(--accent)]"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            type="button"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <MoonStarsIcon size={16} /> : <SunDimIcon size={16} />}
          </button>

          <button
            className="flex h-9 w-9 items-center justify-center rounded border border-[var(--border)] md:hidden"
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <XIcon size={18} /> : <ListPlusIcon size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--border)]">
          <div ref={panelRef} className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-5 py-4 text-sm">
            <Link href="/" onClick={() => setMobileOpen(false)}>{t("home")}</Link>
            <Link href="/projetos" onClick={() => setMobileOpen(false)}>{t("projetos")}</Link>
            <Link href="/sobre" onClick={() => setMobileOpen(false)}>{t("sobre")}</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)}>{t("blog")}</Link>
          </div>
        </div>
      )}
    </header>
  );
}