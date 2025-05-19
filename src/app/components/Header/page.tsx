"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme } = useTheme();
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
            ? "border-b border-neutral-800 bg-neutral-900"
            : "border-b border-neutral-200 bg-white"
        } `}
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
