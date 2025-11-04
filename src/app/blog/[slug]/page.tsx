import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { portableTextComponents } from "./portableTextComponents";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    resolvedParams,
    options,
  );
  if (!post) {
    notFound();
  }
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1920).height(1080).url()
    : null;

  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-4xl flex-col gap-12 px-5 pt-16 pb-24">
      <Link
        href="/blog"
        className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
      >
        <ArrowLeft size={16} />
        Voltar para o Blog
      </Link>

      <header className="space-y-5">
        <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
          Artigo
        </p>
        <h1 className="text-4xl leading-tight font-semibold">{post.title}</h1>
        <p className="text-sm text-[var(--muted)]">
          Publicado em{" "}
          {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </header>

      {postImageUrl && (
        <div className="relative overflow-hidden rounded-[calc(var(--radius-lg)*1.1)]">
          <div className="relative aspect-[16/9]">
            <Image
              src={postImageUrl}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/50 to-transparent" />
          </div>
        </div>
      )}

      <article className="prose prose-neutral prose-headings:font-semibold prose-a:text-[var(--accent)] dark:prose-invert max-w-none text-[var(--foreground)]">
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={portableTextComponents} />
        )}
      </article>

      <section className="space-y-6 border-t border-[var(--border)] pt-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/sergio.jpg"
              alt="Foto de Sergio Junqueira"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-xs tracking-[0.3em] text-[var(--muted)] uppercase">
                Autor
              </p>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Sergio Junqueira
              </p>
              <p className="text-sm text-[var(--muted)]">
                Engenharia de dados & software, líder técnico e mentor.
              </p>
            </div>
          </div>
          <div className="flex gap-4 text-sm font-semibold">
            <Link
              className="border-b border-[var(--border)] pb-0.5 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              href="https://www.linkedin.com/in/sergio-junqueira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              className="border-b border-[var(--border)] pb-0.5 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              href="https://github.com/sjunqueira"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
        <p className="text-sm text-[var(--muted)]">
          Curtiu o artigo? Vamos continuar a conversa — me envie um e-mail em{" "}
          <a
            className="border-b border-[var(--border)] pb-0.5 font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            href="mailto:sergiojunqueira.s@gmail.com"
          >
            sergiojunqueira.s@gmail.com
          </a>{" "}
          ou compartilhe o post com quem precisa desse insight.
        </p>
      </section>
    </main>
  );
}
