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
      <main className="flex flex-col justify-center prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 sm:px-0">
        <div className="text-center text-lg font-semibold py-20">
          Opa, parece que não tem nada por aqui.
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="flex text-3xl justify-center items-center font-bold mb-8">
        Bit a Bit
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {posts.map((post) => {
          const postImageUrl = post.image
            ? urlFor(post.image)?.width(1920).height(1080).url()
            : null;

          return (
            <li
              className="group rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#161616] overflow-hidden hover:shadow-md transition-all p-5"
              key={post._id}
            >
              {postImageUrl && (
                <Image
                  src={postImageUrl}
                  alt={post.title}
                  className="max-w-full w-full rounded-xl justify-center mb-5"
                  width="1920"
                  height="1080"
                />
              )}
              <Link href={`/blog/${post.slug.current}`}>
                <p className="flex items-center text-sm text-gray-500 mb-2">
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
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
