import {
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import TechStack from "./components/stackPage/page";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="grid h-full grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
          {/* <Image
          src="logo.svg"
          alt="sjunqueira logo"
          width={180}
          height={38}
          priority
          /> */}
          <div className="max-w-4xl text-sm/6 justify-center text-center mx-auto font-[family-name:var(--font-geist-mono)]">
            <div className="flex flex-col justify-center mb-2 tracking-[-.01em] h-full gap-10">
              <p>Opa, o site ainda está em construção. </p>
              <p>
                Inclusive até o que tem no{" "}
                <Link
                  href={"/blog"}
                  className="text-blue-500 underline font-black"
                >
                  blog
                </Link>
                é teste. De toda forma, pode se conectar comigo pelos links
                abaixo e também já consegue ver logo aqui abaixo a minha Stack
                de desenvolvimento
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
