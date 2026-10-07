# ops/staging — scratch / work-in-progress area

## The problem this solves
The agent sandbox is **ephemeral**: between turns the filesystem is reset and the git
checkout is restored to a clean clone. Anything that is only **uncommitted** or only in
`/home/user` (outside the repo) can vanish. This is why earlier work-in-progress and
`/home/user/cf-ai-reply.md` disappeared.

## The only durable storage = Git, pushed to GitHub
A file survives **only** after it is `git commit`-ed **and** `git push`-ed to
`origin/arena/01a10797-product-launch-pad`. A local temp folder does NOT survive on its own.

## Convention
1. Drop scratch notes / half-finished changes here in `ops/staging/`.
2. Commit + push them immediately, even if unfinished:
   `git add ops/staging && git commit -m "wip: <note>" && git push origin arena/01a10797-product-launch-pad`
3. Once a change is confirmed and landed properly elsewhere, delete its staging file:
   `git rm ops/staging/<file> && git commit -m "chore: drop staging <file>" && git push ...`

## Rule of thumb
> If it is not pushed to GitHub, assume it will be gone next turn.
