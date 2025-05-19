"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full sticky flex top-0 z-50 justify-center ">
      <div
        className={
          theme === "dark"
            ? "pointer-events-none fixed top-0 left-0 w-full h-10 dark:bg-gradient-to-b from-neutral-900/50 to-transparent z-40"
            : "pointer-events-none fixed top-0 left-0 w-full h-10 dark:bg-gradient-to-b from-neutral-400/50 to-transparent z-40"
        }
      ></div>
      <div
        className={
          theme === "dark"
            ? "sticky flex m-4 items-center top-0 z-50 w-9/12 rounded-2xl justify-center bg-white dark:bg-neutral-900/70 backdrop-blur-md border-b border-neutral-600 dark:border-neutral-800"
            : "sticky flex m-4 items-center top-0 z-50 w-9/12 rounded-2xl justify-center bg-white dark:bg-neutral-200/70 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-300"
        }
      >
        <div className="flex w-8/12 justify-between items-center p-2">
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

        <nav className="flex gap-4 text-sm items-center">
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
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2"
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </button>
        </nav>
      </div>
    </div>
  );
}
