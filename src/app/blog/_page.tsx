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
      <main className="prose-neutral dark:prose-invert mx-auto flex max-w-3xl flex-col justify-center px-4 sm:px-0">
        <div className="py-20 text-center text-lg font-semibold">
          Opa, parece que não tem nada por aqui.
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-3xl flex-col p-8">
      <h1 className="mb-8 flex items-center justify-center text-3xl font-bold">
        Bit a Bit
      </h1>
      <p className="mx-auto mb-8 flex justify-center font-light">
        Artigos sobre engenharia de dados, software, cloud e produtividade.
        Compartilho insights práticos, tutoriais e reflexões de carreira.
      </p>
      <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map((post) => {
          const postImageUrl = post.image
            ? urlFor(post.image)?.width(1920).height(1080).url()
            : null;

          return (
            <li
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md dark:border-gray-800 dark:bg-[#161616]"
              key={post._id}
            >
              {postImageUrl && (
                <Image
                  src={postImageUrl}
                  alt={post.title}
                  className="mb-5 w-full max-w-full justify-center rounded-xl"
                  width="1920"
                  height="1080"
                />
              )}
              <Link href={`/blog/${post.slug.current}`}>
                <p className="mb-2 flex items-center text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-500">
                  {post.title}
                </h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
