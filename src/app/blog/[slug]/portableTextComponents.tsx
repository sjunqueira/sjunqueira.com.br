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
      <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold mb-8 text-gray-300 border-b border-b-neutral-800 pb-2">
        {children}
      </h2>
    ),
    normal: ({ children }: any) => (
      <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 italic text-neutral-600 dark:text-neutral-400 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside pl-5 text-neutral-700 dark:text-neutral-300 mb-4">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside pl-5 text-neutral-700 dark:text-neutral-300 mb-4">
        {children}
      </ol>
    ),
  },
  code: {},
  marks: {
    link: ({ value, children }: any) => (
      <Link
        href={value.href}
        className="text-blue-600 dark:text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold text-neutral-900 dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-neutral-700 dark:text-neutral-300">
        {children}
      </em>
    ),
    code: ({ children }: any) => (
      <code className="bg-neutral-100 dark:bg-neutral-800 text-sm px-1 py-0.5 rounded text-red-600 dark:text-red-400">
        {children}
      </code>
    ),
  },
};
