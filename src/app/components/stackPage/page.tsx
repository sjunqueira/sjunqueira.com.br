import { Icon } from "@iconify/react";

export default function TechStack() {
  return (
    <section className="p-4 md:p-6">
      <div className="w-full">
        <h2 className="flex justify-center text-lg font-medium text-gray-400 mb-4">
          Stack Principal
        </h2>
        <div className="flex flex-wrap justify-center gap-1">
          <span
            className="flex gap-2 mx-auto px-4 py-2 
            border border-transparent 
            rounded-4xl 
            transition-all duration-200 ease-in-out 
            text-neutral-100
            bg-neutral-100 dark:bg-neutral-800 
            hover:bg-neutral-200 dark:hover:bg-neutral-700 
            hover:border-primary-500 
            hover:scale-[1.03]"
          >
            <Icon icon="simple-icons:nodedotjs" width="24" height="24" />
            NodeJs
          </span>
          <span
            className="flex gap-2 mx-auto px-4 py-2 
            border border-transparent 
            rounded-4xl 
            transition-all duration-200 ease-in-out 
            text-neutral-100
            bg-neutral-100 dark:bg-neutral-800 
            hover:bg-neutral-200 dark:hover:bg-neutral-700 
            hover:border-primary-500 
            hover:scale-[1.03]"
          >
            <Icon icon="simple-icons:nestjs" width="24" height="24" />
            NestJS
          </span>
          <span
            className="flex gap-2 mx-auto px-4 py-2 
            border border-transparent 
            rounded-4xl 
            transition-all duration-200 ease-in-out 
            text-neutral-100
            bg-neutral-100 dark:bg-neutral-800 
            hover:bg-neutral-200 dark:hover:bg-neutral-700 
            hover:border-primary-500 
            hover:scale-[1.03]"
          >
            <Icon icon="simple-icons:react" width="24" height="24" />
            React
          </span>
          <span
            className="flex gap-2 mx-auto px-4 py-2 
            border border-transparent 
            rounded-4xl 
            transition-all duration-200 ease-in-out 
            text-neutral-100
            bg-neutral-100 dark:bg-neutral-800 
            hover:bg-neutral-200 dark:hover:bg-neutral-700 
            hover:border-primary-500 
            hover:scale-[1.03]"
          >
            <Icon icon="simple-icons:nextdotjs" width="24" height="24" />
            Next.js
          </span>
          <span
            className="flex gap-2 mx-auto px-4 py-2 
            border border-transparent 
            rounded-4xl 
            transition-all duration-200 ease-in-out 
            text-neutral-100
            bg-neutral-100 dark:bg-neutral-800 
            hover:bg-neutral-200 dark:hover:bg-neutral-700 
            hover:border-primary-500 
            hover:scale-[1.03]"
          >
            <Icon icon="simple-icons:typescript" width="24" height="24" />
            TypeScript
          </span>
          <span
            className="flex gap-2 mx-auto px-4 py-2 
            border border-transparent 
            rounded-4xl 
            transition-all duration-200 ease-in-out 
            text-neutral-100
            bg-neutral-100 dark:bg-neutral-800 
            hover:bg-neutral-200 dark:hover:bg-neutral-700 
            hover:border-primary-500 
            hover:scale-[1.03]"
          >
            <Icon icon="simple-icons:postgresql" width="24" height="24" />
            PostgreSQL
          </span>
          <span
            className="flex gap-2 mx-auto px-4 py-2 
            border border-transparent 
            rounded-4xl 
            transition-all duration-200 ease-in-out 
            text-neutral-100
            bg-neutral-100 dark:bg-neutral-800 
            hover:bg-neutral-200 dark:hover:bg-neutral-700 
            hover:border-primary-500 
            hover:scale-[1.03]"
          >
            <Icon icon="simple-icons:prisma" width="24" height="24" />
            Prisma
          </span>
          <span
            className="flex gap-2 mx-auto px-4 py-2 
            border border-transparent 
            rounded-4xl 
            transition-all duration-200 ease-in-out 
            text-neutral-100
            bg-neutral-100 dark:bg-neutral-800 
            hover:bg-neutral-200 dark:hover:bg-neutral-700 
            hover:border-primary-500 
            hover:scale-[1.03]"
          >
            <Icon icon="simple-icons:googlecloud" width="24" height="24" />
            GCP
          </span>
        </div>
      </div>
    </section>
  );
}
