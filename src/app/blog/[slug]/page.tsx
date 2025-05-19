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
    options,
  );
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1920).height(1080).url()
    : null;

  return (
    <main className="prose-neutral dark:prose-invert mx-auto flex max-w-3xl flex-col justify-center px-4 sm:px-0">
      <Link href="/blog" className="mb-5 hover:underline">
        ← Ver todos os posts
      </Link>
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          className="w-full max-w-full justify-center rounded-xl"
          width="1920"
          height="1080"
        />
      )}
      <div className="flex w-full items-center justify-center gap-3 rounded-2xl p-3">
        <div className="flex w-60 items-center justify-center gap-3 rounded-3xl p-3 hover:bg-neutral-900">
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
            <p className="text-xm">Sergio Junqueira</p>
            <p className="text-xs">@sjunqueira</p>
          </Link>
        </div>
      </div>
      <div className="mt-1 mb-80 space-y-4">
        <p className="mt-1 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-400">
          Publicado em:{" "}
          {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="mb-4 bg-gradient-to-br from-gray-200 to-gray-400 bg-clip-text text-5xl font-bold text-transparent">
          {post.title}
        </h1>
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={portableTextComponents} />
        )}
      </div>
    </main>
  );
}
