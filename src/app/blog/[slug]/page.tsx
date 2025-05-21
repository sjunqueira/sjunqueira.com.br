import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { portableTextComponents } from "./portableTextComponents";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

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
    <main className="prose-neutral dark:prose-invert mx-auto flex max-w-7xl flex-col justify-center px-4">
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

      <p className="mt-5 mb-5 flex items-center justify-center text-xs text-neutral-600">
        Publicado em:{" "}
        {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="mt-1 mb-10 space-y-4">
        <h1 className="mb-4 text-5xl font-bold">{post.title}</h1>
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={portableTextComponents} />
        )}
      </div>
      <div className="mt-10 justify-center border-t-2 border-neutral-600 p-5 text-center">
        Gostou? Me acompanhe em outros lugares também!
      </div>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <a
          className="flex items-center gap-2 text-sm hover:underline hover:underline-offset-4"
          href="https://github.com/sjunqueira"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogoIcon size={20} />
          Github
        </a>
        <a
          className="flex items-center gap-2 text-sm hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/sergio-junqueira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogoIcon size={20} />
          Linkedin
        </a>
      </footer>
      <div className="mt-8 flex w-full items-center justify-center gap-1 rounded-2xl pt-2 pb-2">
        <div className="flex w-50 items-center justify-center gap-1 rounded-3xl pt-3 pb-3">
          <Link className="flex" href={"/"}>
            <div className="w-15">
              <Image
                src={"/sergio.jpg"}
                alt="Foto de Sergio Junqueira"
                width={40}
                height={40}
                className="rounded-4xl"
              />
            </div>
            <div>
              <p className="text-xs text-neutral-600">Publicado por:</p>
              <p className="text-xs">Sergio Junqueira</p>
              <p className="text-xs">@sjunqueira</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
