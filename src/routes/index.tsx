import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, Eyebrow } from "@/components/Site";
import { products, compare, finishes, img, INQUIRY_EMAIL } from "@/lib/catalogue";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Retrofit Smart Lock Series — OEM Product Catalogue" },
      { name: "description", content: "Two compact retrofit smart locks (S1 surface, S2 Euro cylinder) ready for OEM branding. 39.8 × 22.5 × 90.5 mm." },
      { property: "og:title", content: "Retrofit Smart Lock Series — OEM Catalogue" },
      { property: "og:description", content: "Dual-SKU retrofit smart locks with zero visible exterior change and custom OEM finishes." },
    ],
  }),
  component: Home,
});

const stats = [
  ["39.8 × 22.5 × 90.5 mm", "Form factor"],
  ["Zero visible change", "Exterior housing"],
  ["One-piece aluminum", "Enclosure"],
  ["Custom panel & colors", "OEM branding"],
];

const gar = [
  { t: "Green · Compliant", sub: "Immediate retrofit", cls: "bg-ok", items: ["Standard Euro-profile mortise lock, smooth latch", "Flat interior leaf, clear area below handle", "Backset ≥ 50 mm; door thickness 35–85 mm", "Key turns smoothly with two fingers"] },
  { t: "Amber · Conditional", sub: "Review recommended", cls: "bg-warn", items: ["Multi-point locks needing strong handle lift", "Trim within 25 mm of the thumb-turn", "Cylinder with severe key friction"] },
  { t: "Red · Incompatible", sub: "Not supported", cls: "bg-destructive", items: ["Rim latch locks with oversized gearboxes", "Warped doors needing shoulder pressure", "Glass sliding doors without DIN prep"] },
];

function Home() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-12 pt-16 md:grid-cols-[1.1fr_1fr]">
        <div>
          <Eyebrow>Dual-SKU architecture · OEM ready</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-light leading-[1.05] md:text-7xl">
            A smart lock that fits <em className="text-primary">inside</em> the door you already have.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Premium motorized locking in a 39.8 × 22.5 × 90.5 mm envelope. Mounts on the interior side — exterior escutcheons, keys and master-key systems stay untouched.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="rounded-sm bg-primary px-6 py-3 text-primary-foreground hover:opacity-90">Explore the models</a>
            <a href="#contact" className="rounded-sm border border-foreground/20 px-6 py-3 hover:border-primary hover:text-primary">Request samples</a>
          </div>
        </div>
        <img src={img.s1Door} alt="S1 mounted below a lever handle, unlocked from a phone" className="aspect-[4/5] w-full rounded-sm object-cover" />
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map(([v, l]) => (
            <div key={l} className="border-border px-6 py-6 [&:not(:last-child)]:border-r">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
              <p className="mt-2 font-display text-xl">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow>The line-up</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-light">One electronic drive core. Two ways to retrofit.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <Link key={p.slug} to={`/${p.slug}` as "/s1"} className="group block rounded-sm bg-card p-8 transition-shadow hover:shadow-xl">
              <div className="flex h-80 items-center justify-center">
                <img src={p.slug === "s1" ? img.s1Thumb : img.s2Thumb} alt={p.name} className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-6 font-mono text-xs text-primary">{p.code}</p>
              <h3 className="mt-1 font-display text-2xl">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.install} · {p.idealFor}</p>
              <p className="mt-4 text-sm font-medium group-hover:text-primary">View specifications →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative">
        <img src={img.oak} alt="Oak interior door with the lock below the handle" className="h-[420px] w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent">
          <p className="mx-auto max-w-6xl px-6 pb-8 pt-20 font-display text-2xl text-ink-foreground md:text-3xl">
            Mounts below the lever handle — no change to the door, handle or room.
          </p>
        </div>
      </section>

      <section id="compare" className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow>Side by side</Eyebrow>
        <h2 className="mt-3 font-display text-4xl font-light">Which model fits the project?</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b-2 border-foreground">
              <tr><th className="py-3 pr-4"></th><th className="py-3 pr-4 font-display text-lg font-normal">S1 · Surface</th><th className="py-3 font-display text-lg font-normal">S2 · Euro cylinder</th></tr>
            </thead>
            <tbody>
              {compare.map(([k, a, b]) => (
                <tr key={k} className="border-b border-border">
                  <td className="py-3 pr-4 text-muted-foreground">{k}</td><td className="py-3 pr-4">{a}</td><td className="py-3">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Door compatibility check</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-light">Screen the door before you order.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {gar.map((g) => (
              <div key={g.t} className="rounded-sm border border-border bg-background p-6">
                <div className="flex items-center gap-3"><span className={`h-3 w-3 rounded-full ${g.cls}`} /><h3 className="font-medium">{g.t}</h3></div>
                <p className="mt-1 text-xs text-muted-foreground">{g.sub}</p>
                <ul className="mt-4 space-y-2 text-sm">{g.items.map((i) => <li key={i}>— {i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <img src={img.entry} alt="Bright apartment entry with interior door" loading="lazy" className="w-full rounded-sm object-cover" />
        <div>
          <Eyebrow>OEM customization</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-light">Your brand, your finish.</h2>
          <p className="mt-4 text-muted-foreground">All exterior faces are neutral and ready for laser engraving, custom anodizing and decorative panels. Custom RAL / Pantone matching on qualifying batches.</p>
          <img src={img.swatch} alt="S1 shown in five OEM housing finishes" loading="lazy" className="mt-6 w-full rounded-sm bg-card object-contain p-4" />
          <div className="mt-6 flex flex-wrap gap-4">
            {finishes.map((f) => (
              <div key={f.name} className="flex items-center gap-2 text-sm">
                <span className="h-6 w-6 rounded-full border border-border" style={{ background: f.c }} />{f.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Next steps for partners</p>
          <h2 className="mt-3 font-display text-4xl font-light">Start an evaluation.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Request evaluation samples", "Functional S1 or S2 units for fit, torque and material inspection."],
              ["02", "Fast door compatibility review", "Send 2 photos (interior face + latch edge) and door thickness for same-day clearance."],
              ["03", "OEM branding & firmware", "Logo placement, color variations and SDK/API integration specs."],
            ].map(([n, t, d]) => (
              <div key={n} className="border-t border-ink-foreground/20 pt-4">
                <p className="font-mono text-accent">{n}</p>
                <h3 className="mt-2 font-display text-xl">{t}</h3>
                <p className="mt-2 text-sm opacity-70">{d}</p>
              </div>
            ))}
          </div>
          <a href={`mailto:${INQUIRY_EMAIL}?subject=OEM%20inquiry`} className="mt-12 inline-block rounded-sm bg-accent px-6 py-3 font-medium text-accent-foreground hover:opacity-90">
            Email the OEM desk
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
