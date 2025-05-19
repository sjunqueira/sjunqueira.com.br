"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { theme } = useTheme();

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center">
      <div
        className={
          theme === "dark"
            ? "pointer-events-none fixed top-0 left-0 z-40 h-10 w-full from-neutral-900/50 to-transparent dark:bg-gradient-to-b"
            : "pointer-events-none fixed top-0 left-0 z-40 h-10 w-full from-neutral-400/50 to-transparent dark:bg-gradient-to-b"
        }
      ></div>
      <div
        className={
          theme === "dark"
            ? "sticky top-0 z-50 m-4 flex w-9/12 items-center justify-center rounded-2xl border-b border-neutral-600 bg-white backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/70"
            : "sticky top-0 z-50 m-4 flex w-9/12 items-center justify-center rounded-2xl border-b border-neutral-100 bg-white backdrop-blur-md dark:border-neutral-300 dark:bg-neutral-200/70"
        }
      >
        <div className="flex w-full items-center justify-center p-2">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="<sjunqueira/>"
              height={15}
              width={150}
              className={theme === "dark" ? "invert-0" : "invert"}
            ></Image>
          </Link>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          {/* <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/projects" className="hover:underline">
            Projetos
          </Link>
          <Link href="/about" className="hover:underline">
            Sobre
          </Link> */}
        </nav>
      </div>
    </div>
  );
}
