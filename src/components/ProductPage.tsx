import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteShell, Eyebrow } from "@/components/Site";
import { products, type Product } from "@/lib/catalogue";

export function ProductPage({ p }: { p: Product }) {
  const other = products.find((x) => x.slug !== p.slug)!;
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <Eyebrow>{p.code}</Eyebrow>
          <h1 className="mt-4 font-display text-5xl font-light leading-tight md:text-6xl">{p.name}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{p.tagline}</p>
          <ul className="mt-8 space-y-3">
            {p.points.map((t) => (
              <li key={t} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{t}</li>
            ))}
          </ul>
          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm">
            <div><dt className="text-muted-foreground">Installation</dt><dd className="mt-1 font-medium">{p.install}</dd></div>
            <div><dt className="text-muted-foreground">Standard color</dt><dd className="mt-1 font-medium">{p.color}</dd></div>
            <div className="col-span-2"><dt className="text-muted-foreground">Ideal for</dt><dd className="mt-1 font-medium">{p.idealFor}</dd></div>
          </dl>
          <a href="/#contact" className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-primary-foreground hover:opacity-90">
            Request product info
          </a>
        </div>
        <div className="rounded-sm bg-card p-8">
          <img src={p.hero} alt={`${p.code} ${p.name}`} className="mx-auto max-h-[560px] object-contain" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-16 md:grid-cols-3">
        {p.gallery.map((g) => (
          <figure key={g.src}>
            <img src={g.src} alt={g.caption} loading="lazy" className="aspect-square w-full rounded-sm object-cover" />
            <figcaption className="mt-2 text-sm text-muted-foreground">{g.caption}</figcaption>
          </figure>
        ))}
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Eyebrow>Technical parameters</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-light">Specification & engineering targets</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <tr><th className="py-3 pr-4">Parameter</th><th className="py-3 pr-4">Specification</th><th className="py-3">Status</th></tr>
              </thead>
              <tbody>
                {p.specs.map((s) => (
                  <tr key={s.k} className="border-b border-border">
                    <td className="py-3 pr-4 text-muted-foreground">{s.k}</td>
                    <td className="py-3 pr-4 font-medium">{s.v}{s.target && <span className="text-primary">*</span>}</td>
                    <td className="py-3 text-xs text-muted-foreground">{s.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">* {p.note}</p>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-12">
        <p className="text-muted-foreground">Need the other retrofit method?</p>
        <Link to={`/${other.slug}` as "/s1"} className="font-display text-2xl hover:text-primary">{other.code} · {other.name} →</Link>
      </section>
    </SiteShell>
  );
}
