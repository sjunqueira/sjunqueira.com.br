"use client";
import {
  UserCircleIcon,
  BriefcaseIcon,
  MapPinIcon,
  DownloadIcon,
} from "@phosphor-icons/react";

export default function Sobre() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold">Sobre Mim</h1>
      <div className="space-y-6">
        <p className="flex items-center gap-2">
          <UserCircleIcon size={22} />
          Engenheiro de Dados e desenvolvedor Full Stack com foco em
          performance, arquitetura e produtos digitais.
        </p>
        <p className="flex items-center gap-2">
          <BriefcaseIcon size={22} />
          Atualmente: Líder Técnico no Grupo Boticário. Experiência em startups,
          consultorias e grandes empresas.
        </p>
        <p className="flex items-center gap-2">
          <MapPinIcon size={22} />
          Baseado em Florianópolis/SC, Brasil.
        </p>
        <p>
          Minha missão é tornar o complexo acessível. Ensino, crio, lidero e
          transformo dados em soluções reais.
        </p>
        <a
          href={"/resume.pdf"}
          download="CV-Sergio.pdf"
          className="b-2 inline-flex items-center gap-2 rounded-md p-3 shadow-2xs"
        >
          <DownloadIcon size={18} />
          Baixar CV (Em inglês)
        </a>
      </div>
    </div>
  );
}
