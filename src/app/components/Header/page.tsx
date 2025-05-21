"use client";
import { CaretDownIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
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
    <div className="sticky top-0 z-50 flex w-full justify-center">
      <div
        className={`m-4 flex w-9/12 items-center justify-between rounded-2xl px-5 py-4 shadow-md backdrop-blur-md ${
          theme === "dark"
            ? "border border-neutral-800 bg-neutral-900/90"
            : "border border-neutral-200 bg-white/90"
        }`}
      >
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="<sjunqueira/>"
            height={15}
            width={150}
            className={theme === "dark" ? "invert-0" : "invert"}
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {/* Dropdown Trigger */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 rounded-md py-2 transition"
            >
              <CaretDownIcon size={20} />
            </button>

            {dropdownOpen && (
              <div
                className={`absolute top-full left-0 z-50 mt-2 w-40 -translate-x-20 -translate-y-3 items-center rounded-2xl p-2 text-center shadow-lg ${
                  theme === "dark"
                    ? "border-neutral-800 bg-neutral-900/90"
                    : "border-neutral-200 bg-white/90"
                }`}
              >
                <Link
                  href="/"
                  className="block px-2 py-1 text-sm hover:underline"
                  onClick={() => setDropdownOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="block px-2 py-1 text-sm hover:underline"
                  onClick={() => setDropdownOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/projetos"
                  className="block px-2 py-1 text-sm hover:underline"
                  onClick={() => setDropdownOpen(false)}
                >
                  Projetos
                </Link>
                <Link
                  href="/sobre"
                  className="block px-2 py-1 text-sm hover:underline"
                  onClick={() => setDropdownOpen(false)}
                >
                  Sobre
                </Link>
                {/* <Link
                  href="/servicos"
                  className="block px-2 py-1 text-sm hover:underline"
                  onClick={() => setDropdownOpen(false)}
                >
                  Serviços
                </Link> */}
              </div>
            )}
          </div>

          <button
            className="cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </button>
        </nav>
      </div>
    </div>
  );
}
