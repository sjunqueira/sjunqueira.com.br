import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { portableTextComponents } from "./portableTextComponents";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

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
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1920).height(1080).url()
    : null;

  return (
    <main className="flex flex-col justify-center prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 sm:px-0 ">
      <Link href="/blog" className="hover:underline mb-5">
        ← Ver todos os posts
      </Link>
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          className="max-w-full w-full rounded-xl justify-center mb-5"
          width="1920"
          height="1080"
        />
      )}
      <div className="flex w-full rounded-2xl p-3 gap-3 items-center justify-center">
        <div className="flex w-60 rounded-3xl p-3 gap-3 items-center justify-center hover:bg-neutral-900">
          <div className="w-15">
            <Image
              src={"/sergio.jpg"}
              alt="Foto de Sergio Junqueira"
              width={50}
              height={50}
              className="rounded-4xl"
            />
          </div>
          <Link href={"/"}>
            <p className="text-xs text-neutral-600">Publicado por:</p>
            <p className="text-xm ">Sergio Junqueira</p>
            <p className="text-xs ">@sjunqueira</p>
          </Link>
        </div>
      </div>
      <div className="mt-1 space-y-4 mb-80">
        <p className="flex items-center justify-center text-xs mt-1 text-neutral-600 dark:text-neutral-400 ">
          Publicado em:{" "}
          {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="text-5xl font-bold bg-gradient-to-br from-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
          {post.title}
        </h1>
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={portableTextComponents} />
        )}
      </div>
    </main>
  );
}
