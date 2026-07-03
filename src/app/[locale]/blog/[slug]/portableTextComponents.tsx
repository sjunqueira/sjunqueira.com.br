// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// app/components/portableTextComponents.tsx
import Image from "next/image";
import Link from "next/link";
import CodeBlock from "./codeBlock";

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <Image
          alt={value.alt || " "}
          loading="lazy"
          height={value.height || 500}
          width={value.width || 500}
          src={urlForImage(value).url()}
          style={{
            width: "100%",
            marginBottom: "24px",
          }}
        />
      );
    },
    code: ({ value }: any) => {
      return <CodeBlock value={value} />;
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="mb-4 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="mb-8 border-b border-b-neutral-800 pb-2 text-2xl font-semibold">
        {children}
      </h2>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 text-base leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 border-l-4 pl-4 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-4 list-inside list-disc pl-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-4 list-inside list-decimal pl-5">{children}</ol>
    ),
  },
  code: {},
  marks: {
    link: ({ value, children }: any) => (
      <Link
        href={value.href}
        className="text-blue-600 hover:underline dark:text-blue-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm text-red-600 dark:bg-neutral-800 dark:text-red-400">
        {children}
      </code>
    ),
  },
};
