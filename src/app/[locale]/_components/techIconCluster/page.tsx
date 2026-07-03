"use client";

import { motion } from "framer-motion";
import { SiPython, SiTypescript, SiReact, SiNextdotjs, SiGithub } from "react-icons/si";
import { TbDatabase, TbCloud, TbChartDots, TbGitBranch } from "react-icons/tb";

const nodes = [
  { Icon: SiPython, top: 35, left: 44, size: 32, opacity: 1, duration: 4 },
  { Icon: SiTypescript, top: 22, left: 150, size: 30, opacity: 1, duration: 5 },
  { Icon: SiReact, top: 105, left: 172, size: 34, opacity: 1, duration: 4.5 },
  { Icon: SiNextdotjs, top: 158, left: 130, size: 30, opacity: 1, duration: 4.2 },
  { Icon: TbDatabase, top: 150, left: 40, size: 26, opacity: 0.6, duration: 5.5 },
  { Icon: TbCloud, top: 88, left: 12, size: 24, opacity: 0.5, duration: 4.8 },
  { Icon: TbChartDots, top: 20, left: 96, size: 22, opacity: 0.45, duration: 5 },
  { Icon: TbGitBranch, top: 175, left: 78, size: 22, opacity: 0.45, duration: 4.3 },
];

const CENTER = { top: 95, left: 95, size: 40 };

export default function TechIconCluster() {
  return (
    <div className="relative hidden h-[240px] w-[240px] shrink-0 sm:block">
      <svg className="absolute inset-0" width="240" height="240">
        {nodes.map((node, i) => (
          <line
            key={i}
            x1={CENTER.left + CENTER.size / 2}
            y1={CENTER.top + CENTER.size / 2}
            x2={node.left + node.size / 2}
            y2={node.top + node.size / 2}
            stroke="var(--border)"
            strokeWidth={1}
          />
        ))}
      </svg>

      <div
        className="absolute flex items-center justify-center rounded-xl bg-[var(--accent)] shadow-[0_4px_14px_-4px_var(--accent)]"
        style={{ top: CENTER.top, left: CENTER.left, width: CENTER.size, height: CENTER.size }}
      >
        <SiGithub className="h-5 w-5 text-white" />
      </div>

      {nodes.map(({ Icon, top, left, size, opacity, duration }, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--surface)]"
          style={{ top, left, width: size, height: size, opacity }}
          animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="text-[var(--muted)]" style={{ fontSize: size * 0.5 }} />
        </motion.div>
      ))}
    </div>
  );
}