"use client";

import { useEffect, useRef, useState } from "react";

type Line = { text: string; type: "cmd" | "ok" };

const LINES: Line[] = [
  { text: "dbt run --select product_metrics", type: "cmd" },
  { text: "12 models built in 4.2s", type: "ok" },
  { text: "airflow dags trigger pipeline_prod", type: "cmd" },
  { text: "pipeline_prod queued", type: "ok" },
  { text: "git commit -m 'fix: dedupe product events'", type: "cmd" },
  { text: "deployed to production", type: "ok" },
];

export default function Terminal() {
  const [rendered, setRendered] = useState<Line[]>([]);
  const lineIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function typeNext() {
      if (lineIndex.current >= LINES.length) {
        timeout = setTimeout(() => {
          setRendered([]);
          lineIndex.current = 0;
          charIndex.current = 0;
          typeNext();
        }, 1400);
        return;
      }
      const current = LINES[lineIndex.current];
      charIndex.current++;
      setRendered((prev) => {
        const next = [...prev];
        next[lineIndex.current] = {
          text: current.text.slice(0, charIndex.current),
          type: current.type,
        };
        return next;
      });
      if (charIndex.current < current.text.length) {
        timeout = setTimeout(typeNext, current.type === "cmd" ? 28 : 14);
      } else {
        lineIndex.current++;
        charIndex.current = 0;
        timeout = setTimeout(typeNext, 220);
      }
    }

    typeNext();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-[var(--term-bg)] shadow-[0_12px_32px_-16px_rgba(20,40,90,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-[var(--term-border)] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--term-border)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--term-border)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--term-border)]" />
        <span className="ml-2 font-mono text-[11px] text-[#7c88a6]">
          pipeline.sh
        </span>
      </div>
      <div className="min-h-[190px] px-4 py-4 font-mono text-[12.5px] leading-[1.85]">
        {rendered.map((line, i) => (
          <div
            key={i}
            className={line.type === "cmd" ? "text-[var(--term-text)]" : "text-[var(--success)]"}
          >
            {line.type === "cmd" ? (
              <span className="text-[#6ea8ff]">$ </span>
            ) : (
              <span>✓ </span>
            )}
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}