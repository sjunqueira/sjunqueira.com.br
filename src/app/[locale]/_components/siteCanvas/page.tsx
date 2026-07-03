import BackgroundGrid from "../backgroundGrid/page";

export default function SiteCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-6xl border-x border-dashed border-[var(--border)]">
      <BackgroundGrid />
      {children}
    </div>
  );
}