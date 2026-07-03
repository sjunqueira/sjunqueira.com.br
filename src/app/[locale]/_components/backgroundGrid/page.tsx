export default function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] dark:opacity-[0.07]"
      style={{
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 35%, transparent 0%, transparent 25%, black 70%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 35%, transparent 0%, transparent 25%, black 70%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="pipeline-grid"
            x="0"
            y="0"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 36 H72 M36 0 V72" stroke="var(--foreground)" strokeWidth="0.75" />
            <circle cx="36" cy="36" r="1.5" fill="var(--accent)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pipeline-grid)" />
      </svg>
    </div>
  );
}