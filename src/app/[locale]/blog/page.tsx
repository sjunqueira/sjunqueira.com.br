import { client } from "@/sanity/client";
import { Link } from "../../../../i18n/navigation";
import { getTranslations } from "next-intl/server";

const BLOG_QUERY = `{
  "posts": *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    publishedAt,
    image,
    categories[]->{title},
    "excerpt": pt::text(body[0...2])
  },
  "categories": *[_type == "category"]{
    _id,
    title,
    "count": count(*[_type == "post" && references(^._id)])
  }
}`;

const options = { next: { revalidate: 30 } };

type PostSummary = {
  excerpt?: string;
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: any;
  categories?: { title?: string }[];
};

type CategorySummary = {
  _id: string;
  title?: string;
  count?: number;
};

export default async function IndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  const data = (await client.fetch<unknown>(BLOG_QUERY, {}, options)) as {
    posts: PostSummary[];
    categories: CategorySummary[];
  };



  const posts = data?.posts ?? [];
  const categories = data?.categories ?? [];
  const totalCount = posts.length;

  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const sidebarCategories = categories
    .filter((category) => category?.title)
    .sort((a, b) => (b.count ?? 0) - (a.count ?? 0));

  return (
    <main className="mx-auto flex w-full max-w-5xl min-h-[100dvh] flex-col gap-16 px-5 pb-24 pt-16">
      
      <section className="space-y-8">
        
        <div className="space-y-4">
          <p className="font-mono text-sm font-medium text-[var(--accent)]">
            {t("eyebrow")}
          </p>
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-[var(--foreground)] md:text-5xl">
            {t("title")}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            {t("subtitle")}
          </p>
        </div>

        {/* TODO - Ativar busca */}
        {/* <div className="group flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 shadow-sm transition focus-within:border-[var(--accent)] focus-within:ring-4 focus-within:ring-[var(--accent)]/10">
          <svg
            className="h-4 w-4 shrink-0 text-[var(--muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
        </div> */}
      </section>

      <section className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] border-t border-[var(--border)] pt-12">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
            {t("categories")}
          </p>
          <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0 lg:space-y-0.5">
            <button className="flex shrink-0 items-center justify-between gap-2 whitespace-nowrap rounded-lg border-l-2 border-[var(--accent)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--foreground)] transition lg:w-full lg:border-l-2">
              <span>{t("allArticles")}</span>
              <span className="text-[var(--muted)]">[{totalCount}]</span>
            </button>
            {sidebarCategories.map((category) => (
              <button
                key={category._id}
                className="flex shrink-0 items-center justify-between gap-2 whitespace-nowrap rounded-lg border-l-2 border-transparent px-3 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--border)] hover:bg-[var(--surface)] hover:text-[var(--foreground)] lg:w-full"
              >
                <span>{category.title}</span>
                <span>[{category.count ?? 0}]</span>
              </button>
            ))}
          </nav>
        </aside>

        <div className="space-y-8">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-[var(--foreground)]">{t("latestUpdates")}</h2>
            <p className="text-sm text-[var(--muted)]">{t("description")}</p>
          </div>

          <section className="divide-y divide-[var(--border)]">
            {posts.length === 0 ? (
              <p className="py-12 text-sm text-[var(--muted)]">
                {t("noArticlesYet")}
              </p>
            ) : (
              posts.map((post) => {
                
                return (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group -mx-4 flex gap-5 rounded-xl px-4 py-4 transition hover:bg-[var(--surface)]"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="translate-x-0 text-[var(--muted)] opacity-0 transition group-hover:translate-x-1 group-hover:text-[var(--accent)] group-hover:opacity-100">
                          →
                        </span>
                      </div>
                      <h3 className="mt-2 text-2xl font-semibold leading-snug text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--muted)]">
                        {post.excerpt}
                      </p>
                      {post.categories?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {post.categories.map((c, i) =>
                            c?.title ? (
                              <span
                                key={i}
                                className="rounded-full bg-[var(--accent)]/10 px-2.5 py-1 text-xs font-medium text-[var(--accent)]"
                              >
                                {c.title}
                              </span>
                            ) : null
                          )}
                        </div>
                      ) : null}
                    </div>
                  </Link>
                );
              })
            )}
          </section>
        </div>
      </section>
    </main>
  );
}