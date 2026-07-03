import {
  SiPython,
  SiApacheairflow,
  SiGooglebigquery,
  SiGooglecloud,
  SiApachespark,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

const icons = [
  SiPython,
  SiApacheairflow,
  SiGooglebigquery,
  SiGooglecloud,
  SiApachespark,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPostgresql,
];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] py-4">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
        {[...icons, ...icons].map((Icon, i) => (
          <Icon
            key={i}
            className="h-6 w-6 shrink-0 text-[var(--muted)] transition hover:text-[var(--accent)]"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--background)] to-transparent" />
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}