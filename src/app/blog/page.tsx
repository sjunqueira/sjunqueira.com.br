import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image }`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  if (!posts || posts.length === 0) {
    return (
      <main className="mx-auto flex min-h-[100dvh] w-full max-w-5xl flex-col gap-10 px-5 pt-16 pb-24">
        <section className="space-y-4">
          <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
            Blog
          </p>
          <h1 className="text-4xl leading-snug font-semibold">
            Conteúdos sobre engenharia de dados, software e liderança técnica.
          </h1>
          <p className="max-w-2xl text-base text-[var(--muted)]">
            Compartilho aprendizados de projetos, lições de arquitetura e
            bastidores da transição de dados para produto. Novos artigos em
            breve.
          </p>
        </section>

        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] p-6 text-sm text-[var(--muted)]">
          Ops, ainda não publiquei nenhum artigo por aqui. Enquanto isso, você
          pode me encontrar no{" "}
          <Link
            className="border-b border-[var(--border)] pb-0.5 font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            href="https://www.linkedin.com/in/sergio-junqueira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>{" "}
          ou acompanhar projetos em andamento.
        </div>
      </main>
    );
  }

  const [featuredPost, ...restPosts] = posts;
  const secondaryPosts = restPosts.slice(0, 3);
  const archivePosts = restPosts.slice(3);

  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const featuredImageUrl = featuredPost.image
    ? urlFor(featuredPost.image)?.width(1600).height(900).fit("crop").url()
    : null;

  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-5xl flex-col gap-16 px-5 pt-16 pb-24">
      <section className="space-y-4">
        <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
          Blog
        </p>
        <h1 className="text-4xl leading-snug font-semibold">
          Engenharia de dados, software e liderança técnica escritos sem
          rodeios.
        </h1>
        <p className="max-w-2xl text-base text-[var(--muted)]">
          Cases reais, decisões de arquitetura e aprendizados sobre como levar
          dados e código até a produção.
        </p>
      </section>

      <section className="grid gap-10 border-t border-[var(--border)] pt-12 md:grid-cols-[1.4fr_1fr] md:items-start">
        <article className="space-y-4">
          <p className="text-xs tracking-[0.3em] text-[var(--muted)] uppercase">
            Último artigo
          </p>
          <Link
            href={`/blog/${featuredPost.slug.current}`}
            className="group flex flex-col gap-4"
          >
            <div className="relative overflow-hidden rounded-[calc(var(--radius-lg)*1.1)] bg-[var(--background)]">
              <div className="relative aspect-[16/9]">
                {featuredImageUrl ? (
                  <Image
                    src={featuredImageUrl}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 640px, 100vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[var(--background)] text-sm text-[var(--muted)]">
                    Visual sem imagem
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/75 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 text-[var(--foreground)]">
                <span className="text-xs tracking-[0.25em] text-[var(--muted)] uppercase">
                  {formatDate(featuredPost.publishedAt as string)}
                </span>
                <h2 className="text-2xl leading-snug font-semibold">
                  {featuredPost.title}
                </h2>
                <span className="text-sm font-semibold text-[var(--accent)]">
                  Ler artigo →
                </span>
              </div>
            </div>
          </Link>
        </article>

        {secondaryPosts.length > 0 && (
          <aside className="space-y-4">
            <p className="text-xs tracking-[0.3em] text-[var(--muted)] uppercase">
              Mais recentes
            </p>
            <ul className="space-y-5">
              {secondaryPosts.map((post) => (
                <li
                  key={post._id}
                  className="border-b border-[var(--border)] pb-5 last:border-none last:pb-0"
                >
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="group flex flex-col gap-2"
                  >
                    <span className="text-xs tracking-[0.25em] text-[var(--muted)] uppercase">
                      {formatDate(post.publishedAt as string)}
                    </span>
                    <h3 className="text-base font-semibold text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                      {post.title}
                    </h3>
                    <span className="text-xs font-semibold text-[var(--accent)]">
                      Ler →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </section>

      {archivePosts.length > 0 && (
        <section className="space-y-6 border-t border-[var(--border)] pt-12">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm tracking-[0.3em] text-[var(--muted)] uppercase">
                Arquivo
              </p>
              <h2 className="text-3xl font-semibold">Outros artigos</h2>
            </div>
            <span className="text-xs tracking-[0.3em] text-[var(--muted)] uppercase">
              {archivePosts.length} posts
            </span>
          </div>

          <ul className="space-y-4">
            {archivePosts.map((post) => (
              <li
                key={post._id}
                className="flex flex-col justify-between gap-2 border-t border-[var(--border)] pt-4 md:flex-row md:items-center"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs tracking-[0.25em] text-[var(--muted)] uppercase">
                    {formatDate(post.publishedAt as string)}
                  </span>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="text-sm font-semibold text-[var(--foreground)] transition hover:text-[var(--accent)]"
                  >
                    {post.title}
                  </Link>
                </div>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="text-xs font-semibold text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
                >
                  Ler artigo →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
