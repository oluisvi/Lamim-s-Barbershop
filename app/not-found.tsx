import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--color-bg-canvas)] p-6 text-center text-[var(--color-text-primary)]">
      <div>
        <div className="font-display text-7xl">404</div>
        <p className="mt-4 text-[var(--color-text-muted)]">Essa porta não existe.</p>
        <Link
          href="/"
          className="focus-ring mt-6 inline-flex rounded-full bg-[var(--color-action-primary)] px-5 py-3 text-xs uppercase tracking-[0.14em] text-[var(--color-text-inverse)]"
        >
          Voltar para a Lamim&apos;s
        </Link>
      </div>
    </main>
  );
}
