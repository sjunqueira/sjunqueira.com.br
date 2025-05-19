import {
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import TechStack from "./components/stackPage/page";
import { ThemeProvider } from "next-themes";
import Image from "next/image";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="grid h-full min-h-[100dvh] grid-rows-[auto_1fr_auto] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
        <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-center">
          {/* <Image
          src="logo.svg"
          alt="sjunqueira logo"
          width={180}
          height={38}
          priority
          /> */}
          <div className="mx-auto max-w-4xl justify-center text-center text-sm/6">
            <div className="mb-2 flex h-full flex-col items-center justify-center tracking-[-.01em]">
              <Image
                src="/sergio.jpg"
                alt="sjunqueira logo"
                width={180}
                height={38}
                className="flex items-center justify-center rounded-full mask-circle shadow-2xl transition-transform duration-200 ease-in-out hover:scale-105"
              />
              <h1 className="m-5 text-4xl font-black">Sergio Junqueira</h1>
              <h2>Engenheiro de Dados e Dev FullStack</h2>
              <p>
                Este espaço ainda está evoluindo, mas a minha jornada já está em
                movimento.
              </p>
            </div>
          </div>
          <TechStack></TechStack>
        </main>
        <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
          <a
            className="flex items-center gap-2 text-sm hover:underline hover:underline-offset-4"
            href="https://github.com/sjunqueira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogoIcon size={20} />
            Github
          </a>
          <a
            className="flex items-center gap-2 text-sm hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/sergio-junqueira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogoIcon size={20} />
            Linkedin
          </a>
        </footer>
      </div>
    </ThemeProvider>
  );
}
