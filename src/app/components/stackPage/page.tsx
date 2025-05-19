import { Icon } from "@iconify/react";

export default function TechStack() {
  return (
    <section className="mx-auto p-4 md:p-6">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="flex justify-center text-lg font-medium text-gray-700 mb-4">
          Stack Principal
        </h2>
        <div className="grid justify-center mx-auto flex-wrap gap-2 md:grid-cols-4 sm:grid-cols-2 ">
          <span className="flex gap-2 mx-auto px-4 py-2 border border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 rounded-4xl transition-colors duration-200">
            <Icon icon="simple-icons:nodedotjs" width="24" height="24" />
            NodeJs
          </span>
          <span className="flex gap-2 mx-auto px-4 py-2 border border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 rounded-4xl transition-colors duration-200">
            <Icon icon="simple-icons:nestjs" width="24" height="24" />
            NestJS
          </span>
          <span className="flex gap-2 mx-auto px-4 py-2 border border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 rounded-4xl transition-colors duration-200">
            <Icon icon="simple-icons:react" width="24" height="24" />
            React
          </span>
          <span className="flex gap-2 mx-auto px-4 py-2 border border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 rounded-4xl transition-colors duration-200">
            <Icon icon="simple-icons:nextdotjs" width="24" height="24" />
            Next.js
          </span>
          <span className="flex gap-2 mx-auto px-4 py-2 border border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 rounded-4xl transition-colors duration-200">
            <Icon icon="simple-icons:typescript" width="24" height="24" />
            TypeScript
          </span>
          <span className="flex gap-2 mx-auto px-4 py-2 border border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 rounded-4xl transition-colors duration-200">
            <Icon icon="simple-icons:postgresql" width="24" height="24" />
            PostgreSQL
          </span>
          <span className="flex gap-2 mx-auto px-4 py-2 border border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 rounded-4xl transition-colors duration-200">
            <Icon icon="simple-icons:prisma" width="24" height="24" />
            Prisma
          </span>
          <span className="flex gap-2 mx-auto px-4 py-2 border border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 rounded-4xl transition-colors duration-200">
            <Icon icon="simple-icons:googlecloud" width="24" height="24" />
            GCP
          </span>
        </div>
      </div>
    </section>
  );
}
