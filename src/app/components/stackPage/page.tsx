export default function TechStack() {
  const techs = [
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "GCP",
    "BigQuery",
  ];

  return (
    <section className="mx-auto p-4 md:p-6">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="flex justify-center text-lg font-medium text-gray-700 mb-4">
          Stack Principal
        </h2>
        <div className="mx-auto flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="mx-auto px-4 py-2 border border-transparent text-gray-700 hover:border-gray-300 hover:bg-gray-100 rounded-4xl transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
