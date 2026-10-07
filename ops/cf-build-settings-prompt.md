# Cloudflare Pages — build settings to save (newlock project)

> Why this file lives in the repo: the sandbox filesystem is wiped between turns,
> so anything only in `/home/user` disappears. This file is committed to Git so it persists.
> I (the agent) cannot reach Cloudflare from the sandbox — only you can apply these in the dashboard.

---

## OPTION A — paste this into the Cloudflare dashboard AI box

```
For my Cloudflare Pages project "newlock" (repo lin2mm/product-launch-pad),
please set the build configuration as follows and save:

1. Build command:        npm install && npm run build
2. Build output directory: dist
3. Environment variable (add to BOTH Production and Preview):
       NODE_VERSION = 22.16.0
4. Production branch:    arena/01a10797-product-launch-pad
5. Add the "nodejs_compat" compatibility flag to the Preview (and Production) build.

After saving, trigger a new deployment of the production branch and tell me the
resulting *.pages.dev URL and whether the build succeeded.
```

---

## OPTION B — do it manually (Settings → Builds & deployments)

| Field | Value |
|---|---|
| Build command | `npm install && npm run build` |
| Build output directory | `dist` |
| Production branch | `arena/01a10797-product-launch-pad` |
| Env var (Production **and** Preview) | `NODE_VERSION` = `22.16.0` |
| Compatibility flag (Preview **and** Production) | `nodejs_compat` |

Then: **Deployments → Retry deployment** (or push again) to build `a6ad374`.

---

## Why each item

- **Build command was empty** → that is the root cause of the earlier failed builds.
  Vite/Nitro needs `npm run build`; output lands in `dist`.
- **NODE_VERSION 22.16.0** → matches the CF build-image v3 default; pins it so the
  build is reproducible. (A bare number, NOT `node-v22...`; a malformed value causes
  `node-build: definition not found`.)
- **Production branch = arena/...** → the demo content (real images, email hidden)
  lives on `arena/01a10797-product-launch-pad`, not on `main`. Pointing production at
  arena is what makes `newlock.pages.dev` show the demo. `main` stays untouched as the
  Lovable upstream.
- **nodejs_compat** → the SSR/Nitro worker uses Node APIs; the flag avoids runtime errors.

## After it builds

- Confirm `https://newlock.pages.dev` shows the site with real product images.
- Confirm NO email address is visible anywhere (it should say "Request product info" → contact section).
- If the build fails, paste the build log back to me and I will diagnose.
