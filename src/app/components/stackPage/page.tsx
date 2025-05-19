"use client";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export default function TechStack() {
  const { theme } = useTheme();

  return (
    <section className="p-4 md:p-6">
      <div className="w-full">
        <h2 className="mb-4 flex justify-center text-lg font-medium text-gray-400">
          Stack Principal
        </h2>
        <div className="flex flex-wrap justify-center gap-1">
          <span
            className={`mx-auto flex gap-2 rounded-4xl border border-transparent px-4 py-2 transition-all duration-100 ease-in-out hover:scale-[1.03] ${
              theme === "dark"
                ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            } `}
          >
            <Icon icon="simple-icons:nodedotjs" width="24" height="24" />
            NodeJs
          </span>
          <span
            className={`mx-auto flex gap-2 rounded-4xl border border-transparent px-4 py-2 transition-all duration-100 ease-in-out hover:scale-[1.03] ${
              theme === "dark"
                ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            } `}
          >
            <Icon icon="simple-icons:nestjs" width="24" height="24" />
            NestJS
          </span>
          <span
            className={`mx-auto flex gap-2 rounded-4xl border border-transparent px-4 py-2 transition-all duration-100 ease-in-out hover:scale-[1.03] ${
              theme === "dark"
                ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            } `}
          >
            <Icon icon="simple-icons:react" width="24" height="24" />
            React
          </span>
          <span
            className={`mx-auto flex gap-2 rounded-4xl border border-transparent px-4 py-2 transition-all duration-100 ease-in-out hover:scale-[1.03] ${
              theme === "dark"
                ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            } `}
          >
            <Icon icon="simple-icons:nextdotjs" width="24" height="24" />
            Next.js
          </span>
          <span
            className={`mx-auto flex gap-2 rounded-4xl border border-transparent px-4 py-2 transition-all duration-100 ease-in-out hover:scale-[1.03] ${
              theme === "dark"
                ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            } `}
          >
            <Icon icon="simple-icons:typescript" width="24" height="24" />
            TypeScript
          </span>
          <span
            className={`mx-auto flex gap-2 rounded-4xl border border-transparent px-4 py-2 transition-all duration-100 ease-in-out hover:scale-[1.03] ${
              theme === "dark"
                ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            } `}
          >
            <Icon icon="simple-icons:postgresql" width="24" height="24" />
            PostgreSQL
          </span>
          <span
            className={`mx-auto flex gap-2 rounded-4xl border border-transparent px-4 py-2 transition-all duration-100 ease-in-out hover:scale-[1.03] ${
              theme === "dark"
                ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            } `}
          >
            <Icon icon="simple-icons:prisma" width="24" height="24" />
            Prisma
          </span>
          <span
            className={`mx-auto flex gap-2 rounded-4xl border border-transparent px-4 py-2 transition-all duration-100 ease-in-out hover:scale-[1.03] ${
              theme === "dark"
                ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
            } `}
          >
            <Icon icon="simple-icons:googlecloud" width="24" height="24" />
            GCP
          </span>
        </div>
      </div>
    </section>
  );
}
