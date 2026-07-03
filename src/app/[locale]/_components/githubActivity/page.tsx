export default function GithubActivity({ username }: { username: string }) {
  return (
    <div className="space-y-4">
      <img
        src={`https://ghchart.rshah.org/2f6fed/${username}`}
        alt={`Contribuições recentes de ${username} no GitHub`}
        className="w-full rounded-[var(--radius-lg)] border border-[var(--border)]"
      />
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex font-mono text-sm text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
      >
        ver perfil completo →
      </a>
    </div>
  );
}