"use client";
import { GithubLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Repo = {
  name: string;
  description: string;
  html_url: string;
};

export default function Projetos() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/sjunqueira/repos",
        );
        const data = await res.json();
        const filtered = data.filter((repo: any) => !repo.private);
        setRepos(filtered);
      } catch (err) {
        console.error("Erro ao buscar repositórios", err);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold">Projetos Públicos</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="rounded-2xl p-6 shadow-lg backdrop-blur-md"
          >
            <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold">
              <GithubLogo size={20} /> {repo.name}
            </h2>
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              {repo.description || "Sem descrição"}
            </p>
            <Link
              href={repo.html_url}
              target="_blank"
              className="text-sm text-blue-600 hover:underline"
            >
              Ver no GitHub →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
