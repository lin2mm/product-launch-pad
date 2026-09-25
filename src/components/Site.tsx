import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { INQUIRY_EMAIL } from "@/lib/catalogue";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-lg tracking-tight">
            Retrofit<span className="text-primary">·</span>Series
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/s1" className="hover:text-primary" activeProps={{ className: "text-primary" }}>S1</Link>
            <Link to="/s2" className="hover:text-primary" activeProps={{ className: "text-primary" }}>S2</Link>
            <a href="/#compare" className="hidden hover:text-primary sm:inline">Compare</a>
            <a href="/#contact" className="rounded-sm bg-primary px-4 py-2 text-primary-foreground hover:opacity-90">Request samples</a>
          </nav>
        </div>
      </header>
      {children}
      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 text-sm sm:grid-cols-2">
          <div>
            <p className="font-display text-xl">Retrofit Smart Lock Series</p>
            <p className="mt-2 opacity-60">Neutral B2B edition for brand partners, architects and distributors. Performance values reflect preliminary engineering benchmarks.</p>
          </div>
          <div className="sm:text-right">
            <a href={`mailto:${INQUIRY_EMAIL}`} className="underline underline-offset-4">{INQUIRY_EMAIL}</a>
            <p className="mt-2 font-mono text-xs opacity-50">DRAFT v0.4 · FOR OEM REVIEW</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{children}</p>;
}
