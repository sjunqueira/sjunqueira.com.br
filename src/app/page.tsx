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
      <div className="grid h-full grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
          {/* <Image
          src="logo.svg"
          alt="sjunqueira logo"
          width={180}
          height={38}
          priority
          /> */}
          <div className="max-w-4xl text-sm/6 justify-center text-center mx-auto ">
            <div className="flex flex-col justify-center items-center mb-2 tracking-[-.01em] h-full">
              <Image
                src="/sergio.jpg"
                alt="sjunqueira logo"
                width={180}
                height={38}
                className="flex items-center mask-circle rounded-full justify-center shadow-2xl transition-transform duration-200 ease-in-out hover:scale-105"
              />
              <h1 className="text-4xl font-black m-5">Sergio Junqueira</h1>
              <h2>Engenheiro de Dados e Desenvolvedor Full Stack</h2>
              <p>
                Este espaço ainda está evoluindo — mas minha jornada já está em
                movimento.
              </p>
            </div>
          </div>
          <TechStack></TechStack>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
            href="https://github.com/sjunqueira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogoIcon size={20} />
            Github
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
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
