import { Icon } from "@iconify/react";

export default function TechStack() {
  return (
    <section className="p-4 md:p-6">
      <div className="w-full">
        <h2 className="mb-4 flex justify-center text-lg font-medium text-gray-400">
          Stack Principal
        </h2>
        <div className="flex flex-wrap justify-center gap-1">
          <span className="hover:border-primary-500 mx-auto flex gap-2 rounded-4xl border border-transparent bg-green-400 px-4 py-2 text-neutral-900 transition-all duration-200 ease-in-out hover:scale-[1.03] hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700">
            <Icon icon="simple-icons:nodedotjs" width="24" height="24" />
            NodeJs
          </span>
          <span className="hover:border-primary-500 mx-auto flex gap-2 rounded-4xl border border-transparent bg-neutral-100 px-4 py-2 text-neutral-900 transition-all duration-200 ease-in-out hover:scale-[1.03] hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700">
            <Icon icon="simple-icons:nestjs" width="24" height="24" />
            NestJS
          </span>
          <span className="hover:border-primary-500 mx-auto flex gap-2 rounded-4xl border border-transparent bg-neutral-100 px-4 py-2 text-neutral-900 transition-all duration-200 ease-in-out hover:scale-[1.03] hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700">
            <Icon icon="simple-icons:react" width="24" height="24" />
            React
          </span>
          <span className="hover:border-primary-500 mx-auto flex gap-2 rounded-4xl border border-transparent bg-neutral-100 px-4 py-2 text-neutral-900 transition-all duration-200 ease-in-out hover:scale-[1.03] hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700">
            <Icon icon="simple-icons:nextdotjs" width="24" height="24" />
            Next.js
          </span>
          <span className="hover:border-primary-500 mx-auto flex gap-2 rounded-4xl border border-transparent bg-neutral-100 px-4 py-2 text-neutral-900 transition-all duration-200 ease-in-out hover:scale-[1.03] hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700">
            <Icon icon="simple-icons:typescript" width="24" height="24" />
            TypeScript
          </span>
          <span className="hover:border-primary-500 mx-auto flex gap-2 rounded-4xl border border-transparent bg-neutral-100 px-4 py-2 text-neutral-900 transition-all duration-200 ease-in-out hover:scale-[1.03] hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700">
            <Icon icon="simple-icons:postgresql" width="24" height="24" />
            PostgreSQL
          </span>
          <span className="hover:border-primary-500 mx-auto flex gap-2 rounded-4xl border border-transparent bg-neutral-100 px-4 py-2 text-neutral-900 transition-all duration-200 ease-in-out hover:scale-[1.03] hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700">
            <Icon icon="simple-icons:prisma" width="24" height="24" />
            Prisma
          </span>
          <span className="hover:border-primary-500 mx-auto flex gap-2 rounded-4xl border border-transparent bg-neutral-100 px-4 py-2 text-neutral-900 transition-all duration-200 ease-in-out hover:scale-[1.03] hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700">
            <Icon icon="simple-icons:googlecloud" width="24" height="24" />
            GCP
          </span>
        </div>
      </div>
    </section>
  );
}
