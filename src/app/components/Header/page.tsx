"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita quebra visual no SSR

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center">
      <div
        className={`sticky top-0 z-50 m-4 flex w-9/12 items-center justify-center rounded-2xl shadow-md backdrop-blur-md ${
          theme === "dark"
            ? "border-b border-neutral-800 bg-neutral-900/90"
            : "border-b border-neutral-200 bg-white/90"
        } `}
      >
        <div className="flex w-full items-center justify-between pr-5 pl-5">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="<sjunqueira/>"
              height={15}
              width={150}
              className={theme === "dark" ? "invert-0" : "invert"}
            ></Image>
          </Link>
          <nav className="flex items-center justify-center gap-4 p-5 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <button
              className="cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "🌙" : "🌞"}
            </button>
            {/* <Link href="/projects" className="hover:underline">
            Projetos
            </Link>
            <Link href="/about" className="hover:underline">
            Sobre
            </Link> */}
          </nav>
        </div>
      </div>
    </div>
  );
}
