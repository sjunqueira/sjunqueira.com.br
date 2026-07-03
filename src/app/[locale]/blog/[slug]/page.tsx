import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { portableTextComponents } from "./portableTextComponents";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Image from "next/image";
import { Link } from "../../../../../i18n/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

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
  // Atualizado para incluir o locale na Promise
  params: Promise<{ slug: string; locale: string }>;
}) {
  const resolvedParams = await params;
  const { slug, locale } = resolvedParams;

  const t = await getTranslations({ locale, namespace: "article" });

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug }, // Passando apenas o slug para a query do Sanity
    options,
  );

  if (!post) {
    notFound();
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(2200).height(1200).fit("crop").url()
    : null;

  // Data formatada dinamicamente com base no locale
  const publishedAt = new Date(post.publishedAt).toLocaleDateString(
    locale === "pt" ? "pt-BR" : "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <main className="mx-auto flex w-full max-w-5xl min-h-[100dvh] flex-col gap-16 px-5 pb-24 pt-16">
      
      <header className="space-y-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm font-medium text-[var(--accent)]">
          <span>{t("eyebrow")}</span>

          <span className="h-1 w-1 rounded-full bg-[var(--border)]" />

          <span className="text-[var(--muted)] font-sans">
            {publishedAt}
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-[var(--foreground)] md:text-5xl">
            {post.title}
          </h1>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            <ArrowLeft
              size={16}
              className="transition group-hover:-translate-x-1"
            />
            {t("backToBlog")}
          </Link>
        </div>

        {post.excerpt && (
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            {post.excerpt}
          </p>
        )}
      </header>

      {postImageUrl && (
        <section>
          <div className="relative overflow-hidden hover:translate-y-[-2px] transition rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <div className="relative aspect-[16/8]">
              <Image
                src={postImageUrl}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </section>
      )}

      <section className="flex flex-col justify-center gap-8 md:flex-row md:items-start">
        <div>
          <article
            className="
              prose
              prose-lg
              dark:prose-invert
              max-w-3xl
              prose-headings:tracking-tight
              prose-headings:font-semibold
              prose-h2:mt-16
              prose-h2:mb-6
              prose-h3:mt-12
              prose-p:leading-8
              prose-p:text-[var(--foreground)]
              prose-a:text-[var(--accent)]
              prose-strong:text-[var(--foreground)]
              prose-code:text-[var(--accent)]
            "
          >
            {Array.isArray(post.body) && (
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            )}
          </article>
          
          <div className="flex justify-center text-gray-200 w-full border-b border-[var(--border)] py-8"></div>
          
          <section className="mt-16 p-0 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <Image
                  src="/sergio.jpg"
                  alt="Sergio Junqueira"
                  width={72}
                  height={72}
                  className="rounded-full"
                />

                <div>
                  <p className="mb-2 font-mono text-xs text-[var(--accent)]">
                    // {t("aboutAuthor").toLowerCase()}
                  </p>

                  <h3 className="text-xl font-bold text-[var(--foreground)]">
                    Sergio Junqueira
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
                    {t("authorDescription")}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}